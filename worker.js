$(document).ready(function() {
    var digger = {
        buckets: 0,
        digDirt: function(){
            this.buckets = this.buckets + Math.floor(Math.random() * 100);
        },
        getBuckets: function(){
            localBuckets = this.buckets;
            this.buckets = 0;
            return localBuckets;
        }
    };
    var bricker = {
        bricks: 0,
        buildBricks: function(buckets){
            this.bricks = this.bricks + Math.floor(buckets / 5);
        },
        getBricks: function(){
            localBricks = this.bricks;
            this.bricks = 0;
            return localBricks;
        }
    };
    var contractor = {
        bluePrint: ['H', 'O', 'U', 'S', 'E'],
        currentHousePart: 0,
        bricks: 0,
        buildHouse: function(bricks){
            this.bricks = this.bricks + bricks;
            houseParts = Math.floor(this.bricks / 100);
            if (houseParts >= 1){
                for (var i=0; i < houseParts; i++){
                    $("#plot").append(this.bluePrint[this.currentHousePart]);
                    this.currentHousePart++;
                }
                this.bricks = 0;
            }
        }
    };
    function determineVisibleButtons(){
        if (digger.buckets >= 5){
            $("#buildBricks").removeClass("hide");
        } else {
            $("#buildBricks").addClass("hide");
        }
        if (bricker.bricks >= 100){
            $("#buildHouse").removeClass("hide");
        } else {
            $("#buildHouse").addClass("hide");
        }
    }
    function printCount(){
        $("#bucketCounter").text("buckets: " + digger.buckets);
        $("#brickCounter").text("bricks: " + bricker.bricks);
    }
    $("#getWorkers").on("click", function(){
        $("#digDirt").removeClass("hide");
        $("#getWorkers").addClass("active");
    });
    $("#digDirt").on("click", function(){
        digger.digDirt();
        printCount();
        determineVisibleButtons();
    });
    $("#buildBricks").on("click", function(){
        bricker.buildBricks(digger.getBuckets());
        printCount();
        determineVisibleButtons();
    });
    $("#buildHouse").on("click", function(){
        contractor.buildHouse(bricker.getBricks());
        printCount();
        determineVisibleButtons();
    });
});
