require_relative "deck"

class Hand
  attr_reader :cards_array
  def initialize(cards_array)
    @cards_array = cards_array
  end

  def value
    total_value = 0
    @cards_array.each do |card|
      total_value += card.value
    end
    total_value
  end

end
