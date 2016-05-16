var path = require("path");
var index = require('./model/index');
var screenimage = require('./model/screenimage');
var filehelper = require('./util/filehelper');
var fs = require('fs');
//var hashTable = require("node-hashtable");

var indexfile = path.join(__dirname, '/204304/ScreenShot/High/package.pak');
var unzippedfile = path.join(__dirname, '/204304/ScreenShot/High/unzippedindex.pak');
var imagedatafile = path.join(__dirname, '/204304/ScreenShot/High/1.pak');

exports.getImageData = function (second, callback) {
  //filehelper.unzipIndexFile(indexfile, unzippedfile);
  var buffer = filehelper.getIndexFile(unzippedfile);
  //console.log(buffer.length);
  //console.log(buffer);
  var indexList = filehelper.getIndexArray(buffer);
  //console.log(indexList.length);
  var count =0;
  var hashmap = [];
  for (var i = 0; i < indexList.length; i++)
  {
    if(!hashmap[indexList[i].timestamp]) {
      count++;
      hashmap[indexList[i].timestamp] = i;
      ///console.log('hashmap.length=' + hashmap.length);
      //if (count < 10) {
      //  console.log(indexList[i].timestamp + '-' + i);
        //console.log(hashmap[indexList[i].timestamp]);
      //}
    }
  }
  /*
  var hashtable = [];
  var index = 0;
  for (var i = 0; i < hashmap.length; i++) {
    if (hashmap[i]) {
      hashtable[index] = hashmap[i];
      index++;
    }
  }
  //hashtable.sort(sortNumber);
  console.log(hashtable[3]);
  for (var i = 0; i < hashtable.length; i++) {
    if (i > 10) {
      break;
    }
    console.log(hashtable[i]);
  }
  console.log(hashtable.length);
  */

  var imageIndex = filehelper.getImageIndex(hashmap, indexList, second);

  filehelper.getImageData(imagedatafile, imageIndex, callback);

}

exports.getWhiteBoardData = function (second, callback) {
  //filehelper.unzipIndexFile(indexfile, unzippedfile);
  var buffer = filehelper.getIndexFile(unzippedfile);
  //console.log(buffer.length);
  //console.log(buffer);
  var indexList = filehelper.getIndexArray(buffer);
  //console.log(indexList.length);
  var count =0;
  var hashmap = [];
  for (var i = 0; i < indexList.length; i++)
  {
    if(!hashmap[indexList[i].timestamp]) {
      count++;
      hashmap[indexList[i].timestamp] = i;
      ///console.log('hashmap.length=' + hashmap.length);
      //if (count < 10) {
      //  console.log(indexList[i].timestamp + '-' + i);
        //console.log(hashmap[indexList[i].timestamp]);
      //}
    }
  }


  var imageIndex = filehelper.getImageIndex(hashmap, indexList, second);

  filehelper.getImageData(imagedatafile, imageIndex, callback);

}

function sortNumber(a,b) {
    return a - b;
}

//module.exports = getImageData;
