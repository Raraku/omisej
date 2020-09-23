import { faEye, faBullseye, faGem } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mission = () => {
  const [index, setIndex] = useState(1);

  const data = {
    1: {
      icon: faBullseye,
      title: "Our Mission",
      text:
        "To provide quality service and products rooted in customer satisfaction with constant innovations and improvements.",
    },
    2: {
      icon: faEye,
      title: "Our Vision",
      text:
        "To be an engineering company that will be capable of handling project(service and produce) for government, oil industry, manufacturing industry, multi-national companies and individuals in Nigeria, Africa and the world.",
    },
    3: {
      icon: faGem,
      title: "Our Core Values",
      text:
        "<ul><li>Win win business philosophy</li><li>Engineering Service</li><li>Peace of mind for our customers</li><li>Omisej Commodity</li><li>God Oriented</li></ul>",
    },
  };
  useEffect(() => {
    const loop = setInterval(() => {
      if (index === 3) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }, 10000);
    return () => clearInterval(loop);
  }, [index]);

  console.log(index);

  return (
    <Row className="sixth wow rubberband">
      <Col xs={12} md={6} className="first">
        <h2>
          {" "}
          <FontAwesomeIcon icon={data[index].icon} />
        </h2>

        <h3>{data[index].title}</h3>
      </Col>
      <Col xs={12} md={6} className="second">
        <p
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: data[index].text }}
        ></p>
      </Col>
    </Row>
  );
};
export default Mission;
