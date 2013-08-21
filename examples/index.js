var gitGraph = new GitGraph();

var master = gitGraph.branch({
  name: 'master',
  size: 200
});
gitGraph.commit(); // Commit on HEAD Branch
gitGraph.commit();
gitGraph.commit();

var dev = gitGraph.branch({
  name: 'dev',
});
gitGraph.commit({color:'red'}); // Dot + Message in red
gitGraph.commit({colorDot: 'red'}); // Dot only in red
gitGraph.commit({colorMessage: 'red'}); // Message only in red

//master.checkout();
var test = gitGraph.branch({
  name: 'test',
});
gitGraph.commit({
message: 'test'
});
gitGraph.commit();
dev.commit(); // Commit on 'dev' Branch
master.checkout();
gitGraph.author = 'Fabien0102 <fabien0102@planee.fr>'; // Change author
master.commit();
dev.merge();
test.commit();
master.commit({color: 'black'});
test.merge(null, false); // Merge into HEAD without merge commit

gitGraph.render();