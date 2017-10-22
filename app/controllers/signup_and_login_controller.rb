class SignupAndLoginController < ApplicationController
    #skip_before_action :index, only: [:create_user]
    before_action :user_signed_in? , only: [:signup]
    
    def signup
    end
    
    def user_signed_in?
        if logged_in?.present?
            redirect_to user_path(User.find(session[:user_id]))
        end
    end
    
    def create_user
        user = User.new({user_name: params[:user_name],email: params[:email],password: params[:password]})
        result = {}
        if user.save
            result[:success] = true
            session[:user_id] = user.id
            result[:path] = user_path(user)
        else
            result[:success] = false
            result[:errors] = user.errors.full_messages
        end
        render json: {:data => result.to_json} , status: :ok 
    end
    
    def signout
        session[:user_id] = nil
        redirect_to articles__path 
    end
    
    def signin
        user  = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {:data => {:sucess => true,:path => user_path(user)}.to_json}
        elsif !user.present?
            render json: {:data =>{:success => false}.to_json}, :status => :unprocessable_entity 
        end
        #render json: {:data => {errors: "User seems not registered with us"}}
    end
end