bottle = 99
bottleNext = bottle - 1

while bottle > 0 do
  if bottle % 10 == 0
    puts "#{bottle} bottles of beer on the wall, #{bottle} bottles of beer! \nTake one down and pass it around, #{bottleNext} bottles of beer on the wall.\n\n"
    bottle -= 1
    bottleNext = bottle -1
  elsif bottle == 2
    puts "#{bottle} more bottles of beer on the wall, #{bottle} more bottles of beer.\nTake one down and pass it around, #{bottleNext} more bottle of beer on the wall."
    bottle -= 1
    bottleNext = bottle -1
  elsif bottle == 1
    puts "\n#{bottle} more bottle of beer on the wall, #{bottle} more bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall."
    bottle -= 1
    bottleNext = bottle -1
  else
    puts "#{bottle} bottles of beer on the wall, #{bottle} bottles of beer. \nTake one down and pass it around, #{bottleNext} bottles of beer on the wall.\n\n"
    bottle -= 1
    bottleNext = bottle -1
  end
end

puts "\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
