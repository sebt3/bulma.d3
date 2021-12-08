/*
 * attr: dict
 * header:
 *   title: string
 *   buttons: array of:
 *     icon: string (fontawesome-id)
 *     action: function
 *     aria: string (aria-label)
 * contents: array of obj/function
 * footers: array of:
 *   text: string
 *   url: string
 *   icon: string (unsupported... yet)
 */
import {default as gen} from "./sub/gen.js";
export default function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' card';
	else
		data.attr.class = 'card';
	data.header = data.header || {};
	data.header.buttons = data.header.buttons || [];
	data.contents = data.contents || [];
	data.footers = data.footers || [];
	function card(it) {it.each(function() {
		var me = bulma.select(this).append('div');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		if (data.header.title || data.header.buttons.length>0) {
			var h = me.append('header').attr('class', 'card-header');
			if (data.header.title)
				h.append('p').attr('class', 'card-header-title').html(data.header.title);
			data.header.buttons.forEach(b => {
				var btn = h.append('button').attr('class','card-header-icon').attr('aria-label', b.aria||'more');
				if (b.action && typeof b.action =='function') btn.on('click',b.action);
				btn.append('span').attr('class','icon')
				   .append('i').attr('class',b.icon||'fas fa-angle-down').attr('aria-hidden','true');
			});
		}
		data.contents.forEach(c => {
			var cont = me.append('div').attr('class','card-content');
			gen.sub(cont, c);
		});
		if (data.footers.length>0) {
			var foot = me.append('footer').attr('class','card-footer');
			data.footers.forEach(f => {
				foot.append('a').attr('class','card-footer-item').attr('href', f.url||'#').html(f.text||'');
			});
		}
	})}
	card.addFooter	= function(txt,url,icon) {data.footers.push({text:txt, url:url, icon:icon});return card; }
	card.addHeaderButton	= function(icon,fnct) {data.header.buttons.push({action:fnct, icon:icon});return card; }
	card.title		= function(t) {if (arguments.length) {data.header.title = t;return card;} return data.header.title; }
	card.addContent	= function(obj) {data.contents.push(obj);return card; }
	return card;
}
