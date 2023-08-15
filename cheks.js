function verifyReferrer() {
  let eee = document.referrer;

  console.log(eee);

  // מחרוזת ספציפית אחרי ה /
  let specificPath = "payment";

  // בדיקה האם המקור הוא מאושר לפי המחרוזת הספציפית
  if (eee.includes(specificPath)) {
    let value = "xdxgxgxgxgf";
    localStorage.setItem("simp", value);
    // העברה לדף ההורדה
    console.log("1");
    redirectToDownloadPage();
  } else {
    console.log("error");
    console.log(eee);
    window.location.href = window.location.origin; // מעבר לדף הבית
  }
}

// מבצע את הפונקציה
verifyReferrer();

function redirectToDownloadPage() {
    // בדיקה האם הסיומת היא ".html"
    if (window.location.pathname.endsWith(".html")) {
      window.location.href = "downloads.html"; // בסביבת הפיתוח
    } else {
      window.location.href = "https://remove-wifree.gq/downloads"; // בשרת
    }
  }

  
