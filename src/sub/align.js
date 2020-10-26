export default function(obj, me) {
	var align='';
	obj.getAlign	= function() { return align }
	obj.alignLeft	= function() {
		align='';
		if(me)	me.classed('is-centered',false).classed('is-right',false)
		return obj
	}
	obj.alignCenter	= function() {
		align='is-centered';
		if(me)	me.classed('is-centered',true).classed('is-right',false)
		return obj
	}
	obj.alignRight	= function() {
		align='is-right';
		if(me)	me.classed('is-centered',false).classed('is-right',true)
		return obj
	}
	return obj
}
