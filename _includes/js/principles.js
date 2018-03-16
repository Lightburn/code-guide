/* Bad */
function p(c)
{
  function init (){

  }

  var s = $.extend({
    class: ""
  }, c);
}

/* Good */
import { Utils } from "../utils";

/* Sets and removes padding on the body for the fixed footer */
export default class Footer {
  constructor() {
    this.footer = document.querySelector(".site-footer");
    
    this.run();
    this.setHeight();
  }
  
  run() {
    window.addEventListener("resize", Utils.debounce(() => {
      this.setHeight();
    }, 100));
  }

  setHeight() {
    if(window.innerWidth > 768){
      document.body.style.paddingBottom = this.footer.clientHeight + "px";
    }
    else {
      document.body.style.paddingBottom = "";
    }
  }
}
