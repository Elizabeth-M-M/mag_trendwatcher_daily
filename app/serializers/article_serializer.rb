class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :image, :content, :title, :category
end
