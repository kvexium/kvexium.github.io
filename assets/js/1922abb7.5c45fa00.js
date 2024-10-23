"use strict";(self.webpackChunkkvex_docs=self.webpackChunkkvex_docs||[]).push([[7329],{9812:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=a(4848),s=a(8453);const t={sidebar_position:1,title:"Lambdas [ FNX ]"},d="Lambdas [ FNX ]",l={id:"extra/lambdas",title:"Lambdas [ FNX ]",description:"Lambdas in kvexium provide a flexible way to create and use functions. They allow for both simple and complex operations, enabling developers to write concise and readable code. This documentation will cover different types of lambdas, including simple lambdas, external lambdas, complex lambdas, and named lambdas.",source:"@site/docs/extra/lambdas.mdx",sourceDirName:"extra",slug:"/extra/lambdas",permalink:"/docs/extra/lambdas",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extra/lambdas.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Lambdas [ FNX ]"},sidebar:"tutorialSidebar",previous:{title:"Extras",permalink:"/docs/category/extras"},next:{title:"Manage Docs Versions",permalink:"/docs/extra/manage-docs-versions"}},r={},o=[{value:"Simple Lambdas",id:"simple-lambdas",level:2},{value:"External Lambdas",id:"external-lambdas",level:2},{value:"Complex Lambdas",id:"complex-lambdas",level:2},{value:"Named Lambdas",id:"named-lambdas",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"lambdas--fnx-",children:"Lambdas [ FNX ]"})}),"\n",(0,i.jsxs)(n.p,{children:["Lambdas in kvexium provide a flexible way to create and use functions. They allow for both simple and complex operations, enabling developers to write concise and readable code. This documentation will cover different types of lambdas, including simple lambdas, external lambdas, complex lambdas, and named lambdas.\nThey are marked with the data type ",(0,i.jsx)(n.code,{children:"fnx"})," (function expression) which has to be imported by adding:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"uses kvex.fnx;\n"})}),"\n",(0,i.jsx)(n.p,{children:"to the top of your code file."}),"\n",(0,i.jsx)(n.h2,{id:"simple-lambdas",children:"Simple Lambdas"}),"\n",(0,i.jsx)(n.p,{children:"Simple lambdas allow you to define a function inline at the point of declaration. For instance, if you want to compute the square of a number, you can do so with the following syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"dec simple: fnx<i16> := fnx(x: i8) {x * x}(4);\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We declare a variable result of type ",(0,i.jsx)(n.code,{children:"fnx<i16>"}),", which indicates that the function will return a signed 16-bit integer (",(0,i.jsx)(n.code,{children:"i16"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["The lambda function takes an input x of type ",(0,i.jsx)(n.code,{children:"i8"}),", computes the square of x, and is immediately invoked with the argument 4. Thus, the value of result will be 16."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This allows for quick, one-off calculations without the need for a separate function definition."}),"\n",(0,i.jsx)(n.h2,{id:"external-lambdas",children:"External Lambdas"}),"\n",(0,i.jsx)(n.p,{children:"External lambdas are defined outside of their invocation and can be reused throughout your code. Here\u2019s how to define and call an external lambda:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"dec square: fnx<i16> := fnx(x: i16) {x ** 2};\ndec result: i16 := square(4);\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this case:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We define a lambda named square that takes a parameter x of type ",(0,i.jsx)(n.code,{children:"i16"})," and returns its square."]}),"\n",(0,i.jsx)(n.li,{children:"We then call this lambda with the argument 4, and the result will again be 16."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This separation allows you to define reusable functions that can be called multiple times with different inputs."}),"\n",(0,i.jsx)(n.h2,{id:"complex-lambdas",children:"Complex Lambdas"}),"\n",(0,i.jsx)(n.p,{children:"Complex lambdas can handle more intricate operations and can return multiple values through structured types. Consider the following example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"dec differenceAndAdd: fnx<Result{diff: i16, sum: i16}> := fnx(x: i16, y: i16) {\n    if x < y {\n        Result{y-x, x+y}\n    } else {\n        Result{x-y, x+y}\n    }\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s what\u2019s happening:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We declare a lambda differenceAndAdd that takes two ",(0,i.jsx)(n.code,{children:"i16"})," parameters, x and y."]}),"\n",(0,i.jsx)(n.li,{children:"The lambda computes the absolute difference and the sum of the two numbers, returning a Result struct that contains both values."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To store the results, you can use an array:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:"dec result: i16[2];\nresult[0] = differenceAndAdd(9, 7).diff;\nresult[1] = differenceAndAdd(9, 7).sum;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this snippet, we call differenceAndAdd with 9 and 7, and store the difference in ",(0,i.jsx)(n.code,{children:"result[0]"})," and the sum in ",(0,i.jsx)(n.code,{children:"result[1]"}),". This demonstrates how you can encapsulate more complex logic within a lambda and return structured data."]}),"\n",(0,i.jsx)(n.h2,{id:"named-lambdas",children:"Named Lambdas"}),"\n",(0,i.jsx)(n.p,{children:"Named lambdas are particularly useful when you want to organize your functions in a collection. This allows for dynamic function selection and easy management. Here\u2019s how to create a dictionary of named lambdas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'dec namedFnx: dict[str]fnx<i16> := dict{\n    "multiply" :> fnx(x: i16, y: i16) {x * y},\n    "add" :> fnx(x: i16, y: i16) {x + y},\n    "subtract" :> fnx(x: i16, y: i16) {x - y},\n    "divide" :> fnx(x: i16, y: i16) {x / y}\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We create a dictionary named namedFnx where each key is a string representing the name of the operation, and each value is a lambda function that performs that operation."}),"\n",(0,i.jsxs)(n.li,{children:["For example, the ",(0,i.jsx)(n.code,{children:'"add"'})," key is associated with a lambda that takes two integers and returns their sum."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To invoke one of these named lambdas, you can do the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kvexium",children:'namedFnx["add"](6, 12);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This line accesses the lambda associated with the key ",(0,i.jsx)(n.code,{children:'"add"'})," and calls it with the arguments 6 and 12, effectively computing 6 + 12."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["Lambdas (aka ",(0,i.jsx)(n.code,{children:"fnx"}),"'s) in kvexium offer a powerful and versatile way to work with functions. They provide a streamlined approach to defining operations that can be simple, complex, or named. By leveraging lambdas, you can write cleaner, more modular code that is easier to read and maintain. Whether you are performing quick calculations or building more intricate logic, kvexium's lambda functionality is a valuable tool in your programming toolkit."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>l});var i=a(6540);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);