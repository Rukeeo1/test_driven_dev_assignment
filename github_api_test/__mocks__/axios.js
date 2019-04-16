//repo array...just how crazy it is...i put the external array....
let arr = [
    { id: 163083596,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjMwODM1OTY=',
      name: 'repo',
      full_name: 'Rukeeo1/repo',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/Rukeeo1/repo',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Rukeeo1/repo',
      forks_url: 'https://api.github.com/repos/Rukeeo1/repo/forks',
      keys_url: 'https://api.github.com/repos/Rukeeo1/repo/keys{/key_id}',
       },
    { id: 176070351,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzYwNzAzNTE=',
      name: 'test-repo',
      full_name: 'Rukeeo1/test-repo',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/Rukeeo1/test-repo',
      description: 'Just feel like messing around on a sunday morning',
      fork: false,
      url: 'https://api.github.com/repos/Rukeeo1/test-repo',
      forks_url: 'https://api.github.com/repos/Rukeeo1/test-repo/forks',
      keys_url:
       'https://api.github.com/repos/Rukeeo1/test-repo/keys{/key_id}',
      },
    { id: 179886823,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzk4ODY4MjM=',
      name: 'test_driven_dev',
      full_name: 'Rukeeo1/test_driven_dev',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/Rukeeo1/test_driven_dev',
      description:
       'alright i am trying my hands on the tdd....first repo so far.',
      fork: false,
      url: 'https://api.github.com/repos/Rukeeo1/test_driven_dev',
      forks_url: 'https://api.github.com/repos/Rukeeo1/test_driven_dev/forks',
      keys_url:
       'https://api.github.com/repos/Rukeeo1/test_driven_dev/keys{/key_id}',
      },
    { id: 180215407,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODAyMTU0MDc=',
      name: 'test_driven_dev_assignment',
      full_name: 'Rukeeo1/test_driven_dev_assignment',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/Rukeeo1/test_driven_dev_assignment',
      description: null,
      fork: false,
      url:
       'https://api.github.com/repos/Rukeeo1/test_driven_dev_assignment',
      forks_url:
       'https://api.github.com/repos/Rukeeo1/test_driven_dev_assignment/forks',
      keys_url:
       'https://api.github.com/repos/Rukeeo1/test_driven_dev_assignment/keys{/key_id}',
       },
    { id: 179240494,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzkyNDA0OTQ=',
      name: 'wed_project',
      full_name: 'Rukeeo1/wed_project',
      private: false,
      owner: [Object],
      html_url: 'https://github.com/Rukeeo1/wed_project',
      description: 'still praticing  git...just a index.html and style page',
      fork: false,
      url: 'https://api.github.com/repos/Rukeeo1/wed_project',
      forks_url: 'https://api.github.com/repos/Rukeeo1/wed_project/forks',
      keys_url:
       'https://api.github.com/repos/Rukeeo1/wed_project/keys{/key_id}',
    } 
   ]

function get(name){
    return {data:arr};
}

module.exports.get = get;