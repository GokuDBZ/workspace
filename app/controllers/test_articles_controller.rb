class TestArticlesController < ApplicationController
  before_action :set_test_article, only: [:show, :edit, :update, :destroy]

  # GET /test_articles
  # GET /test_articles.json
  def index
    @test_articles = TestArticle.all
  end

  # GET /test_articles/1
  # GET /test_articles/1.json
  def show
  end

  # GET /test_articles/new
  def new
    @test_article = TestArticle.new
  end

  # GET /test_articles/1/edit
  def edit
  end

  # POST /test_articles
  # POST /test_articles.json
  def create
    @test_article = TestArticle.new(test_article_params)

    respond_to do |format|
      if @test_article.save
        format.html { redirect_to @test_article, notice: 'Test article was successfully created.' }
        format.json { render :show, status: :created, location: @test_article }
      else
        format.html { render :new }
        format.json { render json: @test_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_articles/1
  # PATCH/PUT /test_articles/1.json
  def update
    respond_to do |format|
      if @test_article.update(test_article_params)
        format.html { redirect_to @test_article, notice: 'Test article was successfully updated.' }
        format.json { render :show, status: :ok, location: @test_article }
      else
        format.html { render :edit }
        format.json { render json: @test_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_articles/1
  # DELETE /test_articles/1.json
  def destroy
    @test_article.destroy
    respond_to do |format|
      format.html { redirect_to test_articles_url, notice: 'Test article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_article
      @test_article = TestArticle.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_article_params
      params.require(:test_article).permit(:name, :description)
    end
end
