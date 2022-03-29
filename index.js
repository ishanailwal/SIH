function academicsFunction(){
    document.getElementById("personal").style.display="none";
    document.getElementById("academics").style.display="flex";
    document.getElementById("preferences").style.display="none";
    document.getElementById("quiz").style.display="none";
  }
  
  function personalFunction(){
    document.getElementById("personal").style.display="grid";
    document.getElementById("academics").style.display="none";
    document.getElementById("preferences").style.display="none";
    document.getElementById("quiz").style.display="none";
  }

  function preferencesFunction(){
    document.getElementById("personal").style.display="none";
    document.getElementById("academics").style.display="none";
    document.getElementById("preferences").style.display="grid";
    document.getElementById("quiz").style.display="none";
  }

  function quizFunction(){
    document.getElementById("personal").style.display="none";
    document.getElementById("academics").style.display="none";
    document.getElementById("preferences").style.display="none";
    document.getElementById("quiz").style.display="grid";
  }
  