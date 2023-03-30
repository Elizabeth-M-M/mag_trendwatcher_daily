class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :category, :part1, :part2, :part3, :content
  has_many :reviews
  
  def part1
    (self.object.content.split('. ')).slice(0, 3).join('. ')
    # "#{self.object.content[0..500]}"
  end
  def part2
    if((self.object.content.split('. ')).length>2)
      (self.object.content.split('. ')).slice(3, 20).join('. ')

    else
      ""
    end
  end
   def part3
    if((self.object.content.split('. ')).length>20)
      (self.object.content.split('. ')).slice(20, (self.object.content.split('. ')).length).join('. ')

    else
      ""
    end
    
  end
  
end
