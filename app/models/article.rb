class Article < ActiveRecord::Base
    belongs_to :user
    validates :name, presence: true
    validates :description, presence: true, length: {minimum: 5,maximum: 100}
    validates :user_id, presence: true
end
