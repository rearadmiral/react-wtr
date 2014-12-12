class CreateShelvings < ActiveRecord::Migration
  def change
    create_table :shelvings do |t|
      t.integer :book_id
      t.integer :shelf_id

      t.timestamps
    end
  end
end
