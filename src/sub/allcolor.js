import {default as color} from "./lightcolor.js";
function parse(data) {
	if (typeof data.color == 'string') {
		switch (data.color) {
			case 'black':
				return ' is-black';
			case 'dark':
				return ' is-dark';
			case 'light':
				return ' is-light';
			case 'white':
				return ' is-white';
		}
	}
	return color.parse(data);
}
function strip(cl) {
	return color.strip(cl).replace(/is-black/, '').replace(/is-dark/, '').replace(/is-white/, '').replace(/  +/g, ' ');
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
