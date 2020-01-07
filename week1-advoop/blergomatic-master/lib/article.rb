class Article
  attr_accessor :author, :title, :body
  attr_reader :comments

  def initialize
    @author = author
    @title = title
    @body = body
    @comments = []
  end

  def add_comment(comment)
    @comments << comment
  end

  def word_count(word)
    word.size
  end
end
