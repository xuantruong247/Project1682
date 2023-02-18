import React from "react";
import { Col, Container, Row } from "reactstrap";

import heroImg from "../assets/images/hero-img.png";
import { Helmet } from 'react-helmet';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <section className="hero__section">
      <div> 
        <Helmet>
          <title>TopZone - Cửa hàng Apple chính hãng</title>
        </Helmet>
      </div>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="hero__subtitle">Trending product in{year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolor facere earum quia deleniti nostrum laboriosam
                obcaecati adipisci. Hic, animi.
              </p>
              <button className="but__btn">SHOPPING NOW</button>
            </div>
          </Col>
          <Col>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
