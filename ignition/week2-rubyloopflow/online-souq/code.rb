souq_cart = ["old paperback book", "potato", "red onion", "dried lemon", "frankincense", "moon dust", "saffron", "glass spice jar", "red fabric", "orange fabric", "handicrafts", "small Persian rug", "used medium space suit", "heffalump shag rug", "woozle hide purse"]

puts "Hi welcome to the Souq Shop, can I have your name?"
name = gets.chomp
puts "Great! So here's what's available in our shop, #{name}:"
souq_cart.each {|item| puts "*#{item}"}

input = ""
shopCart = Array.new
unavailableItems = Array.new
while input != "finished" do
  puts "Type an item out to add to your cart! Type 'FINISHED' when you're done."
  input = gets.chomp.downcase
  if input == "finished"
    break
  elsif souq_cart.include?(input)
    shopCart.push(input)
    puts "Item added successfully to cart!"
  else
    puts "Sorry, that item is not yet available!"
    unavailableItems.push(input)

  end
end
puts "#{name}, thanks for shopping at the Souq Shop. Here is a list of the items in your cart!:"
shopCart.each {|item| puts "*#{item}"}

puts "BTW, we noticed you tried entering in some items that aren't yet available. We'll let you know if the following items pop up in our shop!:"
unavailableItems.each {|item| puts "*#{item}"}
