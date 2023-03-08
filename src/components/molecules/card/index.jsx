const Card = ({index, logo, name, country, founded, handleClick}) => {
    return(
        <div className="col-span-2
                        rounded-lg bg-slate-100 p-8
                        flex flex-col justify-center items-center cursor-pointer
                        " key={index}
                        onClick={handleClick}>
            <img src={logo} alt={name}/>
            <h4 className="mt-2 mb-2 font-lato font-bold text-lg text-center leading-2">{name}</h4>
            <p className="font-lato text-center">{country} - {founded}</p>
        </div>
    );
}
export default Card;