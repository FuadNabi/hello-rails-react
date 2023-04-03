Rails.application.routes.draw do
  root 'home#index'
  get '/greet', to: 'greeting#show' 
end