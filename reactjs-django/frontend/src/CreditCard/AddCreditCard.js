import React, { Component } from 'react';

class AddCreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errFields: [],
            fieldValues: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    throwError() {

    }

    isEmpty(name, value) {
        if (value.length) {
            let arrIndex = this.state.errFields.indexOf(name);
            this.setState.errFields.splice(arrIndex, 1);
        }
        else {
            this.setState.errFields.push(name);
        }
    }

    validateField(name, value) {
        switch (name) {
            case 'card-name':
                this.isEmpty(value);
                break;
            default :
                break;
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const formValues = this.state;
        // const validateFcn = this.validateField;

        // can't access super, this refers to object
        // Object.keys(this.state).map(function (key) {
        //     validateFcn.validateField(key, formValues[key]);
        // });

        Object.keys(this.state).map((key) => (
            this.validateField(key, formValues[key])
        ))

        console.log(this.state.errFields);

        // alert('Yo bitch: ' + this.state['card-name'].value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card name
                        <input 
                            type="text"
                            name="card-name"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card balance
                        <input 
                            type="number" 
                            name="card-balance"
                            step="0.01" 
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card credit limit
                        <input 
                            type="number" 
                            name="card-credit-limit"
                            step="0.01"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card due date
                        <input
                            type="number"
                            name="card-due-date"
                            max-length="2"
                            max-value="31"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card APR
                        <input 
                            type="number" 
                            name="card-apr"
                            step="0.01"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <button type="button" onClick={this.handleSubmit}>Add Card</button>
            </form>
        );
    }
}

export default AddCreditCard;