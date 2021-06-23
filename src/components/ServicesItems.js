import React from 'react'

function ServicesItems({images,title,text,icon}) {
  return (
       <div className='servicesitems_container'>
           <div className='servicesitems_img_container'>
            <img
              className='servicesitems_img'
              alt='Travel'
              src={images}
            />
            </div>
          <div className='servicesitems_info '>
              <div className='servicesitems_title_container'> 
                  <h2 className='servicesitems_title'>{title}</h2>
                  <img className='servicesitems_icon' src={icon} alt=""/>
              </div>
            <h2 className='servicesitems_text'>{text}</h2>
          <button className="serviceitems_button">Learn More</button>
          </div>
      </div>
  )
}

export default ServicesItems
