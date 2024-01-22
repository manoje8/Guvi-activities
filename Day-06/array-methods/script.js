const xml = new XMLHttpRequest();
xml.open("GET","https://restcountries.com/v3.1/all");
xml.send();
xml.onload = function()
{
    if(xml.status >= 200 && xml.status <= 400)
    {
        const data  = JSON.parse(xml.response);

        //to get all the asian countries using filter method
        console.log("------------------Asia countries------------------");
        const asianCountries = data.filter(value => {
            return value.region == "Asia"
        })
        .map(value => value.name.common);

        console.log(asianCountries);


        console.log("-------population of less than 2 lakhs------------");
        //to get all the countries with a population of less than 2 lakhs using filter method
        const population = data.filter((value) => {
            return value.population < 200000
        })
        .map((value) => value.name.common);

        console.log(population);


        console.log("---------Country name, capital, flag---------------");
        //Print name, capital, flag
        let countries = [];
        data.forEach(value => {
            let name = value.name.common;
            let capital = value.capital;
            let flag = value.flag;
            countries.push(`Name: ${name} | capital: ${capital} | flag: ${flag}`);
        });

        console.log(countries);


        console.log("-----------------Total population--------------------");
        //total population of countries using reduce function
        const totalPopulation = data.reduce((acc,value) => {
            return acc += value.population;
        },0);

        console.log("Total population: ",totalPopulation);


        console.log("-----------Country that uses US dollars---------------");
        //country that uses US dollars as currency
        let dollar = data.filter(val => {
            let currency =  val.currencies;
            let flag = false;
            for(let dollar in currency){
                let usDollar = currency[dollar]
                if(usDollar["name"] == "United States dollar")
                {
                    flag = true;
                }
            }
            return flag;
        })
        .map((value) => value.name.common);
        
        console.log(dollar);
    }else
    {
        console.log(xml.responseText);
    }
}
