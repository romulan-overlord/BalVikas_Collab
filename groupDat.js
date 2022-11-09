var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rockfall911",
  database: "balvikas"
});

let g1Curr = [
    "Simple slokas of different deities",
    "Value Based stories",
    "Namavali Bhajans / Value Songs",
    "Introduction into the Life of Bhagawan Sri Sathya Sai Baba"
]

let g2Curr = [
    "Select Bhagavad Gita Slokas",
    "Select episodes from Ramayana & Mahabharatha",
    "Bhajans / Value Songs",
    "Stories of Saints and Prophets",
    "Unity of Faiths",
    "Life & Teachings of Bhagawan Sri Sathya Sai Baba"
]

let g3Curr = [
    "Selected Shlokas from Bhaja Govindam & Bhagavad Gita.",
    "Lives of Great Men like Sri Ramakrishna Paramahamsa & Swami Vivekananda.",
    "Bhajans / Value Songs and Indian Culture & Spirituality",
    "Introduction and Hands-on experience to the Humanitarian Seva being carried out by the Sri Sathya Sai Seva Organisations"
]

let g1Con = [
    "Chanting",
    "Stotras",
    "Prayers",
    "Bhajans",
    "Stories",
    "Health & Hygiene",
    "Japa",
    "Silent Sitting",
    "Other Religions",
    "Significance of Festivals",
    "Miscellaneous",
    "Vedas"
]

let g2Con = [
    "Chanting",
    "Stotras",
    "Prayers",
    "Words of Wisdom",
    "Gems",
    "Babas Sayings",
    "Bhajans",
    "Health & Hygiene",
    "Meditation",
    "Stories",
    "Festivals Significance",
    "Miscellaneous",
    "Group Activities",
    "Vedas"
]

let g3Con = [
    "Prayer",
    "Health & Hygiene",
    "Story Telling",
    "Miscellaneous",
    "Project Activities",
    "Vedas",
    "Group Singing"
]

function genContent(arr){
    con.connect(function(err){
        if(err) throw err;
    });
    for(let i = 0; i < arr.length; i++){
    let str = "INSERT INTO balvikas.group3_content VALUES ('" + arr[i] + "');";
    con.query(str, function(err, result){
        if (err) throw err;
            console.log("Result: " + result);
    });
    }
}

function genCurr(arr){
    con.connect(function(err){
        if(err) throw err;
    });
    for(let i = 0; i < arr.length; i++){
    let str = "insert into balvikas.group3_curriculum_highlights values('" + arr[i] + "')";
    con.query(str, function(err, result){
        if (err) throw err;
            console.log("Result: " + result);
    });
    }
}

genContent(g3Con);