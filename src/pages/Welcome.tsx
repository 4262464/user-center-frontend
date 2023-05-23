import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';
const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎使用用户管理，你可以记录和管理自己的信息~'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a
            rel="noopener noreferrer"
            target="__blank"
          >
            管理用户<p/>
          </a>
        </Typography.Text>

        1.可以创建用户<p/>
        2.查询用户信息<p/>
        3.修改用户信息<p/>
        4.删除用户信息
      </Card>
    </PageContainer>
  );
};
export default Welcome;
