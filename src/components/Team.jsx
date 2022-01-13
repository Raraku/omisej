import a from "./clients/a.svg";
import c from "./clients/c.png";
import e from "./clients/e.gif";
import f from "./clients/f.png";
const clientData = [
  { name: "Dangote", image: a },
  { name: "Nigerite", image: c },
  { name: "UPDC", image: e },
  { name: "Chevron", image: f },
];

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="text-4xl">Our Previous Clients</h2>
          <p className="text-3xl">
            We have worked for/with some of the biggest Industries, Estates and
            Corporations in Nigeria. Our clients include:
          </p>
        </div>
        <div className="w-full flex flex-wrap" id="row">
          {clientData
            ? clientData.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="thumbnail flex flex-col team w-1/2 md:w-1/4"
                >
                  {" "}
                  <img src={d.image} alt="..." className="team-img flex-1" />
                  <div className="caption">
                    <h4 className="text-gray-500 text-2xl">{d.name}</h4>
                    {/* <p>{d.job}</p> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
