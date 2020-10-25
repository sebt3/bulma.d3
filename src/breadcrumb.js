export default function() {
	var me,ul,i,align='',sz='',sep='',lst=[];
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
		if (align!='')	me.classed(align,true)
		if (sep!='')	me.classed(sep,true)
		if (sz!='')	me.classed(sz,true)
		ul = me.append('ul')
		lst.forEach(add)
	})}
	breadcrumb.add	= function(t,u,i) {
		lst.push({text:t, url:u, icon:i});
		if(ul) add({text:t, url:u, icon:i})
		return breadcrumb
	}
	breadcrumb.alignLeft	= function() {
		align='';
		if(me) 	me.classed('is-centered',false).classed('is-right',false)
		return breadcrumb
	}
	breadcrumb.alignCenter	= function() {
		align='is-centered';
		if(me)	me.classed('is-centered',true).classed('is-right',false)
		return breadcrumb
	}
	breadcrumb.alignRight	= function() {
		align='is-right';
		if(me)	me.classed('is-centered',false).classed('is-right',true)
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
	breadcrumb.defaultSize	= function() {
		sz='';
		if(me)  me.classed('is-small',false).classed('is-medium',false).classed('is-large',false)
		return breadcrumb
	}
	breadcrumb.small	= function() {
		sz='is-small';
		if(me)  me.classed('is-small',true).classed('is-medium',false).classed('is-large',false)
		return breadcrumb
	}
	breadcrumb.medium	= function() {
		sz='is-medium';
		if(me)  me.classed('is-small',false).classed('is-medium',true).classed('is-large',false)
		return breadcrumb
	}
	breadcrumb.large	= function() {
		sz='is-large';
		if(me)  me.classed('is-small',false).classed('is-medium',false).classed('is-large',true)
		return breadcrumb
	}
	return breadcrumb
}
