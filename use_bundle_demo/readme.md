```ruby
#1 建立use_bundle_demo文件夹
#2 文件夹下面执行bundle init命令，生成Gemfile文件，修改文件内容
source "https://ruby.taobao.org"
gem "activesupport"

#3 文件夹下面执行bundle install命令，生成Gemfile.lock文件
#4 文件夹下面生成root.rb和main.rb文件
#5 boot.rb
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __FILE__)
require 'bundler/setup' # set up gems listed in the Gemfile

#6 main.rb
require File.expand_path('../boot', __FILE__)
require 'active_support/all'

p 1.days

#7 终端执行ruby main.rb
```
