// בדיקת המקור של הטעינה ויצירת ערך בלוקאל סטורג
let eee = document.referrer 

console.log(eee);

function verifyReferrer(){
  if (eee === "https://remove-wifree.gq/payment.html") {
    //   alert('הגעת ממקור תקין.');

    // כתובת המקור המאושרת
    let approvedReferrer = "https://remove-wifree.gq/payment.html";

    // בדיקה האם המקור הוא המאושר
    if (document.referrer === approvedReferrer) {
      let value = "xdxgxgxgxgf";
      localStorage.setItem("simp", value);
      // alert('הערך נוסף ללוקאל סטורג.');
      // העברה לדף ההורדה
      console.log("1");
      window.location.href = "https://remove-wifree.gq/downloads.html";
    }
  } else {
    console.log("error");
    window.location.href = "https://remove-wifree.gq"; // מעבר לדף הבית
  }
}

// מבצע את הפונקציה בעת טעינת הדף
window.onload = function () {
  verifyReferrer();
};
