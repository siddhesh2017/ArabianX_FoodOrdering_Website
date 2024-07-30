import React from 'react';
import { useSelector } from 'react-redux';
import MenuItemCard from './MenuItemCard';

const CartItems = ()=>{

    const cardItems = useSelector(store => store.cart.items);
    console.log(cardItems);
    return(
        <div className='menu-list'>
            <h1>Cart</h1>
            {cardItems?.map((item) => <MenuItemCard key={item?.id} btnVal={'Remove'} {...item} />)}
        </div>
    )
}

export default CartItems;