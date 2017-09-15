class CreateTestArticles < ActiveRecord::Migration
  def change
    create_table :test_articles do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
