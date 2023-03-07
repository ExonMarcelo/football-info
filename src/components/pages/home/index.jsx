import { useState, useRef } from "react";
import useTeams from "../../../hooks/useTeams";
import PortalModal from "../../molecules/modal";

import iconInformation from '../../../assets/ic-information.png';
import iconBoxEmpty from '../../../assets/ic-box-empty.png';

function Home() {
    const [formData, setFormData]= useState({query: ""})
    const [showModalDetails, setShowModalDetails]= useState(false);
    const [teamSelected, setTeamSelected]= useState({});
    const { teams, loading, getTeams } = useTeams();
    const queryRef = useRef("");
    const firstTimeRef = useRef(true);
    
    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.query !== queryRef.current){
            queryRef.current = formData.query;
            getTeams({team: formData.query});
            firstTimeRef.current = false;
        }
    }

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

    const SectionInformation = ({type, text}) =>{
        const typeInfo = {
            "info": iconInformation,
            "empty": iconBoxEmpty
        }

        return (
            <div className="block-info w-full h-32 md:h-72 lg:h-96 flex flex-col items-center justify-center
                            bg-slate-100 rounded-lg gap-4">
                <img src={typeInfo[type]} alt="icon info" className="w-8 h-8" />
                <p>{text}</p>
            </div>
        )
    }
    
    return ( 
        <section className="container p-6">
            {/* <div className=""> */}
                <h1 className="text-3xl font-lato font-bold leading-8 text-gray-700 mb-8">Buscador de Equipos</h1>
                
                <form className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-10 md:items-end xl:grid-cols-12" onSubmit={handleSubmit}>
                    <div className="form-control col-span-4 md:col-span-4 ">
                        <label className="text-md font-lato text-gray-500">Ingresa el nombre del equipo</label>
                        <input 
                            type="text"
                            name="query"
                            id="query"
                            placeholder="Barcelona"
                            value={formData.query}
                            onChange={onChange}
                            className="w-full bg-slate-100 rounded-lg p-4 mt-2 mb-2 border-sky-700
                                        font-lato text-lg text-grey-700 md:mb-0 md:h-14" />
                    </div>
                    <button className="bg-gray-700 rounded-lg text-white 
                                        font-lato text-lg font-semibold p-4
                                        col-span-4 
                                        md:col-span-2 md:h-14" 
                                        type="submit">Buscar</button>
                </form>
                {
                    firstTimeRef.current  &&
                    <SectionInformation type="info" text="Realiza una busqueda para ver resultados" />
                }
                {
                    (teams.length === 0 && !loading && !firstTimeRef.current)  && 
                    <SectionInformation type="empty" text="No se encontraron resultados" />
                }
                <div className="results grid grid-cols-4 md:grid-cols-6 gap-4 xl:grid-cols-12">
                    {
                        loading ? 
                        <p>Cargando...</p> :
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
                    <PortalModal
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
                    </PortalModal>
                }
                
            {/* </div> */}
        </section>
      );
}

export default Home;