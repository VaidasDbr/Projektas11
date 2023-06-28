console.log("START");
function average(list) {
}
let github = "http://localhost:5555/data/marks.json";
let local = "http://localhost:5555/data/marks.json";
let localError = "http://localhost:5555/data/random.json";
try {
    let response = await fetch(localError);
    let data = await response.json();
    let marksAverage = average(data.marks);
    console.log(response);
    console.log(data);
    console.log("Studento vidurkis:", marksAverage);
} catch (err) {
    console.log("ERROR: kazkas blogai...");
    console.log(err);
} finally {
    console.log("Ir cia paskutinis fetch-finally zingsnis...");
}
console.log("END");