class AnswersController < ApplicationController
  def create
    @question = Question.find(params[:question_id])
    @answer = Answer.new(answer_params)
    @answer.question = @question

    if @answer.save
      flash[:success] = 'Answer saved successfully.'
      redirect_to question_path(@question)
    else
      flash[:error] = @answer.errors.full_messages.to_sentence
      redirect_to question_path(@question)
    end
  end
  # def edit
  #   @answer = Answer.find(params[:id])
  # end
  #
  # def update
  #   @answer = Answer.find(params[:id])
  #   if @answer.update(answer_params)
  #     flash[:success] = "Comment updated"
  #     redirect_to @question
  #   else
  #     flash.now[:error] = @answer.errors.full_messages.to_sentence
  #     render 'edit'
  #   end
  # end
  #
  # def destroy
  #   Answer.find(params[:id]).destroy
  #   flash[:success] = "Comment successfully deleted."
  #   redirect_to @question
  # end

  private

  def answer_params
    params.require(:answer).permit(:description)
  end
end
