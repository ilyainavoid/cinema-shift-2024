import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthorizationSlice {
  value: boolean;
}

const initialState: AuthorizationSlice = {
  value: false
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuthorization: (state: AuthorizationSlice, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
});

export const { setAuthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;
