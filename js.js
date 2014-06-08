/**
 * Created by JS on 6/7/14.
 */


    var module = (function(){

    var images = ["img1", "img2", "img3", "img4"],
        niz1 = [],
        r = $(".images"),
        niz2 = [],
        imgNum = 0,
        imgLength = niz2.length - 1;



        return {


            createImgNames : function(){
                images.forEach(function(value){
                    return niz1.push({
                        img : "img/" + value + ".jpg",
                        alt : "img"
                    })
                });
            },

            createImgElement : function(){
                for (var i = 0; i < niz1.length; i++){
                    var createImgs = document.createElement("img");
                    createImgs.src = niz1[i].img;
                    createImgs.setAttribute("height", "400");
                    createImgs.setAttribute("width", "500");
                    createImgs.setAttribute("alt", niz1[i].alt);
                    niz2.push(createImgs);
                }
                $(".images").append(niz2[0]);
            },

            nextImg : function(){
                $(".next").on("click", function(){

                    imgNum = imgNum + 1;

                    if (imgNum > niz2 - 1){
                        imgNum = 0;
                    }

                    if (imgNum === niz2.length){
                        imgNum = 0;
                    }

                    $(".images").html(niz2[imgNum]);
                });
            },

            prevImg : function(){
                $(".prev").on("click", function(){
                    imgNum = imgNum - 1;

                    if (imgNum > niz2 - 1){
                        imgNum = 0;
                    }
                    if (imgNum < 0){
                        imgNum = niz2.length- 1;
                    }

                    $(r).html(niz2[imgNum]);
                    console.log(niz2[imgNum]);
                });
            }
        };
    })();

    module.createImgNames();
    module.createImgElement();
    module.nextImg();
    module.prevImg();



/*


var images = ["img1", "img2", "img3", "img4"];


var niz1 = [];
images.forEach(function(value){
    return niz1.push({
        img : "img/" + value + ".jpg",
        alt : "img"
    })
});

var r = document.querySelector("images");
var niz2 = [];
for (var i = 0; i < niz1.length; i++){
    var createImgs = document.createElement("img");
    createImgs.src = niz1[i].img;
    createImgs.setAttribute("height", "400");
    createImgs.setAttribute("width", "500");
    createImgs.setAttribute("alt", niz1[i].alt);
    niz2.push(createImgs);
}

var imgNum = 0;
var imgLength = niz2.length - 1;
$(".images").html(niz2[imgNum]);
$(".next").on("click", function(){

    imgNum = imgNum + 1;

    if (imgNum > imgLength){
        imgNum = 0;
    }

    if (imgNum < 0){
        imgNum = imgLength;
    }

    $(".images").html(niz2[imgNum]);

});

$(".prev").on("click", function(){
    imgNum = imgNum - 1;

    if (imgNum > imgLength){
        imgNum = 0;
    }

    if (imgNum < 0){
        imgNum = imgLength;
    }

    $(".images").html(niz2[imgNum]);
});
*/
