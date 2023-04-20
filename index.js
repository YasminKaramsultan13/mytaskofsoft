import express from 'express';
const app = express();
const students = [
    "ahmed",
    "yasminn",
    "sultan",
    "ali",
    "karam",
    "zain",
];

const studentFunction = (req,res) => {
    let output = '<ul>';
    for (let i = 0; i < students.length; i++){
        const student = students[i];
        output += "<li>" + students[i] + "</li>";
  
    }


    output += '</ul>'
   res.send(output);
};


app.get('/students', studentFunction);

app.listen(4000);