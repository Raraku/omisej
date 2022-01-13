export const Features = (props) => {
  return (
    <div id="features" className="text-center py-14">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="font-bold text-4xl">Who we are</h2>
        </div>
        <div className="flex flex-row flex-wrap w-full">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="md:w-1/4 px-5 sm:w-1/2 mb-7"
                >
                  {" "}
                  <i className={d.icon}></i>
                  <h3 className="font-bold pb-5">{d.title}</h3>
                  <p
                    className="text-3xl leading-10 "
                    dangerouslySetInnerHTML={{ __html: d.text }}
                  ></p>
                </div>
              ))
            : "Loading..."}
        </div>
        {/* <div>
          <Mission />
        </div> */}
      </div>
    </div>
  );
};
