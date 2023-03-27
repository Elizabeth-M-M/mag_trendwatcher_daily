class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :category, :summary
  def summary
    "#{self.object.content[0..100]}..."

  end
end
