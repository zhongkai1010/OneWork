/*
 * @Author: 钟凯
 * @Date: 2021-02-21 15:29:15
 * @LastEditTime: 2021-03-09 18:20:05
 * @LastEditors: 钟凯
 * @Description: 系统模块
 * @FilePath: \egg_ts\app\model\system\systemModule.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import { DataTypes } from 'sequelize';
import { Application, Ow, Sequelize } from 'egg';
import { BaseModel } from '../../core/index';

export default (app:Application) => {

  const SystemModule = app.model.define<Sequelize.System.SystemModule, Ow.System.SystemModule>('systemModule', {
    ...BaseModel,
    systemUid: { type: DataTypes.UUID, allowNull: false, comment: '系统uid' },
    moduleUid: { type: DataTypes.UUID, allowNull: false, comment: '模块uid' },
  }, {
    tableName: 'ow_system_modules',
    paranoid: true,
  });


  return SystemModule;
};
