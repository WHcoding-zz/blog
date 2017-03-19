class Person
  include Mongoid::Document
  field :name, type: String
  field :age, type: Integer
  field :sex, type: String
  field :identity, type: Integer
  
  has_many :tasks,dependent: :destroy 

  # -> { where(name: 1) }
  
end
