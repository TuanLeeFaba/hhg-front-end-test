import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { dataTableSaga } from './saga';
import { DataTableState } from './types';

export const initialState: DataTableState = {
  loading: false,
  data: [],
  updateEmployeeResult: false,
};

const slice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    getData(state) {
      state.loading = true;
    },
    successGetData(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    failGetData(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateEmployee(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    successUpdateEmployee(state) {
      state.updateEmployeeResult = true;
    },
    resetUpdateEmployeeResult(state) {
      state.updateEmployeeResult = false;
    },
  },
});

export const { actions: dataTableActions } = slice;

export const useDataTableSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: dataTableSaga });
  return { actions: slice.actions };
};
