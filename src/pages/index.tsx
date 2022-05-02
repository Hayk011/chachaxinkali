import * as React from "react";
import "../reset.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import About2 from "../components/about2/about2";
import Menu from "../components/menu/menu";
import ChiefCooker from "../components/chief-cooker/chiefCooker";
import Contacts from "../components/contacts/contacts";
import Main from "../components/main/main";

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <Main/>
        <About2/>
        <Menu/>
        <ChiefCooker/>
        <Contacts/>
    </Layout>
)

export default IndexPage
