(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),s=n.n(o),i=n(2),c=n(6),l=n(7),u=n(9),m=n(8),d=(n(15),n(16),n(1)),g=n.n(d),b={name:g.a.string.isRequired},h=function(e){var t=e.name;return r.a.createElement("p",null,t)},f=n(3),p=(g.a.arrayOf(g.a.shape(Object(f.a)(Object(f.a)({},b),{},{id:g.a.number.isRequired}))).isRequired,function(e){var t=e.goods;return r.a.createElement("ul",{className:"ui inverted teal large segment"},t.map((function(e){var t=e.name,n=e.id;return r.a.createElement("li",{key:n,className:"list-item"},r.a.createElement(h,{name:t}))})))}),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goods:v,hidden:!0},e.showList=function(){e.setState({hidden:!1})},e.reverseList=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).reverse()}}))},e.resetList=function(){e.setState({goods:v})},e.sortByName=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.sortByLength=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.name.length-t.name.length}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.hidden,n=e.goods;return r.a.createElement("div",null,r.a.createElement("div",{hidden:!t,className:"app"},r.a.createElement("div",{className:"button-block"},r.a.createElement("button",{type:"button",className:"ui olive large button",onClick:this.sortByName},"Sort alphabetically"),r.a.createElement("button",{type:"button",className:"ui yellow large button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("button",{type:"button",className:"ui orange large button",onClick:this.reverseList},"Reverse"),r.a.createElement("button",{type:"button",className:"ui red large button",onClick:this.resetList},"Reset")),r.a.createElement("div",{className:"list-block"},r.a.createElement("h1",{className:"list-title"},"Goods"),r.a.createElement(p,{goods:n}))))}}]),n}(r.a.PureComponent);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f800417e.chunk.js.map