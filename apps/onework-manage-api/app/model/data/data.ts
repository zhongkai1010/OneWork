/*
 * @Author: 钟凯
 * @Date: 2021-02-13 07:34:51
 * @LastEditTime: 2021-03-31 15:36:26
 * @LastEditors: 钟凯
 * @Description: Sequelize的数据模型Model文件
 * @FilePath: \egg_ts\app\model\data\data.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import { DataTypes } from 'sequelize';
import { Application, Ow, Sequelize } from 'egg';
import { NameCodeModel, AppCode } from '../../core/index';

export default (app:Application) => {

  const Data = app.model.define<Sequelize.Data.Data, Ow.Data.Data>('data', {
    ...NameCodeModel,
    use: { type: DataTypes.STRING, allowNull: false, defaultValue: AppCode.model.modelUse.universal, comment: '用途' },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: AppCode.common.status.enable, comment: '状态' },
    description: { type: DataTypes.STRING, allowNull: true, comment: '描述' },
  }, {
    tableName: 'ow_model_datas',
    paranoid: true,
  });

  return Data;
};
