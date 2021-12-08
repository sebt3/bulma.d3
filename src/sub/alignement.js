function parse(data) {
	if (typeof data.separator == 'string') {
		switch (data.separator) {
			case 'left':
				return ' is-left';
			case 'center':
				return ' is-centered';
			case 'right':
				return ' is-right';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/is-left/, '').replace(/is-centered/, '').replace(/is-right/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(sep) {
		if (arguments.length) {
			data.attr = data.attr||{};
			data.attr.class = strip(data.attr.class || '') + parse({separator: sep});
			data.separator = sep;
			return obj;
		}
		return data.separator;
	}
}
export default { parse: parse, handler: handler, strip: strip }
