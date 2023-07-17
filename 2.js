// בדיקה האם הערך קיים בלוקאל סטורג
function checkLocalStorage() {
    let value = localStorage.getItem('simp');
    if (value === "xdxgxgxgxgf") {
      // הערך קיים - יישום לוגיקה של הערך הקיים בלוקאל סטורג
      // לדוגמה, יציג כפתור הורדה
      document.getElementById('downloadBtn').style.display = 'block';
    console.log("downloads");
    } else {
      // הערך לא קיים - העברה לדף התשלום
      console.log("error");
      window.location.href = 'paypal.html';
    }
  }
  
  // מבצע את הפונקציה בעת טעינת הדף
  window.onload = function() {
    checkLocalStorage();
  };