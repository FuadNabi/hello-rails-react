class GreetingController < ApplicationController
  def show
    render json: Greeting.random.text
  end
end
