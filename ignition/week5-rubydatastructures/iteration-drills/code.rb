#  Write Ruby<->English answers here as comments in your code

# 1)
# * numbers is an array
# numbers.each do |number|
#   puts 3 * number
# end
#For every element called 'number' in the 'numbers' array, print out that element times 3.

# 2)
# * names is an array
# names.each do |name|
#   puts name.length
# end
#For every element called 'name' in the 'names' array, print out the length of that element.

# 3)
# * numbers is an array
# sum = 0
# numbers.each do |number|
#   sum += number
# end
# puts sum
# Starting sum out at 0, for every element 'num' in the 'numbers' array, add it onto the sum. Then print out the total sum.

# 4)
# * hash is a hash
# hash.each do |name, age|
#   puts "#{name} is #{age} years old."
# end
# Name and age representing key and value respectively in the 'hash' hash. For each key and value pair, print out the name is age years old.

# 5)
# * account is a hash
# sum = 0
# account.each do |transaction, value|
#   sum += value
# end
# puts "The value the account is #{sum}"
# in the account hash, transaction and value represent key and value in the hash. For each pair, add the value to the sum which starts out as 0. at the end print out the total sum.

# 6)
# * addresses is a hash
# addresses.each do |name, address|
#   puts "#{name} lives on #{address}"
# end
# in the addresses hash, name and address represent the key and value pairs. for each pair, print out the name lives on address.

#  Write English<->Ruby answers here as comments in your code

# 1. `For every element 'word' in the array 'sentences' print out the word.`
# sentences.each do |word|
#   puts word
# end

# 2. `For every element 'phone_number' in the array 'numbers' print out the phone number if it is a MA area code.`
# numbers.each do |phone_number|
#   if phone_number.include? (617) || phone_number.include? (781) || phone_number.include? (978)
#     puts phone_number
#   end
# end

# 3. `For every element number in the array 'numbers' print out every odd number.`
# numbers.each do |number|
#   if number%2 !=0
#     puts number
#   end
# end

# 4. `For every name-age pair in the hash 'ages', print out each pair.`
# ages.each do |name, age|
#   puts "#{name} is #{age} years old."
# end

# 5. `For every name-age pair in the hash 'ages', print out a pair if the age is > 10.`
# ages.each do |name, age|
#   if age > 10
#     puts "#{name} is #{age} years old."
#   end
# end

# 6. `For every name-age pair in the hash 'ages', print out a pair if the age is even.`
# ages.each do |name, age|
#   if name == age
#     puts "#{name} is #{age} years old."
#   end
# end

# Write Ruby code to find out the answers to the following questions:
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]

# * What is the sum of all the numbers in `array`?
sum = 0
array.each do |number|
  sum += number
end
puts "The sum of all the numbers is #{sum}."
# * How would you print out each value of the array?
array.each do |value|
  puts value
end
# * What is the sum of all of the even numbers?
sum = 0
array.each do |number|
  if number % 2 == 0
    sum += number
  end
end
puts "The sum of all of the even numbers is #{sum}."
# * What is the sum of all of the odd numbers?
sum = 0
array.each do |number|
  if number % 2 != 0
    sum += number
  end
end
puts "The sum of all of the odd numbers is #{sum}."
# * What is the sum of all the numbers divisble by 5?
sum = 0
array.each do |number|
  if number % 5 == 0
    sum += number
  end
end
puts "The sum of all of the numbers that are divisble by 5 is #{sum}."
# * What is the sum of the squares of all the numbers in the array?
sum = 0
array.each do |number|
  i = number**2
    sum += i
end
puts "The sum of all of the numbers squared is #{sum}."




# Write Ruby code to find out the answers to the following questions:

array = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]

# * How would you print out each name backwards in `array`?
array.each do |name|
  puts name.reverse
end
# * What are the total number of characters in the names in `array`?
puts "There are #{array.join('').size} characters in the names in the array."
# * How many names in `array` are less than 5 characters long?

sum = 0
array.each do |name|
  if name.size < 5
    sum += 1
  end
end
puts "There are #{sum} names in the array that are less than 5 characters long."
# * How many names in `array` end in a vowel?
sum = 0
array.each do |name|
  if name.end_with?("a") || name.end_with?("e") || name.end_with?("i") || name.end_with?("o") || name.end_with?("u") || name.end_with?("y")
    sum += 1
  end
end
puts "There are #{sum} names in the array that end in a vowel."
# * How many names in `array` are more than 5 characters long?
sum = 0
array.each do |name|
  if name.size > 5
    sum += 1
  end
end
puts "There are #{sum} names in the array that are more than 5 characters long."
# * How many names in `array` are exactly 5 characters in length?
sum = 0
array.each do |name|
  if name.size == 5
    sum += 1
  end
end
puts "There are #{sum} names in the array that are exactly 5 characters long."
