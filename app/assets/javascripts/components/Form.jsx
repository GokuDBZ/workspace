class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
     handleSubmit(e){
         e.preventDefault();
         var login_input = $("#login").val();
         this.props.addCard(login_input)
         //login_input.value = ''
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="github login" id="login"/>
                    <button>Submit</button>
                </form>
            </div>
            )
    }
}