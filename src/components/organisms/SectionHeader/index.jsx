import FormSearch from "../../molecules/formSearch";

const SectionHeader = () => {
    return(
        <section className="container">
            <h1 className="text-3xl xl:text-4xl font-lato font-bold leading-8 
                        text-gray-700 mb-8">Buscador de Equipos</h1>
            <FormSearch/>
            
        </section>
    );
}
export default SectionHeader;