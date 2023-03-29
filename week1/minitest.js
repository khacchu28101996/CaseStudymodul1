function tinh() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    a = parseInt(a);
    b=parseInt(b);
    let cong = a + b;
    let tru = a - b;
    let nhan = a * b;
    let chia = a / b;
    let du = a % b;
    let db = a * a + b * b;
    alert("a+b = " + cong);
    alert("a-b = " + tru);
    alert("a*b = " + nhan);
    alert("a/b = " + chia);
    alert("a%b =" + du);
    alert("a^2 + b^2 =" = db);
}