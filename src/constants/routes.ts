import { FC } from 'react';

import { PATHS } from './paths';
import { SignUp } from '../main/pages/SignUp';
import { SignIn } from '../main/pages/SignIn';

interface IRoute {
  path: string;
  element: FC;
}

export const PRIVATE_ROUTES: IRoute[] = [
  { path: PATHS.SIGN_UP, element: SignUp },
  { path: PATHS.SIGN_IN, element: SignIn },
];
export const ROUTES: IRoute[] = [{ path: PATHS.SIGN_UP, element: SignUp }];
