import { Row, FormLabel, Col, FormControl } from "react-bootstrap";

export default function BootstrapForms() {
  return (
    <div id="wd-css-responsive-forms-1">
      <h3>Responsive forms</h3>
      <Row className="mb-3" controlId="email1">
        <FormLabel column sm={2}>
          Email
        </FormLabel>
        <Col sm={10}>
          <FormControl type="email" defaultValue="email@example.com" />
        </Col>
      </Row>
      <Row className="mb-3" controlId="password1">
        <FormLabel column sm={2}>
          Password
        </FormLabel>
        <Col sm={10}>
          <FormControl type="password" />
        </Col>
      </Row>
      <Row className="mb-3" controlId="textarea2">
        <FormLabel column sm={2}>
          Bio
        </FormLabel>
        <Col sm={10}>
          <FormControl as="textarea" style={{ height: "100px" }} />
        </Col>
      </Row>
    </div>
  );
}
