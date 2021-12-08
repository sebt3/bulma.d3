import {default as elem}		from "./element.js";
import {default as size}		from "./sub/size.js";
/*
 * size: string
 * attr: dict
 * text: string/obj
 */
export default function(data) {
	if (typeof data == 'string')
		return elem({elem: 'section',attr: {class: 'section'},plugins: {size: size.handler},text: data});
	data = data || {};
	data.elem = data.elem||'section';
	data.plugins = {size: size.handler}
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' section';
	else
		data.attr.class = 'section';
	data.attr.class += size.parse(data)
	return elem(data);
}
