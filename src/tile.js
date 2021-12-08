import {default as elem}		from "./element.js";
import {default as vert}		from "./sub/vertical.js";
import {default as status}		from "./sub/ancestor.js";
import {default as size}		from "./sub/size12.js";
/*
 * elem: string
 * attr: dict
 * vertical: boolean
 * size: number
 * status: string
 * text: string/obj
 */
export default function(data) {
	if (typeof data == 'string')
		return elem({elem: 'div',attr: {class: 'tile'},plugins: {vertical: vert.handler, size: size.handler, status: status.handler},text: data});
	data = data || {};
	data.elem = data.elem||'div';
	data.plugins = {vertical: vert.handler, size: size.handler, status: status.handler}
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' tile';
	else
		data.attr.class = 'tile';
	data.attr.class += vert.parse(data)+status.parse(data)+size.parse(data);
	return elem(data);
}
