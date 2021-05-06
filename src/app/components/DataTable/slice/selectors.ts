import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.dataTable || initialState;

export const selectDataTable = createSelector([selectSlice], state => state);
