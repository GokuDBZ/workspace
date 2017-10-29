class Article < ActiveRecord::Base
    belongs_to :user
    has_many :article_categories
    has_many :categories, through: :article_categories
    validates :name, presence: true
    validates :description, presence: true, length: {minimum: 5,maximum: 100}
    validates :user_id, presence: true
end
