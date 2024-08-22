import PropTypes from 'prop-types'; 
import React from 'react';

const Learning = ({ servicesData }:any) => {
  return (
    <section className='section_two 'style={{paddingBottom:'90px'}}>
      <h1 className='text-center pt-5 pb-5'>A Collection of Resources For all Thinks eLearning</h1>
      <div className="container">
        <div className="row">
          {servicesData.map((service:any , index: React.Key | null | undefined) => (
            <div key={index} className="col">
              <div className='tl-1-service'>
                <div className="tl-1-service-heading">
                  <div className='tl-1-service-icon'>
                    <img src={service.icon} alt="" width={40} height={40} />
                  </div>
                  <span className='tl-1-service-order-numb'>{service.order}</span>
                </div>
                <h5>{service.heading}</h5>
                <h6 className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis omnis ipsam necessitatibus aliquid minima!.</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Learning.propTypes = {
  servicesData: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      heading:PropTypes.string.isRequired
    })
  ).isRequired
};

export default Learning;
