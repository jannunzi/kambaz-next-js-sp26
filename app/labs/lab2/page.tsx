import { Container } from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapForms from "./BootstrapForms";

export default function Lab2() {
  return (
    // <Container>
    <div id="wd-lab2">
      <ScreenSizeLabel />
      <h2>Lab 2</h2>
      <BootstrapForms />
      <BootstrapTables />
      <BootstrapGrids />
    </div>
    // </Container>
  );
}
