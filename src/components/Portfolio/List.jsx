import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/portfolio.json";

export default function List () {

  return (
    <Container fluid id="portfolio">
      <Row className="portfolio-text">
        <Col>
          <h2 className="text-center ">Portfolio <span>Where creativity and code collide.</span></h2>
        </Col>
      </Row>

      <Row className="p-5 g-4 justify-content-center">
        {
          data.map( 
            (element) => {
              return element
                ? <Panel data={element} />
                : <p>Loading</p>
            }
          )
        }
      </Row>
    </Container>
  )
}