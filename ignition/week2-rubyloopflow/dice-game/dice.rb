input = ""
while input != "S" do
  roll1 = rand(1..6)
  roll2 = rand(1..6)
  puts "You rolled a #{roll1} and a #{roll2}\nTotal: #{roll1 + roll2}\nPress 'Enter' to roll again, 'S' to stop"
  input = gets.chomp
end
