class CreateBookClubs < ActiveRecord::Migration
  def change
    create_table :book_clubs do |t|
      t.string :name, null: false
      t.string :location

      t.timestamps null: false
    end

    add_index :book_clubs, :name, unique: true
  end
end
