class Login extends React.Component{
    constructor(props){
        super(props)
        this.signin = this.signin.bind(this);
    }
    
    signin(event){
      event.preventDefault();
      this.props.handleSignin({email: $('#email_login').val(),password: $('#password_login').val()})
    }
    
    render(){
        return(
        <div className="login_popup">
            <form className="form-horizontal">
                <div className="form-group">
                  <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-5">
                    <input type="email" className="form-control" id="email_login" placeholder="Email"/>
                  </div>
                </div>
            
                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-5">
                    <input type="password" className="form-control" id="password_login" placeholder="Password"/>
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
                    <button type="submit" className="btn btn-primary" onClick={this.signin}>Sign in</button>
                  </div>
                </div>
            </form>
        </div>    
            );
    }
}