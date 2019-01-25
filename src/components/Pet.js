import React, { Component } from 'react';

function Pet (props) {

    return (
      <div className="Animals">
        <section className='cats-to-adopt'>
          <header>
            <h2>{props.animal.name}</h2>
            <img src={props.animal.imageURL} alt={props.animal.name}></img>
          </header>
          <main className='main'>
          <dl>
            <dt></dt>
          </dl>
          <button>Adopt</button>
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