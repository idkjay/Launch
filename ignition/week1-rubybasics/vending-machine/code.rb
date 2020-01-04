items_we_have = "chips popcorn skittles granola mentos gum cheets m&ms"

puts "What item would you like from the vending machine?"
item = gets.chomp
itemIndex = items_we_have.index(item)
if itemIndex.nil?
  puts "That item is unavailable. Sorry!"
else
  puts "That item is available! Item index:"
  puts itemIndex
end
