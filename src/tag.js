import {default as color}	from "./sub/allcolor.js";
import {default as size}	from "./sub/size.js";
import {default as rounded}	from "./sub/rounded.js";
import {default as is_del}	from "./sub/is_delete.js";
import {default as have_del} from "./sub/have_delete.js";
import {default as elem}	from "./element.js";

function close(evt) { bulma.select(this.parentNode).remove(); }
/*
 * elem: string
 * attr: dict
 * color: string
 * size: string
 * rounded: boolean
 * is_delete: boolean
 * have_delete: boolean
 * text: string/obj
 */

var ctag = function(data) {
	if (typeof data == 'string')
		return elem({elem: 'span',attr: {class: 'tag'},plugins: {color: color.handler, have_delete: have_del.handler, rounded: rounded.handler, is_delete: is_del.handler, size: size.handler},text: data});
	data = data || {};
	data.elem = data.elem||'span';
	data.plugins = {color: color.handler, have_delete: have_del.handler, rounded: rounded.handler, is_delete: is_del.handler, size: size.handler}
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' tag';
	else
		data.attr.class = 'tag';
	data.attr.class += color.parse(data)+size.parse(data)+rounded.parse(data)+is_del.parse(data)
	have_del.parse(data, close, true);
	if (data.is_delete)
		data.elem = 'a';
	return elem(data);
}
ctag.callbacks = {close: close}
export default ctag
