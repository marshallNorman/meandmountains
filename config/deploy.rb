require 'mina/bundler'
require 'mina/rails'
require 'YAML'
require 'mina-circle'

set :term_mode, 'system'
set :ssh_options, '-A'

set :env_config, YAML.load_file('./config/env.yml')
set :environment, ENV['on'] || env_config.fetch('default')

# Circle Configuration
set :branch, ENV['branch'] || 'master'
set :circle_user, 'marshallNorman'
set :circle_project, 'meandmountains'
set :circle_artifact, 'meandmountains.tar.gz'
set :circle_explode_command, 'tar -mzxf'

def timestamp
  Time.now().strftime("%Y-%m-%d_%H%M")
end

is_production = false
is_staging = false
is_test = false

puts "-----> Connecting to #{environment} server, this may take a minute."

set :tag, "#{environment}_#{timestamp}"

task :environment do
  env_config.fetch(environment).each do |key, value|
    set key.to_sym, value.to_s
    if key == "is_production" and value
      is_production = true
    end
    if key == "is_staging" and value
      is_staging = true
    end
    if key == "is_test" and value
      is_test = true
    end
  end
end

# Manually create these paths in shared/ (eg: shared/config/database.yml) in your server.
# They will be linked in the 'deploy:link_shared_paths' step.
set :shared_paths, ['media', '.env.php']

# Put any custom mkdir's in here for when `mina setup` is ran.
# For Rails apps, we'll make some of the shared paths that are shared between
# all releases.
task :setup => :environment do
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    # invoke :setup
    invoke :'circleci:deploy'
    invoke :ee_setup
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
  end
end
