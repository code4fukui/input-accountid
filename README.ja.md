# input-accountid

A-Z、a-z、0-9、-、_、.の文字からなるアカウントIDを入力するためのWebコンポーネントです。

## デモ
https://code4fukui.github.io/input-accountid/

## 機能
- アカウントIDフォーマットのバリデーション
- 全角文字を半角に変換
- maxlengthによる入力長の制限

## 使い方
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

## ライセンス
MIT