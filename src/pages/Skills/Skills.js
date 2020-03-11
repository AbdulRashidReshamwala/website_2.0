import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Image } from "react-bootstrap";
import Ml from "./Ml";
import Web from "./Web";
import Misc from "./Misc";
// import Splash from "../../../public/assets/slash.png";

function Skills() {
  const spring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1500 }
  });
  return (
    <div
      style={{
        paddingLeft: 32,
        paddingRight: 32,
        background: "#070707",
        height: "100vh"
      }}
    >
      <animated.div style={spring}>
        {/* <Container> */}
        <Row style={{ paddingTop: "16vh" }}>
          <Col>
            {/* <h1 style={{ color: "#28d79f" }}>Machine Learning</h1> */}
            <Ml></Ml>
          </Col>
          <Col>
            <Web></Web>
          </Col>
          <Col>
            <Misc></Misc>
          </Col>
        </Row>
        {/* </Container> */}
      </animated.div>
    </div>
  );
}

export default Skills;
