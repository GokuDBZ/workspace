class ArticlesController < ApplicationController
  
    before_action :set_article, only: [:show,:edit,:delete]
    before_action :is_user_logged_in, only: [:new]
    def index
        @articles = Article.all
    end
    
    def new
          @article = Article.new
    end
    
    def list_articles
      @articles = Article.paginate(page: params[:page],per_page: 5)
    end
    
    def create
      @article = Article.new(article_params.merge(user: current_user))
      if @article.save
        flash[:notice] = "New Article #{@article.name} has been successfully added" 
        redirect_to "/articles/#{@article.id}"
      else
        flash[:notice]  = "Please enter correct information"
        render 'new'
      end
    end
    
    def is_user_logged_in
      if logged_in?.present?
          return true
        else
          redirect_to 
        end
    end
    def show
      # to set article we are using call back
    end
    
    def edit
     #  to set article we are using call back
    end
    
    def update
      @article = Article.find(params[:article]["article_id"].to_i)
       if @article.update_attributes(article_params)
         redirect_to articles_index_path
       else
         render 'edit'
       end
       
    end
    
    def delete
      # to set article we are using call back
      redirect_to articles_index_path if @article.destroy
      
    end
    
    private
    
    def set_article
      @article = Article.find(params[:id])
    end
    
    def article_params
        params.require(:article).permit(:name,:description)
    end
end