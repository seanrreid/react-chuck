import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class CategoryList extends Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        const categories = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        );

        this.setState({
            categories
        });
    };

    handleChange = event => {
        this.props.changeCategory(event.target.value);
    };

    render() {
        const { categories } = this.state;
        const { activeCategory } = this.props;

        return (
            <label>
                Change Category
                <select onChange={this.handleChange}>
                    {categories.map((category, id) => {
                        return (
                            <option
                                key={`category-${id}`}
                                value={category}
                                selected={
                                    category == activeCategory ? true : false
                                }
                            >
                                {category}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    }
}

export default CategoryList;
