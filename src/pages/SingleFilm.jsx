import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from  "../components/ReviewCard"




function SingleFilm() {

    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [film, setFilm] = useState(null);

    useEffect(() => {
        axios.get(`${backendUrl}/films/${id}`).then((resp) => {
            setFilm(resp.data.data);
        });
    }, []);

    return (
        <>
            {film && (
                <>
                    <section className="text-center mt-3">
                        <img
                            className="img-fluid max-height-600 "
                            src={`${backendUrl}${film.image}`}
                            alt="film"
                        />
                        <h1>{film.title}</h1>
                        <h2 className="text-primary" >{film.director}</h2>
                        <h2 className="text-secondary" >{film.genre}</h2>
                        <h2 className="text-success" >{film.release_year}</h2>
                        <h3 className="text-warning" >{film.abstract}</h3>
                    </section>
                    <section>
                        <div className="row row-cols-1 g-3">
                            {film.reviews.map(review =>
                                <ReviewCard key={review.id} review={review} />)}
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default SingleFilm