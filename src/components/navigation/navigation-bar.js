import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TotalItems from '../cart/total-number';
import { dataContext } from '../Context/data-context';

const NavigationBar = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <div className='nav-link-wrapper jordan-logo'>
          <NavLink exact to="/" activeClassName="nav-link-active">
            <img src="https://ups3.s3.us-west-2.amazonaws.com/jordan-logo.png" />

          </NavLink>
        </div>


      </div>

      <div className='right-side'>


        <div className='nav-link-wrapper'>
          <NavLink to="/login" activeClassName="nav-link-active">
            login
          </NavLink>
        </div>

        <div className='nav-link-wrapper'>
          <NavLink to="/cart" activeClassName="nav-link-active">
            <span className="car-number">
              <i className="fa-solid fa-cart-shopping">CART</i>

              {cart.length > 0 ? <TotalItems /> : null}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
