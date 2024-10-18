"use strict";(self.webpackChunkkvex_docs=self.webpackChunkkvex_docs||[]).push([[2777],{5670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(4848),a=t(8453);const r={sidebar_position:1},s="Installation",l={id:"install",title:"Installation",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/fr/docs/install",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/fr/docs/category/tutorial---basics"}},d={},o=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Generell",id:"generell",level:2},{value:"Lambdas &amp;&amp; Imports",id:"lambdas--imports",level:2},{value:"Accessmodifiers",id:"accessmodifiers",level:2},{value:"Structs, Struct Extending &amp;&amp; Interfaces",id:"structs-struct-extending--interfaces",level:2},{value:"Print Placeholders",id:"print-placeholders",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Start your site",id:"start-your-site",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's discover ",(0,i.jsx)(n.strong,{children:"Docusaurus in less than 5 minutes"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["Get started by ",(0,i.jsx)(n.strong,{children:"creating a new site"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Or ",(0,i.jsx)(n.strong,{children:"try Docusaurus immediately"})," with ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docusaurus.new",children:"docusaurus.new"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 18.0 or above:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When installing Node.js, you are recommended to check all checkboxes related to dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generate-a-new-site",children:"Generate a new site"}),"\n",(0,i.jsxs)(n.p,{children:["Generate a new Docusaurus site using the ",(0,i.jsx)(n.strong,{children:"classic template"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The classic template will automatically be added to your project after you run the command:"}),"\n",(0,i.jsx)(n.h2,{id:"generell",children:"Generell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"mod main;\n\ndec x: i8;\nx = 9;\nx--;\n\ndec x, y, z: i16 := 0, 5, 10;                                      // declare multiple variables at once\n\nif (x > 5) {                                                       // if x is bigger than 5 then ...\n\temitln(\"'x' (&{x}) is bigger than 5\")\n} else {                                                          // else ...\n\temitln(\"'x' (&{x}) isn't bigger than 5\")\n}\n\nfor (i: i8 := 0; i <= 8, i++) {                                     // normal for loop\n\temitln(\"i (&{i}) is smaller or equal to 8\\n\")\n}\n\ndec b: i16[x] := [1,5];                                            // creates an array 'b' with a specific specified amount 'x >> 8' of specified types 'i16'\n\nfor (i: i8 :: b) {                                                 // for each loop\n\temitln(\"item (&{i}) is in the array named 'b'\\n\")\n}\n\ndec t: f16 := 0.2F;\n\nwhile (t.isBetween(0, 5)) {                                        // normal while loop (when no expression (b => if true; !b => if false))\n\temitln(\"t = &{t}\");\n\tt++\n}\n\ndec z: u8 := (x == 3) ? (x + 1) : (x - 1);                       // inline if statement inside a variable\n\ndec getValueAt(arr: [], i: itype) i16 {\n\treturn arr[i].value                                          // return the value of the element at index 'i' of the given array 'arr'\n};\n\ndec getValueError(arr: [], i: u16) ?utype {                       // ? before type means option of type\n\tif (i < arr.len()) {\n\t\treturn arr[i].value                                       // return the value of the element at index 'i' of the given array 'arr'\n\t} else {\n\t\tnew Error(sEmitf(\"Cannot find value at index &{i}!\", Error.Critical)) // or throw an error\n\t}\n};\n\ndec y: i16 := getValueAt(b, 1);                                    // 'y' will be the 2nd value ('5') of the array 'b'\n\nswitch (y) {\n\t(# < 5, # > 2) => emitln(\"between 2 and 5\"),                  // multiple arguments\n\t(# < 5) => {                                                  // '??' gets the switch value (in this case 'y')\n\t\temitln(\"smaller than 5\");\n\t\temitln(\"Just some text\")\n\t},\n\t(# >= 5) => emitln(\"bigger or equal to 5\"),\n\t_ => emitln(\"value is not a number\")\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"lambdas--imports",children:"Lambdas && Imports"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'mod lambdas;\n\nuses kvex.Math;     // Imports kvexium math library\n\n// simple lambdas\ndec result: i16 := &((x: i8) -> x * x)(4);                // result = 16\n\n// external lambdas\ndec &square: i16 := &(x: i16 -> x * x);\ndec result: i16 := square(4);                             // result = 16\n\n// complex lambdas\ndec &differenceAndAdd: Result{diff: i16, sum: i16} := Lambda((x: i16, y: i16) => {\n\tif x < y {\n\t\treturn Result{y-x, x+y}\n\t} else {\n\t\treturn Result{x-y, x+y}\n\t}\n});\n\ndec result: i16[2];                                     // an array of 2 i16\'s\nresult[0] = differenceAndAdd(9, 7).diff;\nresult[1] = differenceAndAdd(9, 7).sum;\n\n// or:\nresult = differenceAndAdd(9, 7);\n\n// named lambdas\ndec &namedLambdas: i16 := Dict<str, Lambda>({   // Creates a dictionary with all the lambdas\n\t"multiply": Lambda((x: i16, y: i16) => x * y),\n\t"add": Lambda((x: i16, y: i16) => x + y),\n\t"subtract": Lambda((x: i16, y: i16) => x - y),\n\t"divide": Lambda((x: i16, y: i16) => x / y)\n});\nnamedFunctions["add"](x, y);                 // accesses the add lambda in the namedFunctions with the parameters x and y provided\n'})}),"\n",(0,i.jsx)(n.h2,{id:"accessmodifiers",children:"Accessmodifiers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"mod accessmodifiers;\n\ndec z: str := \"Hello World\";  // without modifier -> accessable from everywhere\n\n*dec a: i8 := 2;          // the modifier '*' makes this variable private to this class\n\n&dec b: i32 := 23451;     // the modifier '&' makes this variable final so it cannot change its value\nb++;                      // => [ ERROR ] Cannot change value of variable 'b' | [ CAUSE ] Variable is final! | [ SOLUTION ] Create new variable >> assign value of 'b' to it >> change value of new variable!\n\n// Modifiers can also be combined with the '**' which makes the variable protected (private and final at the same time)\n\n**dec c: char := '\\0';\nc++;                      // => [ ERROR ] Cannot change value of variable 'c' | [ CAUSE ] Variable is protected!\n\n// inside of functions, variables will automaticly be declared as private to this function\n"})}),"\n",(0,i.jsx)(n.h2,{id:"structs-struct-extending--interfaces",children:"Structs, Struct Extending && Interfaces"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'mod structs;\n\nstruct Person {\n\tfirstName: string | "",   // Default-Wert falls Fehler\n\tsurname: string | "",\n\tage: u8 | 0\n}\n\nstruct Student -< Person {    // Student erbt von Person\n\tgrade: u8 | 0,            // neue Eigenschaft\n\tschool: str | "Unknown"\n}\n\ndec (person Person) getName() str {   // Methode f\xfcr Person-Struktur\n\treturn person.firstName + " " + person.surname\n}\n\ndec (student Student) getDetails() str {    // Methode f\xfcr Student-Struktur (erbt auch getName von Person)\n\treturn student.getName() + ", Age: " + student.age + ", Grade: " + student.grade\n}\n\n// Verwendung:\ndec student: Student := Student{firstName: "John", surname: "Doe", age: 20, grade: 12, school: "Kvexium High School"};\nemitln(student.getDetails());    // Output: John Doe, Age: 20, Grade: 12\n\ninterface Drawable {                   // provides methods or properties that have to be implemented\n\tdraw()\n}\n\nstruct Circle -< Drawable {\n\tradius: f32 | 0.0F,\n\n\tdec draw() {\n\t\temitfln("Drawing a circle with radius &{radius}");\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"print-placeholders",children:"Print Placeholders"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'dec a: i8 := 15;\ndec b: str := "abc";\ndec c: char := \'x\';\n\nemitfln("a = &{%d}", a);\n\nemitfln("a = &{%d}; b = &{%s}", a, b);\n\nemitfln("c = &{%c}", c);\n\nemitfln("a + b = &{%d}", a + b);\n\nemitlfn("a = &{%d}; b = &{%s}; while a = &{%d:1}", a, b); // :1 is just the index where the value is pulled from in this case it is the variable a, with that you can safe space\n\nemitfln("Float Value: &{%f}", floatValue);\n\nemitfln("Hex Value: &{%x}", hexValue);\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"annotations",children:"Annotations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'@NoUse("Don\'t use due to old version") // Just a warning being automaticly print out that function or variable is old\n\n@Limit(<var>, {<val1>, <val2>}) // simple limit a specific variable\n@Limit([{<var1>, {<val1>, <val2>}}, {<var2>, {<val1>, <val2>}}, ...]) // extended limit specific variables\n\n// special @Limit for variable declaration\n@Limit({4, 16})\ndec a: i8 := 7;\n\n@Just(<var>, [<val1>, <val2>, ...]) // simple limit for the values a variable can have\n@Just([{<var1>, [val1, val2, ...]}, {<var2>, [<val1>, <val2>, ...]}, ...]) // simple limit for the values a variable can have\n\n// special @Just for ranges\n@Just(f, [1<>10, >=12])             // Just for values where f is between 1 and 10 or f >= 12\ndec getNumSquared(f: i8) i32 {\n\treturn f * f\n}\n\n@Just(f, <12)             // Just for values where f < 12\ndec getNumSquared2(f: i8) i32 {\n\treturn f * f\n}\n\ndec result: i32 := getNumSquared(11); // will error because of @Just\ndec result2: i32 := getNumSquared2(11); // will pass\n\n@Docs("Just some documentation text") // Used for description of variables, functions or blocks of code :: enshures readability\n\n@Debug // only run function below when debug is enabled, if function called outside of debug throw error\n       // will also print every value being inputed and outputed with the function name when debug is run\n\n@Type(<var>, <type>*, <call-function-if-not>) // if a variable matches one or more types\n@Type([{<var1>, <type>*, <call-function-if-not1>}, {<var1>, <type>*, <call-function-if-not1>}, ...]) // * just stands for that there can be multiple which then have to be put into [<type>, ...]\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."}),"\n",(0,i.jsx)(n.p,{children:"The command also installs all necessary dependencies you need to run Docusaurus."}),"\n",(0,i.jsx)(n.h2,{id:"start-your-site",children:"Start your site"}),"\n",(0,i.jsx)(n.p,{children:"Run the development server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd my-website\nnpm run start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cd"})," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"npm run start"})," command builds your website locally and serves it through a development server, ready for you to view at ",(0,i.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"docs/intro.md"})," (this page) and edit some lines: the site ",(0,i.jsx)(n.strong,{children:"reloads automatically"})," and displays your changes.\nUse plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."]}),"\n",(0,i.jsx)(n.p,{children:":::linux Linux Hinweis\nDies ist eine benutzerdefinierte Linux-Admonition.\n:::"}),"\n",(0,i.jsx)(n.p,{children:":::windows Windows Hinweis\nDies ist eine benutzerdefinierte Windows-Admonition.\n:::"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);