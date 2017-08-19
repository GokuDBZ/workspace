class CreateLifts < ActiveRecord::Migration
  def change
    create_table :lifts do |t|
      t.date :date
      t.string :lift_name
      t.boolean :ismetric
      t.integer :weight_lifted

      t.timestamps null: false
    end
  end
end
