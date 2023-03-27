class User < ApplicationRecord
  has_secure_password
  validates :email, :username, uniqueness: true
  validates :password,
          length: {minimum:6}
end
