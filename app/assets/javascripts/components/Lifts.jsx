class Lifts extends React.Component {
    getInitialState(){
        lifts:{this.props.lifts}
    }
    getDefaultProps(){
        lifts:[]
    }
  render() {
    return (//<h2>{this.props.message}</h2
        
        //lifts.map((p)=>{ <div><Lift name={p.lift_name}/></div>})
           <Lift data={this.props.data[0]}/> 
        )
  }
}