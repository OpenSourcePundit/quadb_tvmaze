import { useParams } from "react-router-dom";
import { useData } from "../../dataContext";
import Modal from "../../components/modal/modal";


const SingleShowPage = () =>{
    const {id} = useParams()
    const {data} = useData()

    const show = data?.find((show)=>show?.show?.id==id)
    

    return(
        <div className="container">
             
       {data && <>
        <h1 className="mt-4">Show Details</h1>
        <div className="row">
            {show?.show?.image?.original && <div className="col-md-6">
                <img src={show?.show?.image?.original} alt={show?.name} className="img-fluid" />
            </div>}
        
            <div className="col-md-6">
                <h2>{show?.show?.name}</h2>
                <p><strong>Genre:</strong> {show?.genre}</p>
                <p><strong>Premiere:</strong> {show?.show?.premiered}</p>
                
                <p><strong>Rating:</strong> {show?.rating}</p>
                <p><strong>Runtime:</strong> {show?.runtime}</p>
                <p>
                <strong>Summary:</strong> 
                <span dangerouslySetInnerHTML={{ __html: show?.show?.summary }} />
                
                <Modal show={show.show}/>
               
            </p>
            </div>
            
        </div>
       </>}
    </div>
    )
}

export default SingleShowPage;