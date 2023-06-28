console.log("START");
function average(list) {
    let sum = 0;
    for (let item of list) {
        sum += item;
    }
    return sum / list.length;
}
let github = "http://localhost:5555/data/marks.json";
let local = "http://localhost:5555/data/marks.json";
let localError = "http://localhost:5555/data/random.json";
let = userData = null;
let response = fetch(local)
    .then((res) => res.json())
    .then((data) => {
        let marksAverage = average(data.marks);
        console.log("Studento vidurkis:", marksAverage);
    })
    .catch(err => console.error("ERROR:kazkas blogai su uzklausa"));
    .finally(() => {
        console.log("Ir cia paskutinis fetch zingsnis...");
    });
console.log(response);
console.log("END");