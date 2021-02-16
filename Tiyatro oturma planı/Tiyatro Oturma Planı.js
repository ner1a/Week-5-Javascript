let checkbox = document.querySelectorAll(".gelecek-mi");
let kaydet = document.getElementById("kaydet");
let row = document.querySelectorAll("tbody tr");


for (let index = 0; index < checkbox.length; index++) {
    checkbox[index].addEventListener("click", function(){
        (this.checked)? this.parentNode.nextElementSibling.children[0].disabled = false :this.parentNode.nextElementSibling.children[0].disabled = true
    });
}

kaydet.addEventListener("click" , function(){
    let idlist = [];
    for (let i = 0; i < row.length; i++) {
        let desc = row[i].children
        for (let i = 0; i < desc.length; i++) {
            if (desc[2].children[0].checked == true){
                if (i == 0) {
                    console.log("İd: "+desc[i].children[0].value);
                }
                else if (i == 1) {
                    console.log("İsim: "+desc[i].children[0].value);
                }
                else if (i == 3) {
                    console.log("Sıra: "+desc[i].children[0].value);
                }
                else {
                    if (desc[i].children[0].checked) {
                        console.log("Partiye Gelecek")
                        idlist.push({
                            "id" : desc[0].children[0].value,
                            "sıra" : desc[3].children[0].value
                        })
                    } else {
                        console.log("Partiye Gelmeyecek")
                    }
                }
           }
        }
    }
    console.log(idlist)
})
