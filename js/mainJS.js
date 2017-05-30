
var form = document.forms.notepad;
var list = document.querySelector("#list");
var add = document.getElementById("add");
form.addEventListener("submit", function (e)
{
    e.preventDefault();//відміняє дію браузера по заовчуваню на сабміт
    if (add.innerText==="Add")
    {
        addLi(e.target);
    }

});
list.addEventListener("click",function (e)
{
    if (e.target.tagName.toUpperCase()==="BUTTON")
    {
        targetBtnDel(e.target);
    }
    else if (e.target.tagName.toUpperCase()==="SPAN")
    {
        /*if (confirm("Редагувати поле?"))
        {

        }*/
        targetLiEdit(e.target);
    }
});
function targetLiEdit(param)
{
    var selectedItem = param;
    var spanText = selectedItem.textContent;
    form.txt.value=spanText;
    add.innerText="Edit";
    form.addEventListener("submit", function (e)
    {
        e.preventDefault();//відміняє дію браузера по заовчуваню на сабміт
        if (e.target.txt.value)
        {
            selectedItem.textContent=form.txt.value;//не забути спитати чого якщо ставлю spanText то не редагує
            form.txt.value="";
            add.innerText="Add";
        }
    });
}
function addLi(param)
{
    if (param.txt.value)
    {
        var text = param.txt.value;
        param.txt.value="";
        var li = document.createElement("li");
        var span = document.createElement("span");
        var button = document.createElement("button");
        button.innerText="Delete";
        span.innerText = text+" ";
        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);
    }
}
function targetBtnDel(param)
{
    var li=param.parentElement;
    var ul=li.parentElement;
    ul.removeChild(li);
}
