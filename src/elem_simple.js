import {default as elem} from "./element.js";
function make(my_elem) {
	return function(data) {
		if (typeof data == 'string')
			return elem({elem: my_elem,text: data});
		data = data || {};
		data.elem = data.elem||my_elem;
		return elem(data);
	}
}
var button = make('button');
var p = make('p');
var span = make('span');
var div = make('div');
export {button, p, span, div}
