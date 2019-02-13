import React, { Component } from 'react';

class AddCreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errFields: [],
            ['card-name']: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    throwError() {

    }

    isEmpty(name, value) {
        let curErrFields = this.state.errFields;

        console.log(name);
        console.log(value);

        if (value.length) {
            let arrIndex = curErrFields.indexOf(name);
            curErrFields.splice(arrIndex, 1);
        }
        else {
            curErrFields.push(name);
        }

        this.setState({
            errFields : curErrFields
        });
    }

    validateField(name, value) {
        switch (name) {
            case 'card-name':
                this.isEmpty(name, value);
                break;
            default :
                break;
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
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

        this.setState(formValues); // re-render to fire validation

        // alert('Yo bitch: ' + this.state['card-name'].value);
        event.preventDefault();
    }

    render() {
        console.log('render');
        // console.log(this.state.errFields);
        const hasError = (fieldName) => {
            if (this.state.errFields.indexOf(fieldName) !== -1) {
                return true;
            }
            else {
                return false;
            }
        };

        return (
            <form>
                <div className={'AddCreditCard-form-row' + (hasError('card-name') ? ' error' : '')}>
                    <label>
                        Card name
                        <input 
                            type="text"
                            name="card-name"
                            // value={this.state["card-name"]}
                            onChange={this.handleChange} />
                    </label>
                </div>
                {/* <div className="AddCreditCard-form-row">
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
                </div> */}
                <button type="button" onClick={this.handleSubmit}>Add Card</button>
            </form>
        );
    }
}

export default AddCreditCard;