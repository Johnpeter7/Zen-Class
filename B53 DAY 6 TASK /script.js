
var request =  new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    var res = JSON.parse(request.response);

    console.log(res);

    var pop = res.filter(country => country.population >= 10000 && country.population <= 60000);
   
    console.log(pop)

    var names = (pop.map(country => country.name.common))
    
    console.log(names);
    
    var totalpop = res.reduce((acc, country) => acc + country.population, 0);

    console.log(totalpop);
    
    // a : Get all the countries from Asia continent /region using Filter function
    var asia = res.filter(country => country.region === 'Asia');
    console.log(asia);

    // b : Get all the countries with a population of less than 2 lakhs using Filter function
    var lessPopulation = res.filter(country => country.population < 200000);
    console.log(lessPopulation);

    // c : Print name, capital, flag using forEach function
    res.forEach(country => {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital);
        console.log('Flag:', country.flags.svg);
      });

    // d : Print the total population of countries using reduce function
    var totalPopulation = res.reduce((acc, cv) => acc + cv.population, 0);
    console.log(totalPopulation);

    // e : Print the country that uses US dollars as currency
    var usDollarCountry = res.find(country => {
        var currencies = country.currencies ? Object.values(country.currencies) : [];
        return currencies.includes('USD');
    });

    console.log(usDollarCountry ? usDollarCountry.name.common : 'None found');

}
