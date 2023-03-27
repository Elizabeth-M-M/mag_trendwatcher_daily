class ArticlePlusContentSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :category, :content
end
