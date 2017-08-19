class StarsFrame extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var stars = [];
        for(var i=0;i<this.props.numberOfStar;i++){
            stars.push(<span className="glyphicon glyphicon-star"></span>);
        }
        return(
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
            )
    }
}