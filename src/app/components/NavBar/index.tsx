import React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export function NavBar() {
  const history = useHistory();

  const goToCounterPage = () => {
    history.push('/counter');
  };

  const goToEmployeePage = () => {
    history.push('/employees');
  };

  return (
    <Wrapper>
      <Button
        className="m-3"
        variant="light"
        size="sm"
        onClick={goToCounterPage}
      >
        Counter Page
      </Button>
      <Button
        className="m-3"
        variant="light"
        size="sm"
        onClick={goToEmployeePage}
      >
        Employee Page
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  /* box-shadow: 0 1px 0 0 gray; */
  height: 4rem;
  width: 80vw;
  display: flex;
  top: 0;
  /* background-color: gray; */
`;
