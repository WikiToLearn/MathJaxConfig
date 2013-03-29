/*************************************************************
 *
 *  MathJax/config/local/local.js
 *
 *  Include changes and configuration local to your installation
 *  in this file.  For example, common macros can be defined here
 *  (see below).  To use this file, add "local/local.js" to the
 *  config array in MathJax.js or your MathJax.Hub.Config() call.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009 Design Science, Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;

  // place macros here.  E.g.:
// TEX.Macro("R","{\\mathbb{R} }");
  //   TEX.Macro("op","\\mathop{\\rm #1}",1); // a macro with 1 parameter

TEX.Macro("field", '{\\mathbb{#1}}', 1);
TEX.Macro("erf", '{\\mathrm{erf}}');

TEX.Macro("norm", '{\\left\\lVert#1\\right\\rVert}', 1);
TEX.Macro("abs", '{\\left\\lvert#1\\right\\rvert}', 1);
TEX.Macro("vecb", '{\\boldsymbol{#1}}', 1);
TEX.Macro("ten", '{\\overset{\\Rightarrow}{#1}}', 1);
TEX.Macro("tens", '{\\underline{\\underline{#1}}}', 1);
TEX.Macro("media", '{\\left<#1\\right>}', 1);

TEX.Macro("ket", '{\\left|#1\\right>}', 1);
TEX.Macro("bra", '{\\left<#1\\right|}', 1);

TEX.Macro("ver", '{\\vecb{\\hat {#1}}}', 1);


TEX.Macro("ud", '{\\mathrm{d}}');
TEX.Macro("const", '{\\text{costante}}');
TEX.Macro("riq", '{\\boxed}');
TEX.Macro("ve", '{\\vecb}');
TEX.Macro("clearemptydoublepage", '{\\newpage{\\pagestyle{empty}\\cleardoublepage}}');
TEX.Macro("giorgi", '{4\\pi\\varepsilon_0}');
TEX.Macro("e", '{\\mathrm{e}}');
});

MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$in','$in'], ['<math>', '</math>']],
    displayMath: [['$$','$$']],
    processEscapes: true
  },
  displayAlign: "center",

});

MathJax.Hub.Config({
  TeX: { equationNumbers: { autoNumber: "AMS" }, extensions: ["AMSmath.js", "AMSsymbols.js"] }
});

MathJax.Ajax.loadComplete("[MathJax]/config/local/local.js");
