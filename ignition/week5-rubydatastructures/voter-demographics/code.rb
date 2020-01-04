voter_demos = [
  {first_name: "Jon", last_name: "Smith", age: 25, income: 50_000, household_size: 1, gender: "Male", edu: "College"},

  {first_name: "Jane", last_name: "Davies", age: 30, income: 60_000, household_size: 3, gender: "Female", edu: "High School"},

  {first_name: "Sam", last_name: "Farelly", age: 32, income: 80_000, household_size: 2, gender: "Unspecified", edu: "College"},

  {first_name: "Joan", last_name: "Favreau", age: 35, income: 65_000, household_size: 4, gender: "Female", edu: "College"},

  {first_name: "Sam", last_name: "McNulty", age: 38, income: 63_000, household_size: 3, gender: "Male", edu: "College"},

  {first_name: "Mark", last_name: "Minahan", age: 48, income: 78_000, household_size: 5, gender: "Male", edu: "High School"},

  {first_name: "Susan", last_name: "Umani", age: 45, income: 75_000, household_size: 2, gender: "Female", edu: "College"},

  {first_name: "Bill", last_name: "Perault", age: 24, income: 45_000, household_size: 1, gender: "Male", edu: "Did Not Complete High School"},

  {first_name: "Doug", last_name: "Stamper", age: 45, income: 75_000, household_size: 1, gender: "Male", edu: "College"},

  {first_name: "Francis", last_name: "Underwood", age: 52, income: 100_000, household_size: 2, gender: "Male", edu: "College"},
]

avg_age = voter_demos.sum{|x| x[:age]}.to_f / voter_demos.size.to_f
puts "Average Age: #{sprintf"%.1f",avg_age}"

avg_inc = voter_demos.sum{|x| x[:income]} / voter_demos.size
puts "Average Income: #{sprintf"%.1f",avg_inc}"

avg_hhs = voter_demos.sum{|x| x[:household_size]}.to_f / voter_demos.size.to_f
puts "Average Household Size: #{sprintf"%.1f", avg_hhs}"

num_fem = 0
voter_demos.each do |gender|
  if gender[:gender] == "Female"
    num_fem += 1
  end
end
percentage_fem = (num_fem.to_f/voter_demos.size.to_f * 100)
puts "Female %: #{percentage_fem}"

num_male = 0
voter_demos.each do |gender|
  if gender[:gender] == "Male"
    num_male += 1
  end
end
percentage_male = (num_male.to_f/voter_demos.size.to_f * 100)
puts "Male %: #{percentage_male}"

num_uns = 0
voter_demos.each do |gender|
  if gender[:gender] == "Unspecified"
    num_uns += 1
  end
end
percentage_uns = (num_uns.to_f/voter_demos.size.to_f * 100)
puts "Unspecified Gender %: #{percentage_uns}"

num_uni = 0
voter_demos.each do |edu|
  if edu[:edu] == "College"
    num_uni += 1
  end
end
percentage_uni = (num_uni.to_f/voter_demos.size.to_f * 100)
puts "College %: #{percentage_uni}"

num_hs = 0
voter_demos.each do |edu|
  if edu[:edu] == "High School"
    num_hs += 1
  end
end
percentage_hs = (num_hs.to_f/voter_demos.size.to_f * 100)
puts "High School %: #{percentage_hs}"

num_nohs = 0
voter_demos.each do |edu|
  if edu[:edu] == "Did Not Complete High School"
    num_nohs += 1
  end
end
percentage_nohs = (num_nohs.to_f/voter_demos.size.to_f * 100)
puts "Did Not Finish High School %: #{percentage_nohs}"
