import React, { Component } from 'react';
import AnimalCard from "./AnimalCard";
import SearchBox from "./SearchBox";
import "./Animal.css";

import { animals } from "./animals";

class AnimalsList extends Component {
    state = {
        animals: animals,
        searchInput: "",
    };

    clickHandler = (somethingstupid) => {
        alert("Hello, my name is " + somethingstupid);
    };

    searchValueHandler = (event) => {
        this.setState({
            searchInput: event.target.value,
        });
        console.log(this.state.searchInput);
    };

    render() {
        const animalFilter = this.state.animals.filter
            (animal => {
                return animal.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
            });

        const animalsList = animalFilter.map((animal) => {
            return (
                <AnimalCard
                    name={animal.name}
                    img={animal.img}
                    clickMe={() => this.clickHandler(animal.name)}
                    /*clickMe={this.clickHandler.bind(this, animal.name)}*/
                    key={animal.id}
                />
            );
        });
        return (
            <div>
                <SearchBox search={this.searchValueHandler} />
                <p>{this.state.searchInput}</p>
                <div className="animallist"> {animalsList}</div>
            </div>
        );
    }
}

export default AnimalsList;