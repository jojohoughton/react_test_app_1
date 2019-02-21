import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {                    // we need this constructor to use THIS and to receive the PROPS from the parent 
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };                       // we're gonna set the initialState to be an obj. with empty properties

        this.state = this.initialState;     // here we're assigning our intialState to this.state
    }

    handleChange = event => {             // this is the func that will run everytime a change is made to the form
        const {name, value} = event.target;
                                    // this EVENT will be passed thru, and we'll set the State of Form to have the 
        this.setState({                 // name (key) and VALUE of the inputs
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);     // this passes the Form state as a param to the handleSumbit func
        this.setState(this.initialState);       // this is to reset the Form after a submission
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type = "text"
                    name = "job"
                    value = {job}
                    onChange={this.handleChange} />   
                <input 
                    type = "button"
                    value = "submit"
                    onClick={this.submitForm} />
            </form>        
        );
    }
}

export default Form;