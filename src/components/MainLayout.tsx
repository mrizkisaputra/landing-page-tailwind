import {FC} from "react";
import Header from "./Header.tsx";

const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <main>
                {/*<Outlet/>*/}
            </main>
            {/*<Footer/>*/}
        </>
    )
}

export default MainLayout;