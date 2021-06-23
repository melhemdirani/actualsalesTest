import React from "react";
import retirement from '../Images/offers_retirement.jpg'
import family from '../Images/offers_family.jpg'
import group from '../Images/offers_group.jpg'



function OffersItems({image, title, text,text2}) {
  return (
    <div className="Offers_Items_container" >
      <div className="Offers_Items_images">
      <img src={image} alt={title} />
      </div>
      <h1 className="offer_items_title">{title}</h1>
      <p className="offer_items_text">{text}</p>
      <p className="offer_items_text">{text2}</p>
    </div>
  )
}




const Offers = () => {

  return (
    <div className="Offers_container" id="offers">
      <h1 className="Offers_title" >Special Offers</h1>
      <div className="Offers_Items"> 
        <OffersItems 
          image={retirement}
          title="Retirement Offer"
          text="Lorem ipsum dolor sit amet"
          text2="consectetur adipiscing elit"
        />
        <OffersItems 
          image={family}
          title="Family Offer"
          text="Lorem ipsum dolor sit amet"
          text2="consectetur adipiscing elit"
        />
        <OffersItems 
          image={group}
          title="Group Offer"
          text="Lorem ipsum dolor sit amet"
          text2="consectetur adipiscing elit"
        />
      </div>
    </div>
  );
};

export default Offers;