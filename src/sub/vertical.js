function parse(data) {
	if (typeof data.vertical == 'boolean' && data.vertical)
		return ' is-vertical';
	return '';
}
function strip(cl) {
	return cl.replace(/is-vertical/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(v) {
		if (arguments.length>0) {
			data.attr = data.attr||{};
			data.attr.class = strip(data.attr.class || '') + parse({vertical: v});
			data.vertical = v;
			return obj;
		}
		return data.vertical;
	}
}
export default { parse: parse, handler: handler, strip: strip }
