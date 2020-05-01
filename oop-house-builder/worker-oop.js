$(document).ready(function() {
    var digger = {
        buckets: 0,
        dig: function(){
            this.buckets = this.buckets + Math.floor(Math.random() * 100);
        },
        dump: function(){
            var buckets = this.buckets;
            this.buckets = 0;
            return buckets;
        }
    }
    var bricker = {
        buckets: 0,
        bricks: 0,
        buildBricks: function(digger){
            this.buckets = this.buckets + digger.dump();
            var bucketsToBricks = Math.floor(this.buckets / 10);
            this.bricks = this.bricks + bucketsToBricks;
            this.buckets = this.buckets - (bucketsToBricks * 10);
        },
        stack: function(){
            var bricks = this.bricks;
            this.bricks = 0;
            return bricks;
        }
    }
    var builder = {
        blueprint: ['H','O','U','S','E'],
        bricks: 0,
        word: '',
        buildHouse: function(bricker){
            this.bricks = Math.floor(bricker.stack() / 100);
            for (var i = 0; i < this.bricks; i++){
                if (this.blueprint.length !== 0){
                    var letter = this.blueprint.shift();
                    this.word = this.word + letter;
                    console.log(letter, this.word);
                    $('#plot').text(this.word);
                } else {
                    $('#tearDownHouse').show();
                }
            }
            this.bricks = this.bricks - (Math.floor(this.bricks / 100) * 100);
        }
    }
    $('#getWorkersBtn').on('click', function(){
        $('#digDirtBtn').show();
        $('#buildBricksBtn').show();
        $('#buildHouseBtn').show();
    });
    $('#digDirtBtn').on('click', function(){
        digger.dig();
        $('#bucketCounter').html('buckets: '+ (digger.buckets + bricker.buckets));
    });
    $('#buildBricksBtn').on('click', function(){
        bricker.buildBricks(digger);
        $('#brickCounter').html('bricks: '+ (builder.bricks + bricker.bricks));
        $('#bucketCounter').html('buckets: '+ (digger.buckets + bricker.buckets));
    });

    $('#buildHouseBtn').on('click', function(){
        builder.buildHouse(bricker);
        $('#brickCounter').html('bricks: '+ (builder.bricks + bricker.bricks));
    });
});
