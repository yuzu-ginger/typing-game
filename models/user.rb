class User < ActiveRecord::Base
    has_secure_password
    # presence: 空でない, uniqueness: 一意性(ユニーク), confirmation: 一致しているか
    validates :name, presence: true, uniqueness: true, length: { maximum: 30 }
    validates :password, presence: true, confirmation: true, length: { minimum: 6, maximum: 250 }
    validates :password_confirmation, presence: true
end