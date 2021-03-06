function parse(data) {
	if (typeof data.size == 'string') {
		switch (data.size) {
			case 'small':
				return ' is-small';
			case 'normal':
				return ' is-normal';
			case 'medium':
				return ' is-medium';
			case 'large':
				return ' is-large';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/is-small/, '').replace(/is-normal/, '').replace(/is-medium/, '').replace(/is-large/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(size) {
		if (arguments.length) {
			data.attr = data.attr||{};
			data.attr.class = strip(data.attr.class || '') + parse({size: size});
			data.size = size;
			return obj;
		}
		return data.size;
	}
}
export default { parse: parse, handler: handler, strip: strip }
