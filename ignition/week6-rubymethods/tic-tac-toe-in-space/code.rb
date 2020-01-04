def print_grid(board)
  board.each_with_index do |tile,i|
    tile.each_with_index do |subtile, index|
      if subtile.nil?
        subtile = " "
      end
      if index == tile.length-1
        print " #{subtile} \n"
      else
        print " #{subtile} " + "|"
      end
    end
    if i<board.length-1
      puts "-----------"
    end
  end
end

board_a = [
  ['x', 'o', 'x'],
  ['x', nil, 'o'],
  ['x', 'o', nil]
]

board_b = [
  [nil, 'o', 'x'],
  ['x', 'o', nil],
  ['x', 'o', nil]
]

print_grid(board_a)
print_grid(board_b)
