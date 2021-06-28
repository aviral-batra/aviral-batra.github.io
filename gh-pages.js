var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/aviral-batra/aviral-batra.github.io.git', // Update to point to your repository  
        user: {
            name: 'Aviral Batra', // update to use your name
            email: 'aviral.batra@yahoo.co.uk' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)