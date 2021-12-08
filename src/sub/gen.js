import {default as gen} from "../generator.js";

function sub(me, text) {
	if (typeof text == 'string' && text != ''){
		me.html(text);
	}else if (typeof text == 'function')
		me.call(text);
	else if ((typeof text == 'object' && text!=null  && text.type) || Array.isArray(text))
		me.call(gen(text));
}

function isObject(o) {
	return (typeof o == 'function')||(Array.isArray(o))||(typeof text == 'object' && x!==null && o.type)
}

export default { sub: sub, isObject: isObject }
