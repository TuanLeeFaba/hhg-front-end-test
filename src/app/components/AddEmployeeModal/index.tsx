import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useDataTableSlice } from '../DataTable/slice';
import { selectDataTable } from '../DataTable/slice/selectors';
import { toast } from 'react-toastify';
import styled from 'styled-components/macro';

interface AddNewModalProps {}

export const AddNewModal = (props: AddNewModalProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const { actions } = useDataTableSlice();
  const dispatch = useDispatch();
  const dataState = useSelector(selectDataTable);

  const handleShow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {
    dispatch(actions.updateEmployee({ name, email, position }));
    setOpen(false);
    setName('');
    setEmail('');
    setPosition('');
  };

  useEffect(() => {
    const { updateEmployeeResult } = dataState;
    if (updateEmployeeResult) {
      toast.success('Add employee successfully');
      dispatch(actions.resetUpdateEmployeeResult());
    }
  }, [dataState, actions, dispatch]);

  return (
    <>
      <ButtonWrapper color="primary" onClick={handleShow}>
        + New
      </ButtonWrapper>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new employee</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={e => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <Modal.Body className="d-flex flex-column">
            <Form.Control
              className="mb-2"
              id="email"
              placeholder="Email"
              type="email"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <Form.Control
              className="mb-2"
              id="name"
              placeholder="Name"
              onChange={event => {
                setName(event.target.value);
              }}
            />
            <Form.Control
              className="mb-2"
              id="position"
              placeholder="Position"
              onChange={event => {
                setPosition(event.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="mr-3"
              type="submit"
              variant="success"
              disabled={!(name && email && position)}
            >
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

const ButtonWrapper = styled(Button)`
  margin-right: 17px;
  width: 80px;
  align-self: flex-end;
`;
