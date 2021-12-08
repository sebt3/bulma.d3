/*
 * attr: dict
 * activeUrl : string
 * content : tree of
 *   text: string
 *   url: string
 *   content: array of child elem
 *   icon: string ? not supported for now
 * 
 * top level item have no url, nesting 2 levels bellow
 */
var cmenu = function(in_data) {
	var ul;
	var data = in_data || {};
	data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' menu';
	else
		data.attr.class = 'menu';
	data.content = data.content || [];
	data.activeUrl = data.activeUrl || '';
	function menu(it) {it.each(function() {
		var me = bulma.select(this).append('nav');
		for (var k in data.attr) me.attr(k, data.attr[k]);
		// going recursive here would allow for unlimited levels but since bulma dont support this...
		for (var t in data.content) {
			me.append('p').attr('class', 'menu-label').html(t.text||'');
			var top_ul = me.append('ul').attr('class', 'menu-list');
			for (var m in t.content||[]) {
				var m_li = top_ul.append('li')
				var m_a = m_li.append('a').html(m.text||'');
				//TODO support 'is-active' class based on the item url compared to data.activeUrl
				if (m.url) m_a.attr('href', m.url);
				if (Array.isArray(m.content) && m.content.length>0) {
					var b_ul = m_li.append('ul');
					//TODO: hide (class: is-hidden) this level when parent isnt active
					//TODO: allow to show this level on hover/click of parent level
					for (var b in m.content) {
						var b_a = b_ul.append('li').append('a').html(b.text||'').attr('href', b.url||'#');
						//TODO support 'is-active' class based on the item url compared to data.activeUrl
					}
				}
			}
		}
	})}
	menu.activate	= function(t) {if (arguments.length) {data.activeUrl   = t;return media;} return data.activeUrl; }
	return menu;
}
cmenu.callbacks = {}
export default cmenu
