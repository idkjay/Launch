class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order(created_at: :desc)
  end

  def show
    @questions = Question.all

    @question = Question.find(params[:id])
    @answers = @question.answers.order(created_at: :asc)
    @answer = Answer.new
  end

  def new
    @question = Question.new
  end

  def create
    # @question = Question.new({
    #   title: params["question"]["title"],
    #   description: params["question"]["description"]
    # })
    @question = Question.new(question_params)
    if @question.save
      flash[:notice] = 'Question was created successfully.'
      redirect_to @question
    else
      flash.now[:notice] = @question.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      flash[:success] = "Question updated"
      redirect_to @question
    else
      flash.now[:error] = @question.errors.full_messages.to_sentence
      render 'edit'
    end
  end

  def destroy
    Question.find(params[:id]).destroy
    flash[:success] = "Question successfully deleted."
    redirect_to questions_path
  end
  #
  # def destroy
  #   Answer.find(params[:id]).destroy
  #   flash[:success] = "Comment successfully deleted."
  #   redirect_to @question
  # end

  private

  def question_params
    params.require("question").permit([:title,:description])
  end

end
