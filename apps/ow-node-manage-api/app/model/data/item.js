/*
 * @Author: 钟凯
 * @Date: 2021-02-11 22:37:45
 * @LastEditTime: 2021-03-31 15:37:22
 * @LastEditors: 钟凯
 * @Description:
 * @FilePath: \egg_ts\app\model\data\item.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
'use strict';
const NameCodeModel = require('../base_name_code');
const { AppCode } = require('../../core/index');

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Item = app.model.define('item', {
    ...NameCodeModel,
    type: { type: STRING, allowNull: false, defaultValue: AppCode.model.itemType.string, comment: '数据项类型' },
    cumulate: { type: INTEGER, allowNull: false, defaultValue: 0, comment: '使用累计总数' },
  }, {
    tableName: 'ow_model_items',
    paranoid: true,
  });

  Item.prototype.plusCumulate = async function() {
    this.cumulate = this.cumulate + 1;
    await this.save({ fields: [ 'cumulate' ] });
  };
  Item.prototype.subCumulate = async function() {
    this.cumulate = this.cumulate - 1;
    await this.save({ fields: [ 'cumulate' ] });
  };
  return Item;
};
