$(document).ready(function() {
    var digger = {};
    var bricker = {};
    var contractor = {};
    function getWorkers() {
        digger = {
            buckets: 0,
            digDirt: function(){
                this.buckets += Math.floor(Math.random() * 100);
            },
            getBuckets : function() {
                buckets = this.buckets;
                this.buckets = 0;
                return buckets;
            }
        };
        bricker = {
            bricks: 0,
            buildBricks: function(buckets){
                this.bricks = this.bricks +  Math.floor(buckets / 5);
            },
            giveBricks: function(){
                bricks = this.bricks;
                this.bricks = 0;
                return bricks;

            }
        };
        contractor = {
            houseParts: ['H', 'O', 'U', 'S', 'E'],
            currentPart: 0,
            buildHouse: function(bricks){
                console.log(bricks % 100);
                if (Math.floor(bricks / 100) > 0 && bricks != 0){
                    $("#plot").append(this.houseParts[this.currentPart]);
                    this.currentPart++;
                }
            }
        };
    }
    $("#getWorkers").on("click", function(){
        getWorkers();
        $("#getWorkers").addClass("hide");
        $("#digDirt").removeClass("hide");
        $("#buildBricks").removeClass("hide");
        $("#buildHouse").removeClass("hide");
    });
    $("#digDirt").on("click", function(){
        digger.digDirt();
        console.log('buckets got:'+ digger.buckets);
    });
    $("#buildBricks").on("click", function(){
        bricker.buildBricks(digger.getBuckets());
        console.log('bricks built:'+ bricker.bricks);
    });
    $("#buildHouse").on("click", function(){
        contractor.buildHouse(bricker.giveBricks());
    });
});
