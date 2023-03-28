class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :editors, :password, :password_digest
  end
end
