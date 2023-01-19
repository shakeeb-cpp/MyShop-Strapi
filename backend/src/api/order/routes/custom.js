// path: ./src/api/restaurant/routes/custom-restaurant.js


module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/orders/pretransaction',
            handler: 'custom.exampleAction', 
            config:{
                auth:false,
            }  
        }
    ],
};
