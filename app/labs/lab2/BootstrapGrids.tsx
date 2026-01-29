import { Col, Row } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
            Lorem ipsum ...
          </Col>
          <Col className="bg-primary text-white">
            <h3>Right half</h3>
            Lorem ipsum ...
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={8} className="bg-warning">
            <h3>One third</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            corporis quibusdam tenetur eos totam earum sunt tempore dolorum nemo
            ab? Assumenda nam repellat in molestias ipsa nulla iusto vero
            impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque corporis quibusdam tenetur eos totam earum sunt tempore
            dolorum nemo ab? Assumenda nam repellat in molestias ipsa nulla
            iusto vero impedit.
          </Col>
          <Col xs={8} md={4} className="bg-success text-white">
            <h3>Two thirds</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            corporis quibusdam tenetur eos totam earum sunt tempore dolorum nemo
            ab? Assumenda nam repellat in molestias ipsa nulla iusto vero
            impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque corporis quibusdam tenetur eos totam earum sunt tempore
            dolorum nemo ab? Assumenda nam repellat in molestias ipsa nulla
            iusto vero impedit.
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="bg-black text-white">
            <h3>Sidebar</h3>
            Lorem ipsum ...
          </Col>
          <Col xs={8} className="bg-secondary text-white">
            <h3>Main content</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            corporis quibusdam tenetur eos totam earum sunt tempore dolorum nemo
            ab? Assumenda nam repellat in molestias ipsa nulla iusto vero
            impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque corporis quibusdam tenetur eos totam earum sunt tempore
            dolorum nemo ab? Assumenda nam repellat in molestias ipsa nulla
            iusto vero impedit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque corporis quibusdam tenetur eos totam earum
            sunt tempore dolorum nemo ab? Assumenda nam repellat in molestias
            ipsa nulla iusto vero impedit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Neque corporis quibusdam tenetur eos
            totam earum sunt tempore dolorum nemo ab? Assumenda nam repellat in
            molestias ipsa nulla iusto vero impedit.
          </Col>
          <Col xs={2} className="bg-info">
            <h3>Sidebar</h3>
            Lorem ipsum ...
          </Col>
        </Row>
      </div>
    </div>
  );
}
