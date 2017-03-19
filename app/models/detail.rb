class Detail
  include Mongoid::Document
  field :title, type: String
  field :work_hours, type: Integer
  field :description, type: String

  belongs_to :task
end
