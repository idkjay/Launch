#part 1
def greet(name)
  puts "Hi #{name}!"
end

#part 2
def greet(name)
 random_greeting = ["Hi", "Yo", "Hey", "Howdy"].sample
 puts "#{random_greeting} #{name}!"
end

#part 3
def greet(name, language = nil)
  if language == 'spanish'
    puts "Hola #{name}!"
  elsif language == 'italian'
    puts "Ciao #{name}!"
  elsif language == 'irken'
    puts "DOOM de doom #{name}!"
  else
    puts "Hi #{name}!"
  end
end
