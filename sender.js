function kirimpesan(nomor,pesan) {
var tempatnomorbaru=document.getElementById("nomorwa");
if(tempatnomorbaru==null){
  var href = document.createElement("a");
  href.href = "http://wa.me/"+nomor;
  href.innerText= "00000";
  href.setAttribute("id", "nomorwa");
  document.body.appendChild(href);
}else{
  tempatnomorbaru.href= "http://wa.me/"+nomor;
}
document.querySelector("#nomorwa").click()
setTimeout(() => {
messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
event = document.createEvent("UIEvents"); 
messageBox.innerHTML = '<p class="selectable-text copyable-text iq0m558w" dir="ltr"><span class="selectable-text copyable-text" data-lexical-text="true">${pesan}</span></p>';
event.initUIEvent("input", true, true, window, 1); 
messageBox.dispatchEvent(event); 
document.querySelector('span[data-icon="send"]').click();
console.log(nomor+" Berhasil");
}, 600);
}
