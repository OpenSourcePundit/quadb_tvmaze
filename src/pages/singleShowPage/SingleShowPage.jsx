import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../dataContext";
import Modal from "../../components/modal/modal";

const SingleShowPage = () => {
  const { id } = useParams();
  const { data } = useData();
  const navigate = useNavigate();

  const show = data?.find((show) => show?.show?.id == id);

  return (
    <div className="container p-5">
      {data && (
        <>
          <div className="row">
            {show?.show?.image?.original && (
              <div className="col-md-5  ">
                <img
                  src={show?.show?.image?.original}
                  alt={show?.name}
                  className="img-fluid"
                />
              </div>
            )}

            <div className="col-md-6">
              <h2>{show?.show?.name}</h2>
              <p>
                <strong>Genre:</strong>{" "}
                {show?.show?.genres?.map((genre) => (
                  <span key={genre} className="badge text-bg-secondary m-1">{genre}</span>
                ))}
              </p>
              <p>
                <strong>Premiere:</strong>{" "}
                {show?.show?.premiered ? show?.show?.premiered : "N/A"}
              </p>

              <p>
                <strong>Rating:</strong>
                {show?.show?.rating?.average
                  ? show?.show?.rating?.average
                  : "N/A"}
              </p>
              <p>
                <strong>Runtime:</strong> {show?.show?.runtime}
                {show?.show?.runtime ? show?.show?.runtime : "N/A"}
              </p>
              <p>
                <strong>Language:</strong> {show?.show?.language}
                {show?.show?.language ? show?.show?.language : "N/A"}
              </p>
              <p>
                <strong>Type:</strong> {show?.show?.type}
                {show?.show?.type ? show?.show?.type : "N/A"}
              </p>

              <p>
                <strong>Summary:</strong>
                <span
                  dangerouslySetInnerHTML={{ __html: show?.show?.summary }}
                />

                <a
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  href={`${show?.show?.url}`}
                >
                  Open Original
                </a>

                
              </p>
              <Modal show={show.show} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleShowPage;
