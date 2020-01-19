class Member < ActiveRecord::Base
  belongs_to :ship

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :ship_id, presence: true
  validates :specialty_division, presence: true

end
