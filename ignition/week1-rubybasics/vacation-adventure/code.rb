# require 'pry'
dune_sail = 1
anti_grav = 2
lava_surf = 3

number = rand(4)
if (number == 1)
  puts "We will go dune sailing!"
else
  if (number == 2)
    puts "We will have an anti-gravity bounce-house!"
  else
    if (number == 3)
      puts "We will go lava surfing!"
    end
  end
end

# binding.pry
