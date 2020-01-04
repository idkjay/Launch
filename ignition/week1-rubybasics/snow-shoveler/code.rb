puts "How many inches of snow fell?"
snowInput = gets.chomp
snowInput2 = snowInput.to_f
snowInput3 = snowInput2 / 12 * 160
puts "Cubic Feet: #{snowInput3}"

if (snowInput3.round<=49)
  put "Quote Price: $20"
else
  if (snowInput3.round<=149)
    puts "Quote Price: $50"
  else
    if (snowInput3.round<=299)
      puts "Quote Price: $100"
    else
      if (snowInput3.round>=300)
        puts "Quote Price: $150"
      end
    end
  end
end
