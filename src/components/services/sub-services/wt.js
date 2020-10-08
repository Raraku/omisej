import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";

export default () => (
  <Paper className="p-4">
    <Helmet>
      <meta charset="utf-8" />
      <title>Water Treatment in Nigeria | Omisej Nigeria Limited</title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited designs and builds water treatment facilities to improve and cleanse any water source to make it suitable for use."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Water Treatment</h3>
      <div>
        <p>
          After Oxygen, Water is the single most important means of sustenance
          for human beings. It is a well known fact that the average human can
          survive weeks without food but only mere days without water. This is
          because water makes up about 60% of our body weight and our bodies
          require water to maintain health.
        </p>
        <p>
          Luckily, water is relatively easy to find since our planet itself is
          about 70% water. But, there is a caveat. The human body requires not
          just water but "clean water". This also applies to factories,
          industries or any other use water can be applied for; Water is only
          useful, when it is clean. Naturally, clean water is far harder to come
          by. But, in a situation where an individual has access to
          water(impure); the individual enlists the help of some professionals
          <b>(like Omisej)</b> to improve the quality of the water through a
          process called "Water Treatment".
        </p>
        <p>
          Water treatment is any process that improves the quality of water to
          make it appropriate for a specific end-use. The end use may be
          drinking, industrial water supply, irrigation, river flow maintenance,
          water recreation or many other uses, including being safely returned
          to the environment. Water treatment removes contaminants and
          undesirable components, or reduces their concentration so that the
          water becomes fit for its desired end-use. This treatment is crucial
          to human health and allows humans to benefit from both drinking and
          irrigation use.
        </p>
        <p>
          It usually involves the destruction of microbial pathogens is
          essential, and commonly involves the use of reactive chemical agents
          such as suspended solids, to remove bacteria, algae, viruses, fungi,
          and minerals including iron and manganese. These substances continue
          to cause great harm to several lower developed countries who do not
          have access to water purification. Measures taken to ensure water
          quality not only relate to the treatment of the water, but to its
          conveyance and distribution after treatment. It is therefore common
          practice to keep residual disinfectants in the treated water to kill
          bacteriological contamination during distribution. Water supplied to
          domestic properties, for tap water or other uses, may be further
          treated before use, often using an in-line treatment process. Such
          treatments can include water softening or ion exchange. Many
          proprietary systems also claim to remove residual disinfectants and
          heavy metal ions.
        </p>
      </div>
      <h4 className="service-head">Industrial Water Treatment</h4>
      <div>
        <h5>Processes</h5>
        <p>
          Two of the main processes of industrial water treatment are{" "}
          <i>boiler water treatment</i> and <i>cooling water treatment</i>. A
          large amount of proper water treatment can lead to the reaction of
          solids and bacteria within pipe work and boiler housing. Steam boilers
          can suffer from scale or corrosion when left untreated. Scale deposits
          can lead to weak and dangerous machinery, while additional fuel is
          required to heat the same level of water because of the rise in
          thermal resistance. Poor quality dirty water can become a breeding
          ground for bacteria such as Legionella causing a risk to public
          health.
        </p>

        <p>
          Corrosion in low pressure boilers can be caused by dissolved oxygen,
          acidity and excessive alkalinity. Water treatment therefore should
          remove the dissolved oxygen and maintain the boiler water with the
          appropriate pH and alkalinity levels. Without effective water
          treatment, a cooling water system can suffer from scale formation,
          corrosion and fouling and may become a breeding ground for harmful
          bacteria. This reduces efficiency, shortens plant life and makes
          operations unreliable and unsafe.
        </p>
        <h5>Boiler Water Treatment</h5>
        <p>
          Boiler water treatment = is a type of industrial water treatment
          focused on removal or chemical modification of substances potentially
          damaging to the boiler. Varying types of treatment are used at
          different locations to avoid scale , corrosion , or foaming . External
          treatment of raw water supplies intended for use within a boiler is
          focused on removal of impurities before they reach the boiler.
          Internal treatment within the boiler is focused on limiting the
          tendency of water to dissolve the boiler, and maintaining impurities
          in forms least likely to cause trouble before they can be removed from
          the boiler in boiler blowdown.
        </p>
        <p>
          Water cooling is a method of heat removal from components and
          industrial equipment. Water may be a more efficient heat transfer
          fluid where air cooling is ineffective. In most occupied climates
          water offers the thermal conductivity advantages of a liquid with
          unusually high specific heat capacity and the option of evaporative
          cooling. Low cost often allows rejection as waste after a single use,
          but recycling coolant loops may be pressurized to eliminate
          evaporative loss and offer greater portability and improved
          cleanliness. Unpressurized recycling coolant loops using evaporative
          cooling require a blowdown waste stream to remove impurities
          concentrated by evaporation. Disadvantages of water cooling systems
          include accelerated corrosion and maintenance requirements to prevent
          heat transfer reductions from biofouling or scale formation. Chemical
          additives to reduce these disadvantages may introduce toxicity to
          wastewater. Water cooling is commonly used for cooling automobile
          internal combustion engines and large industrial facilities such as
          steam electric power plants , hydroelectric generators petroleum
          refineries and chemical plants.
        </p>
      </div>
    </div>
    <ContactHero />
  </Paper>
);
