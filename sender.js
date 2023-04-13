function kirimpesan(nomor,pesan) {
var tempatnomorbaru=document.getElementById("nomorwa");
if(tempatnomorbaru==null){
  var href = document.createElement("a");
  href.href = "http://wa.me/"+nomor+"?text="+encodeURIComponent(pesan);
  href.innerText= "00000";
  href.setAttribute("id", "nomorwa");
  document.body.appendChild(href);
}else{
  tempatnomorbaru.href= "http://wa.me/"+nomor+"?text="+encodeURIComponent(pesan);
}
document.querySelector("#nomorwa").click()
setTimeout(() => {
event = document.createEvent("UIEvents"); 
event.initUIEvent("input", true, true, window, 1); 
document.querySelector('span[data-icon="send"]').click();
console.log(nomor+" Berhasil");
}, 3000);
}
//Eksekusi    
kirimpesan("628111111","OTP KAMU ADALAH 63733");
