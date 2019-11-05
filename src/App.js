import React, { Component } from "react";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";
import "./App.css";

class App extends Component {
    state = {
        category: "dev"
    };

    changeCategory = category => {
        this.setState({
            category
        });
    };

    render() {
        const { category } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Chuck Norris Reacts!!!</h1>
                </header>
                <Quote category={category} />
                <br />
                <CategoryList
                    activeCategory={category}
                    changeCategory={category => this.changeCategory(category)}
                />
            </div>
        );
    }
}

export default App;
