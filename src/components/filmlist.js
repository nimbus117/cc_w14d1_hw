import React, {Component} from 'react';
import Film from './film'

class FilmList extends Component {
  render() {
    const filmNodes = this.props.data.map(film => {
      return <Film key={film.id} name={film.name} url={film.url} />
    })
    return(
      <div className="film-list">
        <h2>Upcomming film releases for the UK</h2>
        <ul>
          {filmNodes}
        </ul>
      </div>
    )
  }
}

export default FilmList;
