const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin,stdout } = process;
stdout.write('Введите текст'+"\n");
stdin.on('data', (data) => {
    if(data.toString()==='exit\r\n') process.exit();
    output.write(data);
});
process.on('exit',()=>stdout.write('Пока!'));
process.on('SIGINT', () => { process.exit()});
