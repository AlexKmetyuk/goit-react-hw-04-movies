import { Component } from "react";
import { getMovieReviewsById } from "../../moviesApi.js";

class Review extends Component {
  state = {
    review: null,
  };

  componentDidMount() {
    getMovieReviewsById(this.props.id).then((data) =>
      this.setState({
        review: data.results,
      })
    );
  }

  render() {
    const { review } = this.state;
    return (
      <ul>
        {review && review.map((review) => (
          <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Review;
