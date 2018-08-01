const fs = require('fs');
const path = require('path');
const util = require('core-util-is');
const data = require(path.resolve('./test/data/test_data.js'));
const jsonfile = require('jsonfile');
const assert = require('chai').assert;
// there is no Symbol anв Buffer in ExtendScript
delete util['isSymbol'];
delete util['isBuffer'];

var psResult = require('./data/ps-util-is-result.js');

var result = {};
data.forEach(function(elem) {
    var tmp = {}
    Object.keys(util).forEach(function(methodName) {
        tmp[methodName] = util[methodName](elem.value);
    });
    result[elem.code] = tmp;
});

describe('This test compares the results of "ps-util-is" with results of "core-util-is 1.0.2" on the same dataset:', function() {

    for (var rowName in result) {
        var row = result[rowName];
        for (var method in row) {
            it('Results of method [' + method + '] on data: ' + rowName + ' is the same: ' + result[rowName][method], function() {
                assert.strictEqual(psResult[rowName][method], result[rowName][method],
                    'results not the same'
                );
            });
        }
    }


});


/*======================= Generates MD table with results ======================================*/

function makeMarkDownTable(objOfObjects, headers) {
    var result = [];
    var rowNames = Object.keys(objOfObjects);
    var headers = headers || Object.keys(objOfObjects[rowNames[0]]).sort();
    var firstRow = ([]).concat('__Code__', headers);
    result.push(firstRow.join(' | '));
    result.push(firstRow.map(function(item) {
        return '----------';
    }).join(' | '));

    rowNames.forEach(function(rowName) {
        var tmp = [];
        tmp.push('__' + rowName + '__');
        var row = objOfObjects[rowName];
        headers.forEach(function(header) {
            var value = row[header];
            if (value) {
                tmp.push('__' + value.toString().toUpperCase() + '__');
            } else {
                tmp.push(value);
            }
        });
        result.push(tmp.join(' | '));
    })
    return result.join('\n');
}

fs.writeFileSync(path.resolve('./test/data/core-util-is-result.md'), makeMarkDownTable(result));