function parse(data) {
	if (typeof data.state == 'string') {
		switch (data.state) {
			case 'ancestor':
				return ' is-ancestor';
			case 'parent':
				return ' is-parent';
			case 'child':
				return ' is-child';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/is-small/, '').replace(/is-normal/, '').replace(/is-medium/, '').replace(/is-large/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(state) {
		if (arguments.length) {
			data.attr = data.attr||{};
			data.attr.class = strip(data.attr.class || '') + parse({state: state});
			data.state = state;
			return obj;
		}
		return data.state;
	}
}
export default { parse: parse, handler: handler, strip: strip }
