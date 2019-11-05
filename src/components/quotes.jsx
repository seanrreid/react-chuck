import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Quote extends Component {
    state = {
        category: "dev",
        quote: "Fetching Quote..."
    };

    async componentDidMount() {
        this.renderQuote();
    }

    renderQuote = async () => {
        const { category } = this.state;

        const response = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = response.value;
        this.setState({
            quote
        });
    };

    refreshQuote = () => {
        this.renderQuote();
    };

    render() {
        const { quote } = this.state;

        return (
            <>
                <p>{quote}</p>
                <button onClick={() => this.refreshQuote()}>
                    Refresh Quote
                </button>
            </>
        );
    }
}

export default Quote;
