function parse(data) {
	if (typeof data.size == 'string' ||typeof data.size == 'number') {
		switch (data.size) {
			case 1:
			case '1':
				return ' is-1';
			case 2:
			case '2':
				return ' is-2';
			case 3:
			case '3':
				return ' is-3';
			case 4:
			case '4':
				return ' is-4';
			case 5:
			case '5':
				return ' is-5';
			case 6:
			case '6':
				return ' is-6';
			case 7:
			case '7':
				return ' is-7';
			case 8:
			case '8':
				return ' is-8';
			case 8:
			case '8':
				return ' is-8';
			case 9:
			case '9':
				return ' is-9';
			case 10:
			case '10':
				return ' is-10';
			case 11:
			case '11':
				return ' is-11';
			case 12:
			case '12':
				return ' is-12';
		}
	}
	return '';
}
function strip(cl) {
	return cl.replace(/is-1/, '').replace(/is-2/, '').replace(/is-3/, '').replace(/is-4/, '').replace(/is-5/, '').replace(/is-6/, '').replace(/is-7/, '').replace(/is-8/, '').replace(/is-9/, '').replace(/is-10/, '').replace(/is-11/, '').replace(/is-12/, '').replace(/  +/g, ' ');
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
