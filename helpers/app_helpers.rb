module AppHelper
    # 渡されたユーザーでログインする
    def log_in(user)
        session[:user_id] = user.id
    end

    # 現在のユーザーをログアウトする
    def log_out
        session.delete(:user_id)
        @current_user = nil
    end

    # 現在のユーザ
    def current_user
        if session[:user_id]
            @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    def logged_in?
        !current_user.nil?
    end

    def protect!
        unless logged_in?
            redirect '/'
        end
    end
end