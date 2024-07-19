import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { CARD_IMG_URL } from '../config';
import ShimmerUI from './ShimmerUI';
import '../components/RestMenu.css';
import RATING from '../assets/img/star-6-16.png';
import DELIVERY_LOGO from "../assets/img/shipped.png"

const RestMenu = () => {
  //how to use dynamic url params
  const {id} = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [menu1, setMenu1] = useState([]);
  console.log(id);

  useEffect(() =>{
    getMenuData();
  },[]);
  
  async function getMenuData(){
      const menuData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      const midMenu = await menuData.json();
      console.log(midMenu);
      const menuItem = await midMenu?.data?.cards[2]?.card?.card?.info;
      const menus = await midMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
      // const menus2 = await midMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories;
      setSelectedItem(menuItem);
      setMenu1(menus);
  }

  return (!selectedItem) ? <ShimmerUI/>: (
      <div className='menu-container'>
        <div className='selected-item'>
            <div className='item-img'>
              <img src={CARD_IMG_URL+selectedItem?.cloudinaryImageId} alt="menuitem" />
            </div>
            <div className='item-details'>

              <div className='item-heading'>
                <h1>{selectedItem?.name}</h1>
              </div>

              <div className='item-description'>
                <h4 key={"rating"} className='item-rating'>
                  <img src={RATING} alt="rating logo" />
                  {selectedItem?.avgRatingString + ` (${selectedItem?.totalRatingsString})` + " - " + selectedItem?.costForTwoMessage}
                </h4>
                <h4 key={"cuisines"} className='item-cuisines'>
                  {selectedItem?.cuisines.join(', ')}
                </h4>
                <h3 key={"address"} className='item-address'>
                  Outlet 
                  <h5 key={"City"}>
                    {" "+selectedItem?.locality +", "+selectedItem?.city}
                  </h5>
                </h3>
                <h3 key={"delivery time"} className='item-delivery-time'>
                  {selectedItem?.sla?.minDeliveryTime +"-"+ selectedItem?.sla?.maxDeliveryTime+" mins"}
                </h3>
                <h4 key={"fee"} className='item-delivery-fee'>
                  <img src={DELIVERY_LOGO} alt="delivery logo" />
                  {selectedItem?.sla?.lastMileTravel+" kms | " + "₹" + (selectedItem?.feeDetails.amount/100) + " Delivery fee will apply"}
                </h4>
              </div>

            </div>
        </div>
        <div className='menu-list'>
          <h2>Menu</h2>
          <ul>
            {menu1?.map((item) => <li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>)}
          </ul>
        </div>
      </div>
    )
  }
  
  export default RestMenu















        // <ul>
        //     {menu1?.map((item) => <li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>)}
        // </ul>




{/* Error 1: hyat undefined error yetil karan first render laa apla data fetch nasnar zala because useEffect first render nantarach call hota, ani apan tari pn tya state variable madun values access kartoy tyasathi apan optional chainning wapartoo (?.) */}
{/* Hite mala error yet hota ki .map is not a function because restaurantMenus he empty object ni initialize kelta me useState madhe by default but restaurantMenus array of object hota mg tyala me [] ni initialize kela mg solve zala*/}