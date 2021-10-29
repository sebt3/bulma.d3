export default function(obj, me) {
	var sz = '';
	obj.getSize	= function() { return sz }
	obj.defaultSize	= function() {
		sz='';
		if(me)  me.classed('is-small',false).classed('is-medium',false).classed('is-large',false).classed('is-normal',false)
		return obj
	}
	obj.small	= function() {
		sz='is-small';
		if(me)  me.classed('is-small',true).classed('is-medium',false).classed('is-large',false).classed('is-normal',false)
		return obj
	}
	obj.normalSize	= function() {
		sz='is-normal';
		if(me)  me.classed('is-small',false).classed('is-medium',false).classed('is-large',false).classed('is-normal',true)
		return obj
	}
	obj.medium	= function() {
		sz='is-medium';
		if(me)  me.classed('is-small',false).classed('is-medium',true).classed('is-large',false).classed('is-normal',false)
		return obj
	}
	obj.large	= function() {
		sz='is-large';
		if(me)  me.classed('is-small',false).classed('is-medium',false).classed('is-large',true).classed('is-normal',false)
		return obj
	}
	return obj
}
