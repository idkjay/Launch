require 'pry'
input = ""
while input != "no"
  puts "Can I get you anything?"
  print "*"
  input = gets.chomp
  binding.pry
  if input == "no"
    puts "Okay, bye!"
  end
end
