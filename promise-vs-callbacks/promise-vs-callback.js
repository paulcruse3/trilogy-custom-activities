someAsyncCallback(someParams, function (error, result) {
    if(error){

    }
    else {

    }
});


someAsyncPromise(someParams)
.then(function(result){
    // Do something with the result
})
.catch(function(error){
    // Handle error
});
