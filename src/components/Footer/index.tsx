import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '常安出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        // {
        //   key: 'Ant Design Pro',
        //   title: '',
        //   href: 'https://github.com/4262464/user-backend',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/4262464/user-backend',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: '备案号待填(备案中)',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
export default Footer;
