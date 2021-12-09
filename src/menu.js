/*
 * attr: dict
 * activeUrl : string
 * content : tree of
 *   text: string
 *   url: string
 *   content: array of child elem
 *   icon: string
 * 
 * top level item have no url, nesting 2 levels bellow
 */
function menu_toggle(e) {
	const dropdownIcon = e.currentTarget.getElementsByClassName('dropdown-icon')[0]
          .getElementsByClassName('fas')[0]

	e.currentTarget.parentNode.classList.toggle('is-active')
	dropdownIcon.classList.toggle('fa-angle-left')
	dropdownIcon.classList.toggle('fa-angle-down')
}
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
		data.content.forEach(t => {
			me.append('p').attr('class', 'menu-label').html(t.text||'');
			var top_ul = me.append('ul').attr('class', 'menu-list');
			if (Array.isArray(t.content)) t.content.forEach(m => {
				var m_li = top_ul.append('li')
				var m_a = m_li.append('a');
				//TODO support 'is-active' class based on the item url compared to data.activeUrl
				if (m.url) m_a.attr('href', m.url);
				if (m.icon) {
					m_a.classed('has-icon', true).append('span').attr('class', 'icon').append('i').attr('class', m.icon)
					m_a.append('span').attr('class', 'menu-item-label').html(m.text||'');
				} else m_a.append('span').html(m.text||'');
				if (Array.isArray(m.content) && m.content.length>0) {
					m_a.classed('has-dropdown-icon', true).on('click', menu_toggle)
						.append('div').attr('class','dropdown-icon')
						.append('span').attr('class','icon')
						.append('i').attr('class','fas fa-angle-left');
					var b_ul = m_li.append('ul');
					//TODO: hide (class: is-hidden) this level when parent isnt active
					//TODO: allow to show this level on hover/click of parent level
					m.content.forEach(b => {
						var b_a = b_ul.append('li').append('a').attr('href', b.url||'#');
						if (b.icon) {
							b_a.append('span').attr('class', 'icon').append('i').attr('class', b.icon);
							b_a.append('span').attr('class', 'menu-item-label').html(b.text||'');
						} else b_a.append('span').html(b.text||'');
						//TODO support 'is-active' class based on the item url compared to data.activeUrl
					});
				}
			});
		});
	})}
	menu.activate	= function(t) {if (arguments.length) {data.activeUrl   = t;return media;} return data.activeUrl; }
	return menu;
}
cmenu.callbacks = {}
export default cmenu
