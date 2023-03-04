import React, {useEffect} from "react";
import ReactDOM from 'react-dom'

const PortalModal = ({title, children, handleClose}) => {

    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return ()=>{
            document.body.style.overflowY="scroll";
        }
    },[])

    const divPortal = document.getElementById('portal');

    return ReactDOM.createPortal(
        <div className="portal-container">
            <div className="fixed z-50 h-full w-full top-0 left-0 
                            flex items-center justify-center 
                            bg-neutral-700 bg-opacity-70">
                <div className="modal__container container w-80 p-8 bg-slate-50 rounded-xl 
                                relative box-border max-h-screen overflow-auto
                                md:w-[800px]
                                ">
                    <div className="modal__container__header">
                        {
                            title &&
                            <h3 className="mt-4 text-lg font-lato font-bold">{title}</h3>
                        }
                        <div className="icon-close absolute top-4 right-4 cursor-pointer
                                        flex gap-2 justify-center items-center" onClick={()=> handleClose()}>
                            {/* <img src={iconClose}/> */}
                            <span className="font-lato text-sm font-semibold text-slate-700">Cerrar</span>
                            <i></i>
                        </div>
                    </div>
                    <div className="modal__container__body ">
                        {children}
                    </div>
                </div>
            </div>
        </div>, 
      divPortal
    )
  }
  
  export default PortalModal;