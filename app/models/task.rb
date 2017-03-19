class Task
  include Mongoid::Document
  field :name, type: String
  field :sex, type: String
  field :age, type: Integer
  field :phone, type: String
  field :code,type:String


  validates_presence_of :name,:sex,:age,:phone

  belongs_to :person
  belongs_to :product
end
