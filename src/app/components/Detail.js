import React from 'react';
export default class Detail extends React.Component {
  render() {
    const items = this.props.route.data;
      const id = this.props.params.id;
      const item = items.filter(item => {
           if(item.id == id) {
               return item;
           }
       });
         return (
           <div className="row">
              <div className="col-sm-7 col-md-7">
                  <img src={item[0].url} alt="..." className="img-thumbnail"/>
              </div>
              <div className="col-sm-5 col-md-5">
                <div className="caption">
                  <h4>{item[0].title}</h4>
                  <b><i>Located in:&nbsp;{item[0].location}</i></b>
                  <p>{item[0].desc}</p>
                </div>
              </div>
            </div>
         );
    }
}
