# FOR NON-CORE STORIES ONLY

require "spec_helper"
require_relative "../../models/magical_creature.rb"

RSpec.describe MagicalCreature do
  let(:orange_mushroom) { MagicalCreature.new("Orange Mushroom", "Jumps around and attacks passerbys", 6)}
  let(:balrog) { MagicalCreature.new("Balrog", "Ancient demon from hell that causes destruction and misery", 2500)}
  describe ".new" do
    it "takes a name, ability, and age as an optional third argument" do
      expect(orange_mushroom.name).to eq("Orange Mushroom")
      expect(orange_mushroom.ability).to eq("Jumps around and attacks passerbys")
      expect(orange_mushroom.age).to eq(6)
    end

    it "does not have hard-coded values" do
      expect(balrog.name).to eq("Balrog")
      expect(balrog.ability).to eq("Ancient demon from hell that causes destruction and misery")
      expect(balrog.age).to eq(2500)
    end

  
    it "should allow age to default to nil" do
      phoenix = MagicalCreature.new("Phoenix", "Upon death, combusts and revives from the ashes")
      expect(phoenix.age).to eq(nil)
    end
  end

  describe "#ancient?" do
    it "should return true if the creature's age is greater than 200 or nil" do
      expect(balrog.ancient?).to eq(true)
    end

    it "should return false if the creature's age is less than or equal to 200" do
      expect(orange_mushroom.ancient?).to eq(false)
    end
  end
end
