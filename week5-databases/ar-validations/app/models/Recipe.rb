class Recipe < ActiveRecord::Base
  has_many :comments

  validates :title, presence: true, uniqueness: true
  # validates :title, inclusion: { in: ["%brussels sprouts%"]}
  validates :title, format: { with: /brussels sprouts/i, message: "bruh you gotta have brussels sprouts"}
  validates :servings, numericality: { greater_than_or_equal_to: 1, message: "eat more" }, allow_blank: true
end
