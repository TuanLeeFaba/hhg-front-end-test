import React, { ReactElement, Fragment } from 'react';
import { Pagination as PaginationBootstrap } from 'react-bootstrap';
import styled from 'styled-components/macro';

interface Props {
  pageIndex: number;
  pageCount: number;
  gotoPage: any;
}

export function Pagination(props: Props) {
  const { pageIndex, pageCount, gotoPage } = props;

  const last_page = pageCount - 1;
  const current_page = pageIndex === 0 ? 1 : pageIndex;

  const renderPagination = () => {
    const htmlPagination: ReactElement[] = [];

    if (last_page <= 6) {
      for (let number = 1; number <= last_page; number++) {
        htmlPagination.push(
          <PaginationBootstrap.Item
            key={number}
            active={current_page === number}
            onClick={() => gotoPage(number)}
          >
            {number}
          </PaginationBootstrap.Item>,
        );
      }
      return htmlPagination;
    } else {
      const begin = [1, 2, 3];
      const end = [last_page, last_page - 1, last_page - 2];

      if (begin.includes(current_page)) {
        //render 1, 2, 3, 4, 5...10
        for (let number = 1; number <= begin.length + 2; number++) {
          htmlPagination.push(
            <PaginationBootstrap.Item
              key={number}
              active={current_page === number}
              onClick={() => gotoPage(number)}
            >
              {number}
            </PaginationBootstrap.Item>,
          );
        }
        return (
          <>
            {htmlPagination}
            <PaginationBootstrap.Ellipsis />
            <PaginationBootstrap.Item
              active={current_page === last_page}
              onClick={() => gotoPage(last_page)}
            >
              {last_page}
            </PaginationBootstrap.Item>
          </>
        );
      }

      if (end.includes(current_page)) {
        for (
          let number = last_page - end.length - 1;
          number <= last_page;
          number++
        ) {
          htmlPagination.push(
            <PaginationBootstrap.Item
              key={number}
              active={current_page === number}
              onClick={() => gotoPage(number)}
            >
              {number}
            </PaginationBootstrap.Item>,
          );
        }
        return (
          <>
            <PaginationBootstrap.Item
              active={current_page === 0}
              onClick={() => gotoPage(0)}
            >
              {1}
            </PaginationBootstrap.Item>
            <PaginationBootstrap.Ellipsis />
            {htmlPagination}
          </>
        );
      }

      //If number active between 5 and 10
      return (
        <Fragment>
          <PaginationBootstrap.Item onClick={() => gotoPage(0)}>
            {1}
          </PaginationBootstrap.Item>
          {current_page - 3 !== 1 && <PaginationBootstrap.Ellipsis />}
          <PaginationBootstrap.Item onClick={() => gotoPage(current_page - 2)}>
            {current_page - 2}
          </PaginationBootstrap.Item>
          <PaginationBootstrap.Item onClick={() => gotoPage(current_page - 1)}>
            {current_page - 1}
          </PaginationBootstrap.Item>
          <PaginationBootstrap.Item active={true}>
            {current_page}
          </PaginationBootstrap.Item>
          <PaginationBootstrap.Item onClick={() => gotoPage(current_page + 1)}>
            {current_page + 1}
          </PaginationBootstrap.Item>
          <PaginationBootstrap.Item onClick={() => gotoPage(current_page + 2)}>
            {current_page + 2}
          </PaginationBootstrap.Item>
          {current_page + 3 !== last_page && <PaginationBootstrap.Ellipsis />}
          <PaginationBootstrap.Item onClick={() => gotoPage(last_page)}>
            {last_page}
          </PaginationBootstrap.Item>
        </Fragment>
      );
    }
  };

  return <Flex>{renderPagination()}</Flex>;
}

const Flex = styled.div`
  display: flex;
  margin-left: 15px;
`;
