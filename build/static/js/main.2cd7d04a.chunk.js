(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),s=a(2),o=a(3),m=a(5),i=a(4),u=a(6),p=(a(59),a(7)),h=a(14);a(60),a(30),a(61);var d=function(){return l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100001670069079",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"https://www.instagram.com/nazar_melnychenko/?hl=uk",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))};var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.c,{exact:!0,to:"/",activeClassName:"navActive"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430")),l.a.createElement("li",null,l.a.createElement(p.c,{to:"/about",activeClassName:"navActive"},"\u041f\u0440\u043e \u043c\u0435\u043d\u0435")),l.a.createElement("li",null,l.a.createElement(p.c,{to:"/portfolio",activeClassName:"navActive"},"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e")),l.a.createElement("li",null,l.a.createElement(p.c,{to:"/contacts",activeClassName:"navActive"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"))),l.a.createElement(d,null))},f=(a(66),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).hendleOpen=function(){a.state.isOpen?a.setState({isOpen:!1}):a.setState({isOpen:!0})},a.hendleClose=function(){a.setState({isOpen:!1})},a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navMobile"},l.a.createElement("div",{onClick:this.hendleOpen,className:this.state.isOpen?"hamb hamb__active":"hamb"},l.a.createElement("span",null)),l.a.createElement("div",{className:this.state.isOpen?"overlay overlay__active":"overlay"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:this.hendleClose},l.a.createElement(p.c,{exact:!0,to:"/",activeClassName:"navActive"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430")),l.a.createElement("li",{onClick:this.hendleClose},l.a.createElement(p.c,{to:"/about",activeClassName:"navActive"},"\u041f\u0440\u043e \u043c\u0435\u043d\u0435")),l.a.createElement("li",{onClick:this.hendleClose},l.a.createElement(p.c,{to:"/portfolio",activeClassName:"navActive"},"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e")),l.a.createElement("li",{onClick:this.hendleClose},l.a.createElement(p.c,{to:"/contacts",activeClassName:"navActive"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"))),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100001670069079",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"https://www.instagram.com/nazar_melnychenko/?hl=uk",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))}}]),t}(l.a.Component)),g=(a(67),a(23)),v=a.n(g);var b=function(){return l.a.createElement("div",{className:"mainText"},l.a.createElement("div",{className:"mainText__wrapper"},l.a.createElement("span",{className:"mainText__wrapper--name"},l.a.createElement(v.a,{right:!0},"NAZAR")),l.a.createElement("h1",null,l.a.createElement(v.a,{left:!0},"FRONT-END DEVELOPER")),l.a.createElement("span",{className:"mainText__wrapper--name"},l.a.createElement(v.a,{right:!0},"MELNYCHENKO"))))},N=(a(69),a(70),a(50)),k=a.n(N),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).handleScroll=function(e){var t=document.querySelector(".mainTitle"),a=100/e.currentTarget.scrollY/10;t&&(t.setAttribute("style","top:".concat(200+2*e.currentTarget.scrollY,"px; opacity:").concat(a,";")),0===e.currentTarget.scrollY&&t.setAttribute("style","top:".concat(200,"px; opacity:",1,";")))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return window.addEventListener("scroll",this.handleScroll),l.a.createElement("h2",{className:"mainTitle"},l.a.createElement(k.a,null,this.props.title))}}]),t}(l.a.Component);a(71);var S=function(){return l.a.createElement("footer",null,l.a.createElement("span",{className:"copyrights"},"Copyrights \xa9 2020 \u2002|\u2002 Nazar Melnychenko"))};var C=function(){return l.a.createElement("div",{className:"aboutWrapper"},l.a.createElement(y,{title:"\u041f\u0440\u043e \u043c\u0435\u043d\u0435"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"\u041f\u0440\u043e \u043c\u0435\u043d\u0435"),l.a.createElement("div",{className:"content__wrapper"},l.a.createElement("div",{className:"content__wrapper--photo"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"img/avatar.jpg",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}))),l.a.createElement("div",{className:"content__wrapper--desc"},l.a.createElement("h4",null,"\u0412\u0456\u0442\u0430\u044e \u0412\u0430\u0441...\u043d\u0430 \u0434\u0430\u043d\u0456\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456 \u0440\u043e\u0437\u043a\u0430\u0436\u0443 \u0442\u0440\u043e\u0445\u0438 \u043f\u0440\u043e \u0441\u0435\u0431\u0435..."),l.a.createElement("p",null,"\u041c\u0435\u043d\u0435 \u0437\u0432\u0430\u0442\u0438 \u041c\u0435\u043b\u044c\u043d\u0438\u0447\u0435\u043d\u043a\u043e \u041d\u0430\u0437\u0430\u0440, \u044f \u0437\u0430\u0439\u043c\u0430\u044e\u0441\u044f Front-End \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u043e\u044e. \u0429\u0435 \u0437\u0430 \u0447\u0430\u0441\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0441\u0442\u0432\u0430 \u0441\u0430\u043c\u043e\u0441\u0442\u0456\u0439\u043d\u043e \u043e\u0441\u0432\u043e\u044e\u0432\u0430\u0432 \u0442\u0430\u043a\u0456 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457 \u044f\u043a: HTML, CSS, JS, PHP, MySQL. \u041d\u0430 \u0446\u0438\u0445 \u0436\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u044f\u0445 \u043d\u0430\u043f\u0438\u0441\u0430\u0432 \u0442\u0430 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0432 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u0443 \u0440\u043e\u0431\u043e\u0442\u0443."),l.a.createElement("p",null,"\u0412 2020 \u0440\u043e\u0446\u0456 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432 \u043a\u0443\u0440\u0441\u0438 Beetroot Academy \u0437\u0430 \u043d\u0430\u043f\u0440\u044f\u043c\u043a\u043e\u043c Front-End \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430, \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457 \u044f\u043a\u0456 \u043e\u0441\u0432\u043e\u0457\u0432, \u0443\u0434\u043e\u0441\u043a\u043e\u043d\u0430\u043b\u0438\u0432 \u0437\u0430 \u0447\u0430\u0441 \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0431\u0443\u0434\u0443\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0456 \u043d\u0438\u0436\u0447\u0435. \u0422\u0430\u043a\u043e\u0436 \u0432 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 ",l.a.createElement(p.b,{to:"/portfolio"},"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e")," \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u043c\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438."),l.a.createElement("p",null,"\u0414\u043b\u044f \u0431\u0456\u043b\u044c\u0448 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0457 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u043c\u043e\u0454 \u0440\u0435\u0437\u044e\u043c\u0435, \u0430 \u0442\u0430\u043a\u043e\u0436 \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 GitHub:"),l.a.createElement("br",null),l.a.createElement("span",{className:"links"},l.a.createElement("a",{href:"Nazar_Melnychenko_CV.pdf",download:!0},l.a.createElement("img",{className:"icon",src:"/img/ms.png",alt:"CV"}),"\u0420\u0435\u0437\u044e\u043c\u0435"),"\u2002\u2002\u2002\u2002\u2002",l.a.createElement("a",{href:"https://github.com/nazar-melnychenko",target:"_blank"},l.a.createElement("img",{className:"icon",src:"/img/github.png",alt:"Git"}),"GitHub")),l.a.createElement("hr",null),l.a.createElement("h5",null,"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457:"),l.a.createElement("div",{className:"technology"},l.a.createElement("img",{src:"/img/about/html.png",alt:"HTML"}),l.a.createElement("img",{src:"/img/about/css.png",alt:"CSS"}),l.a.createElement("img",{src:"/img/about/js.png",alt:"JS"}),l.a.createElement("img",{src:"/img/about/bootstrap.png",alt:"Bootstrap"}),l.a.createElement("img",{src:"/img/about/sass.png",alt:"SASS"}),l.a.createElement("img",{src:"/img/about/less.png",alt:"LESS"}),l.a.createElement("img",{src:"/img/about/jquery.png",alt:"jQuery"}),l.a.createElement("img",{src:"/img/about/react.png",alt:"React"}),l.a.createElement("img",{src:"/img/about/php.png",alt:"PHP"}),l.a.createElement("img",{src:"/img/about/mysql.png",alt:"MySql"}),l.a.createElement("img",{src:"/img/about/gulp.png",alt:"Gulp"}),l.a.createElement("img",{src:"/img/about/webpack.png",alt:"Webpack"}),l.a.createElement("img",{src:"/img/about/wordpress.png",alt:"Wordpress"}),l.a.createElement("img",{src:"/img/about/woocommerce.png",alt:"WooCommerce"}))))),l.a.createElement(S,null))},O=(a(72),a(8)),_=a.n(O),j=a(20),w=a.n(j),x=a(21),W=a.n(x),L=a(17),A=a.n(L),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).load=function(){a.setState({isLoad:!0,data:a.state.dataCopy,isFound:!0,class:"all"});var e=a.state.limit;_.a.get("http://nm-dev.ho.ua/back/works.php?limit=".concat(e)).then((function(e){e.data?a.setState({dataCopy:a.state.data.concat(e.data),data:a.state.data.concat(e.data),limit:a.state.limit+3}):(a.setState({btnShow:!1,isntWork:!0}),sessionStorage.BtnPortfolio=!1,setTimeout((function(){return a.setState({isntWork:!1})}),3e3)),a.setState({isLoad:!1})})).catch((function(e){console.log(e)}))},a.hendlefilter=function(e){if(a.setState({isFound:!0,class:e}),"all"===e)a.setState({data:a.state.dataCopy});else{var t=w.a.filter(a.state.dataCopy,(function(t){return t.filter===e}));a.setState({data:t}),""==t&&a.setState({isFound:!1})}},a.state={dataCopy:"",data:"",limit:3,btnShow:!0,isLoad:!1,isntWork:!1,isFound:!0,class:"all"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoad:!0}),sessionStorage.portfolio?this.setState({dataCopy:JSON.parse(sessionStorage.portfolio),data:JSON.parse(sessionStorage.portfolio),limit:JSON.parse(sessionStorage.portfolioLimit),isLoad:!1}):_.a.get("http://nm-dev.ho.ua/back/works.php").then((function(t){console.log(t),e.setState({dataCopy:t.data,data:t.data,isLoad:!1})})).catch((function(e){console.log(e)}))}},{key:"componentWillUnmount",value:function(){sessionStorage.portfolio=JSON.stringify(this.state.dataCopy),sessionStorage.portfolioLimit=JSON.stringify(this.state.limit)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"portfolioWrapper"},this.state.isntWork?l.a.createElement(A.a,{right:!0},l.a.createElement("div",{className:"maseeg"},"\u0411\u0456\u043b\u044c\u0448\u0435 \u0440\u043e\u0431\u0456\u0442 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e")):null,l.a.createElement(y,{title:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e"}),l.a.createElement("div",{className:"portfolioWrapper__contents"},l.a.createElement("h3",null,"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e"),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__nav"},l.a.createElement("h4",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"all"===this.state.class?"active":"",onClick:function(){return e.hendlefilter("all")}},"\u0412\u0441\u0456"),l.a.createElement("li",{className:"lending"===this.state.class?"active":"",onClick:function(){return e.hendlefilter("lending")}},"\u041b\u0435\u043d\u0434\u0456\u043d\u0433"),l.a.createElement("li",{className:"wp"===this.state.class?"active":"",onClick:function(){return e.hendlefilter("wp")}},"WordPress"),l.a.createElement("li",{className:"react"===this.state.class?"active":"",onClick:function(){return e.hendlefilter("react")}},"React"))),l.a.createElement(W.a,{left:!0},l.a.createElement("div",{className:"content__items"},this.state.isFound?Object.keys(this.state.data).map((function(t,a){return l.a.createElement("div",{key:a,className:"content__items--item"},l.a.createElement("img",{src:e.state.data[t].img,alt:e.state.data[t].title}),l.a.createElement("div",{className:"hover"},l.a.createElement("div",{className:"text"},l.a.createElement("h2",null,e.state.data[t].title),l.a.createElement(p.c,{className:"more",to:"/portfolio/".concat(e.state.data[t].id)},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e"))))})):l.a.createElement("p",{className:"workNotFound"},'\u041d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435 \u0432\u0441\u0456 \u0440\u043e\u0431\u043e\u0442\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0456, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0449\u0435..."'),this.state.btnShow&&!sessionStorage.BtnPortfolio?this.state.isLoad?l.a.createElement("img",{className:"load",src:"img/load.png",alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):l.a.createElement("div",{className:"BtnLoad",onClick:this.load},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0449\u0435..."):null)))),l.a.createElement(S,null))}}]),t}(l.a.Component),M=a(16),P=(a(91),a(51)),F=a.n(P),z=(a(111),function(e){var t=e.color,a=e.name;e.id;return l.a.createElement("div",null,l.a.createElement("div",{className:"pin bounce",style:{backgroundColor:t,cursor:"pointer"},title:a}),l.a.createElement("div",{className:"pulse"}))}),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"300px",width:"100%",boxShadow:"0 0 10px #fff",color:"black"}},l.a.createElement(F.a,{bootstrapURLKeys:{key:"AIzaSyCDCApeoMpSTQxvz14Yhh09zlsw8FhB2ck&libraries"},defaultCenter:{lat:48.9215,lng:24.70972},defaultZoom:14},l.a.createElement(z,{lat:48.9215,lng:24.70972,color:"#02a8f4"})))}}]),t}(n.Component);I.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var J=I,B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleInputChange=function(e){a.setState((function(e){return{errors:Object(M.a)({},e.errors,{name:"",email:"",text:""}),general:""}}));var t=e.target.name;a.setState({state:a.state.data[t]=e.target.value})},a.handleSubmit=function(e){a.state.data.name?!a.state.data.email||a.state.data.email.indexOf("@")<0?a.setState({state:a.state.errors.email="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443"}):a.state.data.text?(_.a.post("http://nm-dev.ho.ua/back/massege.php",JSON.stringify(a.state.data)).then((function(e){e.data?a.setState({state:a.state.general="\u0412\u0430\u0448\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0435"}):a.setState({state:a.state.general="\u0412\u0430\u0448\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043d\u0435 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0435"})})).catch((function(e){console.log(e)})),a.setState((function(e){return{data:Object(M.a)({},e.data,{name:"",tel:"",email:"",subject:"",text:""})}})),setTimeout((function(){return a.setState({general:""})}),3e3)):a.setState({state:a.state.errors.text="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"}):a.setState({state:a.state.errors.name="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f"}),e.preventDefault()},a.state={data:{name:"",tel:"",email:"",subject:"",text:""},errors:{name:"",email:"",text:""},general:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contactsWrapper"},l.a.createElement(y,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),l.a.createElement("div",{className:"contactsWrapper__content"},l.a.createElement("h3",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"),l.a.createElement("div",{className:"formWrapper"},l.a.createElement(A.a,{left:!0},l.a.createElement("div",{className:"formWrapper__form"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"name",placeholder:"\u0406\u043c'\u044f *",value:this.state.data.name,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.name?this.state.errors.name:null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"tel",placeholder:"+380(__) __ __ ___",value:this.state.data.tel,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.tel?this.state.errors.tel:null),l.a.createElement("br",null),l.a.createElement("input",{type:"email",name:"email",placeholder:"E-mail *",value:this.state.data.email,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.email?this.state.errors.email:null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"subject",placeholder:"\u0422\u0435\u043c\u0430",value:this.state.data.subject,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("textarea",{name:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 *",rows:7,value:this.state.data.text,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.text?this.state.errors.text:null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",onClick:this.handleSubmit,value:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})))),l.a.createElement(A.a,{right:!0},l.a.createElement("div",{className:"formWrapper__contacts"},l.a.createElement("p",null,"\u0417\u0432'\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u0437\u0456 \u043c\u043d\u043e\u044e \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u043c \u0437\u0440\u0443\u0447\u043d\u0438\u043c \u0434\u043b\u044f \u0412\u0430\u0441 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c"),l.a.createElement("hr",null),l.a.createElement("span",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",l.a.createElement("br",null),l.a.createElement("a",{href:"tel:+380957511806"},"+380 (95) 751 18 06"),l.a.createElement("br",null),l.a.createElement("i",null,"( Viber, Telegram, Whatsapp )")),l.a.createElement("br",null),l.a.createElement("span",null,"E-mail:",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:nazar.melnychenko@gmail.com"},"nazar.melnychenko@gmail.com")),l.a.createElement("br",null),l.a.createElement("span",null,"Skype:",l.a.createElement("br",null),l.a.createElement("a",{href:"skype:skay.net?call"},"skay.net")),l.a.createElement("hr",null),l.a.createElement(d,null))))),l.a.createElement(J,null),this.state.general?l.a.createElement(A.a,{right:!0},l.a.createElement("div",{className:"maseeg"},this.state.general)):null,l.a.createElement(S,null))}}]),t}(l.a.Component),D=a(28),K=a.n(D),H=a(52),R=(a(113),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={data:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(H.a)(K.a.mark((function e(){var t,a=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,_.a.get("http://nm-dev.ho.ua/back/works.php?id=".concat(t)).then((function(e){a.setState({data:e.data})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"viewWrapperPortfolio"},Object.keys(this.state.data).map((function(t,a){return l.a.createElement("div",{key:a,className:"viewWrapperPortfolio__item"},l.a.createElement("h3",null,e.state.data[t].title),l.a.createElement("div",{className:"viewWrapperPortfolio__item--img"},l.a.createElement(W.a,null,l.a.createElement("img",{src:e.state.data[t].img_full,alt:e.state.data[t].title}))),l.a.createElement("p",{className:"date"},"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457: ",e.state.data[t].date),l.a.createElement("p",{className:"description"},e.state.data[t].description),l.a.createElement("p",null,"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u043b\u0438\u0441\u044c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457:"),l.a.createElement("p",{className:"technology"},e.state.data[t].technology),l.a.createElement("a",{className:"BtnLoad",href:e.state.data[t].link,target:"_blank"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"),l.a.createElement("div",{className:"clearfix"}))}))),l.a.createElement(S,null))}}]),t}(l.a.Component)),Y=(a(114),a(22)),q=a(53),G=(a(115),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).generateString=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a=function(e,t){return[].concat(Object(q.a)(Array(t-e).keys()),[t-e]).map((function(t){return e+t}))},n=a(65,90),l=a(97,122),r=a(48,57),c=n.concat(l).concat(r),s=0;s<e;s++)t+=String.fromCharCode(c[Math.floor(Math.random()*c.length)]);return t},a.handleInputChange=function(e){a.setState((function(e){return{errors:Object(M.a)({},e.errors,{name:"",text:""})}}));var t=e.target.value,n=e.target.name;a.setState((function(e){return{comments:Object(M.a)({},e.comments,Object(Y.a)({},n,t))}}))},a.handleSubmit=function(e,t){var n=localStorage.commentKey;a.state.comments.name?a.state.comments.text?(a.setState({state:a.state.comments.commentKey=n}),_.a.post("http://nm-dev.ho.ua/back/comments.php?id=".concat(e),JSON.stringify(a.state.comments)).then((function(e){e&&_.a.get("http://nm-dev.ho.ua/back/comments.php?id=".concat(a.props.id)).then((function(e){console.log(e),a.setState({data:e.data})}))})).catch((function(e){console.log(e)}))):a.setState({state:a.state.errors.text="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"}):a.setState({state:a.state.errors.name="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f"}),a.setState((function(e){return{comments:Object(M.a)({},e.comments,{name:"",text:""})}})),t.preventDefault()},a.delete=function(e){_.a.delete("http://nm-dev.ho.ua/back/comments.php?id=".concat(e)).then((function(t){t&&(w.a.remove(a.state.data,(function(t){return t.id===e})),a.setState({data:a.state.data}))})).catch((function(e){console.log(e)}))},a.state={data:"",comments:{name:"",text:"",commentKey:""},errors:{name:"",text:""}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.commentKey||(localStorage.commentKey=this.generateString(21)),_.a.get("http://nm-dev.ho.ua/back/comments.php?id=".concat(this.props.id)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"comments"},l.a.createElement("h3",null,"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456"),l.a.createElement("form",{method:"POST"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u0406\u043c'\u044f *",value:this.state.comments.name,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.name?this.state.errors.name:null),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"7",name:"text",placeholder:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 *",value:this.state.comments.text,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("span",null,this.state.errors.text?this.state.errors.text:null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",onClick:function(t){return e.handleSubmit(e.props.id,t)},value:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})),""!=this.state.data?Object.keys(this.state.data).map((function(t,a){return l.a.createElement("div",{key:a,className:"comments__items"},l.a.createElement("hr",null),l.a.createElement("span",{className:"comments__items--name"},e.state.data[t].name),l.a.createElement("span",{className:"comments__items--date"},e.state.data[t].date),e.state.data[t].key_user==localStorage.commentKey?l.a.createElement("span",{className:"comments__items--delete",onClick:function(){return e.delete(e.state.data[t].id)}},"[ \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 ]"):null,l.a.createElement("div",{className:"comments__items--text"},e.state.data[t].text))})):l.a.createElement("div",null,"\u0411\u0443\u0434\u044c\u0442\u0435 \u043f\u0435\u0440\u0448\u0438\u043c\u0438 \u0445\u0442\u043e \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u044c \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 :)"))}}]),t}(l.a.Component));l.a.Component,a(116);var V=function(){return l.a.createElement("h2",null,"404")},Q=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"main-wrapper"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("nav",{className:"mobile"},l.a.createElement(f,null)),l.a.createElement("nav",{className:"nav"},l.a.createElement(E,null)),l.a.createElement("main",{className:"main"},l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:b}),l.a.createElement(h.a,{exact:!0,path:"/about/",component:C}),l.a.createElement(h.a,{exact:!0,path:"/portfolio/",component:T}),l.a.createElement(h.a,{exact:!0,path:"/portfolio/:id",component:R}),l.a.createElement(h.a,{exact:!0,path:"/contacts/",component:B}),l.a.createElement(h.a,{path:"*",component:V}))))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(Q,null),document.getElementById("root"))},30:function(e,t,a){},54:function(e,t,a){e.exports=a(117)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},91:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.2cd7d04a.chunk.js.map