import Master from '@/modules/Master'

export const LastUpdate = '2020-10-23'
const defaultReference = '2020'

export default class DiagnosisMaster extends Master {
  constructor () {
    super({
      腹腔鏡: {
        子宮: [
          '子宮筋腫',
          '子宮腺筋症',
          '骨盤臓器脱',
          // 2020 表記変更 子宮内膜症(チョコレート嚢胞含む) -> 子宮内膜症(子宮内膜症性嚢胞含む)
          {
            Text: '子宮内膜症(チョコレート嚢胞含む)',
            VaildTo: '2019'
          },
          {
            Text: '子宮内膜症(子宮内膜症性嚢胞含む)',
            VaildFrom: '2020'
          },
          // 2020 表記変更 付属器癒着 -> 子宮付属器癒着
          {
            Text: '付属器癒着',
            VaildTo: '2019'
          },
          {
            Text: '子宮付属器癒着',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '子宮頸部上皮内腫瘍(CIN1-3,CIS,AIS含む)',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '子宮頸部嚢胞性腫瘍(LEGH等)',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '子宮内膜増殖症・異型増殖症',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '子宮体部腫瘍(APAM,STUMP等)',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '絨毛性疾患',
            VaildFrom: '2020'
          },
          // 2020 表記変更 異所性妊娠(子宮外妊娠) -> 異所性妊娠
          {
            Text: '異所性妊娠(子宮外妊娠)',
            VaildTo: '2019'
          },
          {
            Text: '異所性妊娠',
            VaildFrom: '2020'
          },
          '機能性不妊症(腹腔内検査)',
          '子宮奇形',
          '骨盤腹膜炎',
          // 2020 新規
          {
            Text: '性同一性障害',
            ValidFrom: '2020'
          },
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '予防的内性器摘出術の適応',
            VaildFrom: '2020'
          }
        ],
        付属器: [
          '良性卵巣腫瘍',
          // 2020 表記変更 子宮内膜症(チョコレート嚢胞含む) -> 子宮内膜症(子宮内膜症性嚢胞含む)
          {
            Text: '子宮内膜症(チョコレート嚢胞含む)',
            VaildTo: '2019'
          },
          {
            Text: '子宮内膜症(子宮内膜症性嚢胞含む)',
            VaildFrom: '2020'
          },
          // 2020 表記変更 異所性妊娠(子宮外妊娠) -> 異所性妊娠
          {
            Text: '異所性妊娠(子宮外妊娠)',
            VaildTo: '2019'
          },
          {
            Text: '異所性妊娠',
            VaildFrom: '2020'
          },
          '機能性不妊症(腹腔内検査)',
          '多嚢胞性卵巣症候群',
          // 2020 表記変更 付属器癒着 -> 子宮付属器癒着
          {
            Text: '付属器癒着',
            VaildTo: '2019'
          },
          {
            Text: '子宮付属器癒着',
            VaildFrom: '2020'
          },
          // 2020 表記変更 卵管閉塞,卵管留水(血)症 -> 卵管閉塞・卵管留水(血)症
          {
            Text: '卵管閉塞,卵管留水(血)症',
            VaildTo: '2019'
          },
          {
            Text: '卵管閉塞・卵管留水(血)症',
            VaildFrom: '2020'
          },
          '卵巣出血',
          '上記以外の付属器良性疾患',
          // 2020 新規
          {
            Text: '性同一性障害',
            ValidFrom: '2020'
          },
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '予防的内性器摘出術の適応',
            VaildFrom: '2020'
          }
        ],
        その他: [
          // 2020 表記変更 子宮内膜症(チョコレート嚢胞含む) -> 子宮内膜症(子宮内膜症性嚢胞含む)
          {
            Text: '子宮内膜症(チョコレート嚢胞含む)',
            VaildTo: '2019'
          },
          {
            Text: '子宮内膜症(子宮内膜症性嚢胞含む)',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '絨毛性疾患',
            VaildFrom: '2020'
          },
          // 2020 表記変更 異所性妊娠(子宮外妊娠) -> 異所性妊娠
          {
            Text: '異所性妊娠(子宮外妊娠)',
            VaildTo: '2019'
          },
          {
            Text: '異所性妊娠',
            VaildFrom: '2020'
          },
          // 2020 表記変更 付属器癒着 -> 子宮付属器癒着
          {
            Text: '付属器癒着',
            VaildTo: '2019'
          },
          {
            Text: '子宮付属器癒着',
            VaildFrom: '2020'
          },
          '機能性不妊症(腹腔内検査)',
          // 2020 削除
          {
            Text: '子宮筋腫',
            VaildTo: '2019'
          },
          '先天性腟欠損症',
          '骨盤臓器脱',
          '骨盤腹膜炎',
          // 2020 新規
          {
            Text: '性同一性障害',
            ValidFrom: '2020'
          },
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          }
        ]
      },
      腹腔鏡悪性: {
        子宮: [
          '子宮体癌',
          '子宮頸癌',
          // 2020 削除
          {
            Text: '子宮頸部前癌病変(CIN,CIS,AIS)',
            VaildTo: '2019'
          },
          // 2020 削除
          {
            Text: '子宮体部前癌病変(子宮内膜異型増殖症)',
            VaildTo: '2019'
          },
          // 2020 削除
          {
            Text: '上記以外の子宮頸部腫瘍(子宮頸部嚢胞性病変,LEGH等)',
            VaildTo: '2019'
          },
          // 2020 削除
          {
            Text: '上記以外の子宮体部腫瘍(APAM,STUMP等)',
            VaildTo: '2019'
          },
          // 2020 新規
          {
            Text: '絨毛性疾患',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          },
          // 2020 表記変更 予防的内性器摘出術適応 -> 予防的内性器摘出術の適応
          {
            Text: '予防的内性器摘出術適応',
            VaildTo: '2019'
          },
          {
            Text: '予防的内性器摘出術の適応',
            VaildFrom: '2020'
          },
          '術後合併症の修復'
        ],
        付属器: [
          // 2020 表記変更 卵巣癌(卵管癌・腹膜癌含む) -> 卵巣癌(卵管癌,腹膜癌含む)
          {
            Text: '卵巣癌(卵管癌・腹膜癌含む)',
            VaildTo: '2019'
          },
          {
            Text: '卵巣癌(卵管癌,腹膜癌含む)',
            VaildFrom: '2020'
          },
          '境界悪性卵巣腫瘍',
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          },
          // 2020 表記変更 予防的内性器摘出術適応 -> 予防的内性器摘出術の適応
          {
            Text: '予防的内性器摘出術適応',
            VaildTo: '2019'
          },
          {
            Text: '予防的内性器摘出術の適応',
            VaildFrom: '2020'
          },
          // 2020 削除
          {
            Text: '妊孕性温存のための卵巣摘出',
            VaildTo: '2019'
          },
          // 2020 削除
          {
            Text: '転移性卵巣癌',
            VaildTo: '2019'
          },
          '術後合併症の修復'
        ],
        その他: [
          // 2020 削除
          {
            Text: '上記以外の悪性疾患',
            VaildTo: '2019'
          },
          // 2020 新規
          {
            Text: '腟癌',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '外陰癌',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '絨毛性疾患',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '婦人科以外の悪性腫瘍',
            VaildFrom: '2020'
          },
          '術後合併症の修復'
        ]
      },
      子宮鏡: {
        子宮: [
          '子宮内膜ポリープ',
          '粘膜下子宮筋腫',
          // 2020 表記変更 子宮体部前癌病変 -> 子宮内膜増殖症・異型増殖症
          {
            Text: '子宮体部前癌病変',
            VaildTo: '2019'
          },
          {
            Text: '子宮内膜増殖症・異型増殖症',
            VaildFrom: '2020'
          },
          // 2020 新規
          {
            Text: '子宮体癌',
            VaildFrom: '2020'
          },
          '上記以外の子宮体部腫瘍',
          '子宮頸管ポリープ',
          '上記以外の子宮頸部腫瘍',
          '過多月経',
          '子宮奇形',
          'アッシャーマン症候群',
          '異所性妊娠',
          '胎盤ポリープ・胎盤遺残',
          // 2020 表記変更 帝王切開瘢痕部症候群 -> 帝王切開瘢痕症候群
          {
            Text: '帝王切開瘢痕部症候群',
            VaildTo: '2019'
          },
          {
            Text: '帝王切開瘢痕症候群',
            VaildFrom: '2020'
          },
          '子宮腟異物'
        ]
      },
      卵管鏡: {
        卵管: [
          '卵管閉塞',
          '卵管狭窄',
          '機能性不妊',
          '卵管留水(血)症'
        ]
      }
    },
    // マスターのシリアル
    defaultReference)
  }
}
