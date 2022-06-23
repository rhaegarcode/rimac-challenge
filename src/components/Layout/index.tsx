import {Fragment} from "react";
import Header from "../Header";

const Layout = ({children} : any) => {

    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default Layout;