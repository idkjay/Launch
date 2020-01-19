require 'spec_helper'

feature 'member index page' do
  scenario 'user views a list of all book club members' do
    book_club_one = BookClub.create(name: "ezLaunchers", location: "5th floor patio")

    casi = Member.create(first_name: "Casi", last_name: "Newell", email: "casi@ezCater.com", bio: "smarty smart smart" , favorite_book: "Something russian", leader: true, book_club: book_club_one )
    zach = Member.create(first_name: "Zach", last_name: "Martin", email: "zach@ezCater.com", bio: "very sophisticated", favorite_book: "Game of Thrones", leader: false, book_club: book_club_one)
    brianna = Member.create(first_name: "Brianna", last_name: "Kincart", email: "brianna@ezCater.com", bio: "she's alright I guess", favorite_book: "The Alchemist", leader: false, book_club: book_club_one)

    visit '/members'

    expect(page).to have_content "All Book Club Members"
    expect(page).to have_content(casi.first_name)
    expect(page).to have_content(casi.last_name)
    expect(page).to have_content(zach.first_name)
    expect(page).to have_content(zach.last_name)
    expect(page).to have_content(brianna.first_name)
    expect(page).to have_content(brianna.last_name)
  end
end
