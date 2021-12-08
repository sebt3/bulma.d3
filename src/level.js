/*
 * attr: dict
 * center: array of obj/function
 * left: array of obj/function
 * right: array of obj/function
 * ! left and right elements are only rendered when center is empty
 */
import {default as gen} from "./sub/gen.js";
export default function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' level';
	else
		data.attr.class = 'level';
	data.center = data.center || [];
	data.left   = data.left   || [];
	data.right  = data.right  || [];
	function level(it) {it.each(function() {
		var me = bulma.select(this).append('nav');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		
		if (data.center.length>0) {
			data.center.forEach(c => {
				var cont = me.append('div').attr('class','level-item');
				gen.sub(cont, c);
			});
		} else {
			if (data.left.length>0) {
				var left = me.append('div').attr('class','level-left');
				data.left.forEach(c => {
					var cont = left.append('div').attr('class','level-item');
					gen.sub(cont, c);
				});
			}
			if (data.right.length>0) {
				var right = me.append('div').attr('class','level-right');
				data.right.forEach(c => {
					var cont = right.append('div').attr('class','level-item');
					gen.sub(cont, c);
				});
			}
		}
	})}
	level.add		= function(obj) {data.center.push(obj);return level; }
	level.addLeft	= function(obj) {data.left.push(obj);return level; }
	level.addRight	= function(obj) {data.right.push(obj);return level; }
	return level;
}
