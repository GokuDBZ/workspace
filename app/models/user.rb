class User < ActiveRecord::Base
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    before_save {self.email = self.email.downcase}
    
    
    has_many :articles
    validates :user_name, length: {minimum: 3,maximum: 50}, uniqueness: {case_sensitive: false}, presence: true
    validates :email, length:{maximum: 50}, uniqueness: true, presence: true , 
                format: {with: VALID_EMAIL_REGEX, message: "email is not valid"}
    # self.errors.full_messages
end
