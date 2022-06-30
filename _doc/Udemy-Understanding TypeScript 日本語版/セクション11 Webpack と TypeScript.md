Understanding TypeScript 日本語版

## Webpack と TypeScript

---
**ESモジュールの欠点**

ブラウザでインポート文を見つけるたびにHTTPリクエストが発生するのでそのたびに遅延が発生する。分割が増加すると読み込み遅延も増加する。



**Webpack**

モジュールバンドラとビルド自動化ツール

- バンドラの生成により少ないHTTPリクエスト

- 最適化（minify）されたより小さいファイルサイズ
- ビルドステップのカスタマイズ



<details><summary>Understanding TypeScript</summary>
  ・セクション11: Webpack と TypeScript<br>
  &emsp;&emsp;152. Webpack とは何か & なぜ必要なのか<br>
</details>

---

### **Webpackのインストール**

**Webpackのインストール**

<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save-dev clean-webpack-plugin</p>
</div>

webpack： Webpack本体

webpack-cli： Webpackをコマンドラインから操作する。

webpack-dev-server： プロジェクトの変更を監視する。ブラウザから操作可能

typescript： TypeScript本体

ts-loader： WebpackとTypeScriptの連携ツール



<details><summary>Understanding TypeScript</summary>
  ・セクション11: Webpack と TypeScript<br>
  &emsp;&emsp;153. Webpack のインストール & 重要な依存パッケージ<br>
</details>

---

### WebPackの設定

**tsconfigの設定**

```json
"target": "es6" or "es5"
"module": "ES2015"
"outDir": "./dist"
// "rootDir": "./src" Webpackで設定
```





**Webpackの設定**



**各ソースファイル**

inport文の末尾の`.js`を削除

```typescript
import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';
```



**エントリポイントと出力設定**



Webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
};

```



pathについて

Webpackの設定で使われるpathは絶対パスで指定する必要がある。

そのためpathモジュールをインポートし、絶対パスを求める必要がある。

```js
const path = require('path');
...
    path: path.resolve(__dirname, 'dist'),
```



**モジュールのルール設定**

エントリポイントで読み込んだファイルをどのように処理するか設定する。



```js
module: {
  rules: [
    {
      test: /\.ts$/, // 読み込むファイル（正規表現）
      use: 'ts-loader', // 処理方法
      exclude: /node_modules/, // 読み込むファイルの除外
    },
  ]
  ...
```



**resolveの設定**

各ソースファイルでインポートされるファイルをどのように処理するか設定する。

```js
module: {
    rules: ...
    resolve: {
      extensions: ['.ts', '.js'], //ファイル名の決定する順序 "ts" → "js"
    },
```



**ソースマップの設定**

```js
devServer: {
  static: [
    {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
    {
      directory: __dirname,
      publicPath: '/',
    },
  ],
},
devtool: 'eval',
```



**プラグインの設定**

ワークフロー全体に適用される設定



webpack.config.prod.js のビルド用の設定

```js
const CleanPlugin = require('clean-webpack-plugin');
...
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
```









**Node.js package.jsonの設定**

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --mode development --config webpack.config.js",
    "build": "webpack --config webpack.config.prod.js"
  },
```









<details><summary>Understanding TypeScript</summary>
  ・セクション11: Webpack と TypeScript<br>
  &emsp;&emsp;154. エントリポイントと出力設定<br>
  &emsp;&emsp;155. ts-loaderの利用（TypeScriptサポートの追加）<br>
  &emsp;&emsp;156. 【注意】Webpack version 5 での設定について（開発用）<br>
  &emsp;&emsp;157. セットアップの完了 & webpack-dev-server の追加<br>
  &emsp;&emsp;158. 【注意】Webpack version 5 での設定について（本番用）<br>
  &emsp;&emsp;159. 本番用のワークフロー設定<br>
</details>

---

