import { React, useRef } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function UserForm(props) {
  const pincodeRef = useRef();
  const age1Ref = useRef();
  const age2Ref = useRef();
  const age3Ref = useRef();
  const dateRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredPincode = pincodeRef.current.value;
    console.log(enteredPincode);
    const selectedDate = dateRef.current.value;

    console.log(
      age1Ref.current.checked,
      age2Ref.current.checked,
      age3Ref.current.checked
    );
    var age = 3;
    if (age1Ref.current.checked === true) age = 1;
    else if (age2Ref.current.checked === true) age = 2;
    props.OnSubmit(enteredPincode, selectedDate, age);
  }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{paddingTop: '1rem'}}>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Pincode
          </Form.Label>
          <Col sm={8}>
            {/* <FloatingLabel
              controlId="floatingPincode"
              label="Ex: 515001"
              className="mb-3"
            > */}
              <Form.Control
                type="text"
                placeholder="Ex: 515001"
                ref={pincodeRef}
                required
              />
            {/* </FloatingLabel> */}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" required ref={dateRef}/>
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3" required>
            <Form.Label as="legend" column sm={2}>
              Age
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="18-44"
                name="formHorizontalRadios"
                id="18-44"
                value="18-44"
                ref={age1Ref}
                required
              />
              <Form.Check
                type="radio"
                label="45+"
                name="formHorizontalRadios"
                id="45+"
                value="45+"
                ref={age2Ref}
                required
              />
              <Form.Check
                type="radio"
                label="All"
                name="formHorizontalRadios"
                id="All"
                value="Both"
                ref={age3Ref}
                required
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default UserForm;
