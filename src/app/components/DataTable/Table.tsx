import React from 'react';
import styled from 'styled-components/macro';
import { useTable, usePagination } from 'react-table';
import { Table as BootstrapTable } from 'react-bootstrap';
import Pagination from '@material-ui/lab/Pagination';

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination,
  );

  return (
    <>
      <Styles>
        <BootstrapTable bordered size="sm" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </BootstrapTable>
      </Styles>

      <PaginationContainer
        onChange={(event, page) => {
          gotoPage(page - 1);
        }}
        showFirstButton
        showLastButton
        page={pageIndex + 1}
        count={pageOptions.length}
      />
    </>
  );
};

const Styles = styled.div`
  /* padding: 1rem; */
  margin: 1rem;

  table {
    border-spacing: 0;
    border: 3px solid black;
    margin-bottom: 10px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      width: 80vh;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const PaginationContainer = styled(Pagination)`
  margin-left: 3px;
`;
