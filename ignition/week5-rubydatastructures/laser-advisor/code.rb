laser = {nitrogen: 0, blaster: 200, helium_neon: 180, nuclear_pumped: 170, krypton: 170, co2: 160, coil: 150, strontium_vapor: 140, ruby: 130, xenon_ion: 120, free_electron: 110, gas_dynamic: 95}

puts "How far away are you from the target?"
input = gets.chomp.to_i;

max_value = 0
laser.each do |key, value|
  if value > max_value && value <= input
    max_value = value
  end
end

puts "You should use the #{laser.key(max_value).to_s.gsub("_", " ")} laser!"
