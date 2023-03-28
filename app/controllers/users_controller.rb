class UsersController < ApplicationController
  ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_user_credentials
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    #POST /signup
    def create
      user= User.create!(user_params)
      session[:user_id]= user.id
      render json: user
    end

    #GET /me
    def show
      if(session[:user_id])
        user=User.find(session[:user_id])
      render json: user
      else
        editor=Editor.find(session[:editor_id])
      render json: editor
      end
      
    end

    private
    #User parameter required
    def user_params
      params.permit(:email, :username, :password, :password_confirmation)
    end
    #Method that renders error message from invalid user details
    def invalid_user_credentials(invalid)
      render json: {errors:invalid.record.errors.full_messages}, status: :unprocessable_entity #422
    end
    #Method that renders error message from a non existent user in database
    def user_not_found
      render json: {errors:["User does not exist"]}, status: :not_found  #404
    end
end
