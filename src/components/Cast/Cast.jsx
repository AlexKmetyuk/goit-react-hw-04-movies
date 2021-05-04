import { Component } from "react";
import {getMovieCreditsById} from '../../moviesApi.js'

class Cast extends Component {
    state={
        cast: null
    }
   componentDidMount(){
       console.log(this.props)
       getMovieCreditsById(this.props.id)
        .then(data => this.setState({
            cast: data.cast
        }))
   }
    render(){
        const {cast} = this.state

        return(
            <ul>
                {cast && cast.map(cast => 
                <li> <img width='100' alt={cast.name} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}/><h3>{cast.name}</h3> <h4>{cast.character}</h4></li>
                )}
            </ul>
        )
    }
}

export default Cast