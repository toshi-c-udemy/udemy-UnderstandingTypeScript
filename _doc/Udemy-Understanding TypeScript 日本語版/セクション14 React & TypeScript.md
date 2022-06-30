Understanding TypeScript 日本語版

# React & TypeScript

---

### React＋TypeScriptプロジェクトの作成

<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npx create-react-app . --template typescript</p>
</div>



<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;<br>
</details>

---

### React.FC`<P>`

**Reactの関数コンポーネントの型**

Pの中にPropsの型を定義する。



```tsx
interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
```



<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;180. React と TypeScript を一緒に使うには?<br>
  &emsp;&emsp;182. Props の利用 & Props の型<br>
</details>

---

### ref を使ったユーザー入力



```tsx
const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo内容</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>TODO追加</button>
    </form>
  );
};
```



<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;183. "ref" を使ったユーザ入力の取得<br>
</details>

---

### コンポーネント間の連携

**関数のprops型**

```tsx
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};
```

<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;184. コンポーネント間の連携<br>
</details>

---

### useStateの型

```tsx
const [todos, setTodos] = useState<Todo[]>([]);
```







<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;185. State の利用 & 型<br>
  &emsp;&emsp;186. State 更新処理の改善<br>
</details>

---

### 関連モジュールをTypeScriptで利用する手順

**パッケージの公式ドキュメントを確認する。**

**試しにインストールして、型定義ファイルがあるか確認する。**

**型定義ファイルがなければtypesパッケージを追加する。**



<details><summary>Understanding TypeScript</summary>
  ・セクション14: React & TypeScript<br>
  &emsp;&emsp;189. React関連モジュールの型 (例: Redux、React Router）<br>
</details>

---

