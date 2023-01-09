require './controllers/homes_controller.rb'
require './controllers/games_controller.rb'
require './controllers/users_controller.rb'

run Rack::URLMap.new({
    '/' => HomeController,
    '/game' => GameController,
    '/user' => UserController,
})