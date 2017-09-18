class ArticlesController < ApplicationController
    def index
        @articles = Article.all
    end
    
    def new
        @article = Article.new
    end
    
    def create
      @article = Article.new(article_params)
      if @article.save
        flash[:notice] = "New Article #{@article.name} has been successfully added" 
        redirect_to "/articles/#{@article.id}"
      else
        flash[:notice]  = "Please enter correct information"
        render 'new'
        
      end
    end
  
    def show
      @article = Article.find(params[:id])
    end
    
    def edit
      @article = Article.find(params[:id])
    end
    
    def update
      @article = Article.find(params[:article]["article_id"].to_i)
       if @article.update_attributes(article_params)
         redirect_to articles_index_path
       else
         render 'edit'
       end
       
    end
    
    private
    def article_params
        params.require(:article).permit(:name,:description)
    end
end
