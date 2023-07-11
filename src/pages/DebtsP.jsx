import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Accordion,Button, Container, Form, Modal, Table} from "react-bootstrap";

const DebtsP = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);


  const [debt, setDebt] = useState({
    price: null,
    firstname: "",
    lastname: "",
    information: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [debts, setDebts] = useState([]);

  const showButton = () =>{
    handleShow();
    setValidated(false)
    setDebt({
      firstname: "",
      lastname: "",
      price: null,
      information: ""
    })
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if(selected){
let newDebts=debts.map((el)=>{
  if(el.id===selected){
    return debt
  }else{
    return el
  }

})
setDebts(newDebts)
      }else{

        setDebts([...debts, { ...debt, id: uuidv4() }]);
      }

      handleClose();
    }
  };

  const handleChange = (e) => {
    setDebt({ ...debt, [e.target.name]: e.target.value });
  };

  const edit = (id) => {
    let debt =debts.find((d)=>d.id===id)
    setDebt(debt)
    setSelected(id);
    handleShow();
  };
 const deletedDebs =(id)=>{
let debt=debts.filter((d)=>d.id!==id)
setDebts(debt)

 }
  return (
    <Container>
      <Button
        onClick={showButton}
        className="mb-5 mt-4"
        variant="outline-danger"
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Additional Information</th>
                  <th>Price</th>
                
                </tr>
              </thead>
              <tbody>
                {debts.map((d, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.information}</td>
                    <td>{d.price}</td>
                    <td>
                      <Button
                      // id={uuidv4()}
                        onClick={()=>edit(d.id)}
                        className="me-2"
                        variant="outline-success"
                      >
                        Edit
                      </Button>
                      <Button onClick={()=>deletedDebs(d.id)} variant="outline-danger">Delete</Button>
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
                required
                value={debt.firstname}
                onChange={handleChange}
                name="firstname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
                required
                value={debt.lastname}
                onChange={handleChange}
                name="lastname"
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  autoFocus
                  required
                  value={debt.price}
                  onChange={handleChange}
                  name="price"
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Additional Information</Form.Label>
              <Form.Control
                value={debt.information}
                onChange={handleChange}
                name="information"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              {selected?"Save":"Add"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
     
    </Container>
  );
};

export default DebtsP;
