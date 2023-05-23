export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage' },
      { path: '/admin/user-create', name: '新建用户', icon: 'smile', component: './Admin/CreateUser' },
      { component: './404' },
    ],
  },
  { name: '个人信息', icon: 'table', path: '/list', component: './UserInfo' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
