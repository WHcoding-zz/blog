class Product
  include Mongoid::Document
  field :name, type: String
  field :description, type: String
  field :image_url, type: String
  field :origin, type: String
  field :number, type: Integer
  field :size, type: Integer
  field :color, type: String
  field :wholesale_price, type: Float
  field :retail_price, type: Float
  field :discount, type: Float

  has_many :tasks,dependent: :destroy

end
