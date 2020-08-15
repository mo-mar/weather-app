import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Select = styled.select`
    margin-left: 8px;
`;

const Input = styled.div`
    padding: 6px 2px;
    margin: 12px 0;
    border-bottom: 2px solid black;
    input {
        border: none;
    }
    input:focus {
        outline: 1px solid tomato;
        padding: 4px;
    }
    i {
        margin-left: 4px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export default function WeatherForm(props) {
    return (
        <Form onSubmit={props.handleSubmit} data-testid="weather-form">
            <label htmlFor="unit">
                <span>Show temperatures in</span>
                <Select
                    id="unit"
                    onChange={props.handleDropdownChange}
                    data-testid="unit-dropdown"
                >
                    <option defaultValue="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </Select>
            </label>
            <Input>
                <input
                    placeholder="Location"
                    type="text"
                    onChange={(e) => props.handleChange(e)}
                />
                <i onClick={props.handleSubmit} className="fas fa-search"></i>
            </Input>
        </Form>
    );
}
