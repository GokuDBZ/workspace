class LogInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state          = {errors: [], showSignup: (this.props.login ? false : true), showLogin: (this.props.login ? true : false), message: null}
    this.handleSignup   = this.handleSignup.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
    this.handleSignin   = this.handleSignin.bind(this);
    this.getPath        = this.getPath.bind(this);
    
  }
  
  handleSignup(form_data){
    $.ajax({url: window.location.origin + "/create_user",
      type: 'post',
      data: form_data,
      success: (xhr, textStatus, errorThrown)=>{
        console.log(xhr);
        errors = this.checkForErrors(JSON.parse(xhr.data));
        if(errors){
          this.setState({errors: errors, showLogin: false})}
        else{
          window.location.href = this.getPath(JSON.parse(xhr.data));
          //this.setState({showLogin: true, showSignup: false, message: " User is created successfully. Please Sign In"})
      }},
      error: (xhr, textStatus, errorThrown)=>{ console.log((xhr&& xhr.data)); 
      alert("error")},
      dataType: "JSON"
      
    }).then((data)=>{
      console.log("we are in then");
      console.log(data)
    })
    
  }
  
  checkForErrors(data){
    debugger
    if(data.errors){
      errors = data.errors.map((error) => {return (<li>{error}</li>)});
      return errors;
    }
    else{
      null
    }
  }
  
  getPath(data){
    if(data.path){
      return data.path;
    }
    else{
      return null;
    }
    
  }
  
  handleSignin(data){
    $.ajax({url: window.location.origin + "/signin",
      type: 'post',
      data: data,
      success: (xhr, textStatus, errorThrown)=>{
        console.log(xhr);
        errors = this.checkForErrors(JSON.parse(xhr.data));
        if(errors){
          this.setState({errors: errors, showLogin: true, showSignup: false})
          
        }
        else{
          window.location.href= this.getPath(JSON.parse(xhr.data));
        }},
      error: (xhr, textStatus, errorThrown)=>{ console.log((xhr.data));
      this.setState({errors: ["Invalid email or password"], showLogin: true, showSignup: false})
      },
      dataType: "json"
      
    }).then((data)=>{
      console.log("we are in then");
      console.log(data)
    })
    
  }
  
  render() {
    debugger
    return (
      <div>
        {this.state.message && <div className='alert alert-success success_state'>
            <a href="#" className="close" data-dismiss="alert">×</a>
          <span>{this.state.message}</span>
        </div>
        }
        {this.state.errors && this.state.errors.length > 0 && <div className='alert alert-danger error_state'>
            <a href="#" className="close" data-dismiss="alert">×</a>
          <span>{this.state.errors}</span>
        </div>}
        {this.state.showSignup && <Signup handleSignup = {this.handleSignup}/>}
        { this.state.showLogin && <Login handleSignin = {this.handleSignin}/>}
      </div>  
    );
  }
}