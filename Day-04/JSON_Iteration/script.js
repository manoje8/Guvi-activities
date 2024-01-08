let info = {
    "Bio": {
      "name": "Mano Deepan",
      "email": "xxx@gmail.com",
      "phone": "9876543210",
      "degree": "B.Tech. in Mechanical Engineering ",
      "location": {
        "address": "xxx",
        "postalCode": "600xxx",
        "city": "Pondicherry",
        "country": "India",
        "region": "karaikal"
      }
    },
    "work": [
      {
        "company": "Connect prodigy",
        "position": "Software Engineer Trainee",
        "website": "https://www.microsoft.com",
        "startDate": "2023-03-08",
        "endDate": "2024-02-02"
      }
    ],
    "education": [
      {
        "Institution": "Pondicherry Engineering College",
        "Degree": "Bachelor of Technology",
        "Branch": "Mechanical Engineer",
        "Batch": "2018 - 2022"
      }
    ],
    "skills": [
      {
        "name": "Programming Languages",
        "level": "Intermediate",
        "keywords": "'Java', 'JavaScript','C++','SQL'"
      },
      {
        "name": "Frameworks and Tools",
        "level": "Intermediate",
        "keywords": "'Spring Boot','Node Js','React','Git'"
      },
      {
        "name": "Soft Skills",
        "level": "Intermediate",
        "keywords": "'Communication', 'Teamwork','Problem-solving', 'Learning ability'"
      }
    ],
    "languages": [
      {
        "language": "English",
        "fluency": "Fluent"
      },
      {
        "language": "Tamil",
        "fluency": "Native"
      }
    ]
}

console.log("--------------------- For Loop ----------------------");


(function loopThroughJSON(obj)
{
    for(let index = 0; index < Object.keys(obj).length; index++)
    {
        let key = Object.keys(obj)[index];
        let value = obj[key];
        console.log(key, value);
    }
})(info)

console.log("--------------------- For-in Loop --------------------");

(function forInLoopthroughJSON(obj)
{
    for(let key in obj)
    {
        console.log(obj[key]);
    }
})(info)


console.log("--------------------- For-of Loop ----------------------");

(function forOfLoopthroughJSON(obj)
{
    for(let [key,value] of Object.entries(obj))
    {
        console.log(key, value);
    }
})(info)


console.log("------------------- For-Each Loop ---------------------");

(function forEachLoopthroughJSON(obj)
{
    Object.entries(obj).forEach((values) => {
        console.log(values);
    })
})(info)