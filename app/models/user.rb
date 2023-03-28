class User < ApplicationRecord
has_many :reviews
has_many :articles, through: :reviews

  has_secure_password
  validates :email, :username, uniqueness: true
  validates :password,
          length: {minimum:6}
end
