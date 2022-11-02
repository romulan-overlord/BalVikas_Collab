var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rockfall911",
  database: "balvikas"
});

//data
let cityArr = [
  "Ramanathapuram",
  "Irugur",
  "Ondipudur",
  "Vadavalli",
  "Podanur",
  "Deorali",
  "Soureni Bazar",
  "Lolay",
  "Mirik",
  "Pulbazar"
]

let pinArr = [
  641045,
  641103,
  641016,
  641041,
  641023,
  734220,
  734227,
  734301,
  734214,
  734122,
]

let estdArr = [
  "1971-11-29",
  "1973-11-12",
  "1975-11-18",
  "1977-11-21",
  "1979-12-09",
  "1984-02-14",
  "1988-05-11",
  "1990-04-14",
  "1991-07-05",
  "1994-10-01"
]

let studentID = [
  40615,
  89111,
  42884,
  64105,
  22701,
  67322,
  41532,
  55259,
  68335,
  78872
]

let stdFN = [
  "Ram",
  "Krishna",
  "Vishnu",
  "Narayana",
  "Guru",
  "Lakshmi",
  "Sita",
  "Mahalakshmi",
  "Parvathi",
  "Janani"
];

let stdMN = [
  "Hari",
  "Varma",
  "Sainath"
];

let stdLN = [
  "Kumar",
  "Sai",
  "Vishal",
  "Murthi",
  "Prasanth",
  "Rai",
  "Laskshmi",
  "Pradhan",
  "Devi",
  "sai"
]

let stdDOB = [
"2007-02-15",
"2007-03-08",
"2009-04-11",
"2009-11-05",
"2010-05-19",
"2010-09-12",
"2011-02-06",
"2011-02-24",
"2011-10-03",
"2013-02-24",
]

let joiningDt = [
  "2014-11-08",
  "2014-11-09",
  "2015-11-23",
  "2015-11-26",
  "2015-12-03",
  "2017-12-16",
  "2018-04-11",
  "2019-08-25",
  "2019-10-01",
  "2020-11-15"
]

let stdPhn = [
  8847041086,
  6631348198,
  7428282342,
  6120143793,
  6128855254,
  8917283903,
  7887786760,
  8079669371,
  8917312724,
  6127948623
]

//guru data

let guruID = [
  "74161", 
  "33839", 
  "84425",
  "56287", 
  "34727", 
  "80879", 
  "32287", 
  "15417", 
  "28371", 
  "85663", 
  "16557", 
  "88817", 
  "53462", 
  "64696", 
  "34085", 
  "18563", 
  "31009", 
  "89310", 
  "86573", 
  "41979"
]

let guruFN = [
  "Gautam" ,
  "Om" ,
  "Kiran" ,
  "Mala" ,
  "Sona" ,
  "Viti" ,
  "Trishna",
  "Kailash"  ,
  "Anup"  ,
  "Mitul"  ,
  "Swati"  ,
  "Chandrakant"  ,
  "Mayur"  ,
  "Amitabh"  ,
  "Deepti"  ,
  "Shubham"  ,
  "Akhil"  ,
  "Nishant"  ,
  "Lalitha"  ,
  "Sukhbir" 
]

let guruMN = [
  "Edwin",
  "Pathak",
  "Sinha",
  "Menon",
  "Jhaveri",
  "Mody",
  "Lala",
  "Deepak",
  "Jayadev",
  "Lakshmi",
  "Anit",
  "Ankita",
  "Vivek",
  "Ramkrishna",
  "Vaishnavi",
  "Amitabh",
  "Kamakshi",
  "Sarvesh",
  "Abha",
  "Dileep"
]

let guruLN = [
  "Rao",
  "Choudhary",
  "Rao",
  "Nibhanupudi",
  "Chaudhari",
  "Gupta",
  "Narang",
  "Jain",
  "Nibhanupudi",
  "Chaudhari",
  "Begum",
  "Rao",
  "Patil",
  "Jain",
  "Nagarkar",
  "Bachchan",
  "Chaudhary",
  "Patil",
  "Devi",
  "Singh"

]

let guruDOB = [
  "1967-11-14",
  "1970-02-21",
  "1975-01-06",
  "1981-10-04",
  "1984-03-03",
  "1990-05-05",
  "1991-09-05",
  "1968-07-02",
  "1970-03-06",
  "1970-04-13",
  "1973-09-21",
  "1974-11-24",
  "1980-05-16",
  "1981-07-11",
  "1982-10-20",
  "1984-10-07",
  "1985-11-10",
  "1988-05-15",
  "1989-08-19",
  "1990-04-24"
]

let guruCity = [
  "Ramanathapuram",
  "Ramanathapuram",
  "Ramanathapuram",
  "Irugur",
  "Irugur",
  "Ondipudur",
  "Ondipudur",
  "Vadavalli",
  "Podanur",
  "Podanur",
  "Deorali",
  "Deorali",
  "Deorali",
  "Soureni Bazar",
  "Soureni Bazar",
  "Lolay" ,
  "Lolay" ,
  "Mirik",
  "Mirik",
  "Pulbazar"
]

let guruSamithiId = [
  1,1,1,2,2,3,3,4,5,5,6,6,6,7,7,8,8,9,9,10
]

let guruDistrict = [
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Coimbatore",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling",
  "Darjeeling"
]

let guruPinCode = [
  "641045",
  "641045",
  "641045",
  "641103",
  "641103",
  "641016",
  "641016",
  "641041",
  "641023",
  "641023",
  "734220",
  "734220",
  "734220",
  "734227",
  "734227",
  "734301",
  "734301",
  "734214",
  "734214",
  "734122"
]


let guruState = [
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "Tamil Nadu",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal",
  "West Bengal"
 
]

let guruJoiningDate = [
  "1987-12-02",
  "1988-04-21",
  "1990-09-18",
  "1992-05-31",
  "1993-07-04",
  "1998-11-11",
  "1988-03-16",
  "1988-06-18",
  "1988-09-16",
  "1991-03-20",
  "1992-09-15",
  "1993-07-03",
  "1994-11-03",
  "1997-01-22",
  "1997-11-25",
  "2000-06-07",
  "2002-04-05",
  "2004-04-12",
  "2004-07-04",
  "2005-12-22"
]

let guruPhoneNumer =  [
  "6898459436",
  "2492340377",
  "7433199637",
  "6234393029",
  "2158289586",
  "6402975784",
  "9403364785",
  "6461736327", 
  "9294332684", 
  "7182046055", 
  "1121362682", 
  "6669371651", 
  "7827356738", 
  "5434163245", 
  "9308730867", 
  "1861594167", 
  "8025401448", 
  "1343560159", 
  "3514940747", 
  "5552781643"
]

let joiningDateAsGuru = [
  "2000-12-06",
  "2001-01-22",
  "1111-11-11",
  "2001-09-29",
  "2001-12-25",
  "2002-09-20",
  "1111-11-11",
  "2003-06-01",
  "2004-01-21",
  "2001-06-02",
  "1111-11-11",
  "2001-08-03",
  "1111-11-11",
  "2001-12-25",
  "1111-11-11",
  "1111-11-11",
  "2003-06-01",
  "2004-01-21",
  "1111-11-11",
  "2004-12-06"
]

let joiningDateAsAsst = [
  "1996-04-20",
  "1996-11-04",
  "1997-01-10",
  "1997-09-27",
  "1997-10-12",
  "1997-10-19",
  "1998-06-07",
  "1998-06-10",
  "1998-09-13",
  "1999-10-04",
  "1999-11-06",
  "1999-11-29",
  "2000-04-03",
  "1998-09-13",
  "1999-10-04",
  "1999-11-06",
  "1999-11-29",
  "2000-04-03",
  "2001-08-03",
  "2001-08-07"
]

let guruUrbanisation = [
  "78",
  "78",
  "78",
  "65",
  "65",
  "70",
  "70",
  "69",
  "47",
  "47",
  "72",
  "72",
  "72",
  "80",
  "80",
  "70",
  "70",
  "65",
  "65",
  "45"
]

let guruIsAlumni = [
  0,
  0,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  1
]

let guruHasCompletedTraining = [
  1 ,
  1 ,
  0 ,
  1 ,
  1 ,
  1 ,
  1 ,
  1 ,
  0 ,
  0 ,
  1 ,
  0 ,
  1 ,
  0 ,
  0 ,
  1 ,
  0 ,
  1 ,
  1 ,
  0
]

let guruIsAssistant = [0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1];

let guruCompletedDate = [
  "2000-12-06",
  "2001-01-22",
  "1111-11-11",
  "2001-09-29",
  "2001-12-25",
  "2002-09-20",
  "1998-06-07",
  "2003-06-01",
  "1111-11-11",
  "1111-11-11",
  "1999-10-04",
  "1111-11-11",
  "2000-04-03",
  "1111-11-11",
  "1111-11-11",
  "1999-11-06",
  "1111-11-11",
  "2004-01-21",
  "2001-08-03",
  "1111-11-11"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addSamithis(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    for(let i =1; i<=10; i++){
      let str = "";
      if(i < 5){
        str = "INSERT INTO `balvikas`.`samithi` (`Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Samithi Establishment Date`) VALUES (" + i + ", '" + cityArr[i-1] + "', 'Coimbatore', " + pinArr[i-1] + ", 'Tamil Nadu', '" + estdArr[i-1] + "')";
      }else{
        str = "INSERT INTO `balvikas`.`samithi` (`Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Samithi Establishment Date`) VALUES (" + i + ", '" + cityArr[i-1] + "', 'Darjeeling', " + pinArr[i-1] + ", 'West Bengal', '" + estdArr[i-1] + "')";      
      }
      con.query(str, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    }
  });
}

function addStudents(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    for(let i =1; i<=10; i++){
      let str = "";
      if(i < 5){
        str = "INSERT INTO `balvikas`.`student` (`Student Aadhaar ID`, `First Name`, `Last Name`, `Date of Birth`, `Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Joining Date`, `Phone Number`, `Sai Devotee`, `Vegetarian`, `Alumni`) VALUES ('" +
          studentID[i-1] + "', '" + stdFN[i-1] + "', '" + stdLN[i-1] + "', '" + stdDOB[i-1] + " ', '" + getRandomInt(10) + " ', '" + cityArr[i-1] + " ', 'Coimbatore', '" + pinArr[i-1] + " ', 'Tamil Nadu', '" +  joiningDt[i-1] + " ', '" + stdPhn[i-1] + " ', '" + getRandomInt(2) + " ', '" + getRandomInt(2) + " ', '" + getRandomInt(2) + "')";

      }else{
        str = "INSERT INTO `balvikas`.`student` (`Student Aadhaar ID`, `First Name`, `Last Name`, `Date of Birth`, `Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Joining Date`, `Phone Number`, `Sai Devotee`, `Vegetarian`, `Alumni`) VALUES ('" +
          studentID[i-1] + "', '" + stdFN[i-1] + "', '" + stdLN[i-1] + "', '" + stdDOB[i-1] + " ', '" + i + " ', '" + cityArr[i-1] + " ', 'Darjeeling', '" + pinArr[i-1] + " ', 'West Bengal', '" +  joiningDt[i-1] + " ', '" + stdPhn[i-1] + " ', '" + getRandomInt(2) + " ', '" + getRandomInt(2) + " ', '" + getRandomInt(2) + "')"; 
      }
      con.query(str, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    }
  });
}

//need guruID, guruMN, guruCity, district, pin

function addGurus(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    for(let i =1; i<=guruID.length; i++){
      let str = "INSERT INTO `balvikas`.`guru` (`Guru Aadhaar ID`, `First Name`, `Middle Name`, `Last Name`, `Date of Birth`, `Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Joining Date into Organisation`, `Phone Number`, `Joining Date as Guru`, `Joining Date as Assistant Guru`, `Urbanisation`, `Alumni`, `Completed Training`, `Completion Date`, `isAssistant`) VALUES ('" + 
          guruID[i-1] + "', '" + guruFN[i-1] + "', '" + guruMN[i-1] + "', '" + guruLN[i-1] + "', '" + guruDOB[i-1] + "', '" + guruSamithiId[i-1] + "', '" + guruCity[i-1] + "', '" + guruDistrict[i-1] + "', '" + guruPinCode[i-1] + "', '" + guruState[i-1] + "', '" + guruJoiningDate[i-1] + "', '" + guruPhoneNumer[i-1] + "', '" + joiningDateAsGuru[i-1] + "', '" +  joiningDateAsAsst[i-1] + "', '" + guruUrbanisation[i-1] + "', '" + guruIsAlumni[i-1] + "', '" + guruHasCompletedTraining[i-1] + "', '" + guruCompletedDate[i-1] + "', '" + guruIsAssistant[i-1] + "')"; 
      con.query(str, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    }
  });
}

addGurus();
