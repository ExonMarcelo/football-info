import { HomeContextProvider} from "../../../context/DataContext";
import FormSearch from "../../molecules/formSearch";
import SectionResults from "../../organisms/SectionResults";

function Home() {
    return ( 
        <HomeContextProvider>
            <section className="container p-6">
                <h1 className="text-3xl font-lato font-bold leading-8 
                            text-gray-700 mb-8">Buscador de Equipos</h1>
                <FormSearch/>
                <SectionResults/>
            </section>
        </HomeContextProvider>
      );
}

export default Home;