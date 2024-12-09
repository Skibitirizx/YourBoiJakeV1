// Define the list of games
var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
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
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://www.2048.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'googlesnake',
    title: 'Google Snake',
    url: 'https://www.google.com/fbx?fbx=snake_arcade',
    image: 'https://th.bing.com/th/id/OIP.-Bdzvy87SmMmkN8X8si0mAHaFR?w=254&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 'monkey mart',
    title: 'Monkey Mart',
    url: 'https://classroom-6x.io/games/monkey-mart-5.2/',
    image: 'https://monkey-mart.io/wp-content/uploads/2023/06/monkey-mart.png'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
  },
  {
    id: 'littlealchemy2',
    title: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    image: 'https://hints.littlealchemy2.com/img/la2-logo.svg'
  },
  {
    id: 'chromedino',
    title: 'ChromeDino',
    url: 'https://chrome-dino.com/',
    image: 'https://th.bing.com/th/id/OIP.Cyx-tvXuVrSjk-U33dQdWgHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 'soundboard',
    title: 'SoundBoard',
    url: 'https://soundbuttonsworld.com/#google_vignette',
    image: 'https://th.bing.com/th?id=ODLS.a14279a1-2396-4c5e-a1d2-a7062e7ae498&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://geometrygame.org/game/geometry-dash-lite/',
    image: 'https://image.meta1s.com/j21e_I2W5UCp6jKeXRC4jVypj5PEY2otOtVcFNKLPSg/rs:fit:200:200/q:81/aHR0cHM6Ly9pbWcubWV0YTFzLmNvbS9kNmNiNjFhM2NiZmU0ODFkOGYwZWIyMjY2NTNlMTc0ZS5qcGc='
  },
  {
    id: 'swerve',
    title: 'Swerve',
    url: 'https://playcanv.as/p/y3ZFwtwW/',
    image: 'https://th.bing.com/th/id/OIP.CFRRtBXXyH_FP7XGCJwMdQAAAA?w=172&h=176&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 'baskletballstars',
    title: 'Basketball Stars',
    url: 'https://basketball-stars.pro/g2/bbstars/',
    image: 'https://th.bing.com/th/id/OIP.Jh8m7AFwi2ApbNbXY2qe3gAAAA?w=219&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://superhuman.hotunix.com/assignments/1v1lol/index.html',
    image: 'https://tse2.mm.bing.net/th?id=OIP.W4iXiVKmFVKt9y99It-wXwHaFt&pid=Api&P=0&h=180'
  },
  { 
    id: 'retrobowl',
    title: 'Retro Bowl',
    url: 'https://superhuman.hotunix.com/assignments/retro-bowl/index.html',
    image: 'https://tse2.mm.bing.net/th?id=OIP.W4iXiVKmFVKt9y99It-wXwHaFt&pid=Api&P=0&h=180'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://educationbluesky.com/',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn’t work. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://superhuman.hotunix.com/assignments/slope/index.html',
    image: 'https://classroom-6x.io/games/slope-game/thumb_2.jpg'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://superhuman.hotunix.com/assignments/bitlife/index.html',
    image: 'https://classroom-6x.io/games/bitlife-life-simulator/thumb_1.jpg'
  },
  {
    id: 'capybaraclicker',
    title: 'Capybara Clicker',
    url: 'https://totallyscience.co/games/2024/onl/capybara-clicker/index.html',
    image: 'https://totallyscience.co/media/posts/733/responsive/Capybara-Clicker-xs.jpg'
  }
];

// Function to render the games on the page
function renderGames() {
  var container = document.getElementById('games-container');
  container.innerHTML = ''; // Clear previous content

  games.forEach(game => {
    var gameElement = document.createElement('div');
    gameElement.classList.add('game');

    var gameTitle = document.createElement('h3');
    gameTitle.textContent = game.title;

    var gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.title;

    var gameLink = document.createElement('a');
    gameLink.href = game.url;
    gameLink.target = '_blank';

    gameLink.appendChild(gameImage);
    gameLink.appendChild(gameTitle);

    gameElement.appendChild(gameLink);
    container.appendChild(gameElement);
  });
}

// Call the render function on page load
window.onload = renderGames;
