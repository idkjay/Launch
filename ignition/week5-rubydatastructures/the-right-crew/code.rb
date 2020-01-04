REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)

# YOUR CODE GOES BELOW
puts "***Random Crew Selector:***"

possible_crew_selections.each do |selected|
  puts "You have randomly selected #{selected.to_s.gsub("_"," ")}!"
end

puts ""

[:captain, :navigator, :lead_maintenance].each do |required|
  if !possible_crew_selections.include?(required)
    puts "Warning, you are without a #{required.to_s.gsub("_"," ")}! You kinda need that!"
  end
end
