require './controllers/base.rb'

class HomeController < Base
    get '/' do
        erb :top
    end

    get '/index' do
        protect!
        @title = ["Solar System", "Constellation", "Nebula・Galaxy"]
        erb :index
    end

    get '/ranking' do
        @users1 = User.all.sort_by{|user| -user.score1 }
        @users2 = User.all.sort_by{|user| -user.score2 }
        @users3 = User.all.sort_by{|user| -user.score3 }
        erb :rank
    end
end