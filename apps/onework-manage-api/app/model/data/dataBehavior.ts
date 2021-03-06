/*
 * @Author: 钟凯
 * @Date: 2021-02-14 22:34:45
 * @LastEditTime: 2021-03-31 15:36:39
 * @LastEditors: 钟凯
 * @Description:
 * @FilePath: \egg_ts\app\model\data\dataBehavior.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import { DataTypes } from 'sequelize';
import { Application, Ow, Sequelize } from 'egg';
import { NameCodeModel } from '../../core/index';

export default (app:Application) => {

  const DataBehavior = app.model.define<Sequelize.Data.DataBehavior, Ow.Data.DataBehavior>('behavior', {
    ...NameCodeModel,
    dataUid: { type: DataTypes.UUID, allowNull: false, comment: '数据模型uid' },
    inputs: { type: DataTypes.JSON, allowNull: true, defaultValue: [], comment: '输入参数，多条记录，[{type:AppCode.model.itemType,valueValue:"",value:""}]' },
    outputs: { type: DataTypes.JSON, allowNull: true, defaultValue: null, comment: '输出参数,单条记录， {type:AppCode.model.itemType,valueValue:"",value:""}]' },
    operationType: { type: DataTypes.STRING, allowNull: true, comment: '操作类型' },
    description: { type: DataTypes.STRING, allowNull: true, comment: '描述' },
  }, {
    tableName: 'ow_model_data_behaviors',
    paranoid: true,
  });

  return DataBehavior;
};
