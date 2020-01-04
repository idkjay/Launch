# randomly generate a color symbol
require 'rubygems'
require 'bundler/setup'
require 'colorize'
def random_color
  rand_num = rand(5) + 1
  return String.colors.sample
end
# 5.times {puts random_color}

# randomly colorize a string
def randomly_colorized(name)
  puts "your name is: " + "#{name}".colorize(random_color)
end
puts "What is your name? imma colorize it."
supplied_name = gets.chomp
puts randomly_colorized(supplied_name)

# randomly colorize each character in a string
