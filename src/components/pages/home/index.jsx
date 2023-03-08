import { HomeContextProvider} from "../../../context/DataContext";
import SectionHeader from "../../organisms/SectionHeader";
import SectionResults from "../../organisms/SectionResults";

function Home() {
    return ( 
        <HomeContextProvider>
            <main className="flex flex-col p-6">
                <SectionHeader/>
                <SectionResults/>
            </main>
        </HomeContextProvider>
      );
}

export default Home;