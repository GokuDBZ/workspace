class MainCard extends React.Component{
    constructor(props){
        super(props)
        this.addCard = this.addCard.bind(this)
        this.state = {logins:[]}
        
    }
    addCard(login){
        console.log("login"+login)
        this.setState({logins: this.state.logins.concat(login), })
    }
   
    render(){
        console.log("state")
        console.log(this.state.logins)
        var cards = this.state.logins.map((p)=>{ return(<div><Card name={`${p}`}/></div>)})
        return(
            
            <div><Form addCard = {this.addCard}/>
            {cards}
            </div>
           //
            )
    }
}