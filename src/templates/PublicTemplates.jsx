import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { App } from "../components/App";


export function PublicTemplates () {

return (
<>
    <Header/>
    <Outlet />
    <Footer />
</>

)
}