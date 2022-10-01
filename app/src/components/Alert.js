import { Alert, Container } from "react-bootstrap";

export default function DataAlert(props) {
  return (
    <>
      <Container className="d-flex justify-content-around">
        <Alert variant={"primary"}>
          The data you have entered - <strong>Pincode :</strong> {props.pincode}{" "}
          <strong>Age :</strong> {props.age} <strong>Date :</strong>{" "}
          {props.ChoosedDate}
        </Alert>
      </Container>
    </>
  );
}
