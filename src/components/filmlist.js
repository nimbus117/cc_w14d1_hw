import React, {Component} from 'react';
import Film from './film'

class FilmList extends Component {
  filmNodes = this.props.data.map(film => {
    return <Film key={film.id} name={film.name} url={film.url} />
  })
  render() {
    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;
