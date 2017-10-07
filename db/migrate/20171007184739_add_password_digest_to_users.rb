class AddPasswordDigestToUsers < ActiveRecord::Migration
  # has_secure_password provides us a virtual attribute
  # through which we get the password digest
  def change
    add_column(:users,  :password_digest, :string)
  end
end
