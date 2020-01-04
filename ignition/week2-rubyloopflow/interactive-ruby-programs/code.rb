
supplyList = "Spaceship Supply List\n"
supplyList += "-----------\n"

input = ""
while input != "done" do
  print "Please enter a supply (or 'done'):"
  if input = gets.chomp
    supplyList += "*#{input}\n"
  end
end

puts "\n\n"
puts supplyList

total_cost = 0.00
input2 = nil
while input2 != "done" do
  puts "\nThe current total is: $#{total_cost}"
  print "What is the cost of the item? (enter 'done when finished')\n>"
  input2 = gets.chomp
  if input2 != "done"
    total_cost += input2.to_f
  end
end
puts "\n\n"
puts "The total is: $#{total_cost}."
