import React, {Component} from 'react';
import Table from './Table_State';
import Form from './Form';
                                                // this is using State instead of Props
                                                
class App extends Component {
    state = {                               // we have contained all of this data in our State now
        characters: [
            
        ]
    };

    removeCharacter = index => {
        const {characters} = this.state;      // this is ES6 syntax for getting this.state.characters
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index; 
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const {characters} = this.state;

    return(
        <div className="container">
            <Table
                charData={characters}
                removeCharacter={this.removeCharacter}
            />
            <Form handleSubmit={this.handleSubmit} />
        </div>        
    );
}
}

// removeCharacter = index => {
//     const {characters} = this.state;      // this is ES6 syntax for getting this.state.characters

//     this.setState({
//         characters: characters.filter((character, i) => {
//             return i !== index; 
//         })
//     });
// }

export default App;