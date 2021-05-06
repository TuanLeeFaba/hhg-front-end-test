import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDataTableSlice } from './slice';
import { selectDataTable } from './slice/selectors';
import { Table } from './Table';

interface DataTableProps {}

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Position',
    accessor: 'position',
  },
];

export const DataTable = (props: DataTableProps) => {
  const { actions } = useDataTableSlice();
  const dispatch = useDispatch();

  const dataState = useSelector(selectDataTable);

  useEffect(() => {
    dispatch(actions.getData());
  }, [actions, dispatch]);

  useEffect(() => {
    dispatch(actions.getData());
  }, [actions, dispatch]);

  return (
    <>
      <Table columns={columns} data={dataState.data} />
    </>
  );
};
