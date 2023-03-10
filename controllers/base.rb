require 'sinatra/base'
require 'dotenv/load'
require 'active_record'
require 'pg'
require 'gon-sinatra'
require './models/user.rb'
require './helpers/app_helpers.rb'

class Base < Sinatra::Base
    set :root, File.join(File.dirname(__FILE__), '..')
    set :views, Proc.new { File.join(root, "views") }
    register Gon::Sinatra

    ActiveRecord::Base.establish_connection(
        adapter:  ENV['myadapter'],
        host:     ENV['myhost'],
        username: ENV['myusername'],
        password: ENV['mypassword'],
        database: ENV['mydatabase'],
        url: ENV['DATABASE_URL']
    )

    enable :sessions
    enable :method_override
    helpers AppHelper
    title = ["Solar System", "Constellation", "Nebula・Galaxy"]
end