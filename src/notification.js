import {default as elem}		from "./element.js";
import {default as color}		from "./sub/lightcolor.js";
import {default as have_del}	from "./sub/have_delete.js";
/*
 * delete: bool
 * color: string
 * text: string/obj
 */
function close(evt) { bulma.select(this.parentNode).remove(); }
function onload() {	bulma.selectAll('div.notification button.delete').on('click',close); }

var notif = function(data) {
	if (typeof data == 'string')
		return elem({elem: 'div',attr: {class: 'notification'},plugins: {color: color.handler, have_delete: have_del.handler},text: data});
	data = data || {};
	data.elem = data.elem||'div';
	data.plugins = {color: color.handler, have_delete: have_del.handler}
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' notification';
	else
		data.attr.class = 'notification';
	data.attr.class += color.parse(data)
	have_del.parse(data, close, false);
	return elem(data);
}
notif.callbacks = {close: close, onload: onload}
export { notif as notification, onload }
