# input-accountid

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element `<input-accountid>` for entering account IDs. It validates input, allowing only alphanumeric characters (`A-Z`, `a-z`, `0-9`) and the symbols `-`, `_`, and `.`.

## Demo

https://code4fukui.github.io/input-accountid/

## Features

- **Character Validation:** Restricts input to valid account ID characters.
- **Automatic Normalization:** Converts full-width (zenkaku) characters to their half-width (hankaku) equivalents.
- **Length Limiting:** Supports the standard `maxlength` attribute to constrain the input length.

## Usage

This component works in any modern browser that supports Custom Elements and ES modules.

1.  **Import the component script:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-accountid/input-accountid.js"></script>
    ```

2.  **Use the element in your HTML:**

    ```html
    <label for="account-input">Account ID:</label>
    <input-accountid id="account-input" maxlength="16" placeholder="your-username"></input-accountid>
    ```

3.  **Get the value using JavaScript:**

    ```html
    <script type="module">
      const input = document.getElementById("account-input");
      input.addEventListener("change", () => {
        console.log(input.value); // The sanitized account ID
      });
    </script>
    ```

## Credit

Created by [@taisukef](https://