import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const ImprintPage = () => (
  <Layout>
    <div className="imprint">
      <h1>Imprint</h1>
      <p>
        kitconcept GmbH
        <br />
        Vorgebirgsstraße 80
        <br />
        53119 Bonn
        <br />
        <br />
        www.kitconcept.com
        <br />
        info@kitconcept.com
        <br />
        <br />
        Sitz der Gesellschaft: Bonn
        <br />
        Registergericht der Gesellschaft: Amtsgericht Bonn
        <br />
        Handelsregister Nummer: HRB 22064
        <br />
        USt-IdNr.: DE305158391
        <br />
        Geschäftsführer: Timo Stollenwerk
        <br />
      </p>
      <Link to="/">Back to Main page</Link>
    </div>
  </Layout>
);

export default ImprintPage;
