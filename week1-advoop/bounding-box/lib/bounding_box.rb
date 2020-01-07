class BoundingBox
  attr_reader :x, :y, :width, :height, :left, :right, :top, :bottom
  def initialize(x,y,width,height) # add inputs as needed
    @x = x #
    @y = y
    @width = width
    @height = height
    @left = left
    @right = right
    @top = top
    @bottom = bottom
    # your code here
  end

  def left
    @x
  end

  def right
    @x + @width
  end

  def top
    @y + @height
  end

  def bottom
    @y# of bottom edge
  end

  def height
    @height
  end

  def width
    @width
  end

  def contains_point?(x,y) # add inputs as needed
    if x >= left && x <= right && y >= bottom && y <= top
      true
    else
      false
    end
    # your code here
  end
end
