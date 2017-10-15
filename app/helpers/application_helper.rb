module ApplicationHelper
    def gravatar_image user
        gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
        gravatar_url = "https://s.gravatar.com/avatar/#{gravatar_id}"
    end
end
