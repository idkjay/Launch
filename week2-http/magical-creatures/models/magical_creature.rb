class MagicalCreature
  attr_reader :name, :ability, :age
  def initialize(name, ability, age = nil)
    @name = name
    @ability = ability
    @age = age
  end

  def ancient?
    if @age.nil? || @age > 200
      return true
    elsif @age <= 200
      return false
    end
  end
end
