class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :article_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_article_credentials

  def index 
    # Article.order(created_at: :desc)
    articles= Article.all.order(created_at: :desc)
    render json: articles, each_serializer:ArticlePlusContentSerializer
  end
  def show
    article= find_article
    render json: article, include: ['reviews','reviews.user'] 
  end
  def create
    article= Article.create!(article_params)
    render json: article, serializer:ArticlePlusContentSerializer
  end
  def destroy
    article= find_article
    article.destroy
    head :no_content
  end
  def update
    article= find_article
    article.update!(article_params)
    render json: article, serializer:ArticlePlusContentSerializer
  end
  private
  #find article using id
  def find_article
    Article.find(params[:id])
  end
   #article parameters required
    def article_params
      params.permit(:title, :image, :content, :category)
    end
  #Method that renders error message from a non existent article in database
    def article_not_found
      render json: {errors:["Article not found"]}, status: :not_found  #404
    end
     #Method that renders error message from invalid article details
    def invalid_article_credentials(invalid)
      render json: {errors:invalid.record.errors.full_messages}, status: :unprocessable_entity #422
    end
end
