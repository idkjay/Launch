# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Example:
#
uss_enterprise = Ship.create(ship_name: 'USS Enterprise', ship_class: 'Galaxy', ship_location: "Romulan Star Empire")
serenity = Ship.create(ship_name: 'Serenity', ship_class: 'Firefly', ship_location: "Miranda")

Member.create(ship: uss_enterprise, first_name: 'Hannah', last_name: 'Horobin', specialty_division: "Everything")
Member.create(ship: uss_enterprise, first_name: 'Jordan', last_name: 'Chu', specialty_division: "Eating")
