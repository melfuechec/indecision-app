class IndecisionApp extends React.Component {
    constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
        options: []
    };
}
componentDidMount() {
    console.log('component did mount');
}
componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
}
componentWillUnmount() {
    console.log('component will unmount');
}
handleDeleteOptions() {
    this.setState(()=>({ options: [] }))
    }
handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
        options: prevState.options.filter((option) => optionToRemove !== option)
    }));
}
handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
}
handleAddOption(option) {
    if (!option) {
        return 'Enter valid value to add option.';
    } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
    }
    this.setState((prevState)=> ({ options: prevState.options.concat(option)}))
}
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        
        return (
            <div>
                <Header title = {title} subtitle= {subtitle}/>
                <Action 
                    handlePick = {this.handlePick}
                    hasOptions = {this.state.options.length > 0} />
                <Options 
                    options = {this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption} />
                <AddOptions 
                    handleAddOption = {this.handleAddOption}
                    options = {this.state.options} />
            </div>
        )
    }
}

const Header = (props) => {
        return (
            <div>
                <h1> {props.title} </h1>
                <h2> {props.subtitle} </h2>
            </div>
        )
}
const Action = (props) => {
    return (
            <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What Should I Do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {props.options.length === 0 && 'Please add an option to get started!'}
            {
                props.options.map((option) => 
                    <Option 
                        key= {option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
        </div>
    )
}

const Option = (props) => {
        return (
        <div>
        {props.optionText}
        <button 
            onClick={(e)=>props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
        )
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{({ error })});
        if (!error) {
        e.target.elements.option.value = "";
        }
    }
    render () {
        return <div>
        {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))