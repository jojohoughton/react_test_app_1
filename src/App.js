import React, {Component} from 'react';
import Table from './Table';
                                                // this is using Props
class App extends Component {
    render() {
        const characters = [
            {
                'name' : 'Charlie',
                'job' : 'Janitor'
            },
            {
                'name' : 'Mac',
                'job' : 'Bouncer'
            },
            {
                'name' : 'Dee',
                'job' : 'Actress'
            },
            {
                'name' : 'Dennis',
                'job' : 'Bartender'
            }
        ];
        return(
            <div className="container">
                <Table charData={characters} />
            </div>
        );
    }
}

export default App;
