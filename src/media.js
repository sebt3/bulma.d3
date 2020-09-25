export default function() {
	var left, lefturl, leftSz='64x64';
	var me, right, body = bulma.create('div').attr('class', 'media-content');
	function add2(d,i) { d.node().appendChild(i.node()) }
	function media(it) {it.each(function() {
		me = bulma.select(this).append('article').attr('class','media')
		if(lefturl) {
			media.left().append('p').attr('class','image is-'+leftSz).append('img').attr('src',lefturl);
			add2(me,left);
		} else if (left)
			add2(me,left);
		add2(me,body);
		if (right) add2(me,right);
	})}
	media.left   = function() {
		if (!left)
			left = bulma.create('figure').attr('class', 'media-left')
		return left;
	}
	media.leftImage	= function(u,sz) {
		lefturl = u;
		if (sz) leftSz  = sz;
		return media;
	}
	media.right	= function() {
		if (!right) {
			right = bulma.create('div').attr('class', 'media-right')
			if (me)	add2(me, right);
		}
		return right;
	}
	media.content	= function() {
		return body;
	}
	return media;
}
