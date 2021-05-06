import { AddNewModal } from 'app/components/AddEmployeeModal';
import { DataTable } from 'app/components/DataTable';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function EmployeePage() {
  return (
    <>
      <Helmet>
        <title>Employee Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <PageWrapper>
        <NavBar />
        <div className="d-flex flex-column">
          <AddNewModal />
          <DataTable />
        </div>
      </PageWrapper>
    </>
  );
}
