class Article < ActiveRecord::Base
    validates :name, presence: true
    validates :description, presence: true, length: {minimum: 5,maximum: 100}
end
