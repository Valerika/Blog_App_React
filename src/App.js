import React, {Component} from 'react';
import Add from './components/Add';
import News from './components/News';
import logo from './logo.svg';
import './App.css';

const news = [
    {
        author: 'Author1',
        text: 'News1',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dolor eget mauris imperdiet euismod. Maecenas euismod laoreet mauris in tincidunt. Nunc laoreet lacus et est imperdiet, quis malesuada urna.'
    }, {
        author: 'Author2',
        text: 'News2',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dolor eget mauris imperdiet euismod. Maecenas euismod laoreet mauris in tincidunt. Nunc laoreet lacus et est imperdiet, quis malesuada urna.'
    }, {
        author: 'Author3',
        text: 'New3',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dolor eget mauris imperdiet euismod. Maecenas euismod laoreet mauris in tincidunt. Nunc laoreet lacus et est imperdiet, quis malesuada urna.'
    }
];

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            news: news
        }
        this.addNews = this.addNews.bind(this);
    }

    addNews(obj) {
        this.setState({news: this.state.news.concat(obj)})
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React News App</h2>
                </div>
                <Add addNews={this.addNews.bind(this)}/>
                <h3>News</h3>
                <News data={this.state.news}/>
            </div>
        )
    }
}

export default App;
