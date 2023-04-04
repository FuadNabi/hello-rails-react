class Api::GreetingsController < ApplicationController
  def index
    render json: Greeting.random.text
  end
end
