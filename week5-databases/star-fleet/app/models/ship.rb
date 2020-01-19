class Ship < ActiveRecord::Base
  has_many :members
  
  validates :ship_name, presence: true
  validates :ship_class, presence: true
  validates :ship_location, presence: true
end
