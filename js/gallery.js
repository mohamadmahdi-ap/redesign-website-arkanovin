let j = 0;
let gallery = document.querySelectorAll(".gallery img");
gallery.forEach((e) => {
    e.setAttribute("onclick", "showImage(" + (j++) + ")")

})

let galleryId
function showImage(i) {
    galleryId = i
    let imageSrc = gallery[i].src;
    document.getElementById("image-show-img").src = imageSrc;
    document.querySelector(".image-show-box div a").href = imageSrc
    document.querySelector(".image-show").classList.add("image-show-open")
    document.getElementById("gallery-count").innerHTML =gallery.length +" / "+(galleryId+1);
}
function closeImageShowBox() {
    document.querySelector(".image-show").classList.remove("image-show-open")
}
function slideGallery(i){
    i +=galleryId
    i = (i>gallery.length-1)?0:((i<0)?gallery.length-1 : i);
    galleryId = i;
    document.getElementById("image-show-img").src =  gallery[i].src;
    document.querySelector(".image-show-box div a").href = gallery[i].src;
    document.getElementById("gallery-count").innerHTML =gallery.length +" / "+(galleryId+1);
}