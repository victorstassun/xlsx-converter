const xlsx = require("xlsx");
const fs = require("fs");

const wb = xlsx.readFile('./Pasta1.xlsx', {cellDates:true})
console.log(wb.SheetNames)

const ws = wb.Sheets['Plan1'];
console.log(ws)

const data = xlsx.utils.sheet_to_json(ws);
console.log(data)

let newData = []

newData = data.map(d => {
    if(d.Paid === "TRUE") d.Paid = true;
    if(d.Paid === "FALSE") d.Paid = false;
    return d;
})

fs.writeFileSync('./datajson.json', JSON.stringify(newData, null, 2));