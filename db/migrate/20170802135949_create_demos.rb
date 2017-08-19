class CreateDemos < ActiveRecord::Migration
  def change
    create_table :demos do |t|
      t.string :name, presence:true,length:{min:3}

      t.timestamps null: false
    end
  end
end
