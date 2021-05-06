import React, { useState } from 'react';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Button } from 'react-bootstrap';

export function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <Helmet>
        <title>Counter Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <PageWrapper>
        <NavBar />
        <CounterContainer>
          <Counter>{counter}</Counter>
          <div className="d-flex">
            <Button className="m-1" variant="primary" onClick={increaseCounter}>
              +1
            </Button>
            <Button className="m-1" variant="secondary" onClick={resetCounter}>
              Reset
            </Button>
          </div>
        </CounterContainer>
      </PageWrapper>
    </>
  );
}

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Counter = styled.div`
  font-size: 60px;
`;
