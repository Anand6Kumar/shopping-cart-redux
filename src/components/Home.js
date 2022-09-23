import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Products } from './ProductData';

const Home = () => {

    const [data, setData] = useState(Products);
    console.log(data);

    return (
        <div>
            <h2 className="text-center">Shopping Cart Project</h2>

            <div className="row">
                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>

    )
}
export default Home;

