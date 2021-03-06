/*
 * @Author: 钟凯
 * @Date: 2021-03-10 11:38:17
 * @LastEditTime: 2021-03-19 14:26:20
 * @LastEditors: 钟凯
 * @Description:
 * @FilePath: \onework_manage_webd:\github\OneWork\source\demo\nodejs\egg_ts\typings\ow.sequelize.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { Sequelize, Model } from "sequelize";
import { Ow } from "egg";

declare module "egg" {
  namespace Sequelize {
    interface BaseModel extends Model {
      uid: string;
      createdAt?: string;
      updatedAt?: string;
      dataValues: ReturnType<this>;
    }

    interface BaseNameModel extends BaseModel {
      name: string;
      code: string;
    }
  }
  namespace Sequelize.Database {
    interface Connection extends BaseModel, Egg.Ow.Database.Connection {}
    interface Database extends BaseModel, Egg.Ow.Database.Database {}
    interface Table extends BaseModel, Egg.Ow.Database.Table {}
    interface Column extends BaseModel, Egg.Ow.Database.Column {}
  }
  namespace Sequelize.Data {
    interface Collection extends BaseModel, Egg.Ow.Data.Collection {
      items: Egg.Sequelize.Data.Item[];
    }
    interface Data extends BaseModel, Egg.Ow.Data.Data {
      items?: Egg.Sequelize.Data.DataItem[];
      behaviors?: Egg.Sequelize.Data.DataBehavior[];
    }
    interface DataBehavior extends BaseModel, Egg.Ow.Data.DataBehavior {
      dataName?: string;
    }
    interface DataItem extends BaseModel, Egg.Ow.Data.DataItem {
      dataName?: string;
      objectRefName?: string;
    }
    interface Item extends BaseModel, Egg.Ow.Data.Item {
      plusCumulate: () => Promise<void>;
      subCumulate: () => Promise<void>;
    }
  }
  namespace Sequelize.Module {
    interface Module extends BaseModel, Egg.Ow.Module.Module {}
    interface ModuleModel extends BaseModel, Egg.Ow.Module.ModuleModel {}
  }
  namespace Sequelize.System {
    interface System extends BaseModel, Egg.Ow.System.System {}
    interface SystemModule extends BaseModel, Egg.Ow.System.SystemModule {}
  }
  namespace Sequelize.User {
    interface User extends BaseModel, Egg.Ow.User.User {}
  }
  namespace Sequelize.Tool {
    interface Translation extends BaseModel, Egg.Ow.Tool.Translation {}
    interface Comparison extends BaseModel, Egg.Ow.Tool.Comparison {}
  }
}
