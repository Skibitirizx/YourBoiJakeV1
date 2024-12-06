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
    image: 'https://www.google.com/imgres?q=slope%20game&imgurl=https%3A%2F%2Fslope-play.com%2Fdata%2Fimage%2Fgame%2Fslope-logo-1.jpg&imgrefurl=https%3A%2F%2Fslope-play.com%2F&docid=9hZQqGeDykMKfM&tbnid=gS-gDblasI8p9M&vet=12ahUKEwiVttvMsJKKAxWXFVkFHc12Kj8QM3oECBQQAA..i&w=375&h=375&hcb=2&ved=2ahUKEwiVttvMsJKKAxWXFVkFHc12Kj8QM3oECBQQAA'
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
