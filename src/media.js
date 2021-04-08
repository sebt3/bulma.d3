export default function() {
	var left, lefturl, leftSz='64x64';
	var me, right, body = bulma.create('div').attr('class', 'media-content');
	function media(it) {it.each(function() {
		me = bulma.select(this).append('article').attr('class','media')
		if(lefturl) {
			media.left().append('p').attr('class','image is-'+leftSz).append('img').attr('src',lefturl);
			me.append(() => left.node())
		} else if (left)
			me.append(() => left.node())
		me.append(() => body.node())
		if (right) me.append(() => right.node())
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
			if (me)	me.append(() => right.node())
		}
		return right;
	}
	media.content	= function() {
		return body;
	}
	return media;
}
