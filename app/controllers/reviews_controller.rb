class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_review_credentials

  def create 
    review=Review.create!(params.permit(:user_id, :article_id, :comment))
    render json: review
  end
  private
  def invalid_review_credentials(invalid)
      render json: {errors:invalid.record.errors.full_messages}, status: :unprocessable_entity #422
    end
end
