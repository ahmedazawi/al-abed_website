import React, { useContext } from "react";
import Img from "../assets/images/bg_al-abed.jpeg";
import WebHomeComponent from "../components/home/WebHomeComponent";
import Cards from "../components/home/Cards";
import ContextApi from "../components/ContextApi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import LocationCards from "../components/home/LocationCards";

const Home = () => {
  const lang = useContext(ContextApi);
  

  return (
    <div>
      <div className="home-container">
        <div className="home-bg-img">
          <img src={Img} alt="bg" />
        </div>

        <WebHomeComponent />

        <div className="cards-container">
          <h1 className="title">
            {lang === "AR" ? "خدماتنا" : "Our Services"}
          </h1>
          <Cards />
        </div>
        <div className="google-map">
          <h1 className="title">
            {lang === "AR" ? "فروع الشركة" : "Company Locations"}
          </h1>
          <LocationCards />
        </div>

        
      </div>
    </div>
  );
};

export default Home;


{/* <Container className="cards">
            <Row  className="card">
              {locations.map((location) => (
                <Card style={{ width: '15.625rem', padding: 0 }}>
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      backgroundColor: '#03183f',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "2rem"
                    }}
                  >
                    {location.location_AR.split(" ")[1]}
                  </div>
                  <Card.Body>
                    <Card.Title>{location.location_AR}</Card.Title>
                    <Card.Text>{location.location_description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush ">
                    <ListGroup.Item >
                      <Card.Link href={`tel:${location.branch_phone}`} target="_blank" rel="noopener noreferrer">
                      {location.branch_phone}
                      </Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                      <Card.Link href={`mailto:${location.branch_email}`} target="_blank" rel="noopener noreferrer">
                        البريد الاكتروني
                      </Card.Link>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={location.google_gis_location} target="_blank" rel="noopener noreferrer">
                      خرائط كوكل
                    </Card.Link>
                  </Card.Body>
                </Card>

              ))}
            </Row>
          </Container> */}
