function parse(data) {
	if (data.rounded)
		return ' is-rounded';
	return '';
}
function strip(cl) {
	return cl.replace(/is-rounded/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(is) {
		if (arguments.length) {
			var ret = true;
			if (typeof is == 'boolean')
				ret = is;
			data.attr = data.attr||{};
			var cl = data.attr.class || '';
			data.attr.class = strip(cl) + parse({rounded: ret});
			data.rounded = ret;
			return obj;
		}
		return data.rounded;
	}
}
export default { parse: parse, handler: handler, strip: strip }
