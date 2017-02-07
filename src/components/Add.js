import React, {PropTypes, Component} from 'react';

class Add extends Component {

    static propTypes = {
        addNews: PropTypes.func.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            author: '',
            text: '',
            focus: false,
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        }

        this.handleValidate = this.handleValidate.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setState({focus: true})
    }

    onCheckRuleClick(e) {
        this.setState({
            agreeNotChecked: !this.state.agreeNotChecked
        })
    }

    onClickButton(e) {
        e.preventDefault();
        this.props.addNews(this.state)
        this.setState({author: '', text: ''})
    }



    handleValidate(value) {
        return (value.trim().length > 0)
    }

    onChangeAuthor(key, value) {
        if (this.handleValidate(value)) {
            this.setState({[key]: value, authorIsEmpty: false});
        } else {
            this.setState({[key]: value, authorIsEmpty: true});
        }
    }

    onChangeText(key, value) {
        if (this.handleValidate(value)) {
            this.setState({[key]: value, textIsEmpty: false});
        } else {
            this.setState({[key]: value, textIsEmpty: true});
        }
    }

    render() {
        let agreeNotChecked = this.state.agreeNotChecked;
        let authorIsEmpty = this.state.authorIsEmpty;
        let textIsEmpty = this.state.textIsEmpty;

        const onNewAuthorChange = e => this.onChangeAuthor("author", e.target.value);
        const onNewTextChange = e => this.onChangeText("text", e.target.value);

        return (
            <form className='add cf'>
                <input type="text" className='add__author' value={this.state.author} onChange={onNewAuthorChange} placeholder="Enter your name" autoFocus={focus}/>
                <textarea className='add__text' value={this.state.text} onChange={onNewTextChange} placeholder="Enter your news"/>
                <label className='add__checkrule'>
                    <input type="checkbox" onChange={this.onCheckRuleClick}/>
                    I have read and agree to the Privacy Policy
                </label>
                <button onClick={this.onClickButton} className='add__btn' disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
                    ADD NEWS</button>
            </form>
        )
    }

}

export default Add;
