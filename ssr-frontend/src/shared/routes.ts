import Theme from './Theme'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'

type routeComponent = {
  path: string;
  exact?: boolean;
  component: any;
}

const routes:routeComponent[] = [
  {
    path: '/',
    exact: true,
    component: Theme
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage
  },
  { 
    path: '*',
    component: NotFoundPage
  }
]

export default routes