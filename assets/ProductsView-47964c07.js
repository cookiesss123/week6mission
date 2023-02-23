import{_ as m,a as b,r as $,o as a,c as n,e as l,b as t,F as h,f as k,n as f,t as c,d as y,w as V}from"./index-505f496e.js";const{VITE_URL:r,VITE_PATH:d}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"cookiesss",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},v={components:{RouterLink:b},data(){return{products:[]}},methods:{getProducts(){this.$http.get(`${r}/api/${d}/products/all`).then(e=>{console.log(e.data.products),this.products=e.data.products}).catch(e=>{console.log(e)})},addCart(e,i=1){const u={product_id:e,qty:i};this.$http.post(`${r}/api/${d}/cart`,{data:u}).then(s=>{alert(s.data.message),this.getCarts()}).catch(s=>{console.log(s)})},getCarts(){this.$http.get(`${r}/api/${d}/cart`).then(e=>{console.log(e.data.data),this.cart=e.data.data}).catch(e=>{console.log(e)})}},mounted(){this.getProducts()}},x={class:"table",style:{"vertical-align":"middle"}},C=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),E={style:{width:"300px"}},L={class:"btn-group"},R=["onClick"];function T(e,i,u,s,p,_){const g=$("RouterLink");return a(),n(h,null,[l(" 產品列表 "),t("table",x,[C,t("tbody",null,[(a(!0),n(h,null,k(p.products,o=>(a(),n("tr",{key:o.id},[t("td",E,[t("div",{style:f([{"background-position":"center","background-size":"cover",height:"100px"},{"background-image":`url(${o.imageUrl})`}])},null,4)]),t("td",null,c(o.title),1),t("td",null,[t("del",null," 原價 "+c(o.origin_price)+" 元 ",1),l(" 現在只要 "+c(o.price)+" 元 ",1)]),t("td",null,[t("div",L,[y(g,{to:`/product/${o.id}`,class:"btn btn-sm btn-outline-secondary"},{default:V(()=>[l("查看更多")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:P=>_.addCart(o.id)},"加到購物車",8,R)])])]))),128))])])],64)}const B=m(v,[["render",T]]);export{B as default};
