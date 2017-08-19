class ButtonFrame extends React.Component{
    constructor(props){
        super(props)
        this.buttonTorender = this.buttonTorender.bind(this)
    }
    
    
    buttonTorender(correct,getTheResult){
        switch(correct){
            case true:
                return (<button className="btn btn-success" onClick={this.props.acceptTheAnswer}> <span className="glyphicon glyphicon-ok"></span></button>
                       );
                break;
            case false:
                 debugger
                 return (<button className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span></button>);
                 break;
            default:
                return (<button className="btn btn-primary" disabled={this.props.count == 0} onClick={getTheResult}>=</button>);
                break;
                    
            }
    }
    render(){
        correct = this.props.correct;
        return(
            <div id="button-frame">
                {this.buttonTorender(correct,this.props.getTheResult)}
                <button className="glyphicon glyphicon-refresh refresh" onClick={this.props.resetGame}>
                </button>
            </div>
            
            )
    }
}