import * as React from 'react';
import { Tabs } from 'antd';
import Task from '@/pages/Task/Index';
import Analysis from '@/pages/Analysis/Index';
import Driver from '@/pages/Driver/Index';
import Line from '@/pages//Line/Index';
import Storage from '@/pages/Storage/Index';
import styles from './index.less';

const { TabPane } = Tabs;

export interface IAppProps {
  tabKey: string;
  onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void;
  analysisTabDisabled: boolean;
}

class CustomTabs extends React.Component<IAppProps> {
  public render() {
    const { onTabClick, analysisTabDisabled, tabKey } = this.props;
    console.log('CustomTabs', tabKey);
    return (
      <Tabs
        defaultActiveKey="task"
        type="card"
        activeKey={tabKey}
        tabBarGutter={10}
        animated={false}
        tabBarStyle={{ margin: '0px' }}
        onTabClick={onTabClick}
        size="large"
      >
        <TabPane tab="任务列表" key="task" className={styles.tab_panel}>
          <Task />
        </TabPane>
        <TabPane tab="视频分析" key="analysis" disabled={analysisTabDisabled} className={styles.tab_panel}>
          <Analysis />
        </TabPane>
        <TabPane tab="司机管理" key="driver" className={styles.tab_panel}>
          <Driver />
        </TabPane>
        <TabPane tab="线路管理" key="line" className={styles.tab_panel}>
          <Line />
        </TabPane>
        <TabPane tab="存储管理" key="storage" className={styles.tab_panel}>
          <Storage />
        </TabPane>
      </Tabs>
    );
  }
}
export default CustomTabs;