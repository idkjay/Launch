#Part 1

knife_jug = 11.87
torch_jug = 16.5
hand_bal = 3.00
human_block = 1.18
totalTips = 12

puts "Knife Juggling:"
puts knife_jug
puts "Torch Juggling:"
puts (format("%.2f", torch_jug))
puts "Hand Balancing:"
puts (format("%.2f", hand_bal))
puts "Human Blockhead:"
puts human_block
puts "Total Income:"
puts totalIncome = knife_jug+torch_jug+hand_bal+human_block

puts "Average Tip Value:"
puts totalIncome/totalTips

#Part 2

puts "Ayy what's up y'all! Welcome to the show! I need a volunteer for my next act! Yes, you there! What's your name?"
volunName = gets.chomp
puts "Can we get a big round of a applause for #{volunName}!"
puts "Now #{volunName}, what's your favorite number?"
favNum = gets.chomp
puts "Alright #{volunName}, my partner, Jimmy Jack Jones and I will now lightly kick you #{favNum} times!. Are you prepared to be amazed?"
