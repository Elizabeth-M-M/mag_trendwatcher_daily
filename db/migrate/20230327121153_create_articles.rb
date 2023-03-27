class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :image
      t.text :content
      t.string :title
      t.string :category

      t.timestamps
    end
  end
end
