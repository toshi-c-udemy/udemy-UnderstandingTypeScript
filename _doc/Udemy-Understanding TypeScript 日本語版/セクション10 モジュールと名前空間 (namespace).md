Understanding TypeScript 日本語版

## モジュールと名前空間 (namespace)

---
### 名前空間（namespace）の利用

**名前空間**

名前空間はTypeScriptの機能

名前空間の中と外で名前の衝突を防ぐ。

名前空間はJavaScriptでオブジェクトとしてコンパイルされる。



**export**

名前空間の外から見えるようにする



**///（トリプルスラッシュ・ディレクティブ）**

TypeScriptへの特別な指示

`/// <reference path="drag-drop-interfaces.ts" />`









```typescript
namespace DDInterfaces {
  // Drag & Drop
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
```



```typescript
/// <reference path="drag-drop-interfaces.ts" />
/// <reference path="project-module.ts" />

namespace App {
  // Project State Management
  type Listener<T> = (items: T[]) => void;

```



**名前空間の使用方法**

tsconfig.json の修正

```json
{
  "compilerOptions": {
    "module": "AMD",
    "outFile": "./dist/bundle.js",
```



Index.html の修正

```html
<html lang="en">
  <head>
    ...
    <script src="dist/bundle.js" defer></script>
  </head>
```









方法1

同じ名前空間に含める。



方法2

名前空間名.オブジェクトで参照する。



<details><summary>Understanding TypeScript</summary>
  ・セクション10: モジュールと名前空間 (namespace)<br>
  &emsp;&emsp;142. 名前空間の利用<br>
  &emsp;&emsp;143. ファイルとフォルダの整理<br>
</details>

---

### 名前空間の問題点

**名前空間の依存関係は自動で解決しない。**

依存関係を削除してもコンパイルエラーが表示されず、手動でインポートされるファイルを探さなければいけない。



<details><summary>Understanding TypeScript</summary>
  ・セクション10: モジュールと名前空間 (namespace)<br>
  &emsp;&emsp;144. 名前空間の問題点<br>
</details>

---

## ES モジュール

ESモジュールはJavaScriptの機能

ESモジュールはモダンブラウザでしかサポートされていない。







**ESモジュールの使用方法**



tsconfig.json の修正

```json
{
  "compilerOptions": {
    "module": "ES2015",
    // "outFile": "./dist/bundle.js",
```



Index.html の修正

```
<html lang="en">
  <head>
    ...
    <script type="module" src="dist/app.js"></script>
  </head>
```



ブラウザ側でインポートするときは`import { ProjectInput } from './components/project-input.js';`のように末尾の`.js`を削除してはいけない。





**モジュールの実行タイミング**

モジュールは複数箇所でインポートされていても、ブラウザでロードされたタイミングで一度だけ実行される。





<details><summary>Understanding TypeScript</summary>
  ・セクション10: モジュールと名前空間 (namespace)<br>
  &emsp;&emsp;146. ESモジュールの利用<br>
  &emsp;&emsp;147. インポート & エクスポート構文のバリエーション<br>
  &emsp;&emsp;148. モジュールのコードが実行されるタイミング<br>
</details>

---

