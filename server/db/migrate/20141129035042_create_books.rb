class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :first_line
      t.string :cover_img_url

      t.timestamps
    end
  end
end
