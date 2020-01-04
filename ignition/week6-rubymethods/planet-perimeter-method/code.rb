# part 1
def perimeter(width, height)
  2 * height + 2 * width
end

# part 2
def perimeter(width, height = nil)
#assume it's a square
  if height.nil?
    4 * width
  else
    2 * height + 2 * width
  end
end
