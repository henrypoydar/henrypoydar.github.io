require 'rack'
require 'rack/contrib/try_static'

use Rack::TryStatic, 
    :root => ".",  # static files root dir
    :urls => %w[/],     # match all requests 
    :try => ['.html', 'index.html', '/index.html'] # try these postfixes sequentially

# otherwise 404 
run lambda { [404, {'Content-Type' => 'text/html'}, ['whoops! Not Found']]}
