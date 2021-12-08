import {default as gen} from "./sub/gen.js";
import {default as have_del}	from "./sub/have_delete.js";
/*
 * attr: dict
 * left: obj/function/array
 * content: obj/function/array
 * right: obj/function/array
 */
function close(evt) { bulma.select(this.parentNode.parentNode).remove(); }
var cmedia = function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' media';
	else
		data.attr.class = 'media';
	data.left = data.left || {};
	data.content = data.content || {};
	data.right = data.right || {};
	function media(it) {it.each(function() {
		var me = bulma.select(this).append('article');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		if (typeof data.left == 'function' || Array.isArray(data.left) || (typeof data.left == 'object' && Object.keys(data.left).length>0))
			gen.sub(me.append('figure').attr('class', 'media-left'), data.left);
		if (typeof data.content == 'function' || Array.isArray(data.content) || (typeof data.content == 'object' && Object.keys(data.content).length>0))
			gen.sub(me.append('div').attr('class', 'media-content'), data.content);
		if (typeof data.right == 'function' || Array.isArray(data.right) || (typeof data.right == 'object' && Object.keys(data.right).length>0))
			gen.sub(me.append('div').attr('class', 'media-right'), data.right);
	})}
	have_del.use_property('right');
	have_del.parse(data, close, false);
	media.left		= function(t) {if (arguments.length) {data.left    = t;return media;} return data.left; }
	media.content	= function(t) {if (arguments.length) {data.content = t;return media;} return data.content; }
	media.right		= function(t) {if (arguments.length) {data.right   = t;return media;} return data.right; }
	return media;
}
cmedia.callbacks = {close: close}
export default cmedia
