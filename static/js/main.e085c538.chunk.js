(this["webpackJsonpreact-realestate"]=this["webpackJsonpreact-realestate"]||[]).push([[0],{36:function(e,n,t){"use strict";t.r(n);var i,c,r,s,a,o,l=t(1),d=t(21),j=t.n(d),b=t(12),m=t(9),h=t(4),p=t(2),x=t(3),u=Object(x.a)(i||(i=Object(p.a)(["\n * {\n     margin: 0;\n     padding: 0;\n     box-sizing: 0;\n     font-family: sans-serif\n }\n html , body {\n     overflow-x: hidden;\n }\n"]))),f=x.c.div(c||(c=Object(p.a)(["\n    padding: 4rem 0 ;\n"]))),O=x.c.div(r||(r=Object(p.a)(["\n    z-index: 1;\n    width: 100%;\n    max-width: 1300px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 50px;\n    padding-right: 50px;\n\n@media screen and (max-width: 991px) {\n    padding-left: 30px;\n    padding-right: 30px;\n    }\n"]))),g=x.c.div(s||(s=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  @media screen and (max-width: 991px) {\n   grid-template-columns: 1fr;\n    }\n"]))),w=x.c.div(a||(a=Object(p.a)(["\n    margin-bottom: 15px;\n    padding-left: 50px;\n    padding-right: 50px;\n    display: flex;\n"]))),v=Object(x.c)(m.b)(o||(o=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    white-space: nowrap;\n    background: ",";\n    border: ",";\n    color: #fff;\n    max-width: 200px;\n    padding: .7rem 1.2rem;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-right: 1rem;\n    text-decoration: none;\n    transition: all .5s ease-in-out;\n\n    &:hover {\n        background: ",";\n        border: ",";\n    }\n    \n"])),(function(e){return e.primary?"#000d1a":"#ff454c"}),(function(e){return e.primary?"1px solid #000d1a":"1px solid #ff454c"}),(function(e){return e.primary?"#ff454c":"#000d1a"}),(function(e){return e.primary?"1px solid #ff454c":"1px solid #000d1a"}));function y(){var e=Object(h.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var H,k,z,V,C,L,q,A,E,T,S,B,_,D,F,I,N,R,U,J,M,Q,Y,G,K,P,W,X,Z,$,ee,ne,te,ie,ce,re,se,ae,oe,le,de=[{title:"About",link:"/about"},{title:"Homes",link:"/homes"},{title:"Rentals",link:"/rentals"}],je=x.c.div(H||(H=Object(p.a)(["\n    height: 70px;\n    color: #fff;\n    position: fixed;\n    z-index: 100;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background: ",";\n"])),(function(e){return e.scrollNav?"#ff454c":"transparent"})),be=Object(x.b)(k||(k=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    color: #fff;\n    padding: 1rem 1.5rem;\n    text-decoration: none;\n    cursor: pointer;\n"]))),me=Object(x.c)(m.b)(z||(z=Object(p.a)(["\n    font-style: italic;\n    font-size: 2rem;\n    font-weight: bold;\n    ","\n"])),be),he=x.c.div(V||(V=Object(p.a)(["\n    display: none;\n    @media screen and (max-width: 768px) {\n        display: block;\n        color: #fff;\n        position: absolute;\n        top: 1.5rem;\n        right: 1.5rem;\n        font-size: 2rem;\n        cursor: pointer;\n    }\n"]))),pe=x.c.div(C||(C=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n"]))),xe=Object(x.c)(m.b)(L||(L=Object(p.a)(["\n    ","\n"])),be),ue=x.c.div(q||(q=Object(p.a)(["\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n"]))),fe=t(6),Oe=t(0),ge=function(e){var n=e.toggle,t=Object(l.useState)(!1),i=Object(b.a)(t,2),c=i[0],r=i[1],s=function(){window.location.pathname.length>1?r(!0):r(!1)},a=function(){window.location.pathname.length>1||window.scrollY>=80?r(!0):r(!1)};return Object(l.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(l.useEffect)((function(){window.addEventListener("click",s)}),[]),Object(Oe.jsxs)(je,{scrollNav:c,children:[Object(Oe.jsx)(me,{to:"/",children:"Elxra"}),Object(Oe.jsx)(he,{onClick:n,children:Object(Oe.jsx)(fe.c,{})}),Object(Oe.jsx)(pe,{children:de.map((function(e,n){return Object(Oe.jsx)(xe,{to:e.link,children:e.title},n)}))}),Object(Oe.jsx)(ue,{children:Object(Oe.jsx)(v,{to:"/",primary:"true",children:"Contact Us"})})]})},we=x.c.div(A||(A=Object(p.a)(["\n    background: #ff454c;\n    color: #fff;\n    position: fixed;\n    left: 0;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    top: ",";\n    opacity: ",";\n    transition: all .5s ease-in-out;\n"])),(function(e){return e.isOpen?"0":"-100%"}),(function(e){return e.isOpen?"1":"0"})),ve=x.c.div(E||(E=Object(p.a)(["\n    display: none;\n    @media screen and (max-width: 768px) {\n        display: block;\n        color: #fff;\n        position: absolute;\n        top: 1.5rem;\n        right: 1.5rem;\n        font-size: 2rem;\n        cursor: pointer;\n    }\n"]))),ye=x.c.div(T||(T=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4 , 60px);\n    align-items: center;\n"]))),He=Object(x.c)(m.b)(S||(S=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    padding: 1rem 1.5rem;\n    text-decoration: none;\n    cursor: pointer;\n"]))),ke=function(e){var n=e.isOpen,t=e.toggle;return Object(Oe.jsxs)(we,{isOpen:n,children:[Object(Oe.jsx)(ve,{onClick:t,children:Object(Oe.jsx)(fe.g,{})}),Object(Oe.jsxs)(ye,{onClick:t,children:[de.map((function(e,n){return Object(Oe.jsx)(He,{to:e.link,children:e.title},n)})),Object(Oe.jsx)("div",{children:Object(Oe.jsx)(v,{to:"/",primary:"true",children:"Contact Us"})})]})]})},ze=t.p+"static/media/01.53891721.jpg",Ve=x.c.div(B||(B=Object(p.a)(["\n    margin: 0 1rem;\n    h3 {\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n    p {\n        font-size: 1rem;\n        margin-bottom: 1rem;\n        line-height: 1.6;\n\n    }\n"]))),Ce=x.c.img(_||(_=Object(p.a)(["\n    width: 100%;\n    object-fit: cover;\n"]))),Le=function(){return Object(Oe.jsx)(f,{children:Object(Oe.jsx)(O,{children:Object(Oe.jsxs)(g,{children:[Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(Ve,{children:[Object(Oe.jsx)("h3",{children:"Explore our beautiful homes"}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam! Libero facilis aspernatur cumque hic similique pariatur itaque distinctio sapiente."}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam!"}),Object(Oe.jsx)(v,{to:"/",primary:"true",children:"View Homes"})]})}),Object(Oe.jsx)(w,{children:Object(Oe.jsx)(Ce,{src:ze,alt:"Home"})})]})})})},qe=t.p+"static/media/02.1759da98.jpg",Ae=x.c.div(D||(D=Object(p.a)(["\n    padding: 6rem 0;\n    position: relative;\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 8rem;\n        background: #000d1a;\n        z-index: 1;\n    }\n    &::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 8rem;\n        background: #000d1a;\n        z-index: 1;\n    }\n"]))),Ee=x.c.div(F||(F=Object(p.a)(["\n      margin: 3rem 5rem 3rem 1rem;\n    h3 {\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n    p {\n        font-size: 1rem;\n        margin-bottom: 1rem;\n        line-height: 1.6;\n\n    }\n"]))),Te=x.c.img(I||(I=Object(p.a)(["\n    position: relative;\n    width: 100%;\n    object-fit: cover;\n    z-index: 10;\n"]))),Se=function(){return Object(Oe.jsx)(Ae,{children:Object(Oe.jsx)(O,{children:Object(Oe.jsxs)(g,{children:[Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(Ee,{children:[Object(Oe.jsx)("h3",{children:"Stunning Interior"}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam! Libero facilis aspernatur cumque hic similique pariatur itaque distinctio sapiente."}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam!"}),Object(Oe.jsx)(v,{to:"/",children:"View Homes"})]})}),Object(Oe.jsx)(w,{children:Object(Oe.jsx)(Te,{src:qe,alt:"Home"})})]})})})},Be=t.p+"static/media/03.6f0125ec.jpg",_e=x.c.div(N||(N=Object(p.a)(["\n      margin: 0 1rem;\n    h3 {\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n    p {\n        font-size: 1rem;\n        margin-bottom: 1rem;\n        line-height: 1.6;\n\n    }\n"]))),De=x.c.img(R||(R=Object(p.a)(["\n    width: 100%;\n    object-fit: cover;\n"]))),Fe=function(){return Object(Oe.jsx)(f,{children:Object(Oe.jsx)(O,{children:Object(Oe.jsxs)(g,{children:[Object(Oe.jsx)(w,{children:Object(Oe.jsx)(De,{src:Be,alt:"Home"})}),Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(_e,{children:[Object(Oe.jsx)("h3",{children:"Modern Designs"}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam."}),Object(Oe.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis sunt neque provident nisi molestias et enim dolores eius ullam."}),Object(Oe.jsx)(v,{to:"/",primary:"true",children:"View Homes"})]})})]})})})},Ie=t.p+"static/media/01.9d7c659d.jpg",Ne=t.p+"static/media/02.72aaab8f.jpg",Re=x.c.h2(U||(U=Object(p.a)(["\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-left: 3rem;\n    margin-top: 2rem;\n    color: #000d1a;\n"]))),Ue=x.c.div(J||(J=Object(p.a)(["\n      margin-left: 2rem;\n    h3 {\n        font-size: 1.2rem;\n        margin: 1rem 0;\n    }\n    p {\n        font-size: 1rem;\n        margin-bottom: 1rem;\n        line-height: 1.6;\n\n    }\n"]))),Je=x.c.img(M||(M=Object(p.a)(["\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n    display: block;\n    &.img-bottom {\n        margin-top: 10rem;\n        @media screen and (max-width: 768px) {\n            margin-top: 2rem;\n        }\n    }\n"]))),Me=function(){return Object(Oe.jsx)(f,{children:Object(Oe.jsxs)(O,{children:[Object(Oe.jsx)(Re,{children:"View our newest Homes"}),Object(Oe.jsxs)(g,{children:[Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(Ue,{children:[Object(Oe.jsx)(Je,{src:Ie,alt:"Home"}),Object(Oe.jsx)("h3",{children:"8 Bed 10 Bath House in Venice, California"}),Object(Oe.jsx)(v,{to:"/",children:"View Details"})]})}),Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(Ue,{children:[Object(Oe.jsx)(Je,{src:Ne,className:"img-bottom",alt:"Home"}),Object(Oe.jsx)("h3",{children:"8 Bed 10 Bath House in Miami, Florida"}),Object(Oe.jsx)(v,{to:"/",children:"View Details"})]})})]})]})})},Qe=x.c.section(Q||(Q=Object(p.a)(["\n    height: 100vh;\n    max-height: 1100px;\n    position: relative;\n    overflow: hidden;\n"]))),Ye=x.c.div(Y||(Y=Object(p.a)(["\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    z-index: 10;\n"]))),Ge=x.c.div(G||(G=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n"]))),Ke=x.c.div(K||(K=Object(p.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    color: #fff;\n    z-index: 40;\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba( 0 , 0 , 0 , .4);\n        z-index: 20;\n    }\n"]))),Pe=x.c.img(P||(P=Object(p.a)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]))),We=x.c.div(W||(W=Object(p.a)(["\n    position: relative;\n    top: 0;\n    left: 5%;\n    display: flex;\n    flex-direction: column;\n    z-index: 30;\n    text-align: left;\n    max-width: 1000px;\n\n    h2{\n        font-size: clamp( 1rem , 4vw , 2rem);\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n    p {\n        font-size: clamp( 1.5rem , 4vw , 3rem);\n        margin: 1rem  0;\n        font-weight: bold;\n    }\n"]))),Xe=x.c.div(X||(X=Object(p.a)(["\n    display: flex;\n    justify-content: left;\n    align-items: center;\n"]))),Ze=x.c.div(Z||(Z=Object(p.a)(["\n    position: absolute;\n    bottom: 50px;\n    right: 50px;\n    z-index: 50;\n    display: flex;\n"]))),$e=Object(x.b)($||($=Object(p.a)(["\n    border: 1px solid #000d1a;\n    background: #000d1a;\n    width: 50px;\n    height: 50px;\n    line-height: 60px;\n    border-radius: 50%;\n    color: #fff;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-left: 1rem;\n    transition: all .5s ease-in-out;\n    cursor: pointer;\n    &:hover {\n        background: #ff454c;\n        border: 1px solid #ff454c;\n    }\n"]))),en=x.c.div(ee||(ee=Object(p.a)(["\n    ","\n"])),$e),nn=x.c.div(ne||(ne=Object(p.a)(["\n   ","\n"])),$e),tn=function(e){var n=e.slides,t=Object(l.useState)(0),i=Object(b.a)(t,2),c=i[0],r=i[1],s=n.length,a=Object(l.useRef)(null);Object(l.useEffect)((function(){return a.current=setTimeout((function(){r((function(e){return e===s-1?0:e+1}))}),5e3),function(){a.current&&clearTimeout(a.current)}}),[c,s]);return!Array.isArray||n.length<=0?null:Object(Oe.jsx)(Qe,{children:Object(Oe.jsxs)(Ye,{children:[n.map((function(e,n){return Object(Oe.jsx)(Ge,{children:c===n&&Object(Oe.jsxs)(Ke,{children:[Object(Oe.jsx)(Pe,{src:e.image,alt:e.alt}),Object(Oe.jsxs)(We,{children:[Object(Oe.jsx)("h2",{children:e.title}),Object(Oe.jsx)("p",{children:e.price}),Object(Oe.jsx)(Xe,{children:Object(Oe.jsx)(v,{to:"/",primary:"true",children:e.btn})})]})]})},n)})),Object(Oe.jsxs)(Ze,{children:[Object(Oe.jsx)(nn,{onClick:function(){a.current&&clearTimeout(a.current),r(0===c?s-1:c-1)},children:Object(Oe.jsx)(fe.a,{})}),Object(Oe.jsx)(en,{onClick:function(){a.current&&clearTimeout(a.current),r(c===s-1?0:c+1)},children:Object(Oe.jsx)(fe.b,{})})]})]})})},cn=t.p+"static/media/01.73c2e9de.jpg",rn=t.p+"static/media/02.c22d2c43.jpg",sn=t.p+"static/media/03.c95c05dc.jpg",an=t.p+"static/media/04.7b46f6ee.jpg",on=t.p+"static/media/05.c50982d4.jpg",ln=t.p+"static/media/06.c4f9d0e6.jpg",dn=t.p+"static/media/07.142ce1ca.jpg",jn=[{title:"House in Calabasas, California",price:"9,540,000",btn:"View Home",path:"/homes",image:cn,alt:"House"},{title:"Luxury Villa in Bali, Indonesia",price:"11,350,000",btn:"View Home",path:"/homes",image:rn,alt:"House"},{title:"House in Houston, Texas",price:"5,850,000",btn:"View Home",path:"/homes",image:sn,alt:"House"},{title:"House in San Jose, Costa Rica",price:"7,000,000",btn:"View Home",path:"/homes",image:an,alt:"House"}],bn=[{title:"House in Houston, Texas",price:"9,540,000",btn:"View Home",path:"/homes",image:on,alt:"House"},{title:"House in Las Vegas, Nevada",price:"11,350,000",btn:"View Home",path:"/homes",image:ln,alt:"House"},{title:"House in Alajuela, Costa Rica",price:"5,850,000",btn:"View Home",path:"/homes",image:dn,alt:"House"}],mn=function(){return Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)(tn,{slides:jn}),Object(Oe.jsx)(Le,{}),Object(Oe.jsx)(Me,{}),Object(Oe.jsx)(Se,{}),Object(Oe.jsx)(Fe,{})]})},hn=function(){return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(Se,{})})},pn=function(){return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(Me,{})})},xn=function(){return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(tn,{slides:bn})})},un=x.c.div(te||(te=Object(p.a)(["\n    padding: 4rem 0;\n    background: #000d1a;\n    color: #fff;\n"]))),fn=x.c.div(ie||(ie=Object(p.a)(["\n    h1 {\n        font-size: 6rem;\n        @media screen and (max-width: 768px) {\n        font-size: 4rem;\n    }\n    }\n    \n"]))),On=x.c.div(ce||(ce=Object(p.a)(["\n    margin: 2rem 0;\n"]))),gn=x.c.a(re||(re=Object(p.a)(["\n    color: #ff454c;\n    font-size: 1.5rem;\n    padding-right: 1rem;\n"]))),wn=x.c.div(se||(se=Object(p.a)(["\n    display: flex;\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]))),vn=x.c.div(ae||(ae=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 160px;\n    margin: 16px;\n    box-sizing: border-box;\n    color: #fff;\n@media screen and (max-width: 820px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n}\n"]))),yn=x.c.h2(oe||(oe=Object(p.a)(["\n    margin-bottom: 1.5rem;\n"]))),Hn=Object(x.c)(m.b)(le||(le=Object(p.a)(["\n    text-decoration: none;\n    margin-bottom: 1rem;\n    color: #fff;\n"]))),kn=function(){return Object(Oe.jsx)(un,{children:Object(Oe.jsx)(O,{children:Object(Oe.jsxs)(g,{children:[Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(fn,{children:[Object(Oe.jsx)("h1",{children:"Let's find your Dream Home"}),Object(Oe.jsxs)(On,{children:[Object(Oe.jsx)(gn,{href:"/",target:"_blank","aria-label":"Youtube",children:Object(Oe.jsx)(fe.i,{})}),Object(Oe.jsx)(gn,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(Oe.jsx)(fe.e,{})}),Object(Oe.jsx)(gn,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(Oe.jsx)(fe.d,{})}),Object(Oe.jsx)(gn,{href:"/",target:"_blank","aria-label":"Linkedin",children:Object(Oe.jsx)(fe.f,{})}),Object(Oe.jsx)(gn,{href:"/",target:"_blank","aria-label":"Twitter",children:Object(Oe.jsx)(fe.h,{})})]})]})}),Object(Oe.jsx)(w,{children:Object(Oe.jsxs)(wn,{children:[Object(Oe.jsxs)(vn,{children:[Object(Oe.jsx)(yn,{children:"Contact Us"}),Object(Oe.jsx)(Hn,{to:"/",children:"FAQ"}),Object(Oe.jsx)(Hn,{to:"/",children:"Support"}),Object(Oe.jsx)(Hn,{to:"/",children:"Questions"})]}),Object(Oe.jsxs)(vn,{children:[Object(Oe.jsx)(yn,{children:"Offices"}),Object(Oe.jsx)(Hn,{to:"/",children:"United States"}),Object(Oe.jsx)(Hn,{to:"/",children:"Europe"}),Object(Oe.jsx)(Hn,{to:"/",children:"Canada"})]})]})})]})})})},zn=function(){var e=Object(l.useState)(!1),n=Object(b.a)(e,2),t=n[0],i=n[1],c=function(){i(!t)};return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)(m.a,{children:[Object(Oe.jsx)(u,{}),Object(Oe.jsx)(y,{}),Object(Oe.jsx)(ge,{toggle:c}),Object(Oe.jsx)(ke,{toggle:c,isOpen:t}),Object(Oe.jsxs)(h.c,{children:[Object(Oe.jsx)(h.a,{exact:!0,path:"/about",component:hn}),Object(Oe.jsx)(h.a,{path:"/homes",component:pn}),Object(Oe.jsx)(h.a,{path:"/rentals",component:xn}),Object(Oe.jsx)(h.a,{path:"/",component:mn})]}),Object(Oe.jsx)(kn,{})]})})};j.a.render(Object(Oe.jsx)(zn,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e085c538.chunk.js.map