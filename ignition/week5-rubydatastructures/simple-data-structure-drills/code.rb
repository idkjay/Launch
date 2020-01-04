transactions = [50_000, -2_000, -25_000, 4_000, -12_000, 5_000, -800, -900, 43_000, -30_000, 15_000, 62_000, -50_000, 42_000]

# Write Ruby code to find out the answers to the following questions. Be sure to make sure that your output and format matches what is given on the assignment page:

# * What is the value of the first transaction?
puts "The first transaction is: \n#{transactions[0]}"

# * What is the value of the second transaction?
puts "The second transaction is: \n#{transactions[1]}"

# * What is the value of the fourth transaction?
puts "The fourth transaction is: \n#{transactions[3]}"

# * What is the value of the last transaction?
puts "The last transaction is: \n#{transactions[-1]}"

# * What is the value of the second from last transaction?
puts "The second from the last transaction is: \n#{transactions[-2]}"

# * What is the value of the 5th from last transaction?
puts "The fifth from the last transaction is: \n#{transactions[-5]}"

# * What is the value of the transaction with index 5?
puts "The transaction with the index of 5 is: \n#{transactions[6]}"

# * How many transactions are there in total?
puts "The total number of transactions is: \n#{transactions.length}"

# * How many positive transactions are there in total?
num_pos = 0
transactions.each do |number|
  if number >= 0
    num_pos += 1
  end
end

puts "The total number of positive transactions is: \n#{num_pos}."

# * How many negative transactions are there in total?
num_neg = 0
transactions.each do |number|
  if number < 0
    num_neg += 1
  end
end
puts "The total number of negative transactions is:\n#{num_neg}"

# * What is the largest withdrawal?
high_withdrawl = 0
transactions.each do |number|
  if number < high_withdrawl
    high_withdrawl = number
  end
end
puts "The largest withdrawal is:\n#{high_withdrawl}."

# * What is the largest deposit?
high_deposit = 0
transactions.each do |number|
  if number > high_deposit
    high_deposit = number
  end
end
puts "The largest deposit is:\n#{high_deposit}."

# * What is the smallest withdrawal?
small_with = transactions.select {|x| x < 0}.max
puts "The smallest withdrawal is: #{small_with}"

# * What is the smallest deposit?
small_depo = transactions.select {|x| x > 0}.min
puts "The smallest deposit is: #{small_depo}"

# * What is the total value of all the transactions?
puts "The total value of all the transactions is: #{transactions.sum}"

# * If Dr. Dre's initial balance was $239,900 in this account, what is the value of his balance after his all of the transactions in our transactions array have been run?
init_bal = 239_900
transactions.each do |number|
   init_bal += number
end
puts "Dr. Dre's balance is: #{init_bal}"

best_records = {
 "Tupac"=>"All Eyez on Me",
 "Eminem"=>"The Marshall Mathers LP",
 "Wu-Tang Clan"=>"Enter the Wu-Tang (36 Chambers)",
 "Led Zeppelin"=>"Physical Graffiti",
 "Metallica"=>"The Black Album",
 "Pink Floyd"=>"The Dark Side of the Moon",
 "Pearl Jam"=>"Ten",
 "Nirvana"=>"Nevermind"
 }

# Write Ruby code to find out the answers to the following questions:

# * How many records are in `best_records`?
puts "Total records: #{best_records.keys.size}"

# * Who are all the artists listed?
best_records.each do |artist|
  puts artist
end
puts "All of the artists: \n#{best_records.keys.join(', ')}"

# * What are all the album names in the hash?
puts "All of the albums:\n#{best_records.values.join(', ')}"

# * Delete the `Eminem` key-value pair from the list and print an updated list of just the artists.
best_records.delete("Eminem")
puts "List of artists with Eminem deleted: \n#{best_records.keys.join(', ')}"

# * Add your favorite musician and their best album to the list and print an updated list of all the artists and albums:
best_records["Kanye West"] = "Graduation"
puts "My favorite musician added:\n" + best_records.map { |k, v| "#{k}: #{v}" }.join(", ")

# * True or False: `Nirvana` is included in `best_records`
puts "True or False: `Nirvana` is included: #{best_records.has_key?("Nirvana")}"

# * Change `Nirvana`'s album to another and then print the updated list of Artists and Albums.
best_records["Nirvana"] = "idkthenameofNirvanaalbums"
puts "Nirvana's album updated:\n" + best_records.map { |k, v| "#{k}: #{v}" }.join(", ")

# * True or False: `Soundgarden` is included in `best_records`?
puts "True or False: `Soundgarden` is included:\n#{best_records.has_value?("Soundgarden")}"

# * If `Soundgarden` is not in `best_records` then add a key-value pair for the band and then print the updated list of Artists and Albums.
best_records["Soundgarden"] = "Soundgarden album"
puts "Soundgarden added if it's not already there:\n" + best_records.map { |k, v| "#{k}: #{v}" }.join(", ")


# * Which key-value pairs have a key that has a length less than or equal to 6 characters?

puts "key-value pairs have a key that has a length less than or equal to 6 characters:"
best_records.each do |key,value|
  if key.size <= 6
    puts "#{key}: #{value}"
  end
end
# * Which key-value pairs have a value that is greater than 10 characters?
puts "key-value pairs have a key that has a length greater than 10 characters:"
best_records.each do |key,value|
  if key.size > 10
    puts "#{key}: #{value}"
  end
end
