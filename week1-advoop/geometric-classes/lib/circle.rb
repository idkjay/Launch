class Circle
  attr_reader :x, :y, :radius

  def initialize(radius, x = 0, y = 0)
    @radius = radius
    @x = x
    @y = y
  end

  def radius
    @radius
  end

  def diameter
    @radius * 2
  end

  def area
    Math::PI * radius**2
  end

  def perimeter
    2 * Math::PI * @radius
  end
end
