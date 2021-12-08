import {default as size}	from "./sub/size.js";
import {default as sep} 	from "./sub/separator.js";
import {default as align}	from "./sub/alignement.js";
/*
 * childs: array
 * attr: dict
 * size: string
 * separator: string
 * align: string
 */
export default function(in_data) {
	var ul;
	var data = in_data || {};
	data.childs = data.childs || [];
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' breadcrumb';
	else
		data.attr.class = 'breadcrumb';
	data.attr.class += size.parse(data)+sep.parse(data)+align.parse(data);
	data.attr["aria-label"] = 'breadcrumbs';
	function breadcrumb(it) {it.each(function() {
		var nav = bulma.select(this).append('nav');
		for (var k in data.attr) nav.attr(k, data.attr[k]);
		ul = nav.append('ul');
		data.childs.forEach(i => {
			if (i.icon) {
				var a = ul.append('li').append('a').attr('href',i.url||'#')
				a.append('span').attr('class','icon is-small').append('i').classed(i.icon,true).attr('aria-hidden','true')
				a.append('span').html(i.text)
			} else
				ul.append('li').append('a').attr('href',i.url||'#').html(i.text)
	});
	})}
	breadcrumb.add	= function(txt,url,icon) {
		data.childs.push({text:t, url:u, icon:i});
		return breadcrumb;
	}
	breadcrumb.size			= size.handler(breadcrumb, data);
	breadcrumb.separator	= sep.handler(breadcrumb, data);
	breadcrumb.align		= align.handler(breadcrumb, data);
	return breadcrumb;
}
