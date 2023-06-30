import React from 'react';
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Main} from "../../pages/main";


function AppLayout() {

    return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}
export default AppLayout;
