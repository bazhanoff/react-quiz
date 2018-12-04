import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout.js';
import Quiz from './containers/Quiz/Quiz.js'

class App extends Component {
    render() {
        return (
            <Layout>
                <Quiz  />
            </Layout>
        );
    }
}

export default App;
