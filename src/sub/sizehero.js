import {default as size} from "./size.js";
function parse(data) {
	if (typeof data.size == 'string') {
		switch (data.size) {
			case 'halfheight':
				return ' is-halfheight';
			case 'fullheight':
				return ' is-fullheight';
		}
	}
	return size.parse(data);
}
function strip(cl) {
	return size.strip(cl).replace(/is-halfheight/, '').replace(/is-fullheight/, '').replace(/  +/g, ' ');
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
