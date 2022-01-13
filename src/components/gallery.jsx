import { Image } from "./image";
import P1 from "./../assets/projectAsset/P1.JPG";
import P2 from "./../assets/projectAsset/P2.jpeg";
import P3 from "./../assets/projectAsset/P3.jpeg";
import P4 from "./../assets/f.JPG";
import P5 from "./../assets/projectAsset/P5.jpeg";
import P6 from "./../assets/projectAsset/P6.jpeg";
import P7 from "./../assets/m.JPG";
import P8 from "./../assets/projectAsset/P8.jpeg";
import P9 from "./../assets/projectAsset/P9.jpg";

const projectData = [
  { title: "Drilling of 250ft deep borehole", image: P1 },
  { title: "Fabrication of Stainless Steel Filter", image: P2 },
  { title: "Erection of Stanchion", image: P4 },
  { title: "Installed Filter", image: P5 },
  { title: "Effluent Filters", image: P6 },
  { title: "Borehole drilling", image: P3 },
  { title: "Borehole compression", image: P7 },
  { title: "Stainless Steel Screens", image: P8 },
  {
    title: "Pressurized Jet of clean water from installed borehole",
    image: P9,
  },
];

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="text-4xl">Gallery</h2>
          <p>Here are pictures from some of our executed projects</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {projectData
              ? projectData.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.image}
                      smallImage={d.image}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
