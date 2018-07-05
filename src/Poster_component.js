import React from 'react';

export default class posterComponent extends React.Component {
    render () {
      return ( 
        <div className="poster-image">
          <img src={this.props.src} alt={this.props.alt}/>  
          <div className="title-overlay">
            <label>{this.props.posterTitle}</label>
          </div>
        </div>
      )
    }
};



        //   <div className="poster-image">
        //     <img src={A_City_of_Sadness} alt="A_City_of_Sadness"/>
        //     <div className="title-overlay">
        //       <h1>A City of Sadness</h1>
        //     </div> 
        //   </div>
        //   <div className="poster-image">
        //     <img src={Games_of_Thrones} alt="Games_of_Thrones" />
        //     <div className="title-overlay">
        //       <h1>Games of Thrones</h1>
        //     </div>             
        //     </div>
        //   <div className="poster-image">
        //     <img src={House_of_Cards} alt="House_of_Cards" />
        //     <div className="title-overlay">
        //       <h1>House of Cards</h1>
        //     </div>
        //   </div>
        // </div>
        // <div className="poster-container">
        //   <div className="poster-image">
        //     <img src={Robin_Hood} alt="Robin_Hood" />
        //     <div className="title-overlay">
        //       <h1>Robin Hood</h1>
        //     </div>
        //   </div>
        //   <div className="poster-image">
        //     <img src={Sherlock} alt="Sherlock" />
        //     <div className="title-overlay">
        //       <h1>Sherlock</h1>
        //     </div>
        //   </div>
        //   <div className="poster-image">
        //     <img src={Breaking_Bad} alt="Breaking_Bad" />
        //     <div className="title-overlay">
        //       <h1>Breaking Bad</h1>
        //     </div>
        //   </div>