class Message extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $('#message').fadeIn(500)
        $('#message').delay(1000).fadeOut(500)
    }
    render(){
        return(
            <span id="message" class="alert alert-warning">{this.props.message}</span>
            )
    }
}