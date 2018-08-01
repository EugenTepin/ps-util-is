var data = require('./test/data/test_data.js');
var util = require('./');
var rootFolderPath = (new File($.fileName)).parent.parent.absoluteURI;
var resultFile = new File(rootFolderPath + '/test/data/ps-util-is-result.js');
var tableFile = new File(rootFolderPath + '/test/data/ps-util-is-result.md');
var resultObj = {};

for(var i=0; i < data.length; i++){
    var elem = data[i];
    resultObj[elem.code.toString()] = {};
    for(var method in util){
        resultObj[elem.code][method] = util[method](elem.value);
    }
}

var result = 'module.exports = ' + resultObj.toSource();
resultFile.open('w');
resultFile.writeln(result);
resultFile.close();


/*======================= Generates MD table with results ======================================*/
function makeMarkDownTable(objOfObjects, headers) {
    var result = [];
    var rowNames = [];
    for(var rowName in objOfObjects){
        rowNames.push(rowName);
    }
    
    var delim = '----------';
    var defaultHeaders = [];
    var secondRow = [delim];
    for(var header in objOfObjects[rowNames[0]]){
        defaultHeaders.push(header);
        secondRow.push(delim);
    }
    var headers = headers || defaultHeaders.sort();
    var firstRow = ([]).concat('__Code', headers);
    result.push(firstRow.join('__ | __') + '__');
    result.push(secondRow.join(' | '));

    for(var i =0; i < rowNames.length; i++){
        var tmp = [];
        var rowName = rowNames[i];
        tmp.push('__' + rowName + '__');
        var row = objOfObjects[rowName];
        for(var j=0; j < headers.length; j++){
            var value = row[headers[j]];
            if(value){
                tmp.push('__'+ value.toString().toUpperCase() + '__');
            }else{
                tmp.push(value);    
            }
            
        }
        result.push(tmp.join(' | '));
    }
    return result.join('\n');
}

tableFile.open('w');
tableFile.write(makeMarkDownTable(resultObj));
tableFile.close();
