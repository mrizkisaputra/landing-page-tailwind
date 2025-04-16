import {Route, Routes} from "react-router";
import {FC} from "react";
import MainLayout from "./components/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
