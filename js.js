/**
 * Created by JS on 6/7/14.
 */

var images1 = ["img1", "img2", "img3", "img4", "img5"];
    var niz2 = [];
images1.forEach(function(v){
    niz2.push({
        img : "img/" + v + ".jpg",
        alt : "img"
    });
});


    // Create module pattern
    var module = (function(){

    // Create array to store images
    var images = ["img1", "img2", "img3", "img4", "img5"],
        niz1 = [],
        r = $(".images"),
        niz2 = [],
        imgNum = 0,
        imageText = ["test1", "bla2", "blbla3", "neki tekst", "sss"],
        radio = document.createElement("radio");



        return {

            nextImageFunc : function(){
                imgNum = imgNum + 1;

                if (imgNum > niz2 - 1){
                    imgNum = 0;
                }

                if (imgNum === niz2.length){
                    imgNum = 0;
                }
            },
            
        // Create image path and push into niz1
        
            createImgNames : function(){
                images.forEach(function(value){
                    return niz1.push({
                        img : "img/" + value + ".jpg",
                        alt : "img"
                    })
                });
            },

        // For each image create attribute
            createImgElement : function(){
                for (var i = 0; i < niz1.length; i++){
                    var createImgs = document.createElement("img");
                    createImgs.src = niz1[i].img;
                    createImgs.setAttribute("height", "400");
                    createImgs.setAttribute("width", "500");
                    createImgs.setAttribute("alt", niz1[i].alt);
                    niz2.push(createImgs);
                }
                $(".images").append(niz2[0]); // Append default picture to the dom [0]
            },

        // Onclick next button call nextImagefunct, and iterate through pictures ++1
            nextImg : function(){
                $(".next").on("click", function(){
                    module.nextImageFunc();
                    $(".text").html("<p>" + imageText[imgNum]);
                    $(r).html(niz2[imgNum]);
                });
            },
    
        // Same as above, only --
    
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
                    $(".text").html("<p>" + imageText[imgNum]);
                    console.log(niz2[imgNum]);
                });
            },

    // After 3 seconds change picture, by using setInterval function

            imageSlideshow : function(){
                module.nextImageFunc();

                $(r).html(niz2[imgNum]);


                $(".text").html("<p>" + imageText[imgNum]);
                setInterval(this.imageSlideshow, 3000);
            },

            createText : function(){
            }
        };
    })();

    module.createImgNames();
    module.createImgElement();
    module.nextImg();
    module.prevImg();
    module.imageSlideshow();
    module.createText();

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
