import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SectionState {
  value: string;
}

const initialState: SectionState = {
  value: ''
};

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;