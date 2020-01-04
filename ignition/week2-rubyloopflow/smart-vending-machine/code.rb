puts "Hey there, how's it going, it's ya boy, the one and only Talking Vending Machine. \nWhat would you feeling today?"
snack = gets.chomp

puts "How many you feeling?"
number = gets.chomp
howmany = number.to_i


if number.include? "tons"
  rand(20).times do
    puts snack
  end
else
  howmany.times do
    puts snack
  end
end

puts "Ay there you go, come again!"
