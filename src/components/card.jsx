
import { useNavigate } from "react-router-dom";

const Card = ({ show }) => {
    console.log(show)
    // const {show} = show1
    const navigate = useNavigate();

  return (
    <div className="card" style={{ width: "20rem",height:"43rem", margin: "1rem" }}>
      <img
        src={show?.show?.image?.original}
        alt={show?.show?.image?.medium}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{show?.show?.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        {show?.show?.rating?.average && <p className="card-text">
          Rating: {show?.show?.rating?.average}
        </p>}
        <p className="card-text">
          Language: {show?.show?.language}
        </p>
        <p className="card-text">
          Type: {show?.show?.type}
        </p>
        <p className="card-text">
          Genre: {show?.show?.genres?.map((genre)=><span class="badge text-bg-secondary m-1">{genre}</span>)}
        </p>
        <button className="btn btn-primary" onClick={()=>{navigate(`./${show?.show?.id}`)}}>View Details</button>
      </div>
    </div>
  );
};

export default Card;
