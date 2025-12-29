import React from 'react';

import DataSecurity from './Security';
import PricingPlans from './PricingPlans';
import Footer from './Footer';
import ContactForm from './LetsTalk';
import SmarterChoices from './SmarterChoices';
import BuildForYourNeeds from './BuildForYourNeeds';
import ExploreResources from './ExploreResources';
import Landingpage from './Landingpage';
import CloudIntegrations from './CloudIntegrations';
import Specifications from './Specifications';
import AIDrivenProcess from './AiDrivenProcess';
const Home = () => {
  return (
    <>
    <Landingpage/>
    <AIDrivenProcess/>
    <Specifications/>
    <CloudIntegrations/>
    <BuildForYourNeeds/>
    <SmarterChoices/>
    <DataSecurity/>
    <PricingPlans/>
    <ExploreResources/>
    <ContactForm/>
    <Footer/>
    </>
  );
};

export default Home;