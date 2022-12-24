import { FC } from 'react';

import { PATHS, ADMIN_PATHS } from './paths';
import { SignUp } from '../main/pages/SignUp';
import { SignIn } from '../main/pages/SignIn';
import { CardsList } from '../main/pages/admin/CardsList';

interface IRoute {
  path: string;
  element: FC;
}

export const ROUTES: IRoute[] = [
  { path: PATHS.SIGN_UP, element: SignUp },
  { path: PATHS.SIGN_IN, element: SignIn },
];

export const ADMIN_ROUTES: IRoute[] = [
  { path: ADMIN_PATHS.CARDS, element: CardsList },
];
