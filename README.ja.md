# input-accountid

アカウントIDを入力するためのカスタムHTML要素 `<input-accountid>` です。入力内容を検証し、英数字（`A-Z`、`a-z`、`0-9`）および記号 `-`、`_`、`.` のみを許可します。

## デモ

https://code4fukui.github.io/input-accountid/

## 機能

- **文字の検証:** 入力を有効なアカウントIDの文字のみに制限します。
- **自動正規化:** 全角文字を対応する半角文字に変換します。
- **文字数制限:** 標準の `maxlength` 属性をサポートし、入力文字数を制限できます。

## 使い方

このコンポーネントは、Custom Elements と ES モジュールをサポートするすべてのモダンブラウザで動作します。

1.  **コンポーネントのスクリプトをインポートする:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-accountid/input-accountid.js"></script>
    ```

2.  **HTML内で要素を使用する:**

    ```html
    <label for="account-input">アカウントID:</label>
    <input-accountid id="account-input" maxlength="16" placeholder="your-username"></input-accountid>
    ```

3.  **JavaScriptを使用して値を取得する:**

    ```html
    <script type="module">
      const input = document.getElementById("account-input");
      input.addEventListener("change", () => {
        console.log(input.value); // 正規化されたアカウントID
      });
    </script>
    ```

## クレジット

作成: [@taisukef](https://
