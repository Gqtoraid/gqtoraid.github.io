const header = document.querySelector("#header");

let navbarTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">ZoudyWasTaken</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="videos.html">Videos</a>
              </li>
            </ul>
        </div>
    </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  header.innerHTML = navbarTemplate;
});
