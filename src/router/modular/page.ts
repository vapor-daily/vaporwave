import index from '@/views/pages/index/index';
import { Route } from 'ym-web/types';

const Router: Route[] = [
  {
    path: '/',
    name: '首页',
    component: index
  }
];

export default Router;
