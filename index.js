// code your solution here


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]




function superbowlWin(record){
    const win = record.find(function(record) {
        return record.result === 'W';
    });
     
    if(win){
        return win.year
    } else {
        return undefined
    }


}