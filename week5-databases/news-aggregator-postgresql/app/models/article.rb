class Article
  # .....add attr_accessors as needed
  # .....add initialize
  attr_accessor :title, :url, :description, :id
  # The `db_connection` method is already defined in server.rb giving you access to it here without needing a require statement
  def initialize(title, url, description, id)
    @title = title
    @url = url
    @description = description
    @id = id
  end

  def self.all
    articles = []

    result = db_connection do |conn|
      conn.exec("SELECT title, url, description, id FROM articles;")
    end

    result.each do |article_data|
      articles << Article.new(
        article_data["title"],
        article_data["url"],
        article_data["description"],
        article_data["id"]
      )
    end
    articles
    # - alternative constructor class method
    # - does not accept an argument
    # - uses `SELECT` statement to retrieve all article records
    # - should return an array of newly created article objects
  end

  def self.create(article_params)
    result = db_connection do |conn|
      conn.exec_params("INSERT INTO articles(title, url, description, id) VALUES ($1, $2, $3)",
      [article_params["title"],
      article_params["url"],
      article_params["description"],
      article_params["id"]])
    end
    # - utility class method AND alternate constructor: creates a new article record in our database
    # - accepts the parameters needed for a new Article record (this should come in from your form)
    # - uses an INSERT statement to create a new article record
    # - should return the newly persisted article object
  end

  # Non-Core
  def self.find(id)
    result = db_connection do |conn|
      conn.exec("SELECT * FROM articles WHERE id=#{id}")
    end

    article = Article.new(
      result.to_a[0]["title"],
      result.to_a[0]["url"],
      result.to_a[0]["description"],
      result.to_a[0]["id"]
    )
    # - this is an alternative constructor class method
    # - accepts an id as an argument
    # - uses a SELECT statement with a WHERE clause
    # - should returns a single article object whose id matches the given id
  end
end
