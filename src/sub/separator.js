function parse(data) {
	if (typeof data.separator == 'string') {
		switch (data.separator) {
			case 'arrow':
				return ' has-arrow-separator';
			case 'bullet':
				return ' has-bullet-separator';
			case 'dot':
				return ' has-dot-separator';
			case 'succeeds':
				return ' has-succeeds-separator';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/has-arrow-separator/, '').replace(/has-bullet-separator/, '').replace(/has-succeeds-separator/, '').replace(/has-dot-separator/, '').replace(/  +/g, ' ');
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
