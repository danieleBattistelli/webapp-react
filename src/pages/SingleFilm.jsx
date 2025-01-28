import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm";

// // Dati iniziali del form non compilato
const initialValues = {
    name: "",
    text: "",
    vote: 0,
};


function SingleFilm() {

    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [film, setFilm] = useState(null);
    // Stato di campi del form
    const [formData, setFormData] = useState(initialValues);

    const getFilm = () => {
        axios.get(`${backendUrl}/films/${id}`).then((resp) => {
            setFilm(resp.data.data);
        });
    }

    useEffect(() => {
        getFilm();

    }, []);

    // funzione che invia i dati del form al server quando viene premuto submit
    const storeReview = (formData) => {
        console.log("Submit review", film.id, formData);
        axios
            .post(`${backendUrl}/films/${film.id}/reviews`, formData)
            .then((resp) => {
                console.log(resp);
                // Azzeriamo i campi del form
                setFormData(initialValues);
                // Se il salvataggio della review è andata a buon fine richiediamo i dati aggiornati del libro dal server
                getFilm();
            });
    };




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
                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h2 className="text-center">Invia una nuova recensione</h2>
                                <ReviewForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    onSubmitFunction={storeReview}
                                />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default SingleFilm