import iconInformation from '../../../assets/ic-information.png';
import iconBoxEmpty from '../../../assets/ic-box-empty.png';

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

export default SectionInformation;