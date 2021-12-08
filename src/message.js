import {default as have_del}	from "./sub/have_delete.js";
import {default as color}	from "./sub/color.js";
import {default as size}	from "./sub/size.js";
import {default as gen}		from "./sub/gen.js";
import {default as elem}	from "./element.js";
/*
 * attr: dict
 * header: string
 * have_delete: boolean
 * body: obj/function
 */
function close(evt) { bulma.select(this.parentNode.parentNode).remove(); }
var msg = function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' message';
	else
		data.attr.class = 'message';
	data.attr.class += color.parse(data)+size.parse(data);
	data.header = data.header || '';
	data.have_delete = data.have_delete || false;
	data.body = data.body || {};
	have_del.parse(data, close, false);
	function message(it) {it.each(function() {
		var me = bulma.select(this).append('section');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		if (data.header != '' || data.have_delete) {
			var h = me.append('div').attr('class','message-header');
			if (data.header != '')
				h.append('p').html(data.header);
			if (data.have_delete)
				gen.sub(h,data.text);
		}
		var body = me.append('div').attr('class', 'message-body');
		if (gen.isObject(data.body)) gen.sub(body, data.body);
	})}
	message.header		= function(t) {if (arguments.length) {data.header = t;return message;} return data.header; }
	message.body		= function(t) {if (arguments.length) {data.body = t;return message;} return data.body; }
	message.color		= color.handler(message, data);
	message.size		= size.handler(message, data);
	return message;
}
msg.callbacks = { close: close }
export default msg
