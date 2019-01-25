import React, { Component } from 'react';

function Pet (props) {

    return (
      <div className="Animals">
        <section className='cats-to-adopt'>
          <header>
            <h2>{props.animal.name}</h2>
            <img src={props.animal.imageURL} alt={props.animal.imageDescription}></img>
          </header>
          <main className='main'>
          <dl className='details-list'>
            <dt>{props.animal.sex}</dt>
            <dt>{props.animal.age}</dt>
            <dt>{props.animal.breed}</dt>
            <dt>{props.animal.story}</dt>
          </dl>
          <button type='button' onClick={props.onAdoptPet}>Adopt</button>
        </main>
        </section>
      </div>
    );
}

const mapStateToProps = state => ({
  catToAdopt: state,
  dogToAdopt: state
})

export default Pet;