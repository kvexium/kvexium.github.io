"use strict";(self.webpackChunkkvex_docs=self.webpackChunkkvex_docs||[]).push([[5590],{1203:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=i(4848),a=i(8453);const l={sidebar_position:2},t="Data Types",r={id:"basics/data-types",title:"Data Types",description:'Data Types in Kvexium are a little "complicated" while giving you as a developer full control over the memory usage of your program.',source:"@site/docs/basics/data-types.mdx",sourceDirName:"basics",slug:"/basics/data-types",permalink:"/docs/basics/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/data-types.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Generell",permalink:"/docs/basics/generell"},next:{title:"Congratulations!",permalink:"/docs/basics/congratulations"}},d={},c=[{value:"Boolean",id:"boolean",level:2},{value:"bool",id:"bool",level:3},{value:"String",id:"string",level:2},{value:"str",id:"str",level:3},{value:"Character",id:"character",level:2},{value:"char",id:"char",level:3},{value:"Integer Types",id:"integer-types",level:2},{value:"i8, i16, i32, i64",id:"i8-i16-i32-i64",level:3},{value:"u8, u16, u32, u64",id:"u8-u16-u32-u64",level:3},{value:"Floating Point Types",id:"floating-point-types",level:2},{value:"f32, f64, f80",id:"f32-f64-f80",level:3},{value:"v32, v64, v80",id:"v32-v64-v80",level:3},{value:"Automatic Data Types",id:"automatic-data-types",level:2},{value:"xtype",id:"xtype",level:3},{value:"ptype",id:"ptype",level:3},{value:"ftype",id:"ftype",level:3},{value:"vtype",id:"vtype",level:3},{value:"itype",id:"itype",level:3},{value:"utype",id:"utype",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"data-types",children:"Data Types"})}),"\n",(0,s.jsx)(n.p,{children:'Data Types in Kvexium are a little "complicated" while giving you as a developer full control over the memory usage of your program.'}),"\n",(0,s.jsx)(n.h2,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsx)(n.h3,{id:"bool",children:"bool"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bool"})," data type represents a boolean value, which can either be ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec isActive: bool := true;  // isActive is true\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"string",children:"String"}),"\n",(0,s.jsx)(n.h3,{id:"str",children:"str"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"str"})," data type is an array of characters, representing textual data. - Psst. It's actually an array of char's like in C."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:'dec message: str := "Hello, Kvexium!";  // message holds a string\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"character",children:"Character"}),"\n",(0,s.jsx)(n.h3,{id:"char",children:"char"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"char"})," data type represents a single character."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec letter: char := 'A';  // letter holds a single character\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"integer-types",children:"Integer Types"}),"\n",(0,s.jsx)(n.h3,{id:"i8-i16-i32-i64",children:"i8, i16, i32, i64"}),"\n",(0,s.jsx)(n.p,{children:"These are signed integer types with varying bit lengths. They can hold both positive and negative decimal values."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec a: i8 := -128;  // a is an 8-bit signed integer\ndec b: i16 := 32767;  // b is a 16-bit signed integer\n"})}),"\n",(0,s.jsx)(n.h3,{id:"u8-u16-u32-u64",children:"u8, u16, u32, u64"}),"\n",(0,s.jsx)(n.p,{children:"These are unsigned integer types. They can only hold non-negative decimal values."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec c: u8 := 255;  // c is an 8-bit unsigned integer\ndec d: u32 := 4294967295;  // d is a 32-bit unsigned integer\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"floating-point-types",children:"Floating Point Types"}),"\n",(0,s.jsx)(n.h3,{id:"f32-f64-f80",children:"f32, f64, f80"}),"\n",(0,s.jsx)(n.p,{children:"These represent floating-point numbers with single (32-bit), double (64-bit) and high (80-bit) precision, respectively."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec pi: f32 := 3.14159F;  // pi is a 32-bit float\ndec e: f64 := 2.718281828459F;  // e is a 64-bit float\ndec n: f80 := 1.2345678901234567890123456789012345678901234567890F; // n is a 80-bit float\n"})}),"\n",(0,s.jsx)(n.h3,{id:"v32-v64-v80",children:"v32, v64, v80"}),"\n",(0,s.jsx)(n.p,{children:"These represent unsigned floating-point numbers with single and double precision."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec positiveValue: v32 := 4.5F;  // positiveValue is an unsigned 32-bit float\n"})}),"\n",(0,s.jsx)(n.h2,{id:"automatic-data-types",children:"Automatic Data Types"}),"\n",(0,s.jsxs)(n.p,{children:["These Data Types will automaticly adjust themselfs to the smallest possible Data Type which can hold the given value - like in languages like C where it's ",(0,s.jsx)(n.code,{children:"auto"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"xtype",children:"xtype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every number, both signed and unsigned. It allows for a flexible definition of numeric variables."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec x: xtype := 42;  // x can be any number\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ptype",children:"ptype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every unsigned number. This is useful for scenarios where negative values are not allowed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec y: ptype := 30;  // y can only be a positive number\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ftype",children:"ftype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every floating-point number. This includes both single and double precision floats."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec z: ftype := 3.14F;  // z is a floating-point number\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vtype",children:"vtype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every unsigned floating-point number. This is helpful in mathematical computations that require non-negative values."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec w: vtype := 2.718F;  // w is an unsigned float\n"})}),"\n",(0,s.jsx)(n.h3,{id:"itype",children:"itype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every non-decimal number. This is equivalent to integer types in other languages."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec count: itype := 10;  // count is a non-decimal number\n"})}),"\n",(0,s.jsx)(n.h3,{id:"utype",children:"utype"}),"\n",(0,s.jsx)(n.p,{children:"Represents every unsigned non-decimal number, ensuring only positive integers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kvexium",children:"dec total: utype := 25;  // total is a positive integer\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(6540);const a={},l=s.createContext(a);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);