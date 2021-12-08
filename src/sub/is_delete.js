function parse(data) {
	if (data.is_delete)
		return ' is-delete';
	return '';
}
function strip(cl) {
	return cl.replace(/is-delete/, '').replace(/  +/g, ' ');
}
function handler(obj, data) {
	return function(is) {
		if (arguments.length) {
			var ret = true;
			if (typeof is == 'boolean')
				ret = is;
			data.attr = data.attr||{};
			var cl = data.attr.class || '';
			data.attr.class = strip(cl) + parse({is_delete: ret});
			data.is_delete = ret;
			return obj;
		}
		return data.is_delete;
	}
}
export default { parse: parse, handler: handler, strip: strip }
