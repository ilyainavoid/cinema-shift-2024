import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User } from '@/@types/api';

export interface UserSlice {
  user?: User;
  isAuthorized: boolean;
}

const initialState: UserSlice = {
  user: undefined,
  isAuthorized: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorization: (state: UserSlice, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setUser: (state: UserSlice, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state: UserSlice) => {
      state.user = undefined;
      state.isAuthorized = false;
    }
  }
});

export const { setAuthorization, setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
