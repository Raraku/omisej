import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";

export default () => (
  <Paper className="p-4">
    <Helmet>
      <meta charset="utf-8" />
      <title>Supply of Chemicals in Nigeria | Omisej Nigeria Limited</title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited supplies chemicals for industrial and commercial purposes — Our experienced engineers personally examine every chemical supplied to ensure only the best reaches the consumer."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Supply Of Chemicals</h3>
      <div>
        <p>
          The Nigeria chemical industry is a vibrant one and is expected to grow
          rapidly, with the federal government focus moving away from the
          dominant oil industry, there is an estimated $120 million (some N18
          billion) annual market for agrochemicals alone in Nigeria. It is
          evident that the chemical industry occupies a central position in
          relation to the other industrial sectors underscored by the fact that
          it is the producer of the primary raw materials which are feedstocks
          for the manufacture of a wide range of products. For example,
          sulphuric acid, an inorganic chemical is used on a wide scale as
          feedstock by many industries. Indeed, it is hard to find any important
          branch of the economy in which either sulphuric acid and or products
          derivable from it are not used. The largest consumption of sulphuric
          acid is in the manufacture of inorganic fertilizers such as
          superphosphate, ammonium sulphate, etc. It is also a feedstock for the
          manufacture of many other acids such as phosphoric, acetic,
          hydrochloric acid and their salts.The acid is used in large quantities
          for the purification of petroleum products and for a number of
          processes in the manufacture of dyes, paints, pharmaceuticals,
          insecticides, detergent, artificial silk, lead batteries, explosives,
          this is just a tiny part of the use chemicals are put into.
        </p>
        <p>
          Omisej Nigeria Limited takes part in this effort by acting as
          middlemen between Manufacturer and Industrial Consumer. Our Chemical
          Engineers are on hand to verify the quality of chemicals in the
          Nigerian market and aborad; then to supply only the finest quality to
          our consumers(Commercial and Residential alike).
        </p>
      </div>
    </div>
    <ContactHero />
  </Paper>
);
