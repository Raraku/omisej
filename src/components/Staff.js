import React from "react";
import { Media } from "react-bootstrap";
import Passport from "./p.png";

const Staff = () => {
  const staff = [
    {
      name: "Engr. Monday Irenoa",
      position: "Managing Director",
      qualification: "B.Sc Chemical Engineering",
      exp:
        "Water Management, treatment and studies, Sewage treatment, corrosion prevention, engineering installations",
      img: Passport,
    },

    {
      name: "Olawale Wahab",
      position: "Lead-fulfillment Manager, ",
      qualification: "B.sc Geology",
      exp:
        "Hydrological survey, water sourcing, treatment, mechanical installations",
      img: Passport,
    },
    {
      name: "Ayodele Olorunfemi",
      position: "Safety Manager",
      qualification: "B.Tech Chemical Engineering",
      exp:
        "Effluent treatment, Water treatment plant installations, safety, process unit installation, corrosion prevention",
      img: Passport,
    },
    {
      name: "Margaret Odegua",
      position: "Deputy Managing Director",
      qualification: "N.C.E Acct Edu",
      exp: "Administrator, office Management",
      img: Passport,
    },
    {
      name: "Engr. Francis Akintoye",
      position: "Field Engineer",
      qualification: "B.Eng Civil Engineering",
      exp: "Civil works, steel structures, pilling",
      img: Passport,
    },
    {
      name: "Demola Onatunde",
      position: "Public Analyst",
      qualification: "B.Sc Industrial Chemistry",
      exp: "Environmental consultant",
      img: Passport,
    },
  ];
  return (
    <div>
      <br />
      <h3 className="text-center">Our Staff</h3>
      <ul className="list-unstyled">
        {staff.map((person) => (
          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={person.img}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{person.name}</h5>
              <p>
                <b>Position:</b> {person.position}
              </p>
              <p>
                <b>Qualification:</b> {person.qualification}
              </p>
              <p>
                <b>Field/Experience:</b> {person.exp}
              </p>
            </Media.Body>
          </Media>
        ))}
      </ul>
    </div>
  );
};
export default Staff;
