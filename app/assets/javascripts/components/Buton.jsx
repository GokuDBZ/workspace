class Buton extends React.Component{
    // getInitialState(){
    //     return {val:0};
    // }
    // getInitialState is not used when we create component using class
    constructor(props){
        super(props)
        this.state = {val:0}
        //this.change = this.change.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.handleClick(this.props.increment)
        
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.props.increment}</button>
            )
    }
    
}