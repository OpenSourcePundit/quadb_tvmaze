import React,{useState} from "react";
import "./modal.css"

const Modal = ({show}) =>{
    const [modal,setModal] = useState(true);

    const toggleModal = () =>{
        console.log("modal toggled",modal)
        setModal(!modal)
    }

    return(
        <>
        
        <button className="btn-modal btn btn-outline-success"
        onClick={toggleModal}>
            Book Tickets
        </button>

       {modal && 
         <div className="Modal">
         <div className="Overlay" onClick={toggleModal}></div>
         <div className="modal-content">
             <form action="submit">
                 <h2>Book Tickets heading</h2>
                 <form action="submit">
                 {/* <p><strong>Genre:</strong> {show?.show?.genre}</p> */}
                <p><strong>Premiere:</strong> {show?.premiered}</p>
                
                <p><strong>Rating:</strong> {show?.rating?.average}</p>
                <p><strong>Runtime:</strong> {show?.runtime}</p>
                 </form>
                 
                 <button type="button" className="btn-close close-modal" aria-label="Close" onClick={toggleModal}></button>
             </form>
         </div>
     </div>
       }
        
        </>
    )
    
}
export default Modal;

