import React, { useContext } from 'react'
import { 
  ProductsProvider, 
  useStateProvider, 
  useDispatchProvider, 
  OpenSidebarContext } from '../../context/product_context';
import { Link } from 'react-router-dom'
import Error from '../Error';
import Loading from '../Loading'
import Product from '../Product';
import Wrapper from './FeaturedProducts';


// const FeaturedProducts = () => {

//   return(
//   <ProductsProvider>
//     <Wrapper className="section">
//       <div className="title">
//         <h2>featured products</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="section-center featured">
//       <ProductState />
//       </div>
//       <Link 
//         to="/products"
//         className="btn">all products</Link>
//     </Wrapper>  
//   </ProductsProvider>
//   )
// }

const ProductState = () => {
  const state = useStateProvider();
  console.log(state)
  return(
    <div>
      Hello World {state.string}
    </div>
  )
}

 const FeaturedProducts = (props) => {
   return(
    <ProductsProvider>
      <ProductState />
    </ProductsProvider>
   )
  }


export default FeaturedProducts;