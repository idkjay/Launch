scores =[
  {par: 5, score: 7},
  {par: 4, score: 5},
  {par: 3, score: 3},
  {par: 4, score: 4},
  {par: 4, score: 4},
  {par: 3, score: 2},
  {par: 4, score: 5},
  {par: 5, score: 5},
  {par: 4, score: 5},
  {par: 5, score: 7},
  {par: 4, score: 4},
  {par: 4, score: 4},
  {par: 3, score: 3},
  {par: 4, score: 5},
  {par: 4, score: 5},
  {par: 4, score: 4},
  {par: 3, score: 3},
  {par: 5, score: 6}
]

total_strokes = 0
total_par = 0

scores.each do |holes|
  total_par += holes[:par]
  total_strokes += holes[:score]
end

puts "Total Strokes: #{total_strokes}"
puts "Total Par: #{total_par}"

final_score = total_strokes - total_par

over_under = ""
if final_score >= 0
  over_under = "over"
else
  over_under = "under"
  final_score = final_score * -1
end

puts "You were #{final_score} #{over_under} par."
