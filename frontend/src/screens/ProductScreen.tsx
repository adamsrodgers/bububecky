import React from 'react';
import {Row, Col} from 'react-bootstrap';
import prods from '../Products';
import ProductCard from '../components/ProductCard';

function ProductScreen() {
  return (
    <>
      Here are our flavors
      <Row>
        {prods.map(prod => (
          <Col key={prod.id} sm={12} md={6} Lg={4} xL={3}>
            <ProductCard />
          </Col>
        ))}
      </Row>

    </>
  )
}

export default ProductScreen;