// בדיקת המקור של הטעינה ויצירת ערך בלוקאל סטורג
function verifyReferrer(){
  if (document.referrer === "https://remove-wifree.gq/payment") {
    //   alert('הגעת ממקור תקין.');

    // כתובת המקור המאושרת
    let approvedReferrer = "https://remove-wifree.gq/payment";

    // בדיקה האם המקור הוא המאושר
    if (document.referrer === approvedReferrer) {
      let value = "xdxgxgxgxgf";
      localStorage.setItem("simp", value);
      // alert('הערך נוסף ללוקאל סטורג.');
      // העברה לדף ההורדה
      console.log("1");
      window.location.href = "https://remove-wifree.gq/downloads";
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
