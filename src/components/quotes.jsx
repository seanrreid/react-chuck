import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Quote extends Component {
    state = {
        quote: "Fetching quote..."
    };

    async componentDidMount() {
        const { category } = this.props;

        this.setState({
            category
        });

        this.renderQuote(category);
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.setState({
                category: this.props.category
            });
            this.renderQuote(this.props.category);
        }
    }

    renderQuote = async category => {
        const response = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = response.value;
        this.setState({
            quote
        });
    };

    refreshQuote = () => {
        const { category } = this.state;
        this.renderQuote(category);
    };

    render() {
        const { quote, category } = this.state;

        return (
            <>
                <p>{quote}</p>
                <button onClick={() => this.refreshQuote()}>
                    Get another quote from the {category} category
                </button>
            </>
        );
    }
}

export default Quote;
