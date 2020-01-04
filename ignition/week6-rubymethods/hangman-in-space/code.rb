def print_puzzle(word, guesses = [])
  word.each_char do |character|
    if guesses.include?(character)
      print "#{character}"

    else
      print "_ "

    end
  end
  puts ""
end

print_puzzle("perimter")
print_puzzle("triangle", ["t","s","g"])
