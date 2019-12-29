//你只需要丢入console，回车然后听会歌就完了
//评满分
function click() {
    var radios = document.getElementsByClassName("d")
    for (var i = 0; i < radios.length; i++) {
        radios[i].click()
    }
    setTimeout(commit, 10)
}

//提交
function next() {
    var button = document.getElementsByClassName("u-btn u-btn-default f-fl j-submitbtn")[0]
    button.click()
    setTimeout(nextPage, 1500)
}

//打开下一页
function nextPage() {
    var nextpage = document.getElementsByClassName("j-gotonext")[0]
    nextpage.click()
    setTimeout(click, 1500)
}

//评论
function commit() {
    document.getElementsByName("inputtxt")[0].value = "你太棒了!"
    setTimeout(next, 10)
}

click();