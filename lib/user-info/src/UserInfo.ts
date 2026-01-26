import type { Maybe, UserInfo } from '@react-foundry/types';

import { Context, createContext, useContext } from 'react';

export const UserInfoContext: Context<Maybe<UserInfo>> = createContext<Maybe<UserInfo>>(undefined);

export const useUserInfo = (): Maybe<UserInfo> => (
  useContext(UserInfoContext)
);

export default UserInfoContext;
export type {
  UserInfo
};
