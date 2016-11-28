var shell = require('shelljs');

var numberOfPosts = 1000;

for (var i = 0; i < numberOfPosts; i++) {
  shell
    .cat('post-to-duplicate.md')
    .to('_posts/2016-01-01-post-' + (i + 1) + '.md');
}

shell.exec('bundle exec jekyll build');
shell.rm('_posts/*');
