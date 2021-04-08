import React, { Component } from 'react';
import BoxCard from "./BoxCard";

class BoxesList extends Component {
    state = {
        persons: [
            {
                name: "Maria",
                age: 25,
                title: "CEO"
            },
            {
                name: "Heidi",
                age: 36,
                title: "Designer"
            },
            {
                name: "Laura",
                age: 30,
                title: "Developer"
            },
        ],
    };

    handleClick = () => {
        this.setState({
            persons: [
                {
                    name: "Maria",
                    age: 25,
                    title: "Teacher"
                },
                {
                    name: "Heidi",
                    age: 36,
                    title: "Student"
                },
                {
                    name: "Laura",
                    age: 30,
                    title: "Student"
                },
            ],
        });
    };

    render() {
        return (
            <nav className="wrapper">
                <button onClick={this.handleClick}>Click me main page</button>
                <main>
                    <BoxCard name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        title={this.state.persons[0].title} />
                    <BoxCard
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        title={this.state.persons[1].title} />
                    <BoxCard
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        title={this.state.persons[2].title} />
                </main>
            </nav>
        );
    }
}

export default BoxesList;