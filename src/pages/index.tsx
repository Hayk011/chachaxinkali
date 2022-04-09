import * as React from "react";
import "../reset.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Welcome from "../components/welcome/welcome";
import About from "../components/about/about";
import Menu from "../components/menu/menu";
import ChiefCooker from "../components/chief-cooker/chiefCooker";
import Contacts from "../components/contacts/contacts";

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <Welcome/>
        <About/>
        <Menu/>
        <ChiefCooker/>
        <Contacts/>
    </Layout>
)

export default IndexPage
