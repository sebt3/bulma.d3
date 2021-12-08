function parse(data) {
	if (typeof data.color == 'string') {
		switch (data.color) {
			case 'primary':
				return ' is-primary';
			case 'link':
				return ' is-link';
			case 'info':
				return ' is-info';
			case 'success':
				return ' is-success';
			case 'warning':
				return ' is-warning';
			case 'danger':
				return ' is-danger';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/is-primary/, '').replace(/is-link/, '').replace(/is-info/, '').replace(/is-success/, '').replace(/is-warning/, '').replace(/is-danger/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(color) {
		if (arguments.length) {
			data.attr = data.attr||{};
			data.attr.class = strip(data.attr.class || '') + parse({color: color});
			data.color = color;
			return obj;
		}
 		return data.color;
	}
}
export default { parse: parse, handler: handler, strip: strip }
