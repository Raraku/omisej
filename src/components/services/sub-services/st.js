import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <div className="p-2 my-44 text-3xl leading-10 container text-justify">
    <Helmet>
      <meta charset="utf-8" />
      <title>
        Sewage Treatment Services in Nigeria | Omisej Nigeria Limited
      </title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited provides sewage treatment services and designs to plants and factories and other industrial sites to enable the waste to be discharged safely into the environment."
      />
    </Helmet>
    <div>
      <h3 className="service-head text-center text-5xl font-medium mb-12">
        Sewage Treatment
      </h3>
      <div>
        <p>
          Sewage treatment is the process of removing contaminants from
          municipal wastewater, containing mainly household sewage plus some
          industrial wastewater. Physical, chemical, and biological processes
          are used to remove contaminants and produce treated wastewater (or
          treated effluent) that is safe enough for release into the
          environment. A by-product of sewage treatment is a semi-solid waste or
          slurry, called sewage sludge. The sludge has to undergo further
          treatment before being suitable for disposal or application to land.
        </p>
        <p>
          Sewage treatment may also be referred to as wastewater treatment.
          However, the latter is a broader term which can also refer to
          industrial wastewater. For most cities, the sewer system will also
          carry a proportion of industrial effluent to the sewage treatment
          plant which has usually received pre-treatment at the factories
          themselves to reduce the pollutant load. If the sewer system is a
          combined sewer then it will also carry urban runoff (stormwater) to
          the sewage treatment plant. Sewage water can travel towards treatment
          plants via piping and in a flow aided by gravity and pumps. The first
          part of filtration of sewage typically includes a bar screen to filter
          solids and large objects which are then collected in dumpsters and
          disposed of in landfills. Fat and grease is also removed before the
          primary treatment of sewage.
        </p>
      </div>
    </div>
    <div>
      <h4 className="service-head text-center text-5xl font-medium mb-12">
        Industrial Effluent
      </h4>
      <div>
        <p>
          In highly regulated developed countries, industrial effluent usually
          receives at least pretreatment if not full treatment at the factories
          themselves to reduce the pollutant load, before discharge to the
          sewer. This process is called industrial wastewater treatment or
          pretreatment. The same does not apply to many developing countries
          where industrial effluent is more likely to enter the sewer if it
          exists, or even the receiving water body, without pretreatment.
          Industrial wastewater may contain pollutants which cannot be removed
          by conventional sewage treatment. Also, variable flow of industrial
          waste associated with production cycles may upset the population
          dynamics of biological treatment units, such as the activated sludge
          process.
        </p>
      </div>
    </div>
  </div>
);
