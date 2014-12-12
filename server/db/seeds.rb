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

elsies = Book.create! title: 'Elsie\'s Turkey Tacos and Arroz con Pollo: More than 100 Latin-Flavored, Great-Tasting Recipes for Working Mamas', author: 'Elsie Ramos', cover_img_url: 'http://sd.keepcalm-o-matic.co.uk/i/keep-calm-its-taco-time.png', first_line: 'It was the best of times. It was the blurst of times.'

potter = Book.create! title: 'If Harry Potter Ran General Electric: Leadership Wisdom from the World of the Wizards', author: 'Tom Morris', cover_img_url: 'http://s3-ec.buzzfed.com/static/2014-07/30/12/enhanced/webdr11/grid-cell-16797-1406738146-4.jpg', first_line: 'Congratulations for buying my book.'

hawking = Book.create! title: 'A Short History of Nearly Everything', author: 'Stephen Hawking', cover_img_url: 'http://d.gr-assets.com/books/1171046794l/83720.jpg', first_line: 'Ah, the universe. It\'s pretty big.'

elsies.shelves << wtr
elsies.shelves << nonfiction
elsies.save!

hawking.shelves << read
hawking.save!
