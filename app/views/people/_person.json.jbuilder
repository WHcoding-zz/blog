json.extract! person, :id, :name, :age, :sex, :identity, :created_at, :updated_at
json.url person_url(person, format: :json)