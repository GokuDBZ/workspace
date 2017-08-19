class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.getData = this.getData.bind(this)
        console.log(this.props)
    }
    // getUrl(){
    //     return { `https://api.github.com/users/+${this.props.name}` }
    // }
    getData(){
        ob= this.props.name
        console.log(ob)
        $.get(`https://api.github.com/users/${this.props.name}`).then((data)=>{
            console.log("===========================")
            console.log(data)
            this.setState(data)
            console.log(this.state)
        })
        
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        //console.log(this.state)
        
        
        return(
             <div>
                    <img src={this.state.avatar_url}/><br/>
                    <span>{this.state.login}</span><br/>
                    <span>{this.state.location}</span>
                    <br/>
                    <hr/>
                </div>
            )
    }
}