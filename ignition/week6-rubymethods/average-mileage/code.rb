shuvver = [260, 483, 792, 357, 546]
zhook = [186, 223, 173, 297, 303]
nanoship = [646, 883, 761, 932, 778]

def average(mileage_report)
  mileage_report.sum.to_f/mileage_report.length.to_f
end

shuvver_avg = average(shuvver)
zhook_avg = average(zhook)
nano_avg = average(nanoship)

puts shuvver_avg
puts zhook_avg
puts nano_avg

# def average(mileage_list)
#   sum = 0
#   mileage_list.each do |mileage|
#     sum += mileage
#   end
#   sum/mileage_list.size.to_f
# end

def mileage_rating(average)
  if average >= 1000
    "A"
  elsif average >= 750
    "B"
  elsif average >= 500
    "C"
  elsif average >= 250
    "D"
  else
    "F - Use this ship as a last resort! We aren't made of money."
  end
end

puts mileage_rating(shuvver_avg)
puts mileage_rating(zhook_avg)
puts mileage_rating(nano_avg)

def ranking(ships)
  ships.each_with_index do |ship, index|
    puts "#{index+1}. #{ship}"
  end
end

ranking(["Nanoship", "Shuvver", "Snack Cabs", "Resisty's Ship", "Zhook Cruiser"])
