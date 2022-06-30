Understanding TypeScript 日本語版

## TypeScriptの設定とコンパイラ

---

### tsc ウォッチモード

**tsc --watch | -w app.ts**

１つのファイルしか監視できない。







<details><summary>Understanding TypeScript</summary>
  ・セクション3: TypeScriptの設定とコンパイラ<br>
  &emsp;&emsp;33. Watch モードの使い方<br>
</details>


---

### プロジェクト全体のコンパイル

**プロジェクト全体でTypeScriptをコンパイルするにはtscコマンドでプロジェクトがTypeScriptのプロジェクトと伝える必要がある。**

` tsc --init ` を実行すると `tsconfig.json `が作成される。



<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>tsc --init</p>
</div>



**コンパイルの実行**

<div style="height: auto; padding: 6px; color: white; background-color: black; box-sizing: border-box; border: solid 3px gray; border-radius: 8px">
  <p><span style="color: green;  font-weight: bold;">> </span>tsc</p>
</div>



<details><summary>Understanding TypeScript</summary>
  ・セクション3: TypeScriptの設定とコンパイラ<br>
  &emsp;&emsp;34. プロジェクト全体のコンパイル方法<br>
</details>

---

### tsconfigの設定

**Include＆Exclude**



**exclude**

`exclude`を設定するとそのファイル/ディレクトリはコンパイルから除外される。

ただし、node_modulesディレクトリはデフォルトで除外対象になっているので設定する必要はない。



**include**

コンパイルに含めたいファイル/ディレクトリを指定する。

includeを設定すると指定したもののみコンパイルされ、プロジェクト全体ではコンパイルされなくなる。



**files**

コンパイルしたいファイルを指定する。

includeで代用可能であまり利用されない。





**重要なコンパイルオプション**



**target**

JavaScriptのバージョンを指定する。

古いバージョンなら古いブラウザでも動作できるし、ブラウザのバージョンが限られているのであればよりモダンなブラウザが選択できる。



**module**

複数のTypeScriptをつなぎ合わせる設定 （後述）



**lib**

TypeScriptに含める型定義の設定



デフォルト未設定の場合はtargetのバージョンで使用される型定義が設定される。



**allowJs**

JavaScriptファイルもTypeScriptによってコンパイルする。

`true`に設定した場合はTypeScriptによってコンパイルされたjsファイルが二重にコンパイルしないように、include, excludeを設定する必要がある。



**checkJs**

JavaScriptファイルもエラーチェックをする。ただしコンパイルはしない。



**sourceMap**

ソースマップの設定

`true`に設定するとコンパイルするときに `ファイル名.js.map`ファイルが作成される。

ソースマップを利用すると、ブラウザ上でTypeScriptでデバッグできる。



**outFile**

JavaScriptを1つにまとめて出力する設定



**outDir**

コンパイル後のJavaScriptの保存場所

dist ディレクトリはdisributableの略



**rootDir**

ソースファイルが配置されるルートディレクトリの設定

通常は`./src`

出力されるJavaScriptはrootDirと同じディレクトリ構造で出力される。



**removeComments**

コメントを削除する設定



**noEmit**

エラーチェックのみ実行しコンパイルしない設定

他のビルドツールを使う場合などに有効にする。



**downlevelIteration**

古いバージョンでforループが動作しないときに有効にする設定

必要な場合のみtrueに設定する。



**noEmitOnError**

エラーがある場合にはコンパイルを実行しない設定

1つでもえらーがある場合は正常なファイルも含めてコンパイルを実行しない。



**strict**

strictモードの設定

型チェックを厳格にする。strictのオプションは７つに細分化されているがそのすべてを有効化する。

strictを無効化し7つのオプションで有効化、またその逆も設定ができる。



**noImplicitAny （strictのオプション）**

any型が推論されたときにエラー



**strictNullChecks （strictのオプション）**

nullかもしれないObjectにアクセスするときにエラー

エラーを回避する方法

  確実にObjectが存在する場合はObjectの末尾に「!」をつけて存在することをコンパイラに伝える。



  if文などでObjectがnullではないことをランタイム上で確認した上でアクセスする。



**strictFunctionTypes （strictのオプション）**

関数の方に関するオプション



**strictBindCallApply （strictのオプション）**

Bind, call, Applyで誤った型を指定したときにエラー



**strictPropertyInitialization （strictのオプション）**

クラスの初期化に関するオプション



**noImplicitThis （strictのオプション）**

thisがany型に推論された場合にエラー



**alwaysStrict （strictのオプション）**

出力するファイルに use `strict` を設定する



**コード品質を向上させるオプション**



**noUnusedLocals （コード品質のオプション）**

不要なローカル変数があるときにエラー



**noUnusedParameters （コード品質のオプション）**

不要な引数があるときにエラー





**noImplicitReturns （コード品質のオプション）**

return に分岐がある場合にエラー

returnがない場合は明示的にreturnを記述する。



**noFallthroughCasesInSwitch （コード品質のオプション）**

switch文にbreakがない場合にエラー





**モジュールのオプション**

高度な設定なためスキップ



**ソースマップのオプション**

ソースマップのオプションでほとんどが不要



**細かな設定**

**forceConsistentCasingInFileNames**

ファイル名の大文字小文字を矯正するオプション







<details><summary>Understanding TypeScript</summary>
  ・セクション3: TypeScriptの設定とコンパイラ<br>
  &emsp;&emsp;35. ファイルの Include & Exclude の設定<br>
  &emsp;&emsp;36. コンパイルターゲットの設定<br>
  &emsp;&emsp;37. Lib 設定の理解（ビルトイン API の設定）<br>
  &emsp;&emsp;38. その他の設定、コンパイラオプション<br>
  &emsp;&emsp;39. Source Map の利用<br>
  &emsp;&emsp;40. rootDir と outDir の設定（ソースフォルダと出力先フォルダの設定）<br>
  &emsp;&emsp;41. コンパイルエラー時にJavaScriptの出力をしない設定<br>
  &emsp;&emsp;42. 厳格な型チェックのオプション（Strict Type-Checking Options）<br>
  &emsp;&emsp;43. コード品質に寄与するオプション<br>
</details>

---

## VS Code上のデバッグ



VS Code の資料を読む

[Visual Studio Code: Debugging TypeScript](https://code.visualstudio.com/docs/typescript/typescript-debugging)
