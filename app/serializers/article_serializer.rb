class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :category, :content
  has_many :reviews
  
end
