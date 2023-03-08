import { useState, useContext } from "react";
import DataContext from "../../../context/DataContext"
import Skeleton from "../../atoms/Skeleton"
import SectionInformation from "../SectionInformation"
import Modal from "../modal";
import Infoteam from "../../molecules/infoTeam";
import Card from "../../molecules/card";

const SectionResults = ()=>{
    const {homeContext} = useContext(DataContext);
    const {teams, isLoadingTeams, isFirstSearch} = homeContext;
    const [showModalDetails, setShowModalDetails]= useState(false);
    const [teamSelected, setTeamSelected]= useState({});

    const viewInfoTeam = (team, stadium) =>{
        setTeamSelected({
            name: team.name,
            founded: team.founded,
            country: team.country,
            logo: team.logo,
            stadium: stadium.name,
            imageStadium: stadium.image,
            cityStadium: stadium.city,
            capacityStadium: stadium.capacity,
            locationStadium: stadium.address
        });
        setShowModalDetails(true)
    }

    return(
        <section className="container">
            {
                isFirstSearch  &&
                <SectionInformation type="info" text="Realiza una busqueda para ver resultados" />
            }
            {
                (teams.length === 0 && !isLoadingTeams && !isFirstSearch)  && 
                <SectionInformation type="empty" text="No se encontraron resultados" />
            }
            <div className="results grid grid-cols-4 md:grid-cols-6 gap-4 xl:grid-cols-12">
                {
                    isLoadingTeams ? 
                    [1,2,3,4,5,6].map((key)=>
                        <Skeleton key={key} extraClass="col-span-2 h-[280px]"/>
                    ):
                    teams.map(({team, stadium}, index) => 
                        <Card
                            index={index}
                            logo={team.logo}
                            name={team.name}
                            country={team.country}
                            founded={team.founded}
                            handleClick={()=>{viewInfoTeam(team, stadium)}} 
                            />
                    )
                }
            </div>
            {
                showModalDetails &&
                <Modal
                    handleClose={()=>{setShowModalDetails(false)}}>
                    <Infoteam team={teamSelected}/>
                </Modal>
            }
        </section>
    );
}

export default SectionResults;