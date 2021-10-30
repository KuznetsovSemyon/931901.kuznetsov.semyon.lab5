var dialog1 = document.querySelector('#dialog1');
var dialog2 = document.querySelector('#dialog2');
var dialog3 = document.querySelector('#dialog3');
document.querySelector('#New1').onclick = function () {
    dialog1.show();
};
document.querySelector('#New2').onclick = function () {
    dialog2.show();
};
document.querySelector('#New3').onclick = function () {
    dialog3.show();
};
dialog1.onclick = function () {
    dialog1.close();
};
dialog2.onclick = function () {
    dialog2.close();
};
dialog3.onclick = function () {
    dialog3.close();
};