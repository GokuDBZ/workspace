class Signup extends React.Component{
    constructor(props){
        super(props)    
        this.sign_up = this.sign_up.bind(this)
    }
    sign_up(event){
    event.preventDefault();
     this.props.handleSignup({user_name: $('#user_name').val(),email:  $('#email').val(), password: $('#password').val()}) 
    }
    
    render(){
        return(
            <div className="signup_popup">        
                <form className="form-horizontal" id="signup_form">
                <div className="form-group">
                  <label for="inputEmail3" className="col-sm-2 control-label">User Name</label>
                  <div className="col-sm-5">
                    <input type="text" className="form-control" id="user_name" placeholder="User Name"/>
                  </div>
                </div>
            
                <div className="form-group">
                  <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-5">
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                  </div>
                </div>
            
                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-5">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-5">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"/> Remember me
                      </label>
                    </div>
                  </div>
                </div>
            
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-5">
                    <button type="submit" className="btn btn-primary" onClick={this.sign_up}>Sign in</button>
                  </div>
                </div>
            </form>
        </div>
            )
    }
    
}