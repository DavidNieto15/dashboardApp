const currentYear = 2022;
let year = 2016;
let arrayYears = [];
let numberPatentsYears = [];
let patentNumber = 0;
let ultimo = 0;
let aux = 0
let secondAux = 0;


const yearsToCompute = 2022 - 2016;


async function apiCall() {
    for (let i = 0; i <= yearsToCompute + 1; i++) {
        const apiURL = `https://api.patentsview.org/patents/query?q={"_and":[{"_gte":{"patent_date":"${year}-01-01"}},{"assignee_lastknown_country":"MX"}]}&f=["patent_number", "patent_title"]`
        const response = await axios.get(apiURL)
        patentNumber = response.data.total_patent_count;

        ultimo = numberPatentsYears.push(aux - patentNumber);
        aux = patentNumber;

        //ultimo = arrayYears.push(aux);
        //Va escribir la palabra en el dom
        if (response) {

            console.log('Las patentes en el año', year, 'son', patentNumber)
        }



        secondAux = arrayYears.push(year);

        year = year + 1;
    }
    let deleteLast = arrayYears.pop()
    let deleteFirst = numberPatentsYears.shift()

    console.log(numberPatentsYears)
    console.log(arrayYears)
}

apiCall();

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: arrayYears,
        datasets: [
            {
                label: "# of patents from 2016 to 2022",
                data: numberPatentsYears,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
