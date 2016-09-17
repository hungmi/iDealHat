class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.string :option
      t.string :answer
      t.string :note

      t.timestamps
    end
  end
end
