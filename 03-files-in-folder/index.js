const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

const files=readdir(path.join(__dirname,'secret-folder'), {withFileTypes : true})
files.then(
    function(result){
        //console.log(result)
        for(let file of result)
            if(!file.isDirectory()){
                const point=file.name.indexOf('.');
                const name=file.name.slice(0,point);
                const ext=file.name.slice(point+1);
                fs.stat(path.join(__dirname,'secret-folder',file.name), function(err, stats) {
                    const fileSizeInBytes = (stats.size/1024).toFixed(3);
                    console.log(name+' - '+ext+' - '+fileSizeInBytes+'kb')
                });
            }
    },
)
