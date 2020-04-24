$(document).ready(function() {
    var localBuckets = localStorage.getItem("buckets");
    var bucketsOfDirt = 0;
    if (localBuckets !== null) {
        bucketsOfDirt = parseInt(localBuckets);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
    }
    var localBricks = localStorage.getItem("bricks");
    var bricks = 0;
    if (localBricks !== null) {
        bricks = parseInt(localBricks);
        $('#brickCounter').html('bricks: '+ bricks);
    }
    var localWord = localStorage.getItem("word");
    var word = '';
    if (localWord !== null) {
        word = localWord;
        $('#plot').text(word);
    }
    var localHouse = localStorage.getItem("house");
    var house = ['H','O','U','S','E'];
    if (localHouse !== null) {
        house = localHouse.split(',');
    }
    if (localBuckets !== null || localBricks !== null || localWord !== null || localHouse !== null){
        $('#digDirtBtn').show();
        $('#buildBricksBtn').show();
        $('#buildHouseBtn').show();
        if (localWord === 'HOUSE'){
            $('#tearDownHouse').show();
        }
    }
    var getDirt = function(buckets){
        buckets = buckets + Math.floor(Math.random() * 1000);
        localStorage.setItem("buckets", buckets);
        return buckets;
    }
    var getBricks = function(bricks, buckets){
        var bucketsToBricks = Math.floor(buckets / 10);
        bricks = bricks + bucketsToBricks;
        buckets = buckets - (bucketsToBricks * 10);
        localStorage.setItem("bricks", bricks);
        localStorage.setItem("buckets", buckets);
        return [bricks, buckets];
    }
    var getHouse = function(house, bricks, word){
        var partOfHouse = Math.floor(bricks / 100);
        for (var i = 0; i < partOfHouse; i++){
            if (house.length !== 0){
                var letter = house.shift();
                localStorage.setItem("house", house.join(','));
                word = word + letter;
                console.log(letter, word)
            } else {
                $('#tearDownHouse').show();
            }
        }
        bricks = bricks - (Math.floor(bricks / 100) * 100);
        localStorage.setItem("word", word);
        return [bricks, house, word];
    }
    $('#tearDownHouse').on('click', function(){
        bucketsOfDirt = 0;
        bricks = 0;
        word = '';
        house = ['H','O','U','S','E'];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
        $('#plot').text(word);
        $('#tearDownHouse').hide();
        localStorage.setItem("bucketsOfDirt", bucketsOfDirt);
        localStorage.setItem("bricks", bricks);
        localStorage.setItem("word", word);
    });
    $('#getWorkersBtn').on('click', function(){
        $('#digDirtBtn').show();
        $('#buildBricksBtn').show();
        $('#buildHouseBtn').show();
    });
    $('#digDirtBtn').on('click', function(){
        bucketsOfDirt = getDirt(bucketsOfDirt);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
    });
    $('#buildBricksBtn').on('click', function(){
        var brickResults = getBricks(bricks, bucketsOfDirt);
        bucketsOfDirt = brickResults[1];
        bricks = brickResults[0];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#bucketCounter').html('buckets: '+ bucketsOfDirt);
    });
    $('#buildHouseBtn').on('click', function(){
        var houseResults = getHouse(house, bricks, word);
        bricks = houseResults[0];
        house = houseResults[1];
        word = houseResults[2];
        $('#brickCounter').html('bricks: '+ bricks);
        $('#plot').text(word);
    });
});
