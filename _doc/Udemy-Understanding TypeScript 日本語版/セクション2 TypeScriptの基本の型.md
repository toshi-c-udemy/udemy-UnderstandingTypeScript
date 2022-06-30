Understanding TypeScript 日本語版

## TypeScriptの基本の型

---

### TypeScriptの概要

**JavaScriptは動的型付け言語**

事前に変数などの型を決定せず、実行時のデータによって種類を区別する言語。

これを「データ型」と呼ぶ。









**TypeScriptのコンパイル**

tscコマンドはエラーが発生していてもJavaScriptファイルをコンパイルする。

<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>tsc app.ts</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npx tsc app.ts</p>
</div>









<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;10. 型の利用<br>
</details>


---

### JavaScriptの型チェック

**typeof演算子**

```typescript
function add(n1: number, n2: number) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('入力値が正しくありません');
  }
  return n1 + n2;
}
```



TypeScriptの型チェックは開発時のみ。ランタイム上ではTypeScriptは何もしない。



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;11. JavaScriptの型 vs TypeScriptの型<br>
</details>

---

### 型の指定と型の推論

**Type Inference（型推論）**

TypeScriptは自動的に型を推論するため、常に型を明示的に書く必要はない。

TypeScriptが正しく型を推論する場合は明示的に型を指定しないほうが良いやり方。



**型が推論できる場合**

`let number1 = 1;`のように初期値の型が定まる場合は自動的にnumber型に指定できる

**型が推論できない場合**

`let number1`;のように初期値が定まらないときはany型になり、型が定まらない。

この場合は明示的に`let number1: number;`と指定する。



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;14. 型の指定 & 型推論<br>
</details>

---

### Object型とArray型

| **Objectのリテラル**<br />const person: {<br />  name: 'yota',<br />  age: 30<br />} | **Objectのリテラル**<br />const person: {<br />  name: string;<br />  age: number;<br />} |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Objectのリテラルは**「  ,  」**で区切る。

Objectの方は**「  ;  」**で区切る





<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;15. Object 型<br>
  &emsp;&emsp;17. Array 型<br>
</details>

---

### Tuple型

**TypeScript独自の型： 長さ固定の配列**

長さと要素の順番を固定した配列の型をTuple型と呼ぶ。

Tuple型は型を推論できないので明示的に型を指定する。（指定しない場合はUnion型に推論される。）



```typescript
role: [number, string] = [2, 'author'];

role[1] = 10; // エラー： indexが1の要素はstring型
role = [0, 'admin', 'user']; // エラー： 長さ2の配列
role.push('admin'); // TypeScriptはpush() の要素追加を検知できない
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;18. Tuple 型<br>
</details>

---

### Enum型（列挙型）

**TypeScript独自の型： 定数の集合に対して名前をつけて管理できる。**

要素は自動的に0から始まりインクリメントされる。また独自に文字列や数値を代入できる。



```typescript
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  ...
  role: Role.ADMIN,
}
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;19. Enum 型<br>
</details>

---

### Any型

**TypeScript独自の型：どんな値でも良く型を指定しない。**

**TypeScriptはAny型に対して何も実行しない。Any型は本当にわからない場合のみに利用し、できる限り避けるべき。**



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;20. any 型<br>
</details>

---

### Union型

**TypeScript独自の型：複数の型をとる型**

ロジックによってはランタイム上で型チェックを必要とする。



```typescript
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;21. Union 型<br>
</details>

---

### Literal型

**固定された文字列や数値の型**

値を指定する場合などに利用できる。



```typescript
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  ...
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;22. Literal 型<br>
</details>

---

### Type型（型エイリアス）

**TypeScript独自の型：独自の型を定義できる型**

**型を定義することで再利用できる。**



```typescript
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
   ...
```



```typescript
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;23. 型エイリアス / カスタム型<br>
  &emsp;&emsp;24. 型エイリアス と Object 型<br>
</details>

---

### Function型

**関数を表す型**



```typescript
function add(n1: number, n2: number): void {
  ...
}
```



**void型**

関数が何も返さないことを示す型



**undifined型**

関数がundifinedを返す型（return undifined が必ず必要なので利用を避けるべき）





**Function型**

関数の型。ただし関数は引数と返り値を明示的に示したほうがよい。

引数は実際の関数の引数名と一致させる必要はない。



```typescript
let combineValues: (a: number, b: number) => number;
let combineFunc: Function;
```





**Function型とコールバック関数**

コールバック関数はFunction型と同様に型を指定できる。

コールバック関数の返り値がvoid型の場合でも実際のコールバック関数にreturn文を含めることができる。



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;25. function 型 と void 型<br>
  &emsp;&emsp;26. function 型<br>
  &emsp;&emsp;27. function 型とコールバック<br>
</details>

---

### unkown型

**どの型になるかわからない型**

型チェックを必要とするため、型が不明な場合はany型よりもunkown型を使用するとよい。



```typescript
let userInput: unknown;
let userName: string;

userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}
```





<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;28. unknown 型<br>
</details>

---

### never型

**絶対に値を返さない型**

void型、undifined型に並び関数の返り値で利用される型

エラーを発生させるなどで、返り値が絶対にない場合に利用される。



```typescript
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}
```



<details><summary>Understanding TypeScript</summary>
  ・セクション2: TypeScriptの基本と型<br>
  &emsp;&emsp;29. never 型<br>
</details>

---

## TypeScriptの基本型 まとめ



### 基本の型

| number型  <br/>string型  <br/>boolean型 | val : number                                                 |
| --------------------------------------- | ------------------------------------------------------------ |
| Object型                                | const person: {  <br />    name: string;  <br />    age: number;  <br />} |
| Array型                                 | [ "Max", "Anna", "Tommy" ]: string[]                         |
| Tuple型                                 | : [ string, number ]                                         |
| Union型                                 | : number \| boolean                                          |
| Literal型                               | resultType: 'do-something' \| 'done'                         |



### 型を定義する型

| Enum型 | enum Condition {  <br />    Ready,  <br />    OnReady = 100,  <br />    Done = 200<br />} |
| ------ | ------------------------------------------------------------ |
| Type型 | type User = { name: string; age: number };                   |

### 関数を表す型

| Function型  | (a: number, b: number) => void<br />: Function<br /><br />function add(n1: number, n2: number): void {...} |
| ----------- | ------------------------------------------------------------ |
| Void型      | (a: number, b: number) => void                               |
| Undifined型 | (a: number, b: number) => undifined                          |
| Never型     | (a: number, b: number) => never                              |

### 不明な型を表す型

| any型     | : any     |
| --------- | --------- |
| Unknown型 | : unknown |

