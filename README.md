# phpcon2017-kansai

PHPカンファレンス関西 2017 公式サイトのリポジトリです。

https://2017.kphpug.jp/


## 環境構築

開発は以下のコマンドで始めます。


nodeインストール（初回のみ）
````
$ npm i
````

pugとscssコンパイル（新規ファイル制作時など）
````
$ gulp build
````

pugとscssファイルの監視+自動コンパイル
````
$ gulp
````

確認用サーバ立ち上げ
````
$ gulp server
````

