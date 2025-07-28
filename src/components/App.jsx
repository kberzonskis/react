
import {Calc} from "./Calc"
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Title } from "./Title";

export function App() {
return (
<>
  
  <Main>
    <Title text="Labas rytas, Lietuva!" desc="" />
    <div>🟨🟩🟥</div>

    <Calc a={7} b={5} />
    <Calc a={77} b={55} />
    <Calc a={-13} b={-66} />

    <Title text="Apie mus" />
    <Title text="Paslaugos" desc="Musu teikiamu paslaugu aprasymas" />
    <Title text="Kontaktai"/>
  </Main>
  
</>
);
}

