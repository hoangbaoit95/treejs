module.exports = {
    apps: [{
      name: 'treejs',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-228-142-229.compute-1.amazonaws.com',
        key: '/d/ssh/treenode.pem',
        ref: 'origin/master',
        repo: 'git@github.com:hoangbaoit95/treejs.git',
        path: '/home/ubuntu/treejs',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
}