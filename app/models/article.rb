class Article < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, :image, presence: true
  validates :content, length: {minimum:500}
  validates :category, inclusion: { in: %w(Lifestyle Food Technology Sport Business Gaming Travel Science) }
end
