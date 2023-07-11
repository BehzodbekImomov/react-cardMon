import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import {
  Accordion,
  Button,
  Container,
  Form,
  Modal,
  Table,
} from "react-bootstrap";

const Transactions = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const [income, setincome] = useState({
    kategoriya: "",
    miqdor: null,
    malumot: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [incomes, setincomes] = useState([]);

  const showButton = () => {
    handleShow();
    setValidated(false);
    setincome({
      kategoriya: "",
      miqdor: null,
      malumot: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (selected) {
        let newincomes = incomes.map((el) => {
          if (el.id === selected) {
            return income;
          } else {
            return el;
          }
        });
        setincomes(newincomes);
      } else {
        setincomes([...incomes, { ...income, id: uuidv4() }]);
      }
console.log(incomes);
      handleClose();
    }
  };

  const handleChange = (e) => {
    setincome({ ...income, [e.target.name]: e.target.value });
  };

  const edit = (id) => {
    let income = incomes.find((d) => d.id === id);
    setincome(income);
    setSelected(id);
    handleShow();
  };
  const deletedDebs = (id) => {
    let income = incomes.filter((d) => d.id !== id);
    setincomes(income);
  };
  return (
    <Container>
      <Button
        onClick={showButton}
        className="mb-5 mt-4"
        variant="outline-success"
      >
        Add
      </Button>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Expenses</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Miqdori</th>
                  <th>Kategoriyasi</th>
                  <th>Qo'shimcha ma'lumot</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((d, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{d.miqdor}</td>
                    <td>{d.kategoriya}</td>
                    <td>{d.malumot}</td>

                    <td>
                      <Button
                        onClick={() => edit(d.id)}
                        className="me-2"
                        variant="outline-success"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => deletedDebs(d.id)}
                        variant="outline-danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                onChange={handleChange}
                value={income.miqdor}
                name="miqdor"
                required
                placeholder="Miqdorni kiriting"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kategoriyani tanlang</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                value={income.kategoriya}
                name="kategoriya"
                required
                autoFocus
              >
                <option value="1">Maosh</option>
                <option value="2">Nafaqa</option>
                <option value="3">Qo'shimcha daromad</option>
                <option value="4">Biznes</option>
                <option value="5">Boshqa</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Qo'shimcha ma'lumot</Form.Label>
              <Form.Control
                required
                name="malumot"
                value={income.malumot}
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" >
              {selected ? "Save" : "Add"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Transactions;
