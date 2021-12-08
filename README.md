# bulma.d3

This is a glue layer between:
- [bulma](https://bulma.io/)
- [d3](https://d3js.org/)


## Examples usage

```
<div id="here"></div>
<script src="..../bulma.d3.nodep.min.js"></script>
<script>
bulma.select('#here').call(bulma.message().color('primary').body(bulma.h1('Hello World')))
</script>
```

or using regular d3, but using the json to DOM generator :

```
<div id="here"></div>
<script src="..../d3-selection.min.js"></script>
<script src="..../bulma.d3.min.js"></script>
<script>
d3.select('#here').call(bulma.gen({type: "hero", color: 'primary', size: 'large', body: [{type: 't2', text: 'Hello'},{type: 's3', text:'World'}]}))
</script>
```

You can even mix both syntax to your will :

```
<div id="here"></div>
<script src="..../d3-selection.min.js"></script>
<script src="..../bulma.d3.min.js"></script>
<script>
d3.select('#here').call(bulma.level({left:[bulma.message().body([{type:'s3', text:'Hello'},{type:'t2',text: 'World'}])]}).addLeft(bulma.gen({type: 'message', color: 'primary', body: [{type: 't1', text: "Fun"}]})))
</script>
```
