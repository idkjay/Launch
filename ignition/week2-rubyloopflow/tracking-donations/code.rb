donations = 0.0
while donations < 100 do
  puts "enter donation amount here"
  donationsInput = gets.chomp.to_f
  donations = donations + donationsInput
  if donations >= 100
    puts "you've reached 100!"
  end
end

if donations >= 125
  extraDonate = ((donations - 100)/25).to_i
  extraDonate.times do
    puts "You've earned another $25!"
  end
end
