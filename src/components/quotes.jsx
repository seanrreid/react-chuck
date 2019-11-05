import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Fetching Quote..."
    };

    async componentDidMount() {
        this.renderQuote();
    }

    loadData = async () => {
        const url = "https://api.chucknorris.io/jokes/random?category=dev";
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    renderQuote = async () => {
        const response = await this.loadData();
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
