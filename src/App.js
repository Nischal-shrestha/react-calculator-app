import React, { Component } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";
import "./assets/css/App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }

    addToInput = val => {
        this.setState({
            input: this.state.input + val
        });
    };

    handleEqual = () => {
        this.setState({ input: math.eval(this.state.input) });
    };

    uniqueId = () => {
        this.id = this.id || 0;
        return this.id++;
    };

    renderCalculator = calcButtonsArray => {
        return calcButtonsArray.map(row => {
            return (
                <div className="row" key={this.uniqueId()}>
                    {row.map(btn => {
                        return (
                            <Button
                                key={btn}
                                handleClick={
                                    btn === "="
                                        ? this.handleEqual
                                        : this.addToInput
                                }
                            >
                                {btn}
                            </Button>
                        );
                    })}
                </div>
            );
        });
    };

    render() {
        const calc1 = [
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            [".", "0", "="],
            ["/", "*", "+", "-"],
            ["^", "%", "(", ")"]
        ];

        const calc2 = [
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            [".", "0", "=", "+"]
        ];
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Input input={this.state.input} />
                    {this.renderCalculator(calc2)}
                    <div className="row">
                        <ClearButton
                            handleClear={() => {
                                this.setState({ input: "" });
                            }}
                        >
                            Clear
                        </ClearButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
