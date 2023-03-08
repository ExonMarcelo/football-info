import { useState, useContext } from "react";
import DataContext from "../../../context/DataContext"
import Skeleton from "../../atoms/Skeleton"
import SectionInformation from "../../molecules/SectionInformation"
import Modal from "../../molecules/modal";

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
        <>
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
                        <div className="col-span-2
                                        rounded-lg bg-slate-100 p-8
                                        flex flex-col justify-center items-center cursor-pointer
                                        " key={index}
                                        onClick={()=>{viewInfoTeam(team, stadium)}}>
                            <img src={team.logo} alt={team.name}/>
                            <h4 className="mt-2 mb-2 font-lato font-bold text-lg text-center leading-2">{team.name}</h4>
                            <p className="font-lato text-center">{team.country} - {team.founded}</p>
                        </div>
                    )
                }
            </div>
            {
                showModalDetails &&
                <Modal
                    handleClose={()=>{setShowModalDetails(false)}}>
                    <div className="flex flex-col mt-8 text-center
                                    md:flex-row md:justify-center md:items-center">
                        <div className="flex flex-col items-center md:pr-10">
                            <img className="w-24 h-auto md:w-36" src={teamSelected.logo} alt="Logo" loading="lazy"/>
                            <div className="info mt-4">
                                <h4 className="font-lato font-bold text-lg text-slate-700">{teamSelected.name}</h4>
                                <p className="mt-1 text-sm text-slate-700"><b>País: </b>{teamSelected.country}</p>
                                <p className="mt-1 text-sm text-slate-700"><b>Año de fundación: </b>{teamSelected.founded}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 items-center border-t-[1px] pt-8
                                        md:border-t-[0px] md:pt-0 md:border-l-[1px] md:pl-10">
                            <img className="w-48 md:w-72 h-auto rounded-xl" src={teamSelected.imageStadium} alt="Stadium" loading="lazy"/>
                            <div className="info mt-4">
                                {
                                    teamSelected.stadium &&
                                    <h4 className="font-lato font-bold text-md text-slate-700">{teamSelected.stadium}</h4>
                                }
                                {
                                    teamSelected.cityStadium &&
                                    <p className="mt-1 text-sm text-slate-700"><b>Ciudad: </b>{teamSelected.cityStadium}</p>
                                }
                                {
                                    teamSelected.locationStadium &&
                                    <p className="mt-1 text-sm text-slate-700"><b>Ubicación: </b>{teamSelected.locationStadium}</p>
                                }
                                {
                                    teamSelected.capacityStadium &&
                                    <p className="mt-1 text-sm text-slate-700"><b>Capacidad: </b>{teamSelected.capacityStadium?.toLocaleString('es-PE')} espectadores.</p>
                                }
                            </div>
                        </div>
                    </div>
                </Modal>
                }
        </>
    );
}

export default SectionResults;