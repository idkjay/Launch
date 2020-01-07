class Theater
  attr_reader :admitted, :capacity

#part1
  def initialize(number_of_seats)
    @capacity = number_of_seats
    @admitted = 0
  end
#part2
  def admit!(patrons = 1)
    if @admitted + patrons > @capacity
      "Sorry man, no more seats."
    else
      @admitted += patrons
    end
  end
#part3
  def at_capacity?
    @admitted == @capacity
  end
#part4
  def record_walk_outs!(patrons = 1)
    @admitted -= patrons
  end
end
