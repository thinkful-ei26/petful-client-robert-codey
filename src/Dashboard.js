import React, { Component } from 'react';
import Pet from './components/Pet';

function Dashboard(props) {

  const catToAdopt = [{
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }] 

  const dogToAdopt = [
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    }
  ];

    return (
      <div className="Dashboard">
        <Pet animal={catToAdopt[0]}/>
        <Pet animal={dogToAdopt[0]}/>
      </div>
    );
}

const mapStateToProps = state => ({
  catToAdopt: state,
  dogToAdopt: state
})

export default Dashboard;