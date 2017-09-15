require 'test_helper'

class TestArticlesControllerTest < ActionController::TestCase
  setup do
    @test_article = test_articles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:test_articles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create test_article" do
    assert_difference('TestArticle.count') do
      post :create, test_article: { description: @test_article.description, name: @test_article.name }
    end

    assert_redirected_to test_article_path(assigns(:test_article))
  end

  test "should show test_article" do
    get :show, id: @test_article
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @test_article
    assert_response :success
  end

  test "should update test_article" do
    patch :update, id: @test_article, test_article: { description: @test_article.description, name: @test_article.name }
    assert_redirected_to test_article_path(assigns(:test_article))
  end

  test "should destroy test_article" do
    assert_difference('TestArticle.count', -1) do
      delete :destroy, id: @test_article
    end

    assert_redirected_to test_articles_path
  end
end
