let url = "https://api.covidtracking.com/v1/states/current.json"
// console.log(url);


let Fecthdata = async () => {
    try {
        let data = await fetch(url)

        let fecthdata = await data.json();
        console.log(fecthdata);

        coronarendring(fecthdata);
    } catch (error) {
        console.log(error);
    }
}

let container = document.querySelector(".container")
// console.log(container);

let coronarendring = (fecthdata) => {
    fecthdata.forEach((ele) => {
        // console.log(ele);

        let div = document.createElement("div");
        // console.log(div);

        
        let country = document.createElement("h3")
        country.innerText = `country :${ele.state}`

        let death = document.createElement("h3")
        death.innerText = `death :${ele.death}`


        let total = document.createElement("h4")
        total.innerText = `total :${ele.death}`

        let hospitalized = document.createElement("h5")
        hospitalized.innerText = `hospitalized :${ele.death}`

        
        let totalTestsViral = document.createElement("h6")
        totalTestsViral.innerText = `totalTestsViral :${ele.death}`

        div.append(country,death,total,hospitalized,totalTestsViral)

        container.append(div)
    })
}
Fecthdata();