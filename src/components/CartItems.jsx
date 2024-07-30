import React from 'react';
import { useSelector } from 'react-redux';


const CartItems = ()=>{

    const cardItemss = useSelector((store) => store.cart.items);
    console.log(cardItemss);
    return(
        <div>
            { cardItemss?.map((item) => <div key={item.id}>{item.name}</div>) }
        </div>
    )
}

export default CartItems;