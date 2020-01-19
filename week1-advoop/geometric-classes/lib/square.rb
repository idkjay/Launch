class Square
  attr_reader :side, :x, :y, :length, :width

  def initialize(side, x = 0, y = 0)
    @side = side
    @x = x
    @y = y
    @length = side
    @width = side
  end

  def length
    @length
  end

  def width
    @width
  end

  def diameter
    @side * Math.sqrt(2)
  end

  def perimeter
    2 * width + 2 * length
  end

  def area
    @width * @length
  end

  def contains_point?(x,y)
    if x < @width && x >= 0 && y < @length && y >= 0
      return true
    else
      return false
    end
  end
end
