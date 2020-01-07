# part1
# class Circle
#   def initialize(radius)
#     @radius = radius
#   end
# end

# part2
# class Circle
#   def initialize(input)
#     if input[:radius].nil?
#       @radius = input[:diameter]/2
#     else
#       @radius = input[:radius]
#     end
#   end
# end

# part3
class Circle
  def initialize(input)
    if input.kind_of?(Hash)
      if input[:radius].nil?
        @radius = input[:diameter]/2
      else
        @radius = input[:radius]
      end
    else
      @radius = input
    end
  end
end
