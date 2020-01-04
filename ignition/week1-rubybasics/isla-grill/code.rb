dinner_total = 178
tip = 0.20

puts "The dinner cost $" "%.2f" % "#{dinner_total}"
puts "You should tip $" "%.2f" % "#{dinner_total * tip}"
puts "The total bill is $" "%.2f" % "#{dinner_total * tip + dinner_total}" 
