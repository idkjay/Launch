responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

# Confirm the correct number of responses have been stored by printing the number to the console (`20`)
puts responses.count

# Ask the user what their question is, and store it as a variable called `question`
puts "What is your question?"
question = gets.chomp

# Output a random response to the user's question
puts responses.sample(1)

# Output the number of responses that include the word "yes"
puts responses.select {|r| r.downcase.include?("yes")}.length

# Output the number of responses that include the words "no" or "not"
puts responses.select {|r| r.include?("no")}.length + responses.select {|r| r.include?("not")}.length

# Output the alphabetized list of responses
alphaResponses = responses.sort_by{|r| r.upcase}
puts alphaResponses

# Output the first and last responses from the alphabetized list
puts alphaResponses.values_at(0,-1)

# Add 1 response of your choosing to the current list
alphaResponses << "I don't know!!!"

# Concat an array of 3 additional responses to the current list
alphaResponses.concat(["Hell no", "Uh, maybe I guess??", "Bet"])

# Confirm the correct number of responses have been stored by printing the number to the console (`24`)
puts alphaResponses.length
