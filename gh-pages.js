var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/SikandarJODD/Svelte-js-Project.git', // Update to point to your repository  
        user: {
            name: 'SikandarJODD', // update to use your name
            email: 'vu1f2021072@pvppcoe.ac.in' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
// var ghpages = require('gh-pages');

// ghpages.publish(
//     'public',
//     {
//         branch: 'gh-pages',
//         silent: true,
//         repo: 'https://' + process.env.GITHUB_TOKEN + 'github.com/SikandarJODD/Svelte-js-Project.git',
//         user: {
//             name: 'SikandarJODD',
//             email: 'vu1f2021072@pvppcoe.ac.in'
//         }
//     },
//     () => {
//         console.log('Deploy Complete!')
//     }
// )
//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
