const mysql= require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sebas2004',
    database:'websitetest'
});

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion establecida exitosamente')
})

const insertar=`INSERT INTO myForm(name,cellphone,mail,description) VALUES('David','3144876952','David@gmail.com','Este mensaje fue enviado desde VSCode')`;
connection.query(insertar, (err,rows)=>{
    if(err) throw err;
    console.log('los datos se insertaron exitosamente y fueron:')
})

connection.query('select * from myForm', (err, rows)=>{
    if(err) throw err
    console.log('los datos solicitados son:')
    console.log(rows)
})
connection.end();