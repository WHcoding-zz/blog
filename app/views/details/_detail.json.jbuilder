json.extract! detail, :id, :title, :work_hours, :description, :created_at, :updated_at
json.url detail_url(detail, format: :json)