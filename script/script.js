 // fetching api of RaazeshP96's github
            fetch('https://api.github.com/users/RaazeshP96')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    document.getElementById('profile').src = data['avatar_url']
                    document.getElementById('username').innerHTML = `<strong> ${data['name']} </strong> `
                    let follower = data['followers']
                    let message = `${follower} nice people are following me in github.`
                    document.getElementById('bio').textContent = data['bio']
                    document.getElementById('gitHub').href = data['html_url']
                    document.getElementById('follow').textContent = message
                });
            
            // getting the api of Reposotories from github
            fetch("https://api.github.com/users/RaazeshP96/repos")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    
                    let ref = document.getElementById('repo')
                  
                        
            
                    data.forEach(element => {
                        ref.innerHTML += `<li class="list-group-item"><a href='${element["html_url"]}' target='_blank' nofollow> ${element['name']} </a></li>`

            
                    })
            
                   
            
                    // for displaying loading before fetching datas from apis
                    document.getElementById('mainContent').hidden = false
                    document.getElementById('hideme').hidden = true
                });