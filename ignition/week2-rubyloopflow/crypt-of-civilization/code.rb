crypt_of_civilization = Array.new

crypt_of_civilization.push ("Compotometer")
crypt_of_civilization.push ("Box of phographic records")
crypt_of_civilization.push ("Plastic savings bank")
crypt_of_civilization.push ("Set of scales")
crypt_of_civilization.push ("Toast-O-Lator")
crypt_of_civilization.push ("Sample of aluminum foil")
crypt_of_civilization.push ("Donald Duck doll")

puts crypt_of_civilization

extra = ["Container of soda", "Lionel model train set", "Ingraham pocket watch"]

crypt_of_civilization = crypt_of_civilization.concat(extra)

puts crypt_of_civilization.length
puts crypt_of_civilization[0]
puts crypt_of_civilization[-1]
puts crypt_of_civilization[1]
puts crypt_of_civilization[3]
puts crypt_of_civilization[-2]
puts crypt_of_civilization.index("Toast-O-Lator")

puts crypt_of_civilization.sort_by {|item|item.length}
puts crypt_of_civilization.sort
puts crypt_of_civilization.sort {|a,b| b<=>a}


item = 0
while item < crypt_of_civilization.length
  puts crypt_of_civilization[item]
  item += 1
end

crypt_of_civilization.each do |item|
  puts item
end

crypt_of_civilization.shift
crypt_of_civilization.pop
crypt_of_civilization.delete("Set of scales")
crypt_of_civilization.delete("Sample of aluminum foil")
