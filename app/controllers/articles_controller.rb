class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :article_not_found

  def index 
    render json: Article.all, each_serializer:ArticlePlusContentSerializer
  end
  def show
    article= find_article
    render json: article, include: ['reviews','reviews.user'] 
  end
  private
  def find_article
    Article.find(params[:id])
  end
  #Method that renders error message from a non existent article in database
    def article_not_found
      render json: {errors:["Article not found"]}, status: :not_found  #404
    end
end
