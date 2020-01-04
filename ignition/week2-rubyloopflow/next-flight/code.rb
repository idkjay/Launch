
timesList = [2,5,7.5,8.5,9,10,11.5,13.5,14.5,17,18,19,24]

puts "Welcome to the Yung Money Space Airport. What time are you leaving? Please input a time between 0:00 to 23:30 (military time)."

while (input = gets.chomp.to_f) <= 0 || (input >= 24)
  puts "Sorry, that is either not a correct time or an unavailable time. Please input an actual time or I will call the cops on you."
end

maxIndex = 0
planeTime = timesList[0]
timesList.each_with_index do |value, index|
  if input >= value
    maxIndex = index +1
    planeTime = timesList[maxIndex]
  end
end

puts "You should take Flight #{maxIndex+1}, leaving at #{planeTime}."

if maxIndex == 12
  puts "\n***Now playing 'Don't Stop Believin' by Journey!***"
  print "\nJust a small town girl\nLiving in a lonely world\nShe took the midnight train going anywhere\nJust a city boy\n"
  print "Born and raised in South Detroit\nHe took the midnight train going anywhere\nA singer in a smoky room\n"
  print "A smell of wine and cheap perfume\nFor a smile they can share the night\nIt goes on and on and on and on\n"
  print "Strangers, waiting, up and down the boulevard\nTheir shadows searching in the night\nStreetlights people, living just to find emotion\n"
  print "Hiding, somewhere in the night"
  #small guitar solo
end
