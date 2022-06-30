Understanding TypeScript 日本語版

# 新しい世代のJavaScriptとTypeScript

---

### 主要な機能の対応表

**[ECMAScript: compat-table](https://kangax.github.io/compat-table/es6/)**







<details><summary>Understanding TypeScript</summary>
  ・セクション4: 新しい世代のJavaScriptとTypeScript<br>
  &emsp;&emsp;49. "let" & "const"<br>
</details>


---

### ES6の主要機能

ES6以降をモダンなJavaScriptと言われている。



**let と const**

letはブロックスコープの変数

（varは関数スコープでifブロックの外からも利用できる）

constは定数



**アロー関数**

`() => {}` で表現できる関数



**デフォルトの引数**

デフォルトの引数を定義すると呼び出し側で引数を省略できる。



**スプレッドオペレータ (...)**

配列やオブジェクトを個々の値として展開する。



**レストパラメータ（Rest Parameter）**

残りの引数をまとめて配列に格納する。

引数の個数を指定したい場合はtuple型で定義する。

```typescript
const add = (...numbers: [number, number, number]) => {
    ...
```



**配列の分割代入**

配列の要素を分割して一括代入する。

```typescript
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
```



**オブジェクトの分割代入**

オブジェクトのプロパティと一致するキーで値を一括で取り出す。

別の名前の変数で宣言したい場合は「 : 」で指定する。

```typescript
const { firstName: userName, age } = person;
```







<details><summary>Understanding TypeScript</summary>
  ・セクション4: 新しい世代のJavaScriptとTypeScript<br>
  &emsp;&emsp;49. "let" & "const"<br>
  &emsp;&emsp;50. アロー関数<br>
  &emsp;&emsp;51. デフォルト関数パラメータ<br>
  &emsp;&emsp;52. スプレッドオペレータ（...）<br>
  &emsp;&emsp;53. レストパラメータ（残余引数）<br>
  &emsp;&emsp;54. 配列とオブジェクトの分割代入<br>
</details>

---

### コンパイルターゲット

**コンパイルターゲットによって使用できる機能が異なる**

そのためコンパイルターゲットが異なるとコンパイル後のJavaScriptも全く異なる。



<details><summary>Understanding TypeScript</summary>
  ・セクション4: 新しい世代のJavaScriptとTypeScript<br>
  &emsp;&emsp;55. コンパイルターゲット＆まとめ<br>
</details>

---

