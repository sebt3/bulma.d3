import {default as color}	from "./sub/color.js";
import {default as size}	from "./sub/sizehero.js";
import {default as gen} from "./sub/gen.js";
/*
 * attr: dict
 * head: obj/function
 * body: obj/function
 * foot: obj/function
 */
export default function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' hero';
	else
		data.attr.class = 'hero';
	data.attr.class += color.parse(data)+size.parse(data);
	data.head = data.head || {};
	data.body = data.body || {};
	data.foot = data.foot || {};
	function hero(it) {it.each(function() {
		var me = bulma.select(this).append('section');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		if (gen.isObject(data.head))
			gen.sub(me.append('div').attr('class', 'hero-head'), data.head);
		var body = me.append('div').attr('class', 'hero-body');
		if (gen.isObject(data.body))
			gen.sub(body, data.body);
		if (gen.isObject(data.foot))
			gen.sub(me.append('div').attr('class', 'hero-foot'), data.foot);
	})}
	hero.head		= function(t) {if (arguments.length) {data.head = t;return hero;} return data.head; }
	hero.body		= function(t) {if (arguments.length) {data.body = t;return hero;} return data.body; }
	hero.foot		= function(t) {if (arguments.length) {data.foot = t;return hero;} return data.foot; }
	hero.color		= color.handler(hero, data);
	hero.size		= size.handler(hero, data);
	return hero;
}
