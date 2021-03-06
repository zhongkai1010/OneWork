/*
 * @Author: 钟凯
 * @Date: 2021-02-11 22:37:45
 * @LastEditTime: 2021-03-09 10:04:10
 * @LastEditors: 钟凯
 * @Description:
 * @FilePath: \egg_ts\app\model\system\system.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import { DataTypes } from 'sequelize';
import { Application, Ow, Sequelize } from 'egg';
import { BaseModel } from '../../core/index';

export default (app:Application) => {

  const System = app.model.define<Sequelize.System.System, Ow.System.System>('system', {
    ...BaseModel,
    description: { type: DataTypes.STRING, allowNull: true, comment: '描述' },
  }, {
    tableName: 'ow_systems',
    paranoid: true,
  });


  return System;
};
