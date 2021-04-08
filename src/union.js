export default function() {
	var me, items = [];
	function union(it) {it.each(function() {
		me = bulma.select(this);
		me.selectAll('span.unionItem').data(items).enter().append('span').attr('class', 'unionItem').each(function(d) {
			bulma.select(this).call(d);
		});
	})}
	union.item   = function(c) { items.push(c); return union; }
	union.items  = function(all) {
		if (arguments.length && Array.isArray(all)) { items = all; return union; }
		return items;
	}
	return union;
}
