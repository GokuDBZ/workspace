class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  helper_method [:logged_in?,:current_user]
  
  def logged_in?
    if session[:user_id].present?
    user ||= User.find(session[:user_id])
    else
      nil
    end
  end
  
  def current_user
    @current_user ||= (session[:user_id].present? ? User.find(session[:user_id]) : nil) 
  end
  
end
