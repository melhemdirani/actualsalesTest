import React from 'react'
import ServicesItems from './ServicesItems'
import car from '../Images/service_car.jpg'
import travel from '../Images/service_travel.jpg'
import health from '../Images/service_health.jpg'
import carIcon from '../Images/service_carIcon.png'
import healthIcon from '../Images/service_healthIcon.png'
import travelIcon from '../Images/service_travelIcon.png'


function Services() {
  return (
    <div id="services" className="service_container">
      <h1 className="Services_title">Services</h1>

        <div className='services__wrapper'>
          <ServicesItems
            images={car}
            icon={carIcon}
            title="Car Insurance"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <ServicesItems
            images={travel}
            icon={travelIcon}
            title="Travel Insurance"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <ServicesItems
            images={health}
            icon={healthIcon}
            title="Health Insurance"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
    </div>
  )
}

export default Services
