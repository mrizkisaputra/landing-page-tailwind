import {FC} from "react";
import Header from "./Header.tsx";
import {Outlet} from "react-router";

const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            {/*<Footer/>*/}
        </>
    )
}

export default MainLayout;