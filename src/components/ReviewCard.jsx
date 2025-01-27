import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Implemento le stelle per il rating dei film
const renderStars = (vote) => {
    const fullStars = Math.ceil(vote / 2);
    const emptyStars = 5 - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={{ color: '#ffc107' }} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ color: '#e4e5e9' }} />);
    }
    return stars;
  }

function ReviewCard({ review }) {
    return (
        <div className="card text-center">
            <div className="card-body">
                <h4>Scritto da {review.name}</h4>
                <p><strong>Voto</strong>{renderStars(review.vote)}</p>
                <p><strong>Review: </strong>{review.text}</p>
            </div>

        </div>
    )
}

export default ReviewCard;