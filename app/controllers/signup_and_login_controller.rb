class SignupAndLoginController < ApplicationController
    #skip_before_action :index, only: [:create_user]
    
    def signup
        
    end
    
    def create_user
        user = User.new({user_name: params[:user_name],email: params[:email],password: params[:password]})
        result = {}
        if user.save
            result[:success] = true
        else
            result[:success] = false
            result[:errors] = user.errors.full_messages
        end
        render json: {:data => result.to_json} , status: :ok 
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