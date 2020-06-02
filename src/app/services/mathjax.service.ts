import { Injectable } from '@angular/core';

declare const MathJax: any;

@Injectable({
  providedIn: 'root'
})
export class MathjaxService {
  promise = Promise.resolve();  // Used to hold chain of typesetting calls

  constructor(){
    /**
     * Insert the MathJax configuration script into the Head element.
     */
    (function () {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'text/javascript';
      script.text = `MathJax = {
          tex: {inlineMath: [['$','$']]}
        };`;
      document.getElementsByTagName('head')[0].appendChild(script);
    })();

    /**
    * Insert the script block to load the MathJax library.
    */
    (function () {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'text/javascript';
      script.src = `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js`;
      script.async = true;
      document.getElementsByTagName('head')[0].appendChild(script);
    })();
  }

  typeset() {
    this.promise = this.promise.then(() => {return MathJax.typesetPromise()})
                     .catch((err) => console.log('Typeset failed: ' + err.message));
  }
}
