# 合併症アンケートシステム JOED version.5

日本産科婦人科内視鏡学会の合併症アンケートシステムの最新版開発環境です。

## 構成

- vue (cli 3) + vuex + router
- electron

追加パッケージ

- nedb
- Element
- Vue.Draggable
- Vuejs Datepicker
- Vue infinite loading
- cross-plathome-YuGothic
- js-xxhash
- Difflib.js
- encoding.js
- electron store

### 試験環境

マイルストーンごとに公開予定：

https://p4testsuite.hostingerapp.com/JOEDv5/Latest/

- 2020-04-20 とりあえず,症例リストを作れるようになりましたので公開.
- 2020-05-07 保存データベースの構造を変更したため後方互換が無くなりました,基本的な登録機能は実装できました.(Database-Managerを用意しましたのでデータベースのリセットにご利用ください)
- 2020-05-13 AE入力のチェックに問題があったので修正,各セクション毎に入力時のエラーチェック実装を開始しました.
- 2020-05-14 項目の重複入力チェックを円滑にするためデータベース構成を変更.エラーチェックとして重複チェックを実装.
- 2020-05-18 合併症入力の項目を修正(術中操作による合併症が表示されるように、子宮腟部吻合部漏出→腟断端離開).
- 2020-05-19 【仕様修正】提出データの構成を修正.
- 2020-05-21 データチェックのバグ修正,パスワード認証を実装（でも、パスワード設定できないのでまだ動かない）.
- 2020-05-24 編集からの移動を実装
- 2020-06-10 編集での移動ボタンを移動,連続新規登録可能,リストのソート・フィルタの設定（一部）,elementのUIを一部に適応,環境依存だったDatePickerをVue Datepickerに変更.
- 2020-06-16 SPA版のRCに向けて大幅にUI適応を拡大, コンポーネントのメインテナンス.ハードコードのモジュール化.診断・術式検索機能の強化と手入力抑制のための警告.
- 2020-06-18 機能未実装部分も含めてフロントエンドのパーツを実装.AEのセクション表示の問題を修正(Titleがないケースに対応,重複チェックのやりかたを変更).
- 2020-06-21 パスワードが機能するようになりました. 裏でいろいろ最終的な各種機能実装が進んでいます.
- 2020-06-23 編集画面での前後が、登録と一緒にもできるようになりました. 施設名・ID入力(検索付き)が機能します. エクスポートが作りかけです（エラーチェックがまだ動作しません）.
- 2020-06-26 エクスポートがまだエラーチェックが不完全ですができるようになりました.
- 2020-07-05 暫定的ですが, 2020年版マスタを実装.それに伴い後方互換である2019年版マスタとのフィルタリング切り替えを実装.(手術実施日を2019年にすると選択の内容が変わります.)
- 2020-07-15 検証モジュールを稼働.それにより登録時に詳細なエラーメッセージを表示,それにあわせて多数の修正.
- 2020-07-19 検索を実装あわせてstoreのクエリ管理を変更.
- 2020-07-30 検索が可能, まだ検索の終了は表示設定. システム共通のデータチェックを実装, データベースへの書き戻しが未実装なのでエラーの内容はコンソールのメッセージを参照. 症例の編集にこれを書き戻すか検討.
- 2020-08-02 検証でドキュメント数が増えると不都合が生じるのでPromise.allを10件ずつ実施するように変更. エラーの書き戻し, 表示設定でエラーありドキュメントを表示, 症例編集でエラーの表示を可能に.
- 2020-08-15 mergeファイルのインポートを実装. 文字コードはshift-jis, utf8いずれも受け入れ可能. Editの3ペイン表示をモジュール化.
- 2020-10-13 データベース様式, マスタなどを最終版へ. 以降はelectronでの動作となるためwebでの利用は不可能となります.
- 2020-10-15 electronとwebを--modeで切り替え, 環境依存の機能モジュールをフォルダ毎に切り替えて対応. web利用も継続可能.
- 2020-10-22 electronとwebでUIが変更に.
- 2020-10-23 UniqueIDをデータ出力時の連番を振るように設計変更. 個人情報保護の仕様変更のため年齢のエクスポートを廃止. そのほかインポートを中心に安定性向上のため沢山の修正.
- 2020-10-27 検索をelectronでの動作が可能なように正規表現での検索に全て変更. 表示状態の保存など実装. それにあわせて, vuexのミューテーションを全てリライト.
- 2020-10-28 全機能を実装終了. マスタの最終チェック待ち. electronもインストーラー以外は完成.
- 2020-10-29 設定保存まわりのバグを修正. 要望の強かった手術時間の直接入力としてブラインドタイプから選択されるように拡張.
- 2020-10-30 手術時間でのソートが正しく動作するように. 合併症入力画面の動作不具合があるためリアクティブ周りを修正. 命名規則に則りコンポーネントの名称・ファイル名の変更多数.

現時点で作成中のweb版ではデータはブラウザのストレージに保存されます.データベースの削除・修正などは https://p4testsuite.hostingerapp.com/JOEDv5/Database_Manager/ のユーティリティを使用してください.

# 仕様

### 提出データ
JSONでエクスポートされる.

```
[
    { 提出データヘッダ },
    { 症例データ1 },
    { 症例データ2 },
    ...
    { 症例データn }
]
```
Validationは診断・実施術式・合併症のマスタを参照するので結構コストが掛かるため、そこは提出を受け付けてから行う.大まかな整合性チェックはすべて症例入力の際に行われている.
(データインポートのため整合性チェックのルーチンは必要だが、それは別アプリケーションでもよいかもしれない)

### オブジェクト:提出データヘッダ
|名称                        |タイプ  |フォーマット規則|必須項目|エクスポート対象|解説|
|:--------------------------|:-----:|:------------:|:----:|:------------:|:--|
|InstitutionName            |string | |X|X|施設名テーブルから引用される|
|InstitutionID              |string |\d{5}|X|X|施設名テーブルから引用される、未登録施設は学会に申請して番号交付を受ける|
|JSOGoncologyboardID        |string | | |X|日産婦の腫瘍登録施設番号
|ApplicationVersion         |string | |X|X|提出データ作成時のソフトウエアのバージョン|
|Timestump                  |integer | |X|X|提出データ作成日時のUNIX timestump|
|Year                       |string |(20(19\|[23][0-9])|ALL) |X|X|提出データの年次|
|NumberOfCases              |integer| |X|X|Casesの数（サードパーティーからの書き出しに対するエラーチェック用）|
|MD5                        |string | |X|X|症例データ部分だけのMD5チェックサム|

### 症例データベースオブジェクト:Case
|名称                        | タイプ |フォーマット規則|必須項目|エクスポート対象|解説|
|:--------------------------|:-----:|:--:|:--:|:--:|:--|
|_id                        |integer| | | |データベースエンジンが付与する内部管理id|
|DocumentId                 |integer| |X| |連続番号|
|UniqueId                   |string |{InstitutionID}-{ExportYear}(20(19\|[23][0-9]))-連続番号|X|データ書き出しの際に付与される連番, 問い合わせに利用される.|
|Name                       |string | | | |患者名|
|Age                        |integer| |X| |年齢|
|PatientId                  |string | |X| |施設での患者ID|
|JSOGId                     |string | | |X|日産婦腫瘍登録番号|
|NCDId                      |string |\d{18}-\d{2}-\d{2}-\d{2}| |X|NCD症例識別コード～ロボット登録にけるNCD側の患者番号（将来的にこちらからのデータ流し込みにNCDが対応したときに備える）|
|DateOfProcedure            |string |20(19\|[23][0-9])-(0[1-9]\|1[012])-([0-2][0-9]\|3[01])|X|x|手術日<br/>InstitutionalPatientIDとDateOfProcedureでユニークが望ましいが確認のみとする|
|ProcedureTime              |string | |X|X|手術時間表記テーブルから引用される|
|TypeOfProcedure            |string |(腹腔鏡\|腹腔鏡悪性\|ロボット支援下\|ロボット支援下悪性\|子宮鏡\|卵管鏡)|X|X|主たる術式の種別、Procedures配列の最上位の順位のものが採用される|
|PresentAE                  |boolean| |X|X|合併症の登録があればtrue =(AE.length>0)|
|Diagnoses                  |array  | |X|X|診断オブジェクト - Diagnosis|
|Procedures                 |array  | |X|X|術式オブジェクト - Procedure|
|AEs                        |array  | | |X|合併症オブジェクト - AE|
|Imported                   |boolean| | | |読み込まれたデータ
|Notification               |string | | | |データチェックによる確認内容（エラーを含む）の内容(主にインポートされたデータ用)|

### オブジェクト:Diagnosis
提出データでは、Textにflattenされる.
インポートの際にはDiagnosisItemsから検索して適当なChainを割り付ける.
|名称                        |タイプ  |フォーマット規則|必須項目|エクスポート対象|解説|
|:--------------------------|:-----:|:--:|:--:|:--:|:--|
|Text                       |string | |X|X|診断名マスタから引用|
|Chain                      |array  | | | |選択ツリー[Category, Target]|
|Description                |string | | |X|補足情報(将来の拡張用)|
|UserTyped                  |boolean| | |X|手入力情報|

### オブジェクト:Procedure
提出データでは、TextとDescriptionだけのhashにflattenされる.
インポートの際にDiagnosisItemsから検索して適当なChainを割り付ける.
|名称                        |タイプ  |フォーマット規則|必須項目|エクスポート対象|解説|
|:--------------------------|:-----:|:--:|:--:|:--:|:--|
|Text                       |string | |X|X|術式名、術式マスタから引用
|Chain                      |array  | | | |選択ツリー[Category, Target]
|Description                |array  | | |x|付随情報
|AdditionalProcedure        |object | | |x|併施術式 - これも同じ構造を取る
|Ditto                      |array  | | | |重複確認の対象となる術式名
|UserTyped                  |boolean| | |X|手入力情報|

### オブジェクト:AE
|名称                        |タイプ  |フォーマット規則|必須項目|エクスポート対象|解説|
|:--------------------------|:-----:|:--:|:--:|:--:|:--|
|Category                   |string | |X|X|合併症の発生カテゴリ
|Title                      |string | |X|X|合併症の名称
|Cause                      |string | | |X|合併症の原因
|Location                   |string | | |X|合併症の発生部位
|BloodCount                 |integer| | |X|出血の場合の出血量
|Grade                      |string |([1245]\|3[ab])|X|X|合併症のグレード
|Course                     |array  | |X|X|合併症の転帰

### マスタオブジェクト:InstituteList
|名称                        |タイプ  |解説
|:--------------------------|:-----:|:--|
|Name                       |string |施設名
|Id                         |string |施設の登録番号<br/>数字５桁、未登録施設は99999？
|Prefecture                 |string |県名

### マスタ:DiagnosisMaster
|名称                        |タイプ  |解説
|:--------------------------|:-----:|:--|
|Diagnosis                  |string |診断名|
|ICD10                      |string |ICD-10コード(未実装)
|Category                   |array  |関連手技 ["腹腔鏡","ロボット支援下","子宮鏡","卵管鏡"]|
|Target                     |array  |部位 ["子宮","付属器","その他"]|
|Notification               |string |入力時に表示されるおしらせ(未実装)|
|Procedure                  |string |1:1で紐付けられた術式|
|VaildFrom                  |integer|適用可能年開始|
|VaildTo                    |integer|適用可能年終了<br/>これより後の年次ではこの病名は無効かつ登録出来ない|

### オブジェクト:DiagnosisItems
DiagnosisMasterから作成される
```javascript
{
    'Category': {
        'Target': {
            'Diagnosis'
        }
    }
}
```

### マスタ:ProcedureMaster
|名称                        |タイプ  |解説
|:--------------------------|:-----:|:--|
|Procedure                  |string |手技名|
|STEM7                      |string |STEM7コード(未実装)|
|Category                   |array  |良悪性分類 ["腹腔鏡","腹腔鏡悪性","ロボット","ロボット悪性","子宮鏡","卵管鏡"]|
|Target                     |array  |部位 ["子宮","付属器","その他"]|
|VaildFrom                  |string |適用可能年開始|
|VaildTo                    |string |適用可能年終了<br/>これより後の年次ではこの術式はこの区分は無効かつ登録出来ない|
|Ditto                      |array  |同時に入力できない同一手技に相当する手技名|
|AdditionalProcedure        |string |同時に展開を行う関連術式<br/>基本的には同一の選択チェーン内にある|
|DescriptionTitle           |string |補助情報の見出し|
|Descriptions               |array  |補助情報の候補<br/>$MULTI$をメンバにもつ場合複数の内容を保持できる|

### オブジェクト:DiagnosisItems
ProcedureMasterから作成される
```javascript
{
    'Category': {
        'Target': {
            'Procedure', // なにも付随情報が無い場合
            {
                Text: 'Procedure',
                Ditto: [...],
                AdditionalProcedure: 'AdditionalProcedure',
                Description: {
                    Text: 'Titie',
                    Values: [...selections]
                    // selectionsに$MULTI$を含む場合は複数選択可能
                    // $で終了する項目を選択した場合はこのエントリ自体が生成されない(=単独作成不可)
                }
            }
        }
    }
}
```
