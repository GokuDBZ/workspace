class ArticlesController < ApplicationController
    def index
    end
    def new
        @artcile = Article.new
    end
end
