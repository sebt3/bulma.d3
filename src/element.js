export default function(p_e, p_text) {
	var cl='';
	function element(it) {it.each(function() {
		var me  = bulma.select(this).append(p_e).html(p_text);
		if (cl != '') me.attr('class', cl);
	})}
	element.classes = function(c) { if (arguments.length) { cl = c; return element; } return cl; }
	return element;
}
