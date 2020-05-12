// eslint-disable-next-line no-unused-vars
export default class DbItems {
  /*
  データベースの項目
  Diagnoses - Array - String
  Procedures - Array - Hash
  [
    // 以下のhashがitem
    {
       Text: "登録される内容",
       Chain: [ {{カテゴリ}}, {{対象}} ]
       AdditionalProcedure: { Text: ..., Description: [] } => Chainを除くitem/出力データでは主アイテムの次に入る
       Description: []
    }
  ]
  */
  static getItemValue (hashObject = {}, $propertyName = 'Text', $depthcount = 0) {
    if (hashObject[$propertyName]) {
      return hashObject[$propertyName]
    } else {
      if (++$depthcount <= 3) {
        // eslint-disable-next-line prefer-const
        for (let key in hashObject) {
          const value = this.getItemValue(hashObject[key], $propertyName, $depthcount)
          if (value) {
            return value
          }
        }
      }
      return undefined
    }
  }

  static getItemChain (hashObject = {}, $propertyName = 'Text') {
    // 移行措置のためしばらくは旧バージョンデータを扱えるようにする
    if (hashObject.Chain && hashObject[$propertyName]) {
      return [...hashObject.Chain, this.getItemValue(hashObject, $propertyName)]
    } else {
      // 旧バージョンデータへの対応のためしばらくしたら以下は削除する
      const category = Object.keys(hashObject)[0]
      const target = Object.keys(hashObject[category])[0]
      return [category, target, this.getItemValue(hashObject)]
    }
  }

  static flattenItemList (itemList = [], FlattenToString = false) {
    const temporaryArray = []
    for (const item in itemList) {
      if (item.Description) {
        temporaryArray.push({
          Text: item.Text,
          Description: item.Desccription
        })
      } else {
        if (FlattenToString === false) {
          temporaryArray.push({
            Text: item.Text
          })
        } else {
          temporaryArray.push(item.Text)
        }
      }
    }
    return temporaryArray
  }
}