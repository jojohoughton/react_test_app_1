import React, {Component} from 'react';

class App extends Component {
    state = {
        data: []
    };
            // below is a React LIFECYCLE method == LIFECYCLE is the order in which methods are called in React
            // MOUNTING refers to an item being inserted into the DOM
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*#';

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return <ul>{result}</ul>;
    }
}

export default App;