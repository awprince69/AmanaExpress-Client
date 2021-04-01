import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { useHistory } from 'react-router';

const Products = ({ product }) => {
    const { name, ImageURL, price, weight,_id } = product;
    const history = useHistory();
    const handleClick = () => {
        const url=`/checkOut/${_id}`
        history.push(url)
    }
    return (
        <div>
            <Card className='productContainer mt-3' >
                <Card.Img variant="top" src={ImageURL} />
                <Card.Body>
                    <Card.Title>{name}-{weight}</Card.Title>
                    <div className='d-flex justify-content-between mt-5'>
                        <div>
                            <Card.Text>
                                <span className='price'>${price}</span>
                            </Card.Text>
                        </div>
                        <div>
                            <Button onClick={handleClick} variant="success"> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;