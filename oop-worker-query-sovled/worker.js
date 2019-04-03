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
        currentHouseIndex: 0,
        bricks: 0,
        buildHouse: function(bricks){
            this.bricks = this.bricks + bricks;
            houseParts = Math.floor(this.bricks / 100);
            if (houseParts >= 1){
                for (var i=0; i < houseParts; i++){
                    $("#plot").append(this.bluePrint[this.currentHouseIndex]);
                    this.currentHouseIndex++;
                }
                this.bricks = 0;
            }
        },
        destroyHouse: function(){
            $("#plot").empty();
        }
    };
    $("#getWorkersBtn").on("click", function(){
        $("#digDirtBtn").removeClass("hide");
        $("#buildBricksBtn").removeClass("hide");
        $("#buildHouseBtn").removeClass("hide");
        $("#getWorkersBtn").addClass("active");
        printReasourceCount();
        determineUsefulButtons();
    });
    function printReasourceCount(){
        $("#bucketCounter").text("buckets: " + digger.buckets);
        $("#brickCounter").text("bricks: " + bricker.bricks);
    }
    function determineUsefulButtons(){
        if (digger.buckets < 5){
            $("#buildBricksBtn").addClass("disabled");
        } else {
            $("#buildBricksBtn").removeClass("disabled");
        }
        if (bricker.bricks < 100){
            $("#buildHouseBtn").addClass("disabled");
        } else {
            $("#buildHouseBtn").removeClass("disabled");
        }
        if (contractor.currentHouseIndex > 4){
            $("#digDirtBtn").addClass("disabled");
            $("#buildBricksBtn").addClass("disabled");
            $("#buildHouseBtn").addClass("disabled");
            $("#getWorkersBtn").addClass("disabled");
            $("#newHouse").removeClass("hide");
        }
    }
    $("#digDirtBtn").on("click", function(){
        digger.digDirt();
        printReasourceCount();
        determineUsefulButtons();
    });
    $("#buildBricksBtn").on("click", function(){
        bricker.buildBricks(digger.getBuckets());
        printReasourceCount();
        determineUsefulButtons();
    });
    $("#buildHouseBtn").on("click", function(){
        contractor.buildHouse(bricker.getBricks());
        printReasourceCount();
        determineUsefulButtons();
    });
    $("#newHouse").on("click", function(){
        digger.buckets = 0;
        bricker.bricks = 0;
        contractor.bricks = 0;
        contractor.currentHouseIndex = 0;
        contractor.destroyHouse();
        $("#digDirtBtn").addClass("hide").removeClass("disabled");
        $("#buildBricksBtn").addClass("hide").removeClass("disabled");
        $("#buildHouseBtn").addClass("hide").removeClass("disabled");
        $("#newHouse").addClass("hide").removeClass("disabled");
        $("#bucketCounter").emmpty();
        $("#brickCounter").emmpty();
        $("#getWorkersBtn").removeClass("active");
        printReasourceCount();
    });
});
