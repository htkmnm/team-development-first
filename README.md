# チーム開発

## News

- code review 実施しました(｀・ω・´)
  ご確認よろしくお願いいたします！

# yo-yan

## Git push までの手順

### 以下の手順で push してください！

1. git branch -a
   > 作業ブランチの確認(緑がローカルブランチ、赤がリモートブランチ)
2. git checkout -b topic-00xx
   > 作業ブランチの作成
3. git status
   > 編集状況の確認
4. git add [編集したファイル]
   > 編集したファイルをステージング環境へアップ
5. git commit -m '[コメント]'
   > コミット時のコメントを記載
6. git push origin topic-00xx
   > リモートリポジトリへ push
7. github 上でプルリクエスト
   > 開発リーダーがどこが編集したのかわかるようにコメントを書きましょう！
8. チームメンバーへ通知
   > チームメンバーにもわかりやすく追加点を通知しましょう！

以上です。お疲れ様でした。
