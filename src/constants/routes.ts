import { PATHS } from './paths';
import SignUp from '../main/pages/SignUp';
import { FC } from 'react';

interface IRoute {
  path: string;
  element: FC;
}

export const PRIVATE_ROUTES: IRoute[] = [
  { path: PATHS.SIGN_UP, element: SignUp },
];
export const ROUTES: IRoute[] = [{ path: PATHS.SIGN_UP, element: SignUp }];
