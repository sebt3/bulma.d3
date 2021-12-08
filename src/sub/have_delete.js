var prop = "text";
var btn = {};
function setprop (x) { prop = x; }
function parse(data, cb, is_small) {
	btn = {
		type: 'button',
		on:   { click: cb },
		attr: { class: 'delete'}
	};
	if (is_small)
		btn.attr.class = 'delete is-small';
	if (data.have_delete) {
		if (typeof data[prop] == 'undefined')
			data[prop] = btn;
		else if (Array.isArray(data[prop]))
			data[prop].push(btn);
		else if (typeof data[prop] == 'string')
			data[prop] = [{type: 'span', text: data[prop]}, btn ];
		else if (typeof data[prop] == 'function' || typeof data[prop] == 'object')
			data[prop] = [ data[prop], btn ];
	}
}

function handler(obj, data) {
	return function(is) {
		if (arguments.length) {
			var ret = true;
			if (typeof is == 'boolean')
				ret = is;
			data.have_delete = ret;
			return obj;
		}
		return data.have_delete;
	}
}
export default { parse: parse, handler: handler, use_property: setprop}
