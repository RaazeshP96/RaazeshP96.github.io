let url = "https://api.github.com/users/RaazeshP96";
let repos = [];
let currentPage = 1;
let repoPerpage = 9; // 9 repos per page
const pageNumbers = [];

//DOM ELEMENTS
let profile = document.getElementById("profile");
let username = document.getElementById("username");
let bio = document.getElementById("bio");
let github = document.getElementById("gitHub");
let follow = document.getElementById("follow");
let mainContent = document.getElementById("mainContent");
let hideme = document.getElementById("hideme");
let pagination = document.querySelector(".pagination");
let ref = document.getElementById("repo");

function getUserInfo() {
  // fetching api of RaazeshP96's github
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      profile.src = data["avatar_url"];
      username.innerHTML = `<strong> ${data["name"]} </strong> `;
      let follower = data["followers"];
      let message = `${follower} nice people are following me in github.`;
      bio.textContent = data["bio"];
      github.href = data["html_url"];
      follow.textContent = message;
    });

  // getting the api of Reposotories from github
  fetch(`${url}/repos`)
    .then((response) => response.json())
    .then((data) => {
      repos = data;

      displayRepoPerPage();
      totalPageNumber();

      // for displaying loading before fetching datas from apis
      mainContent.hidden = false;
      hideme.hidden = true;
    });
}

//show repo per page
function displayRepoPerPage() {
  ref.innerHTML = "";

  //get current repos
  const indexOfLastRepo = currentPage * repoPerpage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerpage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  currentRepos.forEach((element) => {
    ref.innerHTML += `<li class="list-group-item"><a href='${element["html_url"]}' target='_blank' > ${element["name"]} </a></li>`;
  });
}

//generate pagination number
function totalPageNumber() {
  for (let i = 1; i <= Math.ceil(repos.length / repoPerpage); i++) {
    pageNumbers.push(i);
  }

  pageNumbers.forEach((number) => {
    pagination.innerHTML += `<li class='page-item'> <a href='!#' data-number=${number} class='page-link' onclick='changePageNumber(${number})'>${number}</a></li>`;
  });
}

//change page number of repos when click on pagination number link
function changePageNumber(pageNumber) {
  event.preventDefault();
  currentPage = pageNumber;

  displayRepoPerPage();
}

getUserInfo();
