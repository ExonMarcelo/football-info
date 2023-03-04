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
                                relative box-border max-h-screen overflow-y-scroll
                                scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16]">
                    <div className="modal__container__header">
                        {
                            title &&
                            <h3 className="mt-4 text-lg font-lato font-bold">{title}</h3>
                        }
                        <div className="icon-close absolute top-3 right-3
                                        flex gap-1" onClick={()=> handleClose()}>
                            {/* <img src={iconClose}/> */}
                            <span>Cerrar</span>
                            <i></i>
                        </div>
                    </div>
                    <div className="modal__container__body ">
                        {children}
                    </div>
                </div>
            </div>
        </div>, 
        // <div className="portal-container">
        //     <div className="modal">
        //         <div className="modal__container">
        //             <div className="modal__container__header">
        //                 <h3>{title}</h3>
        //                 <div className="icon-close" onClick={()=> handleClose()}>
        //                     {/* <img src={iconClose}/> */}
        //                 </div>
        //             </div>
        //             <div className="modal__container__body">
        //                 {children}
        //             </div>
        //         </div>
        //     </div>
        // </div>, 
      divPortal
    )
  }
  
  export default PortalModal;