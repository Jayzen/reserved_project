Rails.application.routes.draw do
  root "welcomes#index"
  resources :todos
  resources :sessions, only: [:new, :create]
end
