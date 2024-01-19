class Person
{
    constructor(name, age, gender, city)
    {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.city = city
    }

    getDetails()
    {
        return console.log(" name:" +this.name+"\n age: "+this.age +
        "\n gender: "+ this.gender + "\n city: "+this.city);
    }
}

const person = new Person("person", 22, "male", "pondicherry");

person.getDetails();

/*
 output: 

 name:person
 age: 22
 gender: male
 city: pondicherry
 
*/