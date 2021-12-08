import {default as color} from "./color.js";
function parse(data) {
	if (typeof data.color == 'string') {
		switch (data.color) {
			case 'light primary':
				return ' is-light is-primary';
			case 'light link':
				return ' is-light is-link';
			case 'light info':
				return ' is-light is-info';
			case 'light success':
				return ' is-light is-success';
			case 'light warning':
				return ' is-light is-warning';
			case 'light danger':
				return ' is-light is-danger';
		}
	}
	return color.parse(data);
}
function strip(cl) {
	return color.strip(cl).replace(/is-light/, '').replace(/  +/g, ' ');
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
