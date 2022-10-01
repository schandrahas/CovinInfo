import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Covin Info</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
