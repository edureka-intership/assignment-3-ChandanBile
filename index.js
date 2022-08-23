
class restaurantManager {
    constructor(list) {
        // This will contain a list of restaurant object, with the restaurant name, address and city
        this.restaurantList = []
        list.map(x => {
            this.restaurantList.push(x)
        })
    }
    
    
    // This will print the name of all restaurant names in restaurantList on console
    printAllRestaurantNames(){
        this.restaurantList.map(list => console.log(list.name))
        
    }


    // This will filter the restaurant on the basis of the city provided in arguments
    filterRestaurantByCity(cityF) {
        if(!cityF){
            return this.restaurantList
        }
        else{
            return this.restaurantList.filter(list => cityF == list.city)
        }
        
    }
}
const list1 = [{
    id : 1,
    name: 'Bombay High',
    address: 'add1, Mumbai',
    city: 'Mumbai'
},
{
    id : 2,
    name: 'Annapurna',
    address: 'add1, Bangalore',
    city: 'Bangalore'
},
{
    id : 3,
    name: 'Punjabi Tadka',
    address: 'add1, Delhi',
    city: 'Delhi'
},
{
    id : 4,
    name: 'Green Kitchen',
    address: 'add1, Kolkata',
    city: 'Kolkata'
},
{
    id : 5,
    name: 'Thali King',
    address: 'add1, Jaipur',
    city: 'Jaipur'
}]

const Objectlist1 = new restaurantManager(list1)
Objectlist1.printAllRestaurantNames()



let cityF = prompt('Please Enter City: ')

const filterData = Objectlist1.filterRestaurantByCity(cityF)
console.log(filterData)


orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}



// Calculate the total number of orders placed for the restaurant
let ordersValues = Object.values(orderData)
let ordersKeys = Object.keys(orderData)

function totalOrders(ordersValues){
         
    let x = 0;
    for(let i = 0; i < ordersValues.length; i++){
        x = x + ordersValues[i]
    }
    console.log(`Total number of orders placed = ${x}`)
    return x
    
}
const x = totalOrders(ordersValues)




// Calculate the number of order proportion options
let orderFilters = Object.keys(orderData).length
console.log(`Total number of order proportions = ${orderFilters}`)



// Calculate the percentage of each proportion 

function percentage(ordersKeys,ordersValues,x){
    let orderPercent = []
    let i
    for (i = 0; i < ordersValues.length; i++){
        
        const obj = {
            id : i + 1,
            order : ordersKeys[i],
            "order percentage" : ((ordersValues[i]/x)*100).toFixed(2),
            restaurant : " Punjabi Tadka"
        }
        orderPercent.push(obj)
    }
    console.log(orderPercent) 
}
percentage(ordersKeys,ordersValues,x)