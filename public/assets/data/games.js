<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game - YoBoiJake</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="logo-container">
      <img src="https://i.imgflip.com/6ej3bl.png" alt="YoBoiJake Logo" class="logo">
      <span class="site-name">YoBoiJake</span>
    </div>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="games.html">Games</a></li>
        <li><a href="search.html">Search</a></li>
        <li><a href="settings.html">Settings</a></li>
      </ul>
    </nav>
  </header>
  
  <main class="game-page">
    <div class="game-wrapper">
      <div class="game-list">
        <h2>All Games</h2>
        <div class="games-list">
          <!-- Dynamic Game Entries Will Be Inserted Here -->
        </div>
      </div>

      <div class="game-container">
        <div class="game-box">
          <div class="game-frame">
            <!-- Game will be inserted here -->
            <iframe id="gameFrame" src="" frameborder="0"></iframe>
          </div>
          <div class="controls">
            <button id="fullscreenButton">Fullscreen</button>
            <button id="exitButton">Exit Game</button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <script>
    const games = [
      {
        id: 'cookieclicker',
        title: 'Cookie Clicker',
        description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
        url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
        image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
      },
      {
        id: 'fbwg',
        title: 'Fireboy and Watergirl',
        description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
        url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
        image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
      },
      {
        id: 'bloxerz',
        title: 'Bloxerz',
        url: 'https://www.ehabgames.com/games/bloxors/index.html',
        image: 'https://th.bing.com/th?id=OIP.6jjUQ7Niv2cl4NvkOrkf_QAAAA&w=255&h=244&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
      },
      {
        id: 'driftboss',
        title: 'Drift Boss',
        image: 'https://drift-boss.pro/upload/cache/upload/imgs/drift-boss1-m500x500.png',
        url: 'https://driftbossonline.github.io/file/'
      },
      // More games here...
    ];

    // Get the game URL from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("gameId");
    const game = games.find(g => g.id === gameId);

    const gameFrame = document.getElementById("gameFrame");
    const fullscreenButton = document.getElementById("fullscreenButton");
    const exitButton = document.getElementById("exitButton");

    // Set the game iframe source based on selected game
    if (game) {
      gameFrame.src = game.url;
      document.title = game.title;
    }

    // Fullscreen button functionality
    fullscreenButton.addEventListener('click', () => {
      if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
      } else if (gameFrame.mozRequestFullScreen) { // Firefox
        gameFrame.mozRequestFullScreen();
      } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameFrame.webkitRequestFullscreen();
      } else if (gameFrame.msRequestFullscreen) { // IE/Edge
        gameFrame.msRequestFullscreen();
      }
    });

    // Exit button functionality
    exitButton.addEventListener('click', () => {
      window.location.href = "games.html";
    });

    // Dynamically populate the games list
    const gamesList = document.querySelector('.games-list');
    games.forEach(game => {
      const gameItem = document.createElement('div');
      gameItem.classList.add('game-item');
      gameItem.innerHTML = `
        <a href="game.html?gameId=${game.id}">
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
        </a>
      `;
      gamesList.appendChild(gameItem);
    });
  </script>
</body>
</html>
