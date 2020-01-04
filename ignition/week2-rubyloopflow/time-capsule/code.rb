time_capsule = []

puts "Welcome to the Time Capsule maker! May I have your name?"
name = gets.chomp

puts "Great! What would you like to add to your Time Capsule, #{name}? Type 'FINISHED' when done. "
input = gets.chomp.downcase

puts "How many would you like of that item?"
input_amt = gets.chomp
input.concat("(#{input_amt})")
time_capsule.push(input)

while input!= "finished" do
  puts "Anything else you'd like to add?"
  input = gets.chomp.downcase
  if input == "finished"
    break
  else
    puts "And how many of that item?"
    input_amt = gets.chomp
    input.concat(" (#{input_amt})")
    time_capsule.push(input)
  end
end

puts "Well #{name}, thanks for trying our Time Capsule maker. Here is a list of the items in your Time Capsule:"
time_capsule.each{|item| puts "*#{item.capitalize}"}
