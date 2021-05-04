import { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    query: "",
  };

  componentDidMount() {
    this.setState({
      query: this.props.query,
    });
  }

  handleChange = (event) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.props.onSubmit(this.state.query);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
