/*
 * @Author: 钟凯
 * @Date: 2021-02-14 17:59:30
 * @LastEditTime: 2021-03-31 15:37:09
 * @LastEditors: 钟凯
 * @Description: 数据模型
 * @FilePath: \egg_ts\app\model\data\dataItem.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import { DataTypes } from 'sequelize';
import { Application, Ow, Sequelize } from 'egg';
import { NameCodeModel, AppCode } from '../../core/index';

export default (app:Application) => {

  const DataItem = app.model.define<Sequelize.Data.DataItem, Ow.Data.DataItem>('dataItem', {
    ...NameCodeModel,
    dataUid: { type: DataTypes.UUID, allowNull: false, comment: '数据模型uid' },
    itemUid: { type: DataTypes.UUID, allowNull: false, comment: '数据项uid' },
    itemType: { type: DataTypes.STRING, allowNull: false, defaultValue: AppCode.model.itemType.string, comment: '数据项类型' },
    arrayType: { type: DataTypes.STRING, allowNull: true, defaultValue: AppCode.model.itemType.string, comment: '数组类型子类型' },
    arrayDepth: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0, comment: '数组类型子类型' },
    objectRef: { type: DataTypes.STRING, allowNull: true, comment: '对象类型引用值' },
    typeValue: { type: DataTypes.STRING, allowNull: true, comment: '数据项类型值' },
    defaultValue: { type: DataTypes.STRING, allowNull: true, comment: '默认值' },
    isNull: { type: DataTypes.BOOLEAN, allowNull: true, comment: '是否为空' },
    length: { type: DataTypes.INTEGER, allowNull: true, comment: '长度' },
    precision: { type: DataTypes.INTEGER, allowNull: true, comment: '精确度' },
    isUnique: { type: DataTypes.BOOLEAN, allowNull: true, comment: '是否唯一' },
  }, {
    tableName: 'ow_model_data_items',
    paranoid: true,
  });

  return DataItem;
};
