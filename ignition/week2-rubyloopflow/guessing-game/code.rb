

puts "Welcome to the Guessing Game! What difficulty would you like to play?\nType easy or hard:"
modeDif = gets.chomp.downcase
if modeDif == "easy"
  answer = rand(1..10)
  level = 10
else
  answer = rand(1..20)
  level = 20
end

puts "I've picked a number between 1 and #{level}. Now guess it!"

userGuess = gets.chomp.to_i
score = 1

while userGuess != answer
  puts "Nope, try again!"
  userGuess = gets.chomp.to_i
  score += 1
  if userGuess == answer
    puts "You win!"
    puts "Your score was: #{score}"
  end
end
