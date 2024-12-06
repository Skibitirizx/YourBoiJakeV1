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
    image: 'data:image/png;base64,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'
  },
  {
    id: 'bitlife',
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
