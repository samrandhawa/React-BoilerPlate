import React from 'react';
import {Link} from 'react-router';

export default class Search extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        searchId: 1,
      };
  }

  handleSearch(val){
    this.setState({searchId: val});
  }

  render() {
    const items = this.props.route.data;
    const itemsList = items.map((item) => {
      return (
             <button type="button" className="btn btn-primary" name="search" key={`item${item.id}`} onClick={this.handleSearch.bind(this,item.id)}>{item.title}</button>
         );
    });
      const id = this.state.searchId;
      const item = items.filter(item => {
           if(item.id == id) {
               return item;
           }
       });
         return (
           <div className="row">
             <div className="col-sm-10 col-md-offset-1 col-md-10">
               <h3>Search By Name</h3>
                 <div className="btn-group" role="group" aria-label="...">
                 {itemsList}
                 </div>
                 <hr/>
             </div>
              <div className="col-sm-6 col-md-offset-3 col-md-6">
              <div className="thumbnail">
                  <img src={item[0].url} alt="..."/>
                  <div className="caption">
                    <h4>{item[0].title}</h4>
                    <b><i>Located in:&nbsp;{item[0].location}</i></b>
                    <p>{item[0].desc}</p>
                  </div>
                </div>
              </div>
            </div>
         );
    }
}
