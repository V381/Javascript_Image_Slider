###
Created by JS on 6/7/14.
###

# Create module pattern
module = (->

  # Create array to store images
  images = [
    "img1"
    "img2"
    "img3"
    "img4"
    "img5"
  ]
  niz1 = []
  r = $(".images")
  niz2 = []
  imgNum = 0
  imageText = [
    "This is some text"
    "This is another text"
    "Text"
    "Some text"
    "Text1"
  ]
  radio = document.createElement("radio")
  input = $(".inputs").find("input")
  nextImageFunc: ->
    imgNum = imgNum + 1
    imgNum = 0  if imgNum > niz2 - 1
    imgNum = 0  if imgNum is niz2.length
    return


  # Create image path and push into niz1
  createImgNames: ->
    images.forEach (value) ->
      niz1.push
        img: "img/" + value + ".jpg"
        alt: "img"


    return


  # For each image create attribute
  createImgElement: ->
    i = 0

    while i < niz1.length
      createImgs = document.createElement("img")
      createImgs.src = niz1[i].img
      createImgs.setAttribute "height", "400"
      createImgs.setAttribute "width", "500"
      createImgs.setAttribute "alt", niz1[i].alt
      niz2.push createImgs
      i++
    $(".images").append niz2[0] # Append default picture to the dom [0]
    return


  # Onclick next button call nextImagefunct, and iterate through pictures ++1
  nextImg: ->
    $(".next").on "click", ->
      module.nextImageFunc()
      $(".text").html "<p>" + imageText[imgNum]
      $(r).html niz2[imgNum]
      module.radioBoxImg()
      return

    return


  # Same as above, only --
  prevImg: ->
    $(".prev").on "click", ->
      imgNum = imgNum - 1
      imgNum = 0  if imgNum > niz2 - 1
      imgNum = niz2.length - 1  if imgNum < 0
      $(r).html niz2[imgNum]
      $(".text").html "<p>" + imageText[imgNum]
      module.radioBoxImg()
      console.log niz2[imgNum]
      return

    return


  # After 3 seconds change picture, by using setInterval function
  imageSlideshow: ->
    module.nextImageFunc()
    module.radioBoxImg()
    $(r).html niz2[imgNum]
    $(".text").html "<p>" + imageText[imgNum]
    setInterval @imageSlideshow, 3000
    return

  radioBoxImg: ->
    $("input:radio:checked").each ->
      $("input").val [imgNum]  if $(this).is(":checked")
      return

    return

  radioOnClick: ->
    input = $("input")
    text = $(".text")
    input.on "click", ->
      switch this
        when input[0]
          $(r).html niz2[0]
          text.html "<p>" + imageText[0]
          module.nextImageFunc()
        when input[1]
          $(r).html niz2[1]
          text.html "<p>" + imageText[1]
          module.nextImageFunc()
        when input[2]
          $(r).html niz2[2]
          text.html "<p>" + imageText[2]
          module.nextImageFunc()
        when input[3]
          $(r).html niz2[3]
          text.html "<p>" + imageText[3]
          module.nextImageFunc()
        when input[4]
          $(r).html niz2[4]
          text.html "<p>" + imageText[4]
          module.nextImageFunc()
        else
          console.log "Hi there!"
      return

    return

  animation: ->
)()
modd = () ->
  module.createImgNames()
  module.createImgElement()
  module.nextImg()
  module.prevImg()
  module.imageSlideshow()
  module.radioBoxImg()
  module.radioOnClick()
  module.animation()  
