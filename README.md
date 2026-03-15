# input-accountid

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML input element that validates account IDs. Account IDs can contain A-Z, a-z, 0-9, -, _, and .

## Demo
https://code4fukui.github.io/input-accountid/

## Features
- Restricts input to valid account ID characters
- Normalizes full-width characters to half-width
- Customizable max length

## Usage
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

## License
MIT