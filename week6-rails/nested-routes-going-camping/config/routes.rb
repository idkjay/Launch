Rails.application.routes.draw do
  resources :campsites, only: [:show] do
    resources :campers, only: [:index]
  end
  resources :campers, only: [:show] do
    resources :supplies, only: [:index]
  end


  resources :campsites, only: [:index]
  resources :campers, only: [:index]
  resources :supplies, only: [:index]
end
