/**
 * Created by JS on 6/7/14.
 */




    // Create module pattern
    var module = (function(){

    // Create array to store images
        var images = ["img1", "img2", "img3", "img4", "img5"],
            niz1 = [],
            r = $(".images"),
            niz2 = [],
            imgNum = 0,
            imageText = ["This is some text", "This is another text", "Text", "Some text", "Text1"],
            radio = document.createElement("radio"),
            input = $(".inputs").find("input");



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
                    module.radioBoxImg();
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
                        imgNum = niz2.length - 1;
                    }

                    $(r).html(niz2[imgNum]);
                    $(".text").html("<p>" + imageText[imgNum]);
                    module.radioBoxImg();
                    console.log(niz2[imgNum]);
                });
            },

    // After 3 seconds change picture, by using setInterval function

            imageSlideshow : function(){
                module.nextImageFunc();
                module.radioBoxImg();
                $(r).html(niz2[imgNum]);
                $(".text").html("<p>" + imageText[imgNum]);
                setInterval(this.imageSlideshow, 3000);
            },

            radioBoxImg : function () {
                $('input:radio:checked').each(function() {
                    if($(this).is(':checked')) {
                        $('input').val([imgNum]);

                    }
                });
            },

            radioOnClick : function(){
                var input = $("input"),
                    text = $(".text");
                input.on("click", function(){
                    switch (this){
                        case input[0] :
                            $(r).html(niz2[0]);
                            text.html("<p>" + imageText[0]);
                            module.nextImageFunc();
                            break;
                        case input[1] :
                            $(r).html(niz2[1]);
                            text.html("<p>" + imageText[1]);
                            module.nextImageFunc();
                            break;
                        case input[2] :
                            $(r).html(niz2[2]);
                            text.html("<p>" + imageText[2]);
                            module.nextImageFunc();
                            break;
                        case input[3] :
                            $(r).html(niz2[3]);
                            text.html("<p>" + imageText[3]);
                            module.nextImageFunc();
                            break;
                        case input[4] :
                            $(r).html(niz2[4]);
                            text.html("<p>" + imageText[4]);
                            module.nextImageFunc();
                            break;
                        default :
                            console.log("Hi there!");
                    }
                })
            },

            animation : function(){
            }

        };
    })();

    module.createImgNames();
    module.createImgElement();
    module.nextImg();
    module.prevImg();
    module.imageSlideshow();
    module.radioBoxImg();
    module.radioOnClick();
    module.animation();
