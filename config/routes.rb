Rails.application.routes.draw do
  resources :details
  resources :people
  resources :tasks
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'tasks#index'
end
