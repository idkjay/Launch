#model level

class Recipe < ActiveRecord::Base
  has_many :comments

  validates :title, uniqueness: true, presence: true, format: { with: /brussels sprouts/, message: "gotta have brussels sprouts" }
  validates :servings, numericality: { greater_than_or_equal_to: 1, message: "must have 1 or more servings" }
end
