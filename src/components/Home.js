import {Carousel} from 'react-bootstrap/';
import { useState } from 'react';
import dict from '../images/dictionary.jpg'
import Options from './Options'
const Home = (props) => {
    
    return(
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h=50 jumbo"
      src='https://images.pexels.com/photos/3844565/pexels-photo-3844565.jpeg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 >Full Page Reproductions</h1>
      <p className="fs-2 text">We will recreate all images, borders, designs to make it look like the orginal document.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 jumbo"
      src="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="text-dark">Quick Turnaround</h1>
      <p className="fs-2 text text-dark">Most services will be completed within 72 hours!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 jumbo"
      src="https://images.pexels.com/photos/6045366/pexels-photo-6045366.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="text-dark">Third slide label</h1>
      <p className="fs-2 text text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div><Options/></div>
        </>
    )
}


export default Home
