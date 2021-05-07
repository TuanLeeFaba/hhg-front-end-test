import React from 'react';
import styled from 'styled-components/macro';
import { useTable, usePagination } from 'react-table';
import { Table as BootstrapTable } from 'react-bootstrap';
import { Pagination } from '../Pagination';

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageCount,
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
              <tr className="header" {...headerGroup.getHeaderGroupProps()}>
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
      <Pagination
        pageCount={pageCount}
        pageIndex={pageIndex}
        gotoPage={gotoPage}
      />
    </>
  );
};

const Styles = styled.div`
  margin: 1rem;

  table {
    .header {
      background-color: #d4d3d3;
    }

    border-spacing: 0;
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

      :last-child {
        border-right: 0;
      }
    }
  }
`;
