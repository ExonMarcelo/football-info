const InfoTeam = ({team})=>{
    const {logo, name, country, founded, 
            imageStadium, stadium, cityStadium, 
            locationStadium, capacityStadium } = team;
    return(
        <div className="flex flex-col mt-8 text-center
                        md:flex-row md:justify-center md:items-center">
            <div className="flex flex-col items-center md:pr-10">
                <img className="w-24 h-auto md:w-36" src={logo} alt="Logo" loading="lazy"/>
                <div className="info mt-4">
                    <h4 className="font-lato font-bold text-lg text-slate-700">{name}</h4>
                    <p className="mt-1 text-sm text-slate-700"><b>País: </b>{country}</p>
                    <p className="mt-1 text-sm text-slate-700"><b>Año de fundación: </b>{founded}</p>
                </div>
            </div>
            <div className="flex flex-col mt-6 items-center border-t-[1px] pt-8
                            md:border-t-[0px] md:pt-0 md:border-l-[1px] md:pl-10">
                <img className="w-48 md:w-72 h-auto rounded-xl" src={imageStadium} alt="Stadium" loading="lazy"/>
                <div className="info mt-4">
                    {
                        stadium &&
                        <h4 className="font-lato font-bold text-md text-slate-700">{stadium}</h4>
                    }
                    {
                        cityStadium &&
                        <p className="mt-1 text-sm text-slate-700"><b>Ciudad: </b>{cityStadium}</p>
                    }
                    {
                        locationStadium &&
                        <p className="mt-1 text-sm text-slate-700"><b>Ubicación: </b>{locationStadium}</p>
                    }
                    {
                        capacityStadium &&
                        <p className="mt-1 text-sm text-slate-700"><b>Capacidad: </b>{capacityStadium?.toLocaleString('es-PE')} espectadores.</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default InfoTeam;