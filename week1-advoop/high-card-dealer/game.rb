require_relative "lib/deck"
require_relative "lib/hand"

puts "GAME START\n"

deck = Deck.new

puts "\nThere are #{deck.cards.length} cards in the deck."

hand1 = Hand.new(deck.deal(4))
hand2 = Hand.new(deck.deal(4))


puts "\nPlayer 1 was dealt #{hand1.cards_array[0].rank}#{hand1.cards_array[0].suit}, #{hand1.cards_array[1].rank}#{hand1.cards_array[1].suit}, #{hand1.cards_array[2].rank}#{hand1.cards_array[2].suit}, #{hand1.cards_array[3].rank}#{hand1.cards_array[3].suit}"
puts "Player 2 was dealt #{hand2.cards_array[0].rank}#{hand2.cards_array[0].suit}, #{hand2.cards_array[1].rank}#{hand2.cards_array[1].suit}, #{hand2.cards_array[2].rank}#{hand2.cards_array[2].suit}, #{hand2.cards_array[3].rank}#{hand2.cards_array[3].suit}"

puts "\nPlayer 1's hand value: #{hand1.value.to_i}."
puts "Player 2's hand value: #{hand2.value.to_i}."

if hand1.value.to_i > hand2.value.to_i
  puts "\nPlayer 1 wins the game!"
  elsif
    hand1.value.to_i < hand2.value.to_i
      puts "\nPlayer 2 wins the game!"
  else
    puts "\nPlayers have tied!"
end
