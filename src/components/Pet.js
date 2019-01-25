import React from 'react';

import '../pet.css';

export function Pet(props) {
    if(!props.animal) {
      return(
        <div className="Animals">
        There are no {props.animalType} available at this time.
        </div>
      )
    }
    
    return (
      <div className="Animals">
        <section className='cats-to-adopt'>
          <header>
            <h2>{props.animal.name}</h2>
            <img src={props.animal.imageURL} alt={props.animal.imageDescription}></img>
          </header>
          <main className='main'>
            <dl className='details-list'>
              <dt>Sex: {props.animal.sex}</dt>
              <dt>Age: {props.animal.age}</dt>
              <dt>Breed: {props.animal.breed}</dt>
              <dt>Story: {props.animal.story}</dt>
            </dl>
            <button type='button' onClick={props.onAdoptPet}>Adopt</button>
          </main>
        </section>
      </div>
    );
}

export default Pet;