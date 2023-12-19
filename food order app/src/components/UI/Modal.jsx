import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children,className='',open, onClose}) {
    const dialog = useRef()

    useEffect(()=>{

        const modal = dialog.current
        if(open){
            modal.showModal()
        }

        // cleanu function runs when open ivalue is changed
        // storing a snapshot of the modla is recommened, in the case that modal reference is changed

        // first render: activted by open,
        // the resrender is when we try to close it, and the dependency changed, therefore, we run the clwanup function
        return ()=> modal.close()
    },[open])


  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
