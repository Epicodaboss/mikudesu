// Array of random greetings
const greetings = [
    "Welcome to the world of anime!",
    "Greetings, anime enthusiast!",
    "Hello! Enjoy your anime journey!",
    "Konnichiwa! Ready for some anime fun?",
    "Salutations, anime lover!"
];

// Array of random anime names (500 names)
const animeNames = [
    "Naruto", "One Piece", "Attack on Titan", "My Hero Academia", "Demon Slayer",
    "Fullmetal Alchemist", "Sword Art Online", "Tokyo Ghoul", "Dragon Ball Z", "Death Note",
    "Bleach", "Fairy Tail", "Code Geass", "Steins;Gate", "Hunter x Hunter", "JoJo's Bizarre Adventure",
    "Neon Genesis Evangelion", "Cowboy Bebop", "Re:Zero", "Fate/stay night",
    "One Punch Man", "Mob Psycho 100", "Black Clover", "Vinland Saga", "Jujutsu Kaisen",
    "The Promised Neverland", "Dr. Stone", "Fire Force", "Haikyuu!!", "Your Lie in April",
    "Clannad", "Anohana", "Toradora!", "Angel Beats!", "Sword Art Online",
    "Log Horizon", "No Game No Life", "Overlord", "The Rising of the Shield Hero",
    "KonoSuba", "That Time I Got Reincarnated as a Slime", "The Seven Deadly Sins",
    "Akame ga Kill!", "Blue Exorcist", "Durarara!!", "Parasyte", "Berserk",
    "Made in Abyss", "Kill la Kill", "Gurren Lagann", "Psycho-Pass", "Tokyo Revengers",
    "Violet Evergarden", "Erased", "Your Name", "A Silent Voice", "Weathering with You",
    "Princess Mononoke", "Spirited Away", "Howl's Moving Castle", "My Neighbor Totoro",
    "Kiki's Delivery Service", "Castle in the Sky", "Nausicaä of the Valley of the Wind",
    "Grave of the Fireflies", "The Wind Rises", "The Tale of the Princess Kaguya",
    "When Marnie Was There", "The Cat Returns", "Whisper of the Heart", "My Neighbors the Yamadas",
    "Pom Poko", "Porco Rosso", "Ocean Waves", "Tales from Earthsea", "From Up on Poppy Hill",
    "The Secret World of Arrietty", "Only Yesterday", "The Garden of Words", "5 Centimeters Per Second",
    "Children Who Chase Lost Voices", "The Place Promised in Our Early Days", "Voices of a Distant Star",
    "Shinkai's World", "RahXephon", "Samurai Champloo", "Trigun", "Outlaw Star",
    "Hellsing", "Afro Samurai", "Claymore", "Gantz", "Elfen Lied",
    "Higurashi When They Cry", "Serial Experiments Lain", "Texhnolyze", "Perfect Blue",
    "Paprika", "The Girl Who Leapt Through Time", "Summer Wars", "Wolf Children",
    "The Boy and the Beast", "Mirai", "Yojouhan Shinwa Taikei", "Ping Pong the Animation",
    "Kemonozume", "Kaiba", "Tatami Galaxy", "Devilman Crybaby", "Dororo",
    "Banana Fish", "Golden Kamuy", "Kaguya-sama: Love Is War", "Rent-a-Girlfriend",
    "Nisekoi", "Oregairu", "Bunny Girl Senpai", "My Teen Romantic Comedy SNAFU",
    "The Quintessential Quintuplets", "We Never Learn", "Horimiya", "Kakushigoto",
    "Sing Yesterday for Me", "Arte", "Somali and the Forest Spirit", "Inspector",
    "The Great Passage", "March Comes in Like a Lion", "Honey and Clover", "Nodame Cantabile",
    "Chihayafuru", "Kuroko's Basketball", "Yowamushi Pedal", "Free!", "Hajime no Ippo",
    "Megalo Box", "Tennis no Ouji-sama", "Major", "Ace of Diamond", "Cross Game",
    "Touch", "Slam Dunk", "Captain Tsubasa", "Inazuma Eleven", "Eyeshield 21",
    "Air Gear", "Yakitate!! Japan", "Shokugeki no Soma", "Yakusoku no Neverland",
    "Beelzebub", "Baka and Test", "The Devil is a Part-Timer!", "The Disastrous Life of Saiki K.",
    "Great Teacher Onizuka", "School Rumble", "My Bride is a Mermaid", "Gintama",
    "Sket Dance", "Nichijou", "Barakamon", "Hinamatsuri", "Dagashi Kashi",
    "Kono Oto Tomare!", "Sound! Euphonium", "Love Live!", "K-On!", "Aikatsu!",
    "Idolmaster", "BanG Dream!", "Wake Up, Girls!", "Zombieland Saga", "Starmyu",
    "Revue Starlight", "Uma Musume: Pretty Derby", "Cinderella Girls", "Puchimas!",
    "Kiratto Pri☆chan", "PriPara", "Pretty Rhythm", "Trinity Seven", "High School DxD",
    "Rosario + Vampire", "Strike the Blood", "Freezing", "Date A Live",
    "Is It Wrong to Try to Pick Up Girls in a Dungeon?", "Goblin Slayer", "Granblue Fantasy",
    "Grimgar, Ashes and Illusions", "Saga of Tanya the Evil", "The Misfit of Demon King Academy",
    "Wise Man's Grandchild", "Arifureta: From Commonplace to World's Strongest",
    "Cautious Hero", "The Hero Is Overpowered but Overly Cautious", "In Another World with My Smartphone",
    "Isekai Cheat Magician", "The Rising of the Shield Hero", "Re:Zero - Starting Life in Another World",
    "Sword Art Online: Alicization", "Log Horizon: Destruction of the Round Table",
    "That Time I Got Reincarnated as a Slime Season 2", "Overlord II", "KonoSuba: God's Blessing on This Wonderful World! 2",
    "No Game No Life: Zero", "Saga of Tanya the Evil: The Movie", "How Not to Summon a Demon Lord",
    "The Rising of the Shield Hero Season 2", "Re:Creators", "Clockwork Planet", "Dimension W",
    "Occultic;Nine", "Robotics;Notes", "Steins;Gate 0", "The Future Diary", "Another",
    "Tokyo Magnitude 8.0", "Zankyou no Terror", "Psycho-Pass 2", "Psycho-Pass: The Movie",
    "ID: Invaded", "Ergo Proxy", "Ghost in the Shell", "Akira", "Jin-Roh: The Wolf Brigade",
    "Blame!", "Godzilla: Planet of the Monsters", "Godzilla: City on the Edge of Battle",
    "Godzilla: The Planet Eater", "Gantz: O", "Appleseed", "Appleseed Alpha",
    "Patlabor", "Patlabor 2: The Movie", "Patlabor: The Movie 3 - WXIII", "Bubblegum Crisis",
    "Bubblegum Crash", "Megazone 23", "Armitage III", "Armitage III: Dual Matrix",
    "Vexille", "Expelled from Paradise", "Psycho-Pass: Sinners of the System",
    "Violet Evergarden: Eternity and the Auto Memory Doll", "Violet Evergarden the Movie",
    "Fate/Grand Order: First Order", "Fate/Grand Order: Babylonia", "Fate/Grand Order: Camelot",
    "Fate/Grand Order: Solomon", "Fate/kaleid liner Prisma☆Illya", "Fate/kaleid liner Prisma☆Illya 2wei!",
    "Fate/kaleid liner Prisma☆Illya 3rei!!", "Fate/kaleid liner Prisma☆Illya Movie: Sekka no Chikai",
    "Fate/kaleid liner Prisma☆Illya Movie: Prisma☆Phantasm", "Fate/stay night: Unlimited Blade Works",
    "Fate/stay night: Heaven's Feel I. Presage Flower", "Fate/stay night: Heaven's Feel II. Lost Butterfly",
    "Fate/stay night: Heaven's Feel III. Spring Song", "Fate/Zero", "Kara no Kyoukai",
    "The Garden of Sinners", "Kara no Kyoukai: Mirai Fukuin", "Kara no Kyoukai: Mirai Fukuin - Extra Chorus",
    "The Garden of Sinners: Oblivion Recording", "The Garden of Sinners: Remaining Sense of Pain",
    "The Garden of Sinners: Paradox Spiral", "The Garden of Sinners: A Study in Murder - Part 1",
    "The Garden of Sinners: A Study in Murder - Part 2", "The Garden of Sinners: Epilogue",
    "The Garden of Sinners: Overlooking View", "The Garden of Sinners: Future Gospel",
    "The Garden of Sinners: Remix - Gate of Seventh Heaven", "Bakemonogatari", "Nisemonogatari",
    "Nekomonogatari", "Monogatari Series: Second Season", "Hanamonogatari", "Owarimonogatari",
    "Kizumonogatari", "Zoku Owarimonogatari", "Monogatari Series: Final Season", "Katanagatari",
    "Tsukimonogatari", "Owarimonogatari Second Season", "Zoku Owarimonogatari",
    "Monogatari Series: Side Story", "Hanamonogatari: Suruga Devil", "Nisemonogatari: Karen Bee",
    "Nisemonogatari: Tsukihi Phoenix", "Kizumonogatari I: Tekketsu-hen", "Kizumonogatari II: Nekketsu-hen",
    "Kizumonogatari III: Reiketsu-hen", "Bakemonogatari: Hitagi Crab", "Bakemonogatari: Mayoi Snail",
    "Bakemonogatari: Suruga Monkey", "Bakemonogatari: Nadeko Snake", "Bakemonogatari: Tsubasa Cat",
    "Nekomonogatari: Kuro", "Nekomonogatari: Shiro", "Owarimonogatari: Shinobu Mail",
    "Owarimonogatari: Sodachi Riddle", "Owarimonogatari: Sodachi Lost", "Owarimonogatari: Shinobu Time",
    "Owarimonogatari: Mayoi Hell", "Owarimonogatari: Hitagi Rendezvous", "Owarimonogatari: Ougi Dark",
    "Monogatari Series: Second Season - Nekomonogatari (White)", "Monogatari Series: Second Season - Kabukimonogatari",
    "Monogatari Series: Second Season - Otorimonogatari", "Monogatari Series: Second Season - Onimonogatari",
    "Monogatari Series: Second Season - Koimonogatari", "Hanamonogatari: Suruga Devil",
    "Tsukimonogatari: Yotsugi Doll", "Owarimonogatari: Mayoi Jiangshi", "Owarimonogatari: Shinobu Mail",
    "Owarimonogatari: Hitagi Rendezvous", "Owarimonogatari: Ougi Formula", "Owarimonogatari: Ougi Dark",
    "Zoku Owarimonogatari: Koyomi Reverse", "Monogatari Series: Final Season - Tsukimonogatari",
    "Monogatari Series: Final Season - Owarimonogatari", "Monogatari Series: Final Season - Zoku Owarimonogatari"
];

// Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to display a random greeting with a random anime name
function displayRandomGreeting() {
    const greetingText = document.getElementById('greeting-text');
    const randomGreeting = getRandomElement(greetings);
    const randomAnimeName = getRandomElement(animeNames);
    greetingText.textContent = `${randomGreeting} Your featured anime today is: ${randomAnimeName}.`;
}

// Call the function to display a random greeting on page load
window.onload = displayRandomGreeting;
