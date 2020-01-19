class CreateStarships < ActiveRecord::Migration[5.2]
  def change
    create_table :ships do |t|
      t.string :ship_name, null: false
      t.string :ship_class, null: false
      t.string :ship_location, null: false
      t.timestamp null: false
    end
  end
end
