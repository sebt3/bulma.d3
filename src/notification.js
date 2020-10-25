export default function(text) {
	var color	= 'primary';
	var body, text	= text?text:'';
	function notif(it) {it.each(function() {
		body = bulma.select(this).append('div').attr('class', 'notification is-'+color).html(text);
		var del = body.append('button').attr('class', 'delete');
		del.on('click',function() {body.remove()});
	})}
	notif.color	= function(c) { if(c) { color=c; return notif} else return color}
	notif.body	= function(t) { if(t) { text=t; return notif} else return text}
	return notif;
}

(typeof d3 !== 'undefined'?d3.select:select)(window).on('load.notification.bulma.d3', function() {
	bulma.selectAll('.notification .delete').each(function() {
		var body = bulma.select(this.parentNode);
		bulma.select(this).on('click', function() {
			body.remove();
		});
	});
});

