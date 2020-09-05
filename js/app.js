function getDogImage() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let dogGet = JSON.parse(this.responseText);
            document.getElementById("get-dog").innerHTML = dogGet.url;
            let dogImage = document.getElementById("get-dog");
            dogImage.setAttribute("src", dogGet.url);

        } else if(this.readyState !=4) {
            document.getElementById("get-dog").innerHTML = "LOADING!";
        } else {
            document.getElementById("get-dog").innerHTML = "Something went wrong!";
        }
    }
    ajax.open("GET", "https://random.dog/woof.json", true);
    ajax.send(); 
}

document.getElementById("another-dog").addEventListener("click", getDogImage);