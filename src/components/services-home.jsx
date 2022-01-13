import CardServices from "./Services";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="text-4xl">Our Services</h2>
          <p>
            We perform borehole drilling, retrofitting, steel fabrication, RO
            installation; Industrial painting and a list of other engineering
            services.
          </p>
        </div>
        <CardServices />
        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  );
};
