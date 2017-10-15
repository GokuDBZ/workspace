class ArticleInUser < ActiveRecord::Migration
  def change
    puts "sdfdfdfgdfgg"
    Article.all.each{|article|
      
      puts "we are here"
      article.user_id = User.last.id
      article.save
    }
  end
end
