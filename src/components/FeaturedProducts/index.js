import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import ProductWrapper from './FeaturedProducts';
import { ProductsContext, ProductsProvider } from '../../context/product_context';

const FeaturedProducts = () => {
  const value = useContext(ProductsProvider);
  
  return (
  <ProductsProvider>
    <ProductWrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {value.str}
        </div>
        <Link 
          to="/products"
          className="btn">
        </Link>
    </ProductWrapper>
  </ProductsProvider>
  )
}

export default FeaturedProducts;