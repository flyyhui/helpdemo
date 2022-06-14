(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{697:function(t,_,v){"use strict";v.r(_);var a=v(15),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("快速查找小技巧")]),t._v(" "),v("ul",[v("li",[t._v("您可以通过顶部搜索框，搜索需要的内容，并快速定位和链接到相应的内容；")]),t._v(" "),v("li",[t._v("您可以通过顶部导航、左侧导航（如有），快速定位到需要的章节；")]),t._v(" "),v("li",[t._v("您可以通过右侧导航（如有），快速定位到本章节的小节主题；")]),t._v(" "),v("li",[t._v("您可以通过 CTRL + F 搜索关键词，快速定位到本章节的具体内容处；")]),t._v(" "),v("li",[t._v("您如果发现本章节的错误、或有不明白的地方，可以通过"),v("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=Y6HPvi87",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQ群"),v("OutboundLink")],1),t._v("进行反馈。")])])]),t._v(" "),v("h2",{attrs:{id:"_1-账务处理的范围"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-账务处理的范围"}},[t._v("#")]),t._v(" 1. 账务处理的范围")]),t._v(" "),v("p",[t._v("财务处理，主要指的是对流程中涉及财务处理的部分单据，执行生成凭证、核销、结算操作。对于由财务人员参与的审核等流程性功能操作，不属于财务处理范畴，本章节不予描述。\n本章节各小节内容，在涉及的业务流程中已经进行描述。本章节进行汇总，便于查阅学习。")]),t._v(" "),v("h2",{attrs:{id:"_2-核销处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-核销处理"}},[t._v("#")]),t._v(" 2.核销处理")]),t._v(" "),v("p",[t._v("指的是库存单据与往来单据的勾稽处理。"),v("br"),t._v("\n二手车业务领域不涉及。")]),t._v(" "),v("h2",{attrs:{id:"_3-结算处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-结算处理"}},[t._v("#")]),t._v(" 3.结算处理")]),t._v(" "),v("p",[t._v("指的是往来单据之间的勾稽处理。二手车业务领域，主要涉及如下的结算处理：")]),t._v(" "),v("ul",[v("li",[t._v("如二手车销售有利润，不管正负利润，二手车销售的收款与二手车销售的应收，需要进行销售回款结算，结算类型为销售回款结算，且不需要生成凭证。")]),t._v(" "),v("li",[t._v("如二手车收购单上有置换金额，二手车销售的收款与整车销售订单的应收，需要进行销售回款结算，结算类型为销售回款转销，且需要生成凭证。")]),t._v(" "),v("li",[t._v("如二手车收购单上有应付客户金额，二手车销售的收款与二手车收购的付款，需要进行预收冲预付结算，结算类型为预收冲预付转销，且需要生成凭证。")])]),t._v(" "),v("h2",{attrs:{id:"_4-财务记账"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-财务记账"}},[t._v("#")]),t._v(" 4.财务记账")]),t._v(" "),v("h3",{attrs:{id:"_4-1-凭证取值说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-凭证取值说明"}},[t._v("#")]),t._v(" 4.1 凭证取值说明")]),t._v(" "),v("p",[t._v("凭证取值示例说明：")]),t._v(" "),v("ul",[v("li",[t._v("凭证方向：指生成凭证后该行在借方还是在贷方，由本部统一设定。")]),t._v(" "),v("li",[t._v("记账分类来源：记账要素来自哪类记账分类，由本部统一设定。")]),t._v(" "),v("li",[t._v("记账要素编码及名称：本行对应的具体记账要素，由本部统一设定。")]),t._v(" "),v("li",[t._v("科目示例：指本行记账要素关联的科目，由门店自行关联。")]),t._v(" "),v("li",[t._v("取值字段：指本行生成凭证后的金额取自单据上的哪个字段，由本部统一设定。")])]),t._v(" "),v("p",[t._v("总体思路：根据业务特点，先找哪个主数据（客户、供应商、物料）？该主数据是绑定哪个记账分类（外部/内部、整车/精品/配件）？再根据业务属性找对应匹配的记账要素（往来、收入、成本、库存、税额）？从而带出这个记账要素关联的科目。")]),t._v(" "),v("p",[t._v("例如二手车收款单的凭证贷方取值逻辑为：科目即取收款单上，表头往来户关联的记账分类（一般为外部客户，具体可查看主数据-客户-财务资料）中记账要素（本业务统一指定为2003119）关联的科目（具体可查看企业建模-辅助数据-财务会计数据-记账分类-外部客户-2003119这行的科目）；金额取单据分录中的应收金额字段的值。其他各规则取值，请参考此逻辑予以掌握。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("ul",[v("li",[t._v("生成凭证后，不要改科目，不要改金额，不要改客户或供应商辅助！！！如果这些不对，那说明上游单据不对，请先核对上游的单据。而不是上游单据错了，却在凭证上改！！！")])])]),t._v(" "),v("h3",{attrs:{id:"_4-2-付款单-二手车收购的付款单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-付款单-二手车收购的付款单"}},[t._v("#")]),t._v(" 4.2 付款单（二手车收购的付款单）")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{width:"70px;"}},[t._v("业务单据")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("付款单（状态为已付款）")])]),t._v(" "),v("tr",[v("td",[t._v("转换规则")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("CTCAI-AP023-代办代付及二手车\tG2付款单生成凭证(代付业务及二手车)")])]),t._v(" "),v("tr",[v("td",[t._v("适用场景")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("所有二手车收购单生成的付款单，均适用本规则")])]),t._v(" "),v("tr",[v("th",{attrs:{width:"70px;"}},[t._v("凭证方向")]),t._v(" "),v("th",{attrs:{width:"140px;"}},[t._v("记账分类来源")]),t._v(" "),v("th",{attrs:{width:"200px;"}},[t._v("记账要素编码及名称")]),t._v(" "),v("th",{attrs:{width:"180px;"}},[t._v("科目示例")]),t._v(" "),v("th",[t._v("取值字段")])]),t._v(" "),v("tr",[v("td",[t._v("借")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("282119 代付往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的应付金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：付款科目及付款账户")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("1001.01 库存现金-人民币")]),t._v(" "),v("td",[t._v("分录的应付金额")])])]),t._v(" "),v("h3",{attrs:{id:"_4-3-收款单-二手车销售的收款单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-收款单-二手车销售的收款单"}},[t._v("#")]),t._v(" 4.3 收款单（二手车销售的收款单）")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{width:"70px;"}},[t._v("业务单据")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("收款单（状态为已付款）")])]),t._v(" "),v("tr",[v("td",[t._v("转换规则")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("CTCAI-AP025  收款单生成凭证-不合并辅助账")])]),t._v(" "),v("tr",[v("td",[t._v("适用场景")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("所有二手车销售单生成的收款单，均适用本规则")])]),t._v(" "),v("tr",[v("th",{attrs:{width:"70px;"}},[t._v("凭证方向")]),t._v(" "),v("th",{attrs:{width:"140px;"}},[t._v("记账分类来源")]),t._v(" "),v("th",{attrs:{width:"200px;"}},[t._v("记账要素编码及名称")]),t._v(" "),v("th",{attrs:{width:"180px;"}},[t._v("科目示例")]),t._v(" "),v("th",[t._v("取值字段")])]),t._v(" "),v("tr",[v("td",[t._v("借")]),t._v(" "),v("td",[t._v("表头：收款科目及收款账户")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("1001.01 库存现金-人民币")]),t._v(" "),v("td",[t._v("分录的应收金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("2003119 代收往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的应收金额")])])]),t._v(" "),v("h3",{attrs:{id:"_4-4-应收单-二手车销售的应收单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-应收单-二手车销售的应收单"}},[t._v("#")]),t._v(" 4.4 应收单（二手车销售的应收单）")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{width:"70px;"}},[t._v("业务单据")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("应收单（状态为已审核）")])]),t._v(" "),v("tr",[v("td",[t._v("转换规则")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("CTCAI-AP009-02  (维修代办等费用类)应收单生成凭证")])]),t._v(" "),v("tr",[v("td",[t._v("适用场景")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("所有二手车销售单生成的应收单，均适用本规则")])]),t._v(" "),v("tr",[v("th",{attrs:{width:"70px;"}},[t._v("凭证方向")]),t._v(" "),v("th",{attrs:{width:"140px;"}},[t._v("记账分类来源")]),t._v(" "),v("th",{attrs:{width:"200px;"}},[t._v("记账要素编码及名称")]),t._v(" "),v("th",{attrs:{width:"180px;"}},[t._v("科目示例")]),t._v(" "),v("th",[t._v("取值字段")])]),t._v(" "),v("tr",[v("td",[t._v("借")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("2003119 代收往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的应收金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("281119 代办收入-置换二手车")]),t._v(" "),v("td",[t._v("6051.01.03 其他业务收入-置换服务")]),t._v(" "),v("td",[t._v("分录的金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("22219904 应交销售无票6% "),v("br"),t._v("或22219902 应交销售无票13%  ")]),t._v(" "),v("td",[t._v("2221.01.02.99.04  6%税率"),v("br"),t._v("或2221.01.02.99.02 13%服务")]),t._v(" "),v("td",[t._v("分录的税额")])])]),t._v(" "),v("p",[t._v("注：税额取值科目依据应收单上的开票类型、税率不同而不同，取记账要素2221开头的相对应的，上述取值仅为示例。")]),t._v(" "),v("h3",{attrs:{id:"_4-5-结算记录-利润部分-二手车销售的收款与二手车销售的应收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-结算记录-利润部分-二手车销售的收款与二手车销售的应收"}},[t._v("#")]),t._v(" 4.5 结算记录（利润部分：二手车销售的收款与二手车销售的应收）")]),t._v(" "),v("p",[t._v("无需生成凭证")]),t._v(" "),v("h3",{attrs:{id:"_4-6-结算记录-置换部分-二手车销售的收款与整车销售订单的应收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-结算记录-置换部分-二手车销售的收款与整车销售订单的应收"}},[t._v("#")]),t._v(" 4.6 结算记录（置换部分：二手车销售的收款与整车销售订单的应收）")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{width:"70px;"}},[t._v("业务单据")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("结算记录（结算类型为销售回款转销）")])]),t._v(" "),v("tr",[v("td",[t._v("转换规则")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("CTCAI-AR002-05  整车应收与二手车收款结算生成凭证")])]),t._v(" "),v("tr",[v("td",[t._v("适用场景")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("所有二手车销售收款中置换部分金额的结算记录，均适用本规则")])]),t._v(" "),v("tr",[v("th",{attrs:{width:"70px;"}},[t._v("凭证方向")]),t._v(" "),v("th",{attrs:{width:"140px;"}},[t._v("记账分类来源")]),t._v(" "),v("th",{attrs:{width:"200px;"}},[t._v("记账要素编码及名称")]),t._v(" "),v("th",{attrs:{width:"180px;"}},[t._v("科目示例")]),t._v(" "),v("th",[t._v("取值字段")])]),t._v(" "),v("tr",[v("td",[t._v("借")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("2003119 代收往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的本次结算本位币金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("2003 预收-整车")]),t._v(" "),v("td",[t._v("2204.02 合同负债-整车")]),t._v(" "),v("td",[t._v("分录的本次结算本位币金额")])])]),t._v(" "),v("h3",{attrs:{id:"_4-7-结算记录-应付客户部分-二手车销售的收款与二手车收购的付款"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-结算记录-应付客户部分-二手车销售的收款与二手车收购的付款"}},[t._v("#")]),t._v(" 4.7 结算记录（应付客户部分：二手车销售的收款与二手车收购的付款）")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{width:"70px;"}},[t._v("业务单据")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("结算记录（结算类型为预收冲预付转销）")])]),t._v(" "),v("tr",[v("td",[t._v("转换规则")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("CTCAI-AR006-02\t二手车收款与二手车付款结算生成凭证")])]),t._v(" "),v("tr",[v("td",[t._v("适用场景")]),t._v(" "),v("td",{attrs:{colspan:"4"}},[t._v("所有二手车销售的收款与二手车收购的付款进行结算，均适用本规则")])]),t._v(" "),v("tr",[v("th",{attrs:{width:"70px;"}},[t._v("凭证方向")]),t._v(" "),v("th",{attrs:{width:"140px;"}},[t._v("记账分类来源")]),t._v(" "),v("th",{attrs:{width:"200px;"}},[t._v("记账要素编码及名称")]),t._v(" "),v("th",{attrs:{width:"180px;"}},[t._v("科目示例")]),t._v(" "),v("th",[t._v("取值字段")])]),t._v(" "),v("tr",[v("td",[t._v("借")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("2003119 代收往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的本次结算本位币金额")])]),t._v(" "),v("tr",[v("td",[t._v("贷")]),t._v(" "),v("td",[t._v("表头：往来户-客户")]),t._v(" "),v("td",[t._v("282119 代付往来-置换二手车")]),t._v(" "),v("td",[t._v("2204.05 合同负债-其它")]),t._v(" "),v("td",[t._v("分录的本次结算本位币金额")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);