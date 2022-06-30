Understanding TypeScript 日本語版

# サードパーティライブラリ & TypeScript

---

## JavaScriptライブラリ

---

### 型定義ファイルがあるライブラリ（Lodashライブラリ）

**[GitHub: lodash](https://github.com/lodash/lodash)**

**[GitHub: Definitely Typed 型定義ファイル](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md)**



JavaScriptのユーティリティ関数群

JavaScript書かれたサードパティー製のライブラリは TypeScriptからライブラリの構成が理解できないためimportでエラーが発生する。



**型定義ファイルをインストール**

型定義ファイル`.d.ts`をインストールする。

型定義ファイルはライブラリの型のみを提供するライブラリ



<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save lodash</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save-dev @types/lodash</p>
</div>



**型定義ファイルの検索**

Googleで「types jquery」のように検索する。



<details><summary>Understanding TypeScript</summary>
  ・セクション12: サードパーティライブラリ & TypeScript<br>
  &emsp;&emsp;163. JavaScriptライブラリの利用<br>
</details>

---

### 型定義ファイルがないライブラリ

**declare宣言（アンビエント宣言）**

JavaScriptコードから提供される変数や関数の型を宣言し、TypeScriptで利用できる。



```html
<body>
<script>
  var GLOBAL = 'グローバル変数';
</script>
</body>
```

```typescript
declare var GLOBAL: any;

console.log(GLOBAL);
```



<details><summary>Understanding TypeScript</summary>
  ・セクション12: サードパーティライブラリ & TypeScript<br>
  &emsp;&emsp;164. 最後の手段としての "declare" の利用<br>
</details>

---

## TypeScript製ライブラリ

---

### JavaScriptでも使えるライブラリ（Class-transformer）



**[GitHub: class-transformer](https://github.com/typestack/class-transformer#readme)**



jsonなどのデータから簡単にクラスを作れるライブラリ







<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install class-transformer --save</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npm install reflect-metadata --save</p>
</div>



app.tsファイル

```typescript
import 'reflect-metadata';

```



Tsconfig.js

```json
 "module": "CommonJS"
```



<details><summary>Understanding TypeScript</summary>
  ・セクション12: サードパーティライブラリ & TypeScript<br>
  &emsp;&emsp;166. class-transformerの例<br>
</details>

---

### TypeScriptのみで使えるライブラリ（）

**[GitHub: class-validator](https://github.com/typestack/class-validator#readme)**



デコレータを使ったバリデーションライブラリ



<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save class-validator</p>
</div>



```typescript
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;
```



```typescript
import { validate } from 'class-validator';

const newProd = new Product('', -100);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('バリデーションエラー！');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
```





<details><summary>Understanding TypeScript</summary>
  ・セクション12: サードパーティライブラリ & TypeScript<br>
  &emsp;&emsp;167. class-validatorの例<br>
</details>

---

