import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Quote extends Component {
    state = {
        quote: "Fetching Quote..."
    };

    async componentDidMount() {
        this.renderQuote();
    }

    renderQuote = async () => {
        const response = await loadData(
            "https://api.chucknorris.io/jokes/random?category=dev"
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
