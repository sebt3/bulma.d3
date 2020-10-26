import {default as addSize} from "./sub/size.js";
import {default as addAlign} from "./sub/align.js";
export default function() {
	var me,ul,i,sep='',lst=[];
	function add(i){
		if(i.icon) {
			var a = ul.append('li').append('a').attr('href',i.url)
			a.append('span').attr('class','icon is-small').append('i').classed(i.icon,true).attr('aria-hidden','true')
			a.append('span').html(i.text)
		} else
			ul.append('li').append('a').attr('href',i.url).html(i.text)
	}
	function breadcrumb(it) {it.each(function() {
		me = bulma.select(this).append('nav').attr('class','breadcrumb').attr('aria-label','breadcrumbs')
		if (breadcrumb.getAlign()!='')	me.classed(breadcrumb.getAlign(),true)
		if (breadcrumb.getSize()!='')	me.classed(breadcrumb.getSize(),true)
		if (sep!='')	me.classed(sep,true)
		ul = me.append('ul')
		lst.forEach(add)
		addSize(breadcrumb, me)
		addAlign(breadcrumb, me)
	})}
	addSize(breadcrumb, me)
	addAlign(breadcrumb, me)
	breadcrumb.add	= function(t,u,i) {
		lst.push({text:t, url:u, icon:i});
		if(ul) add({text:t, url:u, icon:i})
		return breadcrumb
	}
	breadcrumb.sepSlash	= function() {
		sep='';
		if(me)  me.classed('has-arrow-separator',false).classed('has-bullet-separator',false).classed('has-dot-separator',false).classed('has-succeeds-separator',false)
		return breadcrumb
	}
	breadcrumb.sepArrow	= function() {
		sep='has-arrow-separator';
		if(me)  me.classed('has-arrow-separator',true).classed('has-bullet-separator',false).classed('has-dot-separator',false).classed('has-succeeds-separator',false)
		return breadcrumb
	}
	breadcrumb.sepBullet	= function() {
		sep='has-bullet-separator';
		if(me)  me.classed('has-arrow-separator',false).classed('has-bullet-separator',true).classed('has-dot-separator',false).classed('has-succeeds-separator',false)
		return breadcrumb
	}
	breadcrumb.sepDot	= function() {
		sep='has-dot-separator';
		if(me)  me.classed('has-arrow-separator',false).classed('has-bullet-separator',false).classed('has-dot-separator',true).classed('has-succeeds-separator',false)
		return breadcrumb
	}
	breadcrumb.sepSucceed	= function() {
		sep='has-succeeds-separator';
		if(me)  me.classed('has-arrow-separator',false).classed('has-bullet-separator',false).classed('has-dot-separator',false).classed('has-succeeds-separator',true)
		return breadcrumb
	}
	return breadcrumb
}
