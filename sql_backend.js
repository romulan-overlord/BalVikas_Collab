var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rockfall911",
  database: "balvikas"
});

con.connect(function(err){
    if(err) throw err;
});

let stdq = "SELECT `Student Aadhaar ID`, Samithi_ID, `Current Group` FROM balvikas.student where Samithi_ID = 1";
let stdData;
let guruq = "SELECT `Guru Aadhaar ID`, `Samithi_ID`, `Group Taught` FROM balvikas.guru where Samithi_ID = 1";
let guruData;


async function runQuery(query){
    let fin;
      con.query(query, function (err, result) {
        if (err)
            throw err;
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
        fin = result;
    });
    setTimeout(function () {
        console.log("wat?");
    }, 4000);
    console.log(fin[0]);
    return fin;
}


console.log("student data");
stdData = runQuery(stdq);
//setTimeout(function(){console.log("wat?");}, 4000);
console.log(stdData[0]);
console.log("guru data");
guruData = runQuery(guruq);
console.log(guruData[0]);

setTimeout(function(){
    console.log(guruData[0]);
}, 4000);