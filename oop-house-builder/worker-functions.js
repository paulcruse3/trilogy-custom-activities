$(document).ready(function() {
    var bucketsOfDirt = 0;
    var bricks = 0;
    var word = '';
    var house = ['H','O','U','S','E'];
    var getDirt = function(buckets){
        buckets = buckets + Math.floor(Math.random() * 100);
        console.log('buckets', buckets);
        return buckets;
    }
    var getBricks = function(bricks, buckets){
        var bucketsToBricks = Math.floor(buckets / 10);
        bricks = bricks + bucketsToBricks;
        buckets = buckets - (bucketsToBricks * 10);
        console.log('buckets', buckets);
        console.log('bricks', bricks);
        return [bricks, buckets];
    }
    var getHouse = function(house, bricks, word){
        var partOfHouse = Math.floor(bricks / 100);
        for (var i = 0; i < partOfHouse; i++){
            var letter = house.shift();
            word = word + letter;
            console.log(letter, word)
        }
        bricks = bricks - (Math.floor(bricks / 100) * 100);
        return [bricks, house, word];
    }
    $('#getWorkersBtn').on('click', function(){
        $('#digDirtBtn').show();
        $('#buildBricksBtn').show();
        $('#buildHouseBtn').show();
    });
    $('#digDirtBtn').on('click', function(){
        bucketsOfDirt = getDirt(bucketsOfDirt);
    });
    $('#buildBricksBtn').on('click', function(){
        var brickResults = getBricks(bricks, bucketsOfDirt);
        bucketsOfDirt = brickResults[1];
        bricks = brickResults[0];
    });
    $('#buildHouseBtn').on('click', function(){
        var houseResults = getHouse(house, bricks, word);
        bricks = houseResults[0];
        house = houseResults[1];
        word = houseResults[2];
    });
});
