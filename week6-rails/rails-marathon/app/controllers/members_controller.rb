class MembersController < ApplicationController
  def create
    @member = Member.new(member_params)
    @house = House.find(params[:house_id])
    @member.house = @house

    if @member.save
      flash[:success] = 'Member added successfully'
      redirect_to house_path(@house)

    else
      flash[:error] = @member.errors.full_messages.to_sentence
      render :new
    end
  end

  def new
    @member = Member.new
    @house = House.find(params[:house_id])
  end


  private

  def member_params
    params.require(:member).permit([:first_name, :last_name])
  end
end
