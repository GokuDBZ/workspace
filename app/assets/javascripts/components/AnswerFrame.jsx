class AnswerFrame extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        unSlelectNumber = this.props.unSlelectNumber
        message = <p className="message_on_empty">Please select numbers given below equivalent to stars and click <span className="badge">=</span>for result</p>
        numb = this.props.selectedNumbers.map((p)=>{return <span onClick={unSlelectNumber.bind(null,p)} disabled>{p}</span>})
        return(
            <div id="answer-frame">
                <div className="well">{this.props.count > 0 ? numb : message}</div>
            </div>
            )
    }
}