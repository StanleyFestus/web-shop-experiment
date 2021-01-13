import { FaShoppingCart, FaUserMinus, FaUserPlus} from 'react-icons/fa';
import { Wrapper } from './CartButton';
import { Link } from "react-router-dom";
import { Links } from '../../utils/constants';
import { useUserContext } from '../../context/user_context';
import { useCartContext} from '../../context/cart_context';

const CartButton = () => {
  // const { myUser } = useUserContext();
  const myUser = null;
  // const { total_items } = useCartContext();
  const total_items = 0;
  const clearCart = () => {

  }
  return(
    <Wrapper className="cart-btn-wrapper">
      <Link to='/cart' className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      <span>
        {myUser ? (
          <button 
            type="button"
            className="auth-btn"
            onClick={() => {clearCart()}}
            >Logout<FaUserMinus />
            </button>
        ) : (
          <button 
            type="button"
            className="auth-btn login"
            onClick={() => {console.log('Login')}}>
              Login 
              <FaUserPlus />
            </button>
        )}
      </span>
    </Wrapper>
  )
}

export default CartButton;