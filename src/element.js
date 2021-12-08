/*
 * elem: string
 * attr: dict
 * plugins: obj
 * text: string/obj
 */
import {default as gen} from "./sub/gen.js";
export default function(in_data) {
	var data = in_data;
	function element(it) {it.each(function() {
		var me = bulma.select(this).append(data.elem)
		for (var k in data.attr||{}) {
			me.attr(k, data.attr[k]);
		}
		for (var k in data.on||{}) {
			me.on(k, data.on[k]);
		}
		gen.sub(me, data.text);
	})}
	element.text = function(text) {data.text = text; return element;}
	for (var k in data.plugins||{})
		element[k] = data.plugins[k](element, data);
	return element;
}
