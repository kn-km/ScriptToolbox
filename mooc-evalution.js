//评满分
function click() {
    var radios = document.getElementsByClassName("d")
    for (var i = 0; i < radios.length; i++) {
        radios[i].click()
    }
    setTimeout(commit, 1000)
}

//下一页
function next() {
    //提交
    var button = document.getElementsByClassName("u-btn u-btn-default f-fl j-submitbtn")[0]
    button.click()
    setTimeout(nextPage, 1500)

}

//打开下一页
function nextPage() {
    //打开下一页
    var nextpage = document.getElementsByClassName("j-gotonext")[0]
    nextpage.click()
    setTimeout(click, 1500)
}

//评论
function commit() {
    document.getElementsByName("inputtxt")[0].value = "你太棒了!"
    setTimeout(next, 1000)
}

click();