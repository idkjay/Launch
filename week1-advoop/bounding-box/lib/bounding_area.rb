require_relative '../lib/bounding_box'

class BoundingArea
  # your code here
  attr_reader :da_box
  def initialize(da_box)
    @da_box = da_box
  end
  def boxes_contain_point?(x,y)
    da_box.each do |box|
      if box.contains_point?(x,y) == true
        return true
      end
    end
    return false
  end
end
