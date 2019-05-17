class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            Count: 0,
        };
    }
    handlePlusOne() {
        this.setState((prevState)=>{
            return {
                Count: prevState.Count +1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                Count: prevState.Count -1
            }
        })
    }
    handleReset() {
        this.setState(()=> {
            return {
            Count: 0
            }
        })
    }
    componentDidMount() {
            const json = localStorage.getItem('Count')
            const Count = parseInt(json, 10)

            if (!isNaN(Count)) {
                this.setState(()=> ({ Count }))
                }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.Count) {
            localStorage.setItem('Count', this.state.Count)
        }
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.Count} </h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));