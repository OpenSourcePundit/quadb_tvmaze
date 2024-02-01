import { useParams,useNavigate } from "react-router-dom";
import { useData } from "../../dataContext";
import Modal from "../../components/modal/modal";


const SingleShowPage = () =>{
    const {id} = useParams()
    const {data} = useData()
    const navigate = useNavigate();

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
                <p><strong>Genre:</strong> {show?.show?.genres?.map((genre)=><span class="badge text-bg-secondary m-1">{genre}</span>)}</p>
                <p><strong>Premiere:</strong> {show?.show?.premiered}</p>
                
                
                {show?.show?.rating?.average && <p><strong>Rating:</strong> {show?.show?.rating?.average}</p>}
                <p><strong>Runtime:</strong> {show?.show?.runtime}</p>
                <p><strong>Language:</strong> {show?.show?.language}</p>
                <p><strong>Type:</strong> {show?.show?.type}</p>
                
                <p>
                <strong>Summary:</strong> 
                <span dangerouslySetInnerHTML={{ __html: show?.show?.summary }} />

                <a className="btn btn-outline-success"
   target="_blank"
   rel="noreferrer"
   href={`${show?.show?.url}`}>
       Open Original
</a>



                {/* <button className="btn-modal btn btn-outline-success"
        onClick={()=>navigate(`./${show?.show?.url}`)}>
            Open Original
        </button> */}

                
                <Modal show={show.show}/>
               
            </p>
            </div>
            
        </div>
       </>}
    </div>
    )
}

export default SingleShowPage;