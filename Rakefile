require 'bundler'

desc "Generate the blog and test the HTML-ness"
task "test" do
  Bundler.require
  raise unless system "jekyll build"
  raise unless system "htmlproof --disable-external ./_site"
end

task default: [:test]