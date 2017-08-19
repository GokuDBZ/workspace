class Main extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {counter: 0}
        this.change = this.change.bind(this)
    }
       change(counter){
        this.setState({
            counter:this.state.counter+counter,
        });
  }
    
    render(){
        return(
           <div>
            <Buton handleClick={this.change} increment={1}/>
            <Buton handleClick={this.change} increment={5}/>
            <Result localcounter={this.state.counter}/>
            </div>
              )
    }
}