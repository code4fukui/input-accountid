# input-accountid
  
https://code4fukui.github.io/input-accountid/

## account id is...

A-Z / a-z / 0-9 / - / _ / .
## usage

```html
<script type="module" src="https://code4fukui.github.io/input-accountid/input-accountid.js"></script>
<input-accountid id=inp maxlength=5></input-accountid>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
