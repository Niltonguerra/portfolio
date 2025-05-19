import { Fragment } from "react";
import Header from "./components/organisms/Header/Header";
import SectionSobreMim from "./components/organisms/SectionSobreMim/SectionSobreMim";
import SectionExperiencias from "./components/organisms/SectionExperiencias/SectionExperiencias";
import SectionProjetos from "./components/organisms/SectionProjetos/SectionProjetos";
import SectionCertificacoes from "./components/organisms/SectionCertificacoes/SectionCertificacoes";

export default function Home() {
  return (
    <Fragment>
      <Header/>
      <main>
        <SectionSobreMim/>
        <SectionExperiencias/>
        <SectionProjetos/>
        <SectionCertificacoes/>
      </main>
      <footer>
      </footer>
    </Fragment>
  );
}
