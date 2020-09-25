export default function() {
	var left  = [];
	var right = [];
	var me, mel, mer;
	function melAdd(i) { mel.node().appendChild(i.node()) }
	function merAdd(i) { mer.node().appendChild(i.node()) }
	function level(it) {it.each(function() {
		me = bulma.select(this).append('nav').attr('class','level')
		mel = me.append('div').attr('class', 'level-left')
		mer = me.append('div').attr('class', 'level-right')
		left.forEach(melAdd);
		right.forEach(merAdd);
	})}
	level.addLeft   = function() {
		var ret = bulma.create('div').attr('class', 'level-item')
		left.push(ret);
		if(mel) melAdd(ret);
		return ret;
	}
	level.addRight  = function() {
		var ret = bulma.create('div').attr('class', 'level-item')
		right.push(ret);
		if(mer) merAdd(ret);
		return ret;
	}
	return level;
}
