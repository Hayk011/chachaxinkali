import React, {ReactNode} from "react";
import {useStaticQuery, graphql} from "gatsby";
import Header from "./header/header"
import Footer from "./footer/footer";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout
