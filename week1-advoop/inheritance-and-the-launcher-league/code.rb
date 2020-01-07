class SuperHero
  attr_reader :public_identity, :secret_identity


  def initialize(public_identity, secret_identity)
    @public_identity = public_identity
    @secret_identity = secret_identity
  end

  def species
    "Human"
  end

  def home
    "Earth"
  end

  def fans_per_thousand
    500
  end

  def powers
    ""
  end

  def weakness
    ""
  end

  def backstory
    ""
  end

  def speed_in_mph
    60
  end

  def health
    100
  end

  def psychic?
    false
  end

end

class Speedster < SuperHero
  def speed_in_mph
    60*1000
  end

  def backstory
    "He ran track in high school"
  end

  def powers
    "Runs kinda fast"
  end

  def weakness
    "Injury-prone"
  end
end

class Brawler < SuperHero
  def health
    100 * 20
  end

  def backstory
    "Lifted as a child"
  end

  def powers
    "Super strength"
  end

  def weakness
    "Women"
  end
end

class Detective < SuperHero
  def weakness
    secret_identity
  end

  def speed_in_mph
    60 / 6
  end

  def backstory
    "He watched detective movies as a child"
  end

  def powers
    "Genius IQ"
  end
end

class Demigod < SuperHero
  def home
    "Cosmic Plane"
  end

  def backstory
    "Zeus is his dad"
  end

  def powers
    "Lightning"
  end

  def weakness
    "Rubber"
  end
end

class JackOfAllTrades < SuperHero
  def species
    "Alien"
  end

  def home
    "Venus"
  end

  def psychic?
    true
  end

  def backstory
    "Alien from Venus"
  end

  def powers
    "Alien things"
  end

  def weakness
    "Dad jokes"
  end
end

class WaterBased < SuperHero
  def fans_per_thousand
    5
  end

  def home
    "Earth's Oceans"
  end

  def psychic?
    true
  end

  def backstory
    "Is on a quest to taste the crispiest water on the planet"
  end

  def powers
    "Can drink water really fast"
  end

  def weakness
    "Soda"
  end
end
