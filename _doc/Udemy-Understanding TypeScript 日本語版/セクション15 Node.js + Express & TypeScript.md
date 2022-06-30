Understanding TypeScript 日本語版

# Node.js + Express & TypeScript

---

### Node.js＋Expressの設定

tsconfig.json

```json
...
  "target": "es2018",
  "module": "commonjs",
  "moduleResolution": "Node",
  "rootDir": "./src",
  "outDir": "./dist",
  "strict": true   
```



<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save express body-parser</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save nodemon</p>
</div>

nodemon： ソースの監視とnode.jsの更新



**型定義**

<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save-dev @types/node</p>
  <p><span style="color: green;  font-weight: bold;">> </span>npm install --save-dev @types/express</p>
</div>





**import構文**

Commonjsのrequireではappの型が認識されない。

requireのかわりにimport文を使う。



<details><summary>Understanding TypeScript</summary>
  ・セクション15: Node.js + Express & TypeScript<br>
  &emsp;&emsp;194. プロジェクトの設定<br>
  &emsp;&emsp;195. 設定の完了 & 型の利用（Node.js + Express）<br>
</details>

---

### ミドルウェア関数の追加と型

```typescript
import express, { Request, Response, NextFunction } from 'express';

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

```



<details><summary>Understanding TypeScript</summary>
  ・セクション15: Node.js + Express & TypeScript<br>
  &emsp;&emsp;196. ミドルウェアの追加 & 型<br>
</details>

---

