import React from 'react'

import css from './App.css'

export default class App extends React.Component {
    componentWillMount() {
        this.setState({
            html: require('../index.html')
        })
    }

    render() {
        return <div>
            <h1>Hello!</h1>
            <h3>HTML source:</h3>
            <pre className={css.source}><code>{this.state.html}</code></pre>
        </div>
    }
}
