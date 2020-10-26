var page_prev_text = 'Previous';
var page_next_text = 'Next';
import {default as addSize} from "./sub/size.js";
import {default as addAlign} from "./sub/align.js";
export default function(maximum = 1, current = 1) {
	var me, ul, prv, nxt, max = maximum, cur = current, style='';
	function update() {
		function sep() { ul.append('li').append('span').attr('class','pagination-ellipsis').html('&hellip;'); }
		function add(i) {
			var c  = ul.append('li').append('a').attr('class','pagination-link').attr('aria-label','Goto page '+i).text(''+i)
			if (cur == i)
				c.classed('is-current',true).attr('aria-current','page')
		}
		if (!me) return
		ul.selectChildren().remove()
		if (cur>max) cur=max
		if (max<1) return
		add(1)
		if (max < 6) {
			if (max>1) add(2)
			if (max>2) add(3)
			if (max>3) add(4)
			if (max>4) add(5)
		} else if (cur>max-3 || cur < 4) {
			add(2);add(3);sep()
			add(max-2)
			add(max-1)
			add(max)
		} else {
			sep();add(cur-1)
			add(cur)
			add(cur+1);sep()
			add(max)
		}
	}
	function pagination(it) {it.each(function() {
		me = bulma.select(this).append('nav').attr('class','pagination').attr('aria-label','pagination')
		if (pagination.getAlign()!='')	me.classed(pagination.getAlign(),true)
		if (pagination.getSize()!='')	me.classed(pagination.getSize(),true)
		if (style!='')	me.classed(style,true)
		prv = me.append('a').classed('pagination-previous',true).text(page_prev_text)
		nxt = me.append('a').classed('pagination-next',true).text(page_next_text)
		ul  = me.append('ul').classed('pagination-list',true)
		update()
		addSize(pagination, me)
		addAlign(pagination, me)
	})}
	addSize(pagination, me)
	addAlign(pagination, me)
	pagination.cur		= function(current) {
		if(current) cur = current;
		else return cur;
		if (me)	update();
		return pagination
	}
	pagination.max		= function(maxi) {
		if(maxi) max = maxi;
		else return max;
		if (me)	update();
		return pagination
	}
	pagination.setText	= function(prev=page_prev_text,next=page_next_text) {
		page_prev_text	= prev
		page_next_text	= next
		if (me)	{
			prv.text(prev)
			nxt.text(next)
		}
		return pagination
	}
	pagination.squared	= function() {
		style='';
		if(me)	me.classed('is-rounded',false)
		return pagination
	}
	pagination.rounded	= function() {
		style='is-rounded';
		if(me)	me.classed('is-rounded',true)
		return pagination
	}
	return pagination
}
