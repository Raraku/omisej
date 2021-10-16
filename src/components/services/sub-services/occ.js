import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";

export default () => (
  <Paper className="p-2 text-justify">
    <Helmet>
      <meta charset="utf-8" />
      <title>
        Organic and Industrial Chemical Cleaning in Nigeria | Omisej Nigeria
        Limited
      </title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited provides Organic and Industrial Chemical Cleaning Services in Nigeria using world class tools and methods."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Organic & Inorganic Chemical Cleaning</h3>
      <div>
        <p>
          Chemical Cleaning is the process of removing fouling deposits from
          process equipment with chemical solutions. The cleaning action may be
          entirely chemical in function (such as mineral acids used to degrade
          inorganic salt scales) or may be also assisted by physical means such
          as steam or turbulent water flow. There have been many advancements
          made over the last decade in the chemistries used for conducting
          chemical cleaning operations. Today, specialized chemical mixtures
          have been developed to suppress foaming or enhance foaming, negate
          emulsion formation or create nearly unbreakable emulsions, remove
          scales without the use of acidic liquids, make fluids non-viscous or
          make them thick as a milk shake.{" "}
        </p>
        <p>
          To new age companies where the chemical products are on the leading
          edge of technology, almost anything can be done given a definition of
          the requirements. This is no longer your grandmother’s “soap”.
          Chemical cleaning operations can be conducted in such a way that will
          not lead to unacceptable pollution of the environment; air, water or
          soil. To determine the most suitable cleaning agent for a particular
          application, a representative sample of the fouling deposit should be
          investigated in a laboratory of skilled professionals who specialize
          in evaluating petroleum processing or chemical manufacturing foulants.
          Knowledge of the process can be most important in quickly
          understanding the nature of the debris and also in selecting the
          appropriate products for application in successful removal. If samples
          of the deposits cannot be obtained, then the experience of the
          chemical producer and/or the equipment owner should be requested. Many
          inorganic deposits can be removed using acidic or acid-based
          commercial cleaning agents, while alkaline solutions can be used for
          the removal of some organic deposits. Aromatic solvents with an
          emulsifying agent may remove some tars and polymer deposits. These
          basics are acceptable where equipment materials of construction will
          allow for strong acidic or strong alkaline contact and the handling of
          waste waters through sensitive waste water operations are not
          impacted. For equipment that cannot be moved and for systems of
          vessels and piping, etc., chemical cleaning can be carried out in
          situ, using mobile facilities to circulate cleaning agents through the
          equipment. In towers or columns, steam is often the carrier of choice
          for distributing cleaning chemicals within the vessel in a process
          known as “steam phase” cleaning. Chemical cleaning can also be carried
          out by immersion of the equipment in a cleaning agent. This is
          suitable for small parts or for equipment containing deposits
          difficult to remove in situ. In-line, but off-stream chemical cleaning
          is also now possible for equipment like banks of heat exchangers that
          once required having the heating bundles cut-out, removed to a
          cleaning yard and then high-pressure water blasted. On-stream chemical
          cleaning should be applied only after careful consideration since
          process temperatures may not be suitable and contamination by the
          cleaning agent could occur throughout the system. Specialized chemical
          cleaning solutions are becoming more widely used to improve the
          effectiveness and reduce the time needed for equipment decontamination
          during the process unit shutdowns. The primary objective of the
          decontamination phase of a shutdown is the removal of hazardous
          materials from vessels, piping and auxiliary equipment. In many cases,
          the primary purpose for equipment cleaning is to remove fouling debris
          that has severely impacted production capacities and is thus effecting
          revenue creation.
        </p>
        <p>
          However, specialized chemical cleaning solutions can also effectively
          clean refinery equipment by eliminating residual bulk hydrocarbons, as
          well as hydrocarbon films and sludge. Included, are chemical
          preparations that serve to safely decontaminate a vessel and also
          allowing for enhanced resource recovery of large percentages of
          valuable hydrocarbon streams for re-insertion into the refining
          process. This saves the owner the large expenses associated with
          hazardous materials waste disposal (very important in tank cleaning
          operations). Typically, cleaning productsimport {Helmet} from
          'react-helmet'; specifically designed for the petrochemical industry
          are mixed with circulating hot water at a temperature of between 80
          and 90°C (176 – 194°F.) A chemical concentration of between 1% and 5%
          is usually employed depending on the nature of the hydrocarbons to be
          removed and/or the depth of foulant to be removed. In regards to the
          removal of hydrocarbon debris, a temporary, loose emulsion can be
          formed between the oil and water phases. The emulsion is then moved to
          a holding tank to allow the oil phase to quickly phase separate
          without the addition of supplemental chemicals to enhance the oil
          separation for recovery. Experience has shown that chemical cleaning
          can reduce the time required during shutdowns by 50% or more. The time
          saved and the resultant increase in plant availability can often more
          than offset the costs of chemical cleaning.
        </p>
      </div>
    </div>
    <ContactHero />
  </Paper>
);
