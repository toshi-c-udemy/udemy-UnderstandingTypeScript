Understanding TypeScript 日本語版

# Generics（ジェネリクス）

---

### Generics とは

追加の方情報を提供できる型



**組み込みのジェネリクス型**

**Array**

```typescript
const names: Array<string> = []; // string[]
```



**Promise**

```typescript
const promise: Promise<number> = new Promise((resolve, reject) => { ...
```



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;94. 組み込みの Generic 型 & Generics とは<br>
</details>

---

### Generic関数

```typescript
// function merge<T, U>(objA: T, objB: U) : T & U
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<
  {
    name: string;
    hobbies: string[];
  },
  { age: number }
>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
```



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;95. Generic 関数の作成<br>
</details>

---

### Genericsに制約を追加

**extends でジェネリクスを制限する**

```typescript
function merge<T extends object, U extends object>(objA: T, objB: U) {
```

T, Uはオブジェクト型でなければいけない。

extendsの制限はUnion型、交差型なども含めることができる。



**ゆるい制約でオブジェクトのプロパティを保証する**

満たしたいプロパティをinterfaceに記述してジェネリクスを制限する



```typescript
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません。';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sport', 'Cooking']));
```







<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;96. Generics に制約を追加する<br>
  &emsp;&emsp;97. もうひとつの Generic 関数<br>
</details>

---

### keyof演算子 の制約

**[TypeScript 公式ドキュメント: Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)**



**keyof演算子はオブジェクトのキーのUnion型を生成する**



```typescript
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');
```



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;98. "keyof" の制約<br>
</details>

---

### Generic クラス

**クラスのプロパティの型にもGenericsが適用できる。**



```typescript
// オブジェクトは独自のメソッドが必要になるので別途用意したほうが良い
// 基本型（プリミティブ型）のみ扱えるクラスを作る
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = { name: 'Max' };
// objStorage.addItem(obj);
// objStorage.addItem({ name: 'Manu' });
// // ...
// objStorage.removeItem(obj);
// console.log(objStorage.getItems());

```



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;99. Generic クラス<br>
</details>

---

### Generic型のユーティリティ

**[TypeScript 公式ドキュメント: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)**



**TypeScriptは独自の独自のユーティリティを提供している。**





**Partial<Type>**

すべてのTのプロパティをオプショナルにした型

返り値はPartial型なので元の型にキャストする必要がある。



```typescript
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
```



**Readonly<Type>**

読み取り専用の型



```typescript
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop()
```



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;101. Generic型のユーティリティ<br>
</details>

---

### Generic 型 vs Union 型

**Generic型のメリット**

クラスなど全体に型を固定したい場合に有用



**Union型のメリット**

関数などでいずれかの型を利用したい場合に有用



<details><summary>Understanding TypeScript</summary>
  ・セクション7: Generics（ジェネリクス）<br>
  &emsp;&emsp;102. Generic 型 vs Union 型<br>
</details>

---

