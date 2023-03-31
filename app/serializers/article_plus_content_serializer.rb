class ArticlePlusContentSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :category, :summary, :part_title
  def summary
    "#{self.object.content[0..80]}..."

  end
  def part_title
    (self.object.title.split(': '))[0]
  end
 
end
