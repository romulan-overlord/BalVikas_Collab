var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rockfall911",
  database: "balvikas"
});

let studentID = [
    8150, 
    5745, 
    3083, 
    3320, 
    5290, 
    1395, 
    7052, 
    6884, 
    8667, 
    4633, 
    7109, 
    8184, 
    2773, 
    8256, 
    3841, 
    6014, 
    3190, 
    7773, 
    9805, 
    3298, 
    9534, 
    1725, 
    7343, 
    9712, 
    1121, 
    5632, 
    9039, 
    2713, 
    2575, 
    6429, 
    4482, 
    3045, 
    1959, 
    1512, 
    7032, 
    1747, 
    7047, 
    2945, 
    7717, 
    6198, 
    6686, 
    9004, 
    2045, 
    3466, 
    6495, 
    8926, 
    7954, 
    9255, 
    1981, 
    8339
]

let stdFN = [
    "Ram" ,
    "Krishna",
    "Vishnu",
    "Narayana",
    "Guru",
    "Lakshmi",
    "Sita",
    "Mahalakshmi",
    "Parvathi",
    "Janani",
    "Jean" ,
    "Lisa" ,
    "Keith",
    "Abhinav" ,
    "Akbar" ,
    "Agni" ,
    "Upasana" ,
    "Nilima" ,
    "Bhavana" ,
    "Punit"  ,
    "Mala"  ,
    "Harpreet"  ,
    "Susheela" ,
    "Anupama"  ,
    "Durga" ,
    "Rishi" ,
    "Neela"  ,
    "Vasudha"  ,
    "Jyotsana" ,
    "Kumari"  ,
    "Kasi"  ,
    "Arundhati"  ,
    "Anisha"  ,
    "Nishant" ,
    "Leela"  ,
    "Lakshmi" ,
    "Ranjit"  ,
    "Sulabha" ,
    "Mark" ,
    "Todd" ,
    "Stephanie" ,
    "Karen" ,
    "Brenda" ,
    "Carolyn" ,
    "Lillian" ,
    "Lori" ,
    "Kevin" ,
    "Rose" ,
    "Douglas" ,
    "Bruce"
]

let stdMN = [
    "Hari",
    "Varma",
    'sainath',
    "Great"  ,
    "Noble",
    "Nobles",
    "Inderpal",
    "Suman",
    "Ravinder",
    "Padma",
    "Suman",
    "Gurpreet",
    "Gurmeet",
    "Neelam",
    'Manpreet',
    "Rashmi",
    "Madhu",
    "Amandeep",
    "Kajal",
    "Balwinder",
    "Nilam"  ,
    "Navneet",
    "Jaya",
    "Jaya",
    "Lucky",
    "Ananth" ,
    "Partha" ,
    "Mohandas" ,
    "Samira" ,
    "Indira" ,
    "Mahavir" ,
    "Priyanka" ,
    "Niketa" ,
    "Nisha" ,
    "Shivani" ,
    "Amala" ,
    "Shobha" ,
    "Dileep" ,
    "Kishor" ,
    "Gayathri" ,
    "Govind" ,
    "Anuja" ,
    "Neha" ,
    "Kasi" ,
    "Rupa" ,
    "Parveen" ,
    "Swati" ,
    "Raju" ,
    "Anila" ,
    "Surya"
]

let stdLN = [
    "Hall",
    "Williams",
    "Wilson",
    "James",
    "Bennett",
    "Barnes",
    "sai",
    "Brown",
    "sai",
    "Edwards",
    "Ward",
    "Peterson",
    "sai",
    "Jackson",
    "Kumar",
    "Sai",
    "Vishal",
    "Murthi",
    "Prasanth",
    "Rai",
    "Laskshmi",
    "Pradhan",
    "Devi",
    "sai",
    "Ross",
    "Nagarkar",
    "Chaudhri",
    "Singh",
    "Chaudhri",
    "Gadhavi",
    "Narang",
    "Anand",
    "Rao",
    "Sharma",
    "Kulkarni",
    "Kaur",
    "Narang",
    "Misra",
    "Singh",
    "Choudhary",
    "Begam",
    "Mhasalkar",
    "Mishra",
    "Vemulakonda",
    "Chaudhri",
    "Devi",
    "Begam",
    "Vemulakonda",
    "Singh",
    "Kulkarni"
]    

let stdDOB = [
    "2007-02-15",
    "2007-03-08",
    "2009-04-11",
    "2009-11-05",
    "2010-05-19",
    "2010-09-12",
    "2009-11-05",
    "2010-05-19",
    "2010-09-12",
    "2011-02-06",
    "2011-02-24",
    "2011-10-03",
    "2013-02-24",
    "2008-03-06",
    "2008-03-12",
    "2008-04-16",
    "2008-08-21",
    "2009-02-12",
    "2009-10-27",
    "2010-03-31",
    "2011-03-28",
    "2012-02-10",   
    "2012-07-05",
    "2012-12-14",
    "2013-06-28",
    "2008-05-10",
    "2008-10-01",
    "2008-10-30",
    "2008-12-05",
    "2009-01-11",
    "2009-01-19",
    "2009-02-06",
    "2009-02-10",
    "2009-04-26",
    "2009-05-14",
    "2009-06-03",
    "2009-10-11",
    "2010-02-11",
    "2010-03-20",
    "2010-10-23",
    "2011-03-06",
    "2011-04-01",
    "2012-01-26",
    "2012-02-14",
    "2012-11-05",
    "2012-12-19",
    "2013-05-12",
    "2013-09-28",
    "2013-12-17",
    "2013-12-29"
]

let stdSamithiID = [
    1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10
]

let stdCityArr = [
    "Ramanathapuram",
    "Ramanathapuram",
    "Ramanathapuram",
    "Ramanathapuram",
    "Ramanathapuram",
    "Irugur",
    "Irugur",
    "Irugur",
    "Irugur",
    "Irugur",
    "Ondipudur",
    "Ondipudur",
    "Ondipudur",
    "Ondipudur",
    "Ondipudur",
    "Vadavalli",
    "Vadavalli",
    "Vadavalli",
    "Vadavalli",
    "Vadavalli",
    "Podanur",
    "Podanur",
    "Podanur",
    "Podanur",
    "Podanur",
    "Deorali",
    "Deorali",
    "Deorali",
    "Deorali",
    "Deorali",
    "Soureni Bazar",
    "Soureni Bazar",
    "Soureni Bazar",
    "Soureni Bazar",
    "Soureni Bazar",
    "Lolay",
    "Lolay",
    "Lolay",
    "Lolay",
    "Lolay",
    "Mirik",
    "Mirik",
    "Mirik",
    "Mirik",
    "Mirik",
    "Pulbazar",
    "Pulbazar",
    "Pulbazar",
    "Pulbazar",
    "Pulbazar"
]

let stdDistrictArr = [
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
    "Darjeeling",
    "Darjeeling",
    "Darjeeling",
    "Darjeeling",
    "Darjeeling",
    "Darjeeling",
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

let stdPinArr =[
    641045,
    641045,
    641045,
    641045,
    641045,
    641103,
    641103,
    641103,
    641103,
    641103,
    641016,
    641016,
    641016,
    641016,
    641016,
    641041,
    641041,
    641041,
    641041,
    641041,
    641023,
    641023,
    641023,
    641023,
    641023,
    734220,
    734220,
    734220,
    734220,
    734220,
    734227,
    734227,
    734227,
    734227,
    734227,
    734301,
    734301,
    734301,
    734301,
    734301,
    734214,
    734214,
    734214,
    734214,
    734214,
    734122,
    734122,
    734122,
    734122,
    734122
]

let stdStateArr = [
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
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
    "West Bengal",
]

let stdJoiningDt = [
    "2014-11-08",
    "2014-11-09",
    "2015-11-23",
    "2015-11-26",
    "2015-12-03",
    "2017-12-16",
    "2018-04-11",
    "2019-08-25",
    "2018-04-06",
    "2019-03-25",
    "2015-11-23",
    "2015-11-26",
    "2015-12-03",
    "2017-12-16",
    "2018-04-11",
    "2019-08-25",
    "2019-10-01",
    "2020-04-14",
    "2019-07-31",
    "2019-11-01",
    "2014-11-08",
    "2015-11-09",
    "2012-11-23",
    "2016-11-26",
    "2020-06-04",
    "2014-11-02",
    "2014-12-17",
    "2015-08-09",
    "2015-08-10",
    "2015-10-20",
    "2015-12-06",
    "2016-02-20",
    "2016-10-22",
    "2016-12-27",
    "2017-06-26",
    "2017-09-26",
    "2018-01-05",
    "2018-06-18",
    "2018-08-17",
    "2018-09-02",
    "2018-09-20",
    "2019-02-19",
    "2019-06-21",
    "2019-09-21",
    "2019-10-08",
    "2019-11-18",
    "2020-02-04",
    "2020-04-12",
    "2020-09-17",
    "2020-12-25"
]

let stdPhn = [
    1872651719, 
    1212054599, 
    8420688490, 
    2436467264, 
    6799989013, 
    5714945629, 
    2568508340, 
    6560353129, 
    7020347020, 
    4505379657, 
    5408001477, 
    8776463080, 
    5210389029, 
    2491507501, 
    3189732741, 
    9696116406, 
    3814018194, 
    7389831131, 
    2840243517, 
    5775446391, 
    7073901144, 
    1099796363, 
    5344041527, 
    9520679042, 
    2783912191, 
    5472672557, 
    4281692088, 
    5664336003, 
    6098015503, 
    3930581559, 
    4394823249, 
    3960251123, 
    8569199331, 
    5786364447, 
    2156039483, 
    2645678656, 
    2161893548, 
    1237891819, 
    7104296759, 
    8633267782, 
    6533732599, 
    1167362670, 
    2101508434, 
    3386440342, 
    7705510675, 
    5740003379, 
    6559396768, 
    7115581134, 
    9089889644, 
    5956586961
]

// let saidevotee:
//     you generate 50 ("1 , 0") random numbers
//

// let vegetarian:
//     you generate 50 ("1 , 0") random numbers
//

let stdIsAlumni = [
    0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1
]

// let current status:
//     Later
//

let stdUrbanisation = [
    "78",
    "78",
    "78",
    "78",
    "78",
    "65",
    "65",
    "65",
    "65",
    "65",
    "70",
    "70",
    "70",
    "70",
    "70",
    "69",
    "69",
    "69",
    "69",
    "69",
    "47",
    "47",
    "47",
    "47",
    "47",
    "72",
    "72",
    "72",
    "72",
    "72",
    "80",
    "80",
    "80",
    "80",
    "80",
    "70",
    "70",
    "70",
    "70",
    "70",
    "65",
    "65",
    "65",
    "65",
    "65",
    "45",
    "45",
    "45",
    "45",
    "45"
]

let stdGraduationDt = [
    "1111-11-11", 
    "2021-02-03",
    "2021-02-10",
    "2021-02-20",
    "2021-03-13",
    "2021-04-04",
    "2021-04-04",
    "1111-11-11",
    "1111-11-11",
    "2021-04-13",
    "2021-04-14",
    "2021-05-05",
    "2021-05-10",
    "2021-06-04",
    "1111-11-11",
    "1111-11-11",
    "1111-11-11",
    "2021-06-04",
    "1111-11-11",
    "2021-06-26",
    "2021-06-29",
    "2021-07-05",
    "1111-11-11",
    "1111-11-11",
    "2021-07-05",
    "1111-11-11",
    "1111-11-11",
    "1111-11-11",
    "2021-08-07",
    "2021-08-19",
    "1111-11-11",
    "2021-08-07",
    "2021-08-19",
    "1111-11-11",
    "2021-08-07",
    "1111-11-11",
    "1111-11-11",
    "2021-08-07",
    "1111-11-11",
    "2021-06-26",
    "2021-06-29",
    "2021-06-26",
    "2021-06-29",
    "2021-06-26",
    "1111-11-11",
    "1111-11-11",
    "2021-06-29",
    "1111-11-11",
    "1111-11-11",
    "2021-05-05",
    "2021-05-10",
    "2021-06-04"
]

let stdExtraCrr = [
    "Choir",
    "Marching Band",
    "Singing Lessons",
    "Painting",
    "Photography",
    "Knitting",
    "Poetry",
    "Debate",
    "Sports",
    "Martial Arts",
    "Dance Lessons",
    "Gymnastics",
    "Yoga",
    "Gardening",
    "Acting Classes"
];

let teachTech = [
    "Prayer & sloka chanting",
    "Group Singing & bhajans",
    "Silent sitting & Meditation",
    "Story Telling",
    "Group Activities & Value Games"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt2(max) {
    return Math.floor(Math.random() * max + 1);
}

function arrayContains(arr, src){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === src){
            return true;
        }
    }
    return false;
}

function genHobbyArr(x){
    let hbArr = [];
    let i = 0;
    while(i < x){
        let nstr = stdExtraCrr[getRandomInt2(15)];
        if(!arrayContains(hbArr, nstr)){
            hbArr.push(nstr);
            i++;
        }
    }
    return hbArr;
}

function genHobbies(){
    con.connect(function(err){
        if(err) throw err;
    });
    for(let i = 0; i < studentID.length; i++){
        let hobbyCount = getRandomInt2(5);
        let hbArr = genHobbyArr(hobbyCount);
        for(let j = 0; j < hbArr.length; j++){
            let str = "insert into balvikas.student_extracurricular_activities values(" + studentID[i] + ", '" + hbArr[j] + "')"
            con.query(str, function(err, result){
                if (err) throw err;
                    console.log("Result: " + result);
            });
        }
    }
}

function addStudents(){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        for(let i =1; i<=studentID.length; i++){
            let str = "INSERT INTO `balvikas`.`student` (`Student Aadhaar ID`, `First Name`,`Middle Name` , `Last Name`, `Date of Birth`, `Samithi_ID`, `City`, `District`, `Pin Code`, `State`, `Joining Date`, `Phone Number`, `Sai Devotee`, `Vegetarian`, `Alumni`,`Urbanisation`, `Date of Graduation`) VALUES ('" +
            studentID[i-1] + "', '" + stdFN[i-1] + "', '" + stdMN[i-1] + "', '" + stdLN[i-1] + "', '" + stdDOB[i-1] + " ', '" + stdSamithiID[i-1] + " ', '" + stdCityArr[i-1] + " ', '" + stdDistrictArr[i-1] + "', '" + stdPinArr[i-1] + "', '" + stdStateArr[i-1] + "', '" +  stdJoiningDt[i-1] + " ', '" + stdPhn[i-1] + " ', '" + getRandomInt(2) + " ', '" + getRandomInt(2) + " ', '" + stdIsAlumni[i-1] + " ', '" + stdUrbanisation[i-1] + " ', '" + stdGraduationDt[i-1] + "')";
            con.query(str, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        }
    });
}

function genAttendance(){
    con.connect(function(err){
        if(err) throw err;
        for(let i = 0; i < studentID.length; i++){
            let str = "insert into balvikas.attendance values(" + studentID[i] + ", 50," + getRandomInt(51) + ")";
            con.query(str, function(err, result){
                if (err) throw err;
                console.log("Result: " + result);
            });
        }
    });
}

// genHobbies();

let newStdId = [
    1121,
    1395,
    1512,
    1725,
    1747,
    1959,
    1981,
    2045,
    2575,
    2713,
    2773,
    2945,
    3045,
    3083,
    3190,
    3298,
    3320,
    3466,
    3841,
    4482,
    4633,
    5290,
    5632,
    5745,
    6014,
    6198,
    6429,
    6495,
    6686,
    6884,
    7032,
    7047,
    7052,
    7109,
    7343,
    7717,
    7773,
    7954,
    8150,
    8184,
    8256,
    8339,
    8667,
    8926,
    9004,
    9039,
    9255,
    9534,
    9712,
    9805
]

let stdGrp = [
    1,
    2,
    3,
    2,
    3,
    3,
    1,
    1,
    3,
    3,
    1,
    2,
    3,
    3,
    3,
    2,
    3,
    1,
    3,
    3,
    2,
    2,
    3,
    3,
    3,
    2,
    3,
    1,
    2,
    2,
    3,
    3,
    3,
    2,
    2,
    3,
    3,
    1,
    3,
    2,
    3,
    1,
    2,
    1,
    2,
    3,
    1,
    2,
    2,
    3
]

let stdAtt = [
    
]

function getCount(g1, g2, g3){
    g1=0;
    g2=0;
    g3=0;
    for(let i =0; i<newStdId.length; i++){
        if(stdGrp[i] === 1){
            g1+=1;
        }else if(stdGrp[i] === 2){
            g2+=1;
        }else{
            g3+=1;
        }
    }
    return [g1,g2,g3];
}

console.log(getCount());
