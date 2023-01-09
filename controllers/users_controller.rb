require './controllers/base.rb'

class UserController < Base
    get '/signup' do
        erb :signup
    end

    post '/signup' do
        @user = User.new
        @user.name = params[:name]
        @user.password = params[:password]
        @user.password_confirmation = params[:password_confirmation]
        if @user.save
            log_in(@user)
            redirect '/index'
        else
            erb :signup
        end
    end

    get '/login' do
        erb :login
    end

    post '/login' do
        @user = User.find_by(name: params[:name])
        if @user && @user.authenticate(params[:password])
            log_in(@user)
            redirect '/index'
        else
            erb :login
        end
    end

    get '/logout' do
        protect!
        log_out
        redirect '/'
    end
    
    patch '/update' do
        user = User.find_by_id(params[:id])
        game_id = params[:game_id].to_i
        score = params[:score]
        case game_id
        when 1
            user.update_attribute(:score1, score)
        when 2
            user.update_attribute(:score2, score)
        when 3
            user.update_attribute(:score3, score)
        end
        redirect '/ranking'
    end
end