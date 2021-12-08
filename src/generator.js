/*
 * type: string
 * ... property of the type
 */
import {default as elem} from "./element.js";
import * as t from "./elem_classed.js";
import * as s from "./elem_simple.js";
import { notification } from "./notification.js";
import {default as tag} from "./tag.js";
import {default as breadcrumb} from "./breadcrumb.js";
import {default as message} from "./message.js";
import {default as section} from "./section.js";
import {default as media} from "./media.js";
import {default as card} from "./card.js";
import {default as tile} from "./tile.js";
import {default as menu} from "./menu.js";
import {default as hero} from "./hero.js";
import {default as level} from "./level.js";

function selector(data) {
	if (typeof data == 'function')
		return data;
	var comp = {
		elem: elem,	element: elem,
		span: s.span,	p: s.p,	div: s.div,	button: s.button,
		t1: t.t1,	t2: t.t2,	t3: t.t3,	t4: t.t4,	t5: t.t5,	t6: t.t6,
		s1: t.s1,	s2: t.s2,	s3: t.s3,	s4: t.s4,	s5: t.s5,	s6: t.s6,
		h1: t.h1,	h2: t.h2,	h3: t.h3,	h4: t.h4,	h5: t.h5,	h6: t.h6,
		box: t.box,	block: t.block,	content: t.content,
		tag: tag,	card: card,	breadcrumb: breadcrumb,
		menu: menu,	hero: hero,	tile: tile, message: message,
		notif: notification,	notification: notification,
		section: section,	media, media,	level: level
	};
	if (Object.keys(comp).includes(data.type))
		return comp[data.type](data);
	if (typeof data.elem == 'string')
		return elem(data);
	return s.span(data);
}
export default function(data) {
	if (!Array.isArray(data))
		return selector(data);
	function generator(it) {it.each(function() {
		var me = bulma.select(this);
		data.forEach(d => me.call(selector(d)));
	})}
	return generator;
}
