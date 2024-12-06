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
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
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
    id: 'slow roads',
    title: 'Slow Roads',
    url: 'https://slowroads.io/',
    image: 'https://slowroads.io/static/media/splash-logo-placeholder-7b.2d60164d.png'
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
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
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
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual (Advice: This works better at your house).'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://superhuman.hotunix.com/assignments/slope/index.html',
    image: 'data:image/jpeg;base64,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'
    title: 'Bitlife',
    url: 'https://superhuman.hotunix.com/assignments/bitlife/index.html',
    image: 'https://bitlifeonline.github.io/play.html'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
