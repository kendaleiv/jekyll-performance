var shell = require('shelljs');
var isSilent = shell.config.silent;

cleanup();

run(1);
run(10);
run(100);
run(1000);
run(5000);
run(10000);

function run(numberOfPosts) {
  console.log();
  console.log('--------------------------------------------------');
  console.log('Performance test: ' + numberOfPosts + ' posts');
  console.log('--------------------------------------------------');

  for (var i = 0; i < numberOfPosts; i++) {
    shell
      .cat('post-to-duplicate.md')
      .to('_posts/2016-01-01-post-' + (i + 1) + '.md');
  }

  shell.exec('bundle exec jekyll build');
  cleanup();
}

function cleanup() {
  shell.config.silent = true;

  shell.rm('_posts/*.md');
  shell.rm('-rf', '_site');

  shell.config.silent = isSilent;
}
