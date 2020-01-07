require_relative "Ingredient"

class Container

  attr_reader :weight, :maximum_holding_weight, :ingredients

  def initialize(weight, maximum_holding_weight)
    @weight = weight
    @maximum_holding_weight = maximum_holding_weight
    @ingredients = []
  end

  def fill_with_ingredient(ingredient)
    quantity = (@maximum_holding_weight / ingredient.weight).to_i
    @weight += quantity * ingredient.weight
    quantity.times do
      @ingredients << ingredient
    end
  end

  def which_ingredient
    @ingredients[0].name
  end

  def how_many_ingredients
    @ingredients.length
  end

  def remove_one_ingredient
    @ingredients.shift
  end

  def empty
    @ingredients.clear
  end

end
