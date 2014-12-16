# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

wtr = Shelf.create! name: 'Want to Read', exclusive: true
read = Shelf.create! name: 'Read', exclusive: true
currently_reading = Shelf.create! name: 'Currently Reading', exclusive: true

nonfiction = Shelf.create! name: 'Non-fiction', exclusive: false
fiction = Shelf.create! name: 'Fiction', exclusive: false

own_ebook = Shelf.create! name: 'Own (eBook)', exclusive: false
own_physical_book = Shelf.create! name: 'Own (Physical)', exclusive: false

exclusive_shelves, nonexclusive_shelves = Shelf.all.to_a.partition(&:exclusive?)

puts "[DEBUG] exclusive_shelves => #{exclusive_shelves.inspect}"
puts "[DEBUG] nonexclusive_shelves => #{nonexclusive_shelves.inspect}"


puts "[DEBUG] loading seed books from books.json"

json = JSON.parse(File.read('./books.json'))

json.each do |book_json|

	shelved = [true, true, true, false].shuffle.first

	shelves = if shelved
		[exclusive_shelves.shuffle.first, nonexclusive_shelves.shuffle.first]
	else
		[]
	end

	book = Book.create! book_json.merge(shelves: shelves)
	puts "[DEBUG] LOADED book.title => #{book.title.inspect}, shelves: #{shelves.inspect}"
end