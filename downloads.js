// בדיקה האם הערך קיים בלוקאל סטורג
function verifyPayment() {
  let value = localStorage.getItem("simp");
  if (value === "xdxgxgxgxgf") {
    // הערך קיים - יישום לוגיקה של הערך הקיים בלוקאל סטורג
    // לדוגמה, יציג כפתור הורדה
    document.getElementById("downloadBtn").style.display = "block";
    console.log("downloads");
  } else {
    // הערך לא קיים - העברה לדף התשלום
    console.log("error");
    window.location.href = window.location.origin;
  }
}

// מבצע את הפונקציה

verifyPayment();

function downloadFiles() {
  window.location.href = "images.rar";
  localStorage.clear();

  setTimeout(()=> {
  window.location.href = window.location.origin;; // מעבר לדף הבית 
}, 2000); // 2000 מייצג 2000 מילישניות, כלומר 2 שניות
}
