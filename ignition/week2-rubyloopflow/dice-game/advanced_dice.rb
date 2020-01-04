puts "How many sides does your dice have???"
diceSides = gets.chomp.to_i
puts "How many times would you like to roll your pair of dice???"
rollNum = gets.chomp.to_i
roll = true
rolls = 0
input = ""
while input != "n"
while roll && rolls < rollNum do
  dice_1 = rand(diceSides)+1
  dice_2 = rand(diceSides)+1
  rolls = rolls + 1
  print "You rolled a #{dice_1} and a #{dice_2}. Total: #{(dice_1 + dice_2)}\n"
end
print "\nRoll Again??? (y/n)> \n"
input = gets.chomp
if input == "n"
  roll = false
else
  roll = true
  rolls = 0
end
end
