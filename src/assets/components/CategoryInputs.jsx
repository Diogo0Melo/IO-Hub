import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
function CategoryInputs(props) {
    const [category, setCategory] = useState({ category: "" });
    return (
        <div>
            <Input
                className={"input"}
                type="text"
                placeholder="Category"
                value={category.name}
                setState={setCategory}
                id="category"
                name="Category"
            />
            <div id="signin-button-container">
                <Button
                    className="button"
                    type="submit"
                    title="Adicionar"
                    category={category}
                    page={props.page}
                    to="./"
                />
            </div>
        </div>
    );
}
CategoryInputs.propTypes = {
    page: PropTypes.string,
};
export default CategoryInputs;
