class Book < ActiveRecord::Base

    has_many :shelves, through: 'shelvings'
    has_many :shelvings

    

end
