json.books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :author
    # json.coverImgUrl book.cover_image_url
    # json.firstLine book.first_line
    # json.shelvings(book.shelvings.map(&:id))
  end
end