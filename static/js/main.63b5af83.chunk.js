(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":"1","title":"Look at my gramaphone","body":"backy_gibson","image":"img/posts/1.jpg","totalLikes":["peytonwatts","leslie_barnes_1","kirk_dunn"]},{"id":"2","title":"Here comes the girl...","body":"leslie_barnes_1","image":"img/posts/2.jpg","totalLikes":["ethelchavez99","backy_gibson","alicia_may","alfredo.watkins","kirk_dunn","peytonwatts"]},{"id":"3","title":"Here comes the boy","body":"leslie_barnes_1","image":"img/posts/4.jpg","totalLikes":["backy_gibson","alicia_may","alfredo.watkins","kirk_dunn","peytonwatts"]},{"id":"4","title":"Jayden\'s first post","body":"jayden_may","image":"img/posts/3.jpg","totalLikes":["alicia_may","alfredo.watkins","kirk_dunn"]}]')},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(14),n=a.n(c),i=(a(36),a(3)),r=(a(37),a(16)),l=(a(38),a(9)),o={username:"jayden_may",avatar:"img/users/jayden_may.jpg"},j=Object(s.createContext)(o),d=a(0),b="https://ademkoca.github.io/like-roulette",m=function(e){var t=e.username;return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark","aria-label":"Fifth navbar example",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/like-roulette",children:"Like me!"}),Object(d.jsx)("div",{className:"loggedUserInfo",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)("p",{className:"float-end text-white pt-3 pe-4",children:Object(d.jsx)("a",{href:"".concat(b,"/about"),children:"About"})}),Object(d.jsxs)("a",{href:"".concat(b,"/profile/"),children:[Object(d.jsx)("p",{className:"float-end text-white pt-3 pe-4",children:t})," "]}),Object(d.jsx)("a",{href:"".concat(b,"/profile/"),children:Object(d.jsx)("img",{className:"profileImg",src:""+l.find((function(e){return"0"===e.userId})).avatar,alt:""})})]})})]})})},u=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"display-5 text-center my-4",children:"Like roulette"}),Object(d.jsxs)("p",{className:"text-center text-muted my-4 mx-4 pb-4 subtitle",children:["See how many people liked the post only after ",Object(d.jsx)("strong",{children:"you"})," liked it!"]})]})},h=a(17),x=(a(45),a(2)),O=a(55),g=a(56),k=(a(46),function(e){Object(s.useContext)(j);for(var t=[],a=function(a){t.push(l.find((function(t){return t.username===e.data[a]})).avatar)},c=0;c<e.data.length;c++)a(c);for(var n=[Object(d.jsxs)("p",{className:"likesRow",children:[e.me&&Object(d.jsx)("img",{className:"profileLikesImg",src:""+e.me.avatar,alt:""}),e.me&&Object(d.jsx)("span",{className:"profileLikes",children:e.me.username})]})],o=0;o<e.data.length;o++)n.push(Object(d.jsxs)("p",{className:"likesRow",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"profileLikesImg",src:""+t[o],alt:e.data[o]}),Object(d.jsx)(r.a,{children:Object(d.jsx)("a",{className:"modalLink",href:"/user/".concat(e.data[o],"/"),children:Object(d.jsx)("span",{className:"profileLikes",children:e.data[o]})})})]}),Object(d.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",children:"Follow"})]}));var b=Object(s.useState)(!1),m=Object(i.a)(b,2);m[0],m[1];return Object(d.jsxs)(O.a,Object(x.a)(Object(x.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0,children:[Object(d.jsx)(O.a.Header,{closeButton:!0,children:Object(d.jsx)(O.a.Title,{id:"contained-modal-title-vcenter",children:"Likes"})}),Object(d.jsx)(O.a.Body,{children:n}),Object(d.jsx)(O.a.Footer,{children:Object(d.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}),p=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),c=a[0],n=a[1],o=h.find((function(t){return t.image===e.image})).totalLikes,b=Object(s.useContext)(j);console.log(b);var m=[l.find((function(e){return e.username===o[0]})).avatar,l.find((function(e){return e.username===o[1]})).avatar],u=Object(s.useState)(!1),x=Object(i.a)(u,2),O=x[0],g=x[1];return Object(d.jsx)("div",{className:"container-sm",children:Object(d.jsxs)("div",{className:"card mx-auto my-2",style:{width:"20rem"},children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title}),Object(d.jsxs)("div",{className:"card-body ".concat(c?"expand":""),children:[Object(d.jsx)("i",{className:"bi bi-heart".concat(c?"-fill":""),onClick:function(){return c?alert("You can't unlike the posts once you liked them!"):n(!0)}}),!c&&Object(d.jsx)("span",{className:"textLikeThis",children:"Like to see how many people liked this post"}),c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h5",{className:"card-title",children:e.title}),Object(d.jsxs)("p",{className:"card-text",children:["by:"," ",Object(d.jsx)(r.a,{children:Object(d.jsx)("a",{className:"link",href:"".concat("https://ademkoca.github.io/like-roulette","/user/").concat(e.body,"/"),children:e.body})})]}),Object(d.jsxs)("div",{className:"text-muted",children:[Object(d.jsxs)("div",{className:"likeImgContainer",children:[Object(d.jsx)("img",{className:"likeImg one",src:b.avatar,alt:""}),m[0]&&Object(d.jsx)("img",{className:"likeImg two",src:m[0],alt:""}),m[1]&&Object(d.jsx)("img",{className:"likeImg three",src:m[1],alt:""})]})," ",Object(d.jsxs)("div",{className:"likesCounter",children:["You and"," ",Object(d.jsxs)("span",{className:"link",onClick:function(){return g(!0)},children:[e.totalLikes.length," others"]})," ","like this"]}),Object(d.jsx)(k,{data:o,me:b,show:O,onHide:function(){return g(!1)}})]})]})]})]},e.id)})},f=function(e){var t=Object(s.useState)([]),a=Object(i.a)(t,2),c=(a[0],a[1]);Object(s.useEffect)((function(){n()}),[]);var n=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return c(e)}))},r=[];return r=h.filter((function(e){return e.body!==o.username})),console.log(r),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"postContainer",children:r.map((function(t){return Object(d.jsx)(p,{id:t.id,title:t.title,body:t.body,image:t.image,totalLikes:t.totalLikes,username:e},t.id)}))})]})},y=a(4),v=(a(47),a(48),function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useContext)(j);return Object(d.jsxs)("div",{class:"card mx-auto my-2",style:{width:"20rem"},children:[Object(d.jsx)("img",{src:""+e.data.image,className:"card-img-top",alt:e.data.title}),Object(d.jsxs)("div",{class:"card-body expand",children:[Object(d.jsx)("h5",{class:"card-title",children:e.data.title}),Object(d.jsxs)("p",{class:"card-text",children:["by:",Object(d.jsxs)("a",{href:"".concat("https://ademkoca.github.io/like-roulette","/user/").concat(e.data.body),children:[" ",e.data.body]})]}),Object(d.jsxs)("div",{class:"text-muted",children:[Object(d.jsxs)("div",{className:"likeImgContainer",children:[Object(d.jsx)("img",{className:"likeImg one",src:""+r.avatar,alt:""}),Object(d.jsx)("img",{className:"likeImg two",src:""+l.find((function(t){return t.username===e.data.totalLikes[0]})).avatar,alt:""}),Object(d.jsx)("img",{className:"likeImg three",src:""+l.find((function(t){return t.username===e.data.totalLikes[1]})).avatar,alt:""})]}),Object(d.jsxs)("div",{class:"likesCounter profile",children:["You and"," ",Object(d.jsxs)("span",{className:"link",onClick:function(){return n(!0)},children:[e.data.totalLikes.length," others like this"]})," "]})]}),Object(d.jsx)(k,{data:e.data.totalLikes,me:r,show:c,onHide:function(){return n(!1)}},e.data.totalLikes.length)]})]})}),N=function(e){var t=Object(y.f)().username,a=h.filter((function(e){return e.body===t}));return console.log(a),Object(d.jsxs)("div",{className:"userProfile",children:[Object(d.jsxs)("div",{className:"ProfileTitle",children:[Object(d.jsx)("img",{className:"ProfileImg",src:""+"img/users/".concat(t,".jpg"),alt:""}),a.length>0&&Object(d.jsxs)("h1",{className:"display-6",children:["Posts by ",t," that you liked"]}),0===a.length&&Object(d.jsxs)("h1",{className:"display-6",children:["You haven't liked any of ",t,"'s posts yet"]})]}),a.map((function(e){return Object(d.jsx)(v,{data:e})}))]})};a(49);function w(){return Object(d.jsxs)("div",{className:"container text-center",children:[Object(d.jsx)("h1",{className:"display-5 my-4",children:"About Us"}),Object(d.jsxs)("div",{className:"container about",children:[Object(d.jsx)("p",{children:"Has this ever happened to you:"}),Object(d.jsxs)("p",{children:[" ","You're scrolling through your favorite social network, you see something interesting, and just before you hit like, you see that it was posted by some anoying high-school friend or some relative you're barely talking to? (I know, right!). So, you keep scrolling..."]}),Object(d.jsx)("p",{children:"Or"}),Object(d.jsx)("p",{children:'You just saw another post you like but it has only 2 likes and you think "It\'s probably not that good since it has only 2 likes". So again, you keep scrolling...'}),Object(d.jsx)("p",{className:"mt-5",children:"On Like Roulette, you won't even know who created the post before you like it. That way, the only thing that will decide whether you like the post or not will be its content. Once you like the post, you'll be able to see who posted it and who liked it."})]})]})}a(50);var _=function(){return Object(d.jsxs)("footer",{className:"container mt-5",children:["Developed by: ",Object(d.jsx)("strong",{children:"Adem Koca"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://github.com/ademkoca",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-github",target:"_blank"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/ademkoca/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://www.instagram.com/ademkoca/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-instagram"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://twitter.com/rahatlook",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-twitter"})})})]})},L=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),c=a[0],n=a[1];Object(s.useContext)(j);return Object(d.jsxs)("div",{class:"card mx-auto my-2",style:{width:"20rem"},children:[Object(d.jsx)("img",{src:""+e.data.image,className:"card-img-top",alt:e.data.title}),Object(d.jsxs)("div",{class:"card-body expand",children:[Object(d.jsx)("h5",{class:"card-title",children:e.data.title}),Object(d.jsxs)("p",{class:"card-text",children:["by: ",Object(d.jsx)("a",{href:"".concat("https://ademkoca.github.io/like-roulette","/profile/"),children:e.data.body})]}),Object(d.jsxs)("div",{class:"text-muted",children:[Object(d.jsxs)("div",{className:"likeImgContainer",children:[e.data.totalLikes[0]&&Object(d.jsx)("img",{className:"likeImg one",src:""+l.find((function(t){return t.username===e.data.totalLikes[0]})).avatar,alt:""}),e.data.totalLikes[1]&&Object(d.jsx)("img",{className:"likeImg two",src:""+l.find((function(t){return t.username===e.data.totalLikes[1]})).avatar,alt:""}),e.data.totalLikes[2]&&Object(d.jsx)("img",{className:"likeImg three",src:""+l.find((function(t){return t.username===e.data.totalLikes[2]})).avatar,alt:""})]}),Object(d.jsx)("div",{class:"likesCounter profile",children:Object(d.jsxs)("span",{className:"link",onClick:function(){return n(!0)},children:[e.data.totalLikes.length," people like this"]})})]}),Object(d.jsx)(k,{data:e.data.totalLikes,show:c,onHide:function(){return n(!1)}},e.data.totalLikes.length)]})]})},I=(a(51),function(){var e=Object(s.useContext)(j),t=h.filter((function(t){return t.body===e.username}));return console.log(t),Object(d.jsx)("div",{className:"userProfile",children:Object(d.jsxs)("div",{className:"ProfileTitle",children:[Object(d.jsx)("img",{className:"ProfileImg",src:""+e.avatar,alt:""}),t.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"display-6",children:"My posts"}),t.map((function(e){return Object(d.jsx)(L,{data:e})}))]}),0===t.length&&Object(d.jsx)("h1",{className:"display-6",children:"You don't have any posts yet"})]})})});var C=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=(t[1],"jayden_may"),n="https://ademkoca.github.io/like-roulette";return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(m,{username:a?c:"Hello, stranger"}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(y.a,{exact:!0,path:n,children:Object(d.jsx)(f,{username:c})}),Object(d.jsx)(y.a,{exact:!0,path:"".concat(n,"user/:username"),children:Object(d.jsx)(N,{username:c})}),Object(d.jsx)(y.a,{exact:!0,path:"".concat(n,"/like-roulette/about"),children:Object(d.jsx)(w,{})}),Object(d.jsx)(y.a,{exact:!0,path:"".concat(n,"/like-roulette/profile"),children:Object(d.jsx)(I,{})})]}),Object(d.jsx)(_,{})]})})};n.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"userId":"0","username":"jayden_may","avatar":"img/users/jayden_may.jpg"},{"userId":"9","username":"alfredo.watkins","avatar":"img/users/alfredo.watkins.jpg"},{"userId":"2","username":"backy_gibson","avatar":"img/users/backy_gibson.jpg"},{"userId":"3","username":"alicia_may","avatar":"img/users/alicia_may.jpg"},{"userId":"4","username":"kirk_dunn","avatar":"img/users/kirk_dunn.jpg"},{"userId":"5","username":"ethelchavez99","avatar":"img/users/ethelchavez99.jpg"},{"userId":"6","username":"leslie_barnes_1","avatar":"img/users/leslie_barnes_1.jpg"},{"userId":"7","username":"peytonwatts","avatar":"img/users/peytonwatts.jpg"}]')}},[[52,1,2]]]);
//# sourceMappingURL=main.63b5af83.chunk.js.map