Rails.application.routes.draw do
  
  
  resources :reviews, only: :create
  resources :articles, only: [:show, :index, :create, :destroy, :update]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login/user", to: "sessions#create"
  post "/login/editor", to: "editors#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
