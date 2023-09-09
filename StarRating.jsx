const StarRating = ({ rating }) => {
  // Create an array of size 'rating' to represent the number of stars
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <img
          key={star}
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          alt="Star"
        />
      ))}
    </div>
  );
};

export default StarRating;