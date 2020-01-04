computerHand = rand(3)
r = 0
p = 1
s = 2
# 0 beats 2, 1 beats 0, 2 beats 1
puts "Choose rock(r), paper(p), or scissors(s):"
playerHand = gets.chomp
if playerHand == "r"
  puts "Player chose rock."
elsif playerHand == "p"
  puts "Player chose paper."
elsif playerHand == "s"
  puts "Player chose scissors."
elsif playerHand != "r" || playerHand != "p" || playerHand != "s"
  puts "Invalid entry, try again."
end

if computerHand == 0
  puts "Computer chose rock."
elsif computerHand == 1
  puts "Computer chose paper."
elsif computerHand == 2
  puts "Computer chose scissors."
end

if playerHand.to_i == computerHand
  puts "Tie!"
elsif playerHand.to_i == 0 && computerHand == 2
  puts "Player wins!"
elsif playerHand.to_i == 1 && computerHand == 0
  puts "Player wins!"
elsif playerHand.to_i == 2 && computerHand == 1
  puts "Player wins!"
else
  puts "Computer wins!"
end

#technically, it does meet all the expectations... i ran into an error where if
#the player doesnt input r,p,or s, itll give you invalid entry but itll still
#print a winner, either the player or the computer lol..
#i think itd require a while loop somewhere but i currently cant rack my head
#to figure out what to do lol 
