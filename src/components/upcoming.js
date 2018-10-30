import React, {Component} from 'react';

class Upcomming extends Component {
  render() {
    return(
      <div className='upcomming'>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    )
  }
}

export default Upcomming;
