export * from "./index.sub.js";
export var create = d3.create;
export var select = d3.select;
export var selectAll = d3.selectAll;
import {onload as notif_load}   from "./notification.js";
select(window).on('load.notification', notif_load);

