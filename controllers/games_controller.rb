require './controllers/base.rb'

class GameController < Base
    get '/1' do
        protect!
        @title = "Solar System"
        @user = current_user
        @highScore = @user.score1
        gon.highScore = @highScore
        @game_id = 1
        gon.gameId = @game_id
        erb :game
    end

    get '/2' do
        protect!
        @title = "Constellation"
        @user = current_user
        @highScore = @user.score2
        gon.highScore = @highScore
        @game_id = 2
        gon.gameId = @game_id
        erb :game
    end

    get '/3' do
        protect!
        @title = "Nebula・Galaxy"
        @user = current_user
        @highScore = @user.score3
        gon.highScore = @highScore
        @game_id = 3
        gon.gameId = @game_id
        erb :game
    end
end