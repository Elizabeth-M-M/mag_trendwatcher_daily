class Article < ApplicationRecord
  validates :title, :image, presence: true
  validates :content, length: {minimum:500}
  validates :category, inclusion: {in: %(Lifestyle Food Technology Sport Business Gaming Travel)}
end
