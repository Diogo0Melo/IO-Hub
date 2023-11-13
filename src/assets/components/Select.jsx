import getCountriesAPI from "../js/getCountriesAPI";
import getCategoriesAPI from "../js/getCategoriesAPI";
import "../styles/Select.css";
import PropTypes from "prop-types";
import React from "react";

class Select extends React.Component {
    static propTypes = {
        disabledOption: PropTypes.string,
        page: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        setState: PropTypes.func,
        value: PropTypes.object,
        className: PropTypes.string,
        size: PropTypes.number,
        onChange: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    async componentDidMount() {
        const page = window.location.pathname;

        if (page === "/game" || page === "/search") {
            const categories = await getCategoriesAPI();
            this.setState({ data: categories });
            console.log(categories);
            return;
        }
        const countries = await getCountriesAPI();
        this.setState({ data: countries });
        console.log(countries);
    }
    render() {
        const returnCategories = () => {
            return this.state.data.map((category) => {
                return (
                    <option
                        key={category.name || category}
                        value={JSON.stringify(category)}
                    >
                        {category.name || category}
                    </option>
                );
            });
        };
        const onChange = (e) => {
            const { id, value } = e.target;

            this.props.setState((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        };

        return (
            <div id="select-container">
                {this.props.page === "/search" || (
                    <label htmlFor={this.props.id}>
                        Categorias Disponiveis
                    </label>
                )}
                <select
                    name={this.props.name}
                    value={this.props.value}
                    id={this.props.id}
                    onChange={
                        this.props.onChange ? this.props.onChange : onChange
                    }
                    className={this.props.className}
                    // size={this.props.size ? this.props.size : undefined}
                >
                    <option value={""} disabled>
                        {this.props.disabledOption}
                    </option>
                    {this.state.data.length && returnCategories()}
                </select>
            </div>
        );
    }
}

export default Select;
