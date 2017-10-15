Rails.application.routes.draw do
  resources :comments
  resources :comments
  resources :users
  resources :lifts
  resources :test_articles
  resource :articles
  
  # signup routes
  post '/create_user', to: "signup_and_login#create_user"
  get '/signup', to: "signup_and_login#index"
  post '/signin', to: "signup_and_login#signin"
  
  get 'articles_' , to: "articles#index"
  get '/articles/:id' , to: "articles#show"
  get 'list_articles', to: 'articles#list_articles'
  get 'articles/edit/:id', to: "articles#edit"
  get 'articles/update', to: "articles#update"
  get 'aticles/delete/:id', to: "articles#delete"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end
    root 'demo#index'
    get 'demo/particles' => 'demo#particles'
    resources :resume
  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
