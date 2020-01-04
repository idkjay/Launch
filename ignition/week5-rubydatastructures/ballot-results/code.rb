# require 'pry'
vote_results =
  {
    "Precinct 1" => {
      'Mary Sue' => 218,
      'Sally Jane' => 455,
      'Billy Joe' => 185
    },
    "Precinct 2" => {
      'Mary Sue' => 229,
      'Sally Jane' => 41,
      'Billy Joe' => 35
    },
    "Precinct 3" => {
      'Mary Sue' => 297,
      'Sally Jane' => 423,
      'Billy Joe' => 488
    },
    "Precinct 4" => {
    'Mary Sue' => 283,
    'Sally Jane' => 171,
    'Billy Joe' => 353
    }
  }

  # 1) Generate the voting totals by Precinct and Candidate as shown in the directions.
  vote_results.each do |precinct, candidates|
    puts "**In #{precinct}**"
    candidates.each do |name, votes|
      puts "-#{name} got #{votes} votes."
    end
  end

  # 2) How many people voted in each precinct? Create a new hash where the keys name the precinct and the values start at 0. Iterate over the provided `vote_results` to update the totals.
  total_votes = {}

  vote_results.each do |precinct, hash|
    p_votes = 0
    hash.each do |candidate, votes|
      p_votes += votes
    end
    puts "#{precinct} had #{p_votes} votes."
    total_votes[precinct] = p_votes
  end

  # # 3) Which precinct had the highest voter turnout? Use the hash you created in Question 2 to return the answer.
  puts "#{total_votes.key(total_votes.values.max)} had the most votes with #{total_votes.values.max} votes."

  # # 4) Output the total number of votes per candidate in the format seen above. Create a new hash where the keys name the candidate and the values start at 0. Iterate over the provided `vote_results` to update the totals.
  candidate_votes = {}

  vote_results.each do |precinct,hash|
    hash.each do |candidate, votes|
      if candidate_votes[candidate] == nil
        candidate_votes[candidate] = votes
      else
        candidate_votes[candidate] += votes
      end
    end
  end
  candidate_votes.each do |name, votes|
    puts "#{name} had #{votes} votes."
  end

  # # 5) Who was the winning candidate in Precinct 4 and how many votes did they get?
  puts "#{vote_results["Precinct 4"].key(vote_results["Precinct 4"].values.max)} won Precinct 4 with #{vote_results["Precinct 4"].values.max} votes."

  # # 6) How many people voted in total?
  total_voters = 0
  vote_results.each do |precinct, hash|
    hash.each do |candidate, votes|
      total_voters += votes
    end
  end
  puts "In total, #{total_voters} people voted."

  # 7) Who won the election and how many votes did they get? Use the hash you created in Question 4 to return the answer.
  puts "#{candidate_votes.key(candidate_votes.values.max)} had the most votes with #{candidate_votes.values.max} votes."

  # 8) How many more votes did the winner have as compared to the third place candidate? Use the hash you created in Question 4 and the winning candidate total votes value from Question 7 to complete this question.
  puts "#{candidate_votes.key(candidate_votes.values.max)} beat #{candidate_votes.key(candidate_votes.values.min)} by #{candidate_votes.values.max - candidate_votes.values.min} votes."
