import {default as elem} from "./element.js";
function make(my_elem, my_class) {
	return  function(data) {
		if (typeof data == 'string')
			return elem({elem: my_elem,attr: {class: my_class},text: data});
		data = data || {};
		data.elem = data.elem||my_elem;
		data.attr = data.attr || {};
	if (data.attr.class)
		data.attr.class += ' '+my_class;
	else
		data.attr.class = my_class;
		return elem(data);
	}
}
var t1=make('h1', 'title is-1');
var t2=make('h2', 'title is-2');
var t3=make('h3', 'title is-3');
var t4=make('h4', 'title is-4');
var t5=make('h5', 'title is-5');
var t6=make('h6', 'title is-6');
var s1=make('h1', 'subtitle is-1');
var s2=make('h2', 'subtitle is-2');
var s3=make('h3', 'subtitle is-3');
var s4=make('h4', 'subtitle is-4');
var s5=make('h5', 'subtitle is-5');
var s6=make('h6', 'subtitle is-6');
var h1=make('h1', 'is-1');
var h2=make('h2', 'is-2');
var h3=make('h3', 'is-3');
var h4=make('h4', 'is-4');
var h5=make('h5', 'is-5');
var h6=make('h6', 'is-6');
var box=make('div', 'box');
var block=make('div', 'block');
var content=make('div', 'content');
export {t1,t2,t3,t4,t5,t6,s1,s2,s3,s4,s5,s6,h1,h2,h3,h4,h5,h6,box,block,content}
