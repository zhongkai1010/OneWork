/*
 * @Author: 钟凯
 * @Date: 2021-02-14 17:59:30
 * @LastEditTime: 2021-02-14 23:40:40
 * @LastEditors: 钟凯
 * @Description: 数据模型
 * @FilePath: \onework_manage_api\app\model\dataItem.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
'use strict';
const AppCode = require('../core/appCode');

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const DataItem = app.model.define('dataItem', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    uid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false },
    dataUid: { type: DataTypes.UUID, allowNull: false, comment: '数据模型唯一值' },
    itemUid: { type: DataTypes.UUID, allowNull: true, comment: '数据项唯一值' },
    itemType: { type: DataTypes.INTEGER, allowNull: false, defaultValue: AppCode.model.itemType.string, comment: '数据项类型，0:缺省值，1：字符、2：整型、3：数字、4：布尔、5：日期、6：时间' },
    itemName: { type: DataTypes.STRING, allowNull: false, unique: true, comment: '数据项名称，唯一' },
    itemCode: { type: DataTypes.STRING, allowNull: false, comment: '代码值' },
    isNull: { type: DataTypes.BOOLEAN, allowNull: true, comment: '是否为空' },
    length: { type: DataTypes.INTEGER, allowNull: true, comment: '长度' },
    precision: { type: DataTypes.INTEGER, allowNull: true, comment: '精确度' },
    defaultValue: { type: DataTypes.STRING, allowNull: true, comment: '默认值' },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'model_data_items',
    paranoid: true,
  });

  return DataItem;
};
