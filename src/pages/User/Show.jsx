// import './App.css
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SectionTab } from "./components/SectionTab";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getUser} from 'api/UserApi'
import { InfoCard } from "./components/InfoCard";
import { LoaderCircle } from 'components/LoaderCircle';
export default function Show(){
  const {id} = useParams()

  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getUser(id).then(({user, reviews}) => {
      console.log(user);
      setUser(user);
      setReviews(reviews);
    });
  },[]);

  return (
    <>
      <Container className="py-4">
        {
          !!user && 
          <Row>
            <Col sm={6} lg={3}>
              <Card>
                <Card.Body>
                  <InfoCard user={user} />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={9}>
              <Card>
                <Card.Body>
                  <SectionTab user={user} reviews={reviews} />
                </Card.Body>
              </Card>
                {/* <SecondNav link1="Tours" link2="Reseña"/>
                <ReviewCard/>
                <ReviewCard/> */}
            </Col>
          </Row>
        }
        { !!user || 
          <div className="row justify-content-center">
            <LoaderCircle/>
          </div> 
        }
      </Container>
    </>
  );
}