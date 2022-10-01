import { Container, Table, Badge, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState(null);
  const handleClose = () => setShow(false);
  function handleShow(id) {
    setShow(true);
  }
  return (
    <>
      {props.data.length ? (
        <Container style={{paddingBottom: "2rem"}}>
          <Table striped bordered hover className="text-center justify-content-center" >
            <thead>
              <tr>
                <th scope="col">Center Id</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">Vaccine</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((x, index) => (
                <tr>
                  <th scope="row">{x["center_id"]}</th>
                  <td>
                    <h4>{x["name"]}</h4>
                    <p class="text-muted">
                      {x["address"] +
                        ", " +
                        x["state_name"] +
                        ", " +
                        x["district_name"] +
                        ", " +
                        x["pincode"]}
                    </p>
                  </td>
                  <td >
                  <h4>
                    {x["available_capacity"] > 0 ? (
                      <Badge pill bg="success" >
                        Yes
                      </Badge>
                    ) : (
                      <Badge pill bg="danger">
                        No
                      </Badge>
                    )}
                    </h4>
                  </td>
                  <td>{x["vaccine"]}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setShow(true);
                        setObj(x);
                      }}                  
                    >
                      Know More
                    </Button>
                    {obj ? (
                      <Modal
                        show={show}
                        onHide={handleClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>More details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Alert>
                            <Container>
                              <Row>
                                <Col><strong>Date :</strong></Col>
                                <Col>{obj["date"]}</Col>
                              </Row>
                              <Row>
                                <Col><strong>Center ID :</strong></Col>
                                <Col>{obj["center_id"]}</Col>
                              </Row>
                              <Row>
                                <Col><strong>Total Availabile Slots :</strong></Col>
                                <Col>
                                  {obj["available_capacity_dose1"] +
                                    obj["available_capacity_dose2"]}
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}><strong>Dose 1 Availabile Slots :</strong></Col>
                                <Col>{obj["available_capacity_dose1"]}</Col>
                              </Row>
                              <Row>
                                <Col md={6}><strong>Dose 2 Availabile Slots :</strong></Col>
                                <Col>{obj["available_capacity_dose2"]}</Col>
                              </Row>
                              <Row>
                                <Col><strong>Free / Paid :</strong></Col>
                                <Col>
                                  {obj["fee_type"] === "Free" ||
                                  obj["fee"] === "0"
                                    ? "Free"
                                    : "Fee - " + obj["fee"]}
                                </Col>
                              </Row>
                              <Row>
                                <Col><strong>Min Age Limit :</strong></Col>
                                <Col>{obj["min_age_limit"]}</Col>
                              </Row>
                              <Row>
                                <Col><strong>Vaccine Type :</strong></Col>
                                <Col>{obj["vaccine"]}</Col>
                              </Row>
                            </Container>
                          </Alert>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                            Done
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Container className="d-flex justify-content-around">
          <Alert>
            There are no available sessions for the pincode or the date you
            entered.
          </Alert>
        </Container>
      )}
    </>
  );
}
