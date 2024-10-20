## Next.jsレンダリング比較プログラム
CSR/SSR/SSG/ISRのレンダリングの違いを体験することができるプログラムです。

記事はこちら↓↓↓

https://qiita.com/vivy/items/bfa689d5b137360db2ff


### 実行方法

#### 1. json-serverの立ち上げ
バックエンドの代わりとして、モックAPIを作成できるツールであるjson-serverを使用します。データはdb.jsonに格納されています。
```
npm install
```
```
npx json-server --watch db.json -p 3001
```

#### 2. Next.jsの立ち上げ
以下のコマンドを新たなターミナルで実行します。
```
npm run build
```
```
npm start
```
これらのコマンドを実行してローカルホスト3000番にアクセスすると以下のような画面が出力されます。

<img width="187" alt="スクリーンショット 2024-10-20 21 29 04" src="https://github.com/user-attachments/assets/c0500207-5dbe-4e75-b7a7-ee36280f8b6f">

各ボタンを押すと表示されているレンダリング方法でレンダリングしたページが表示されます。

#### 3. データの追加
データの追加を行うことでより違いを実感することができます。
以下のコマンドを新たなターミナルで実行することでデータを追加することができます。
```
curl -X POST http://localhost:3001/products \
-H "Content-Type: application/json" \
-d '{"title": "New Product"}'
```
CSR, SSRはすぐに変更が反映されます。SSGは変更が反映されません。ISRは30秒ごとにビルドされるため、即座に変更が反映がされません。
反映したい場合はビルドによって生成された`.next`ファイルを削除し、もう一度`npm run build`してみてください。
