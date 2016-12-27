import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  render() {
    const items = this.props.route.data;
       const item = items.map((item) => {
         return (
          <Link to={"/detail/"+item.id} key={`item${item.id}`}>
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <img src={item.url} alt="..."/>
                <div className="caption">
                  <h4>{item.title}</h4>
                  <b><i>Located in:&nbsp;{item.location}</i></b>
                  <p>{`${item.desc.substring(0,220)}...`}</p>
                </div>
              </div>
            </div>
          </Link>
         )
       });
      return (
        <div className="row">
        {item}
       </div>
      );
    }
}
