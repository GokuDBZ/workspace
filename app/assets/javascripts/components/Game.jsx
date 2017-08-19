class Game extends React.Component{
    constructor(props){
        super(props)
        
        this.state={selectedNumbers : [], 
            numberOfStar: Math.floor(Math.random()*9)+1,
            isCorrect: null,
            usedNumbers: [],
            no_of_tries: 5,
            message: null
        }
        this.resetGame = this.resetGame.bind(this)
        this.clickNumber = this.clickNumber.bind(this)
        this.unSlelectNumber = this.unSlelectNumber.bind(this)
        this.getTheResult = this.getTheResult.bind(this)
        this.acceptTheAnswer = this.acceptTheAnswer.bind(this)
        
    }
    
    clickNumber(number){
        if(!this.state.selectedNumbers.includes(number ) && !this.state.usedNumbers.includes(number)){
         this.setState({selectedNumbers:this.state.selectedNumbers.concat(number),correct: null})   
        }
    }
    acceptTheAnswer(){
        answers = this.state.selectedNumbers;
        this.setState({usedNumbers: this.state.usedNumbers.concat(answers),correct:null,numberOfStar:Math.floor(Math.random()*9)+1,selectedNumbers:[] })
    }
    sendMessage(message){
        
    }
    resetGame(){
        if(this.state.usedNumbers.length > 0){
            if(this.state.no_of_tries  == 0)
            {
               alert("You loose the game. Please refersh the page to play new game")
            }
            else{
            this.setState({ no_of_tries: this.state.no_of_tries - 1,
                numberOfStar: Math.floor(Math.random()*9)+1,
                usedNumbers: [],
                correct: null,
                message: this.state.no_of_tries - 1+ "are left"
            })
            }
        }
    }
    
    getTheResult(){
        if(this.state.selectedNumbers.reduce((m,n)=>{return m+n},0) == this.state.numberOfStar){
            this.setState({correct:true})   
        }
        else{
           this.setState({correct:false}) 
        }
    }
    
    unSlelectNumber(number){
        index = this.state.selectedNumbers.indexOf(number)
        this.state.selectedNumbers.splice(index,1)
        this.setState({selectedNumbers: this.state.selectedNumbers,correct:null})
        }
        
    
    render(){
        return(
            <div id="game" className="container col-md-12">
                <h1>9 Games</h1>
                <hr/>
                <div className="clearfix">
                    <StarsFrame  numberOfStar={this.state.numberOfStar}/>
                    <ButtonFrame count={this.state.selectedNumbers.length} correct={this.state.correct} getTheResult={this.getTheResult} acceptTheAnswer={this.acceptTheAnswer} no_of_tries={this.state.no_of_tries} resetGame={this.resetGame}/>
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers} unSlelectNumber={this.unSlelectNumber} count={this.state.selectedNumbers.length}/>
                </div>
                <Message message={this.state.message}/>
                <NumberFrame selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber} usedNumbers ={this.state.usedNumbers} />
            </div>
            )
    }
}