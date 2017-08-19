class Lift extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        $('#hello').fadeOut(500)
        $('#hello').delay(2000).fadeIn(500)
        
        
    }
    
    
    render(){
        return(
            <div id="hello">{this.props.data.lift_name}</div>
            
            )
    }
    
}