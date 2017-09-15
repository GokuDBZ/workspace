json.extract! test_article, :id, :name, :description, :created_at, :updated_at
json.url test_article_url(test_article, format: :json)