import{_ as i,o as l,c as n,b as t,F as r,f as d,t as o,j as u}from"./index-5e95e935.js";const{VITE_URL:h,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"cookiesss",BASE_URL:"/week6mission/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{products:[]}},methods:{getProducts(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)cookiesssToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a,this.$http.get(`${h}/api/${_}/admin/products/all`).then(e=>{console.log(e.data.products),this.products=e.data.products}).catch(e=>{console.log(e.response.data.message)})}},mounted(){this.getProducts()}},m={class:"table"},$=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"產品名稱"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用")])],-1);function f(a,e,g,k,c,b){return l(),n("div",null,[t("table",m,[$,t("tbody",null,[(l(!0),n(r,null,d(c.products,s=>(l(),n("tr",{key:s.id},[t("td",null,o(s.category),1),t("td",null,o(s.title),1),t("td",null,o(s.origin_price),1),t("td",null,o(s.price),1),t("td",{class:u({"text-success":s.is_enabled,"fw-bold":s.is_enabled})},o(`${s.is_enabled?"啟用":"未啟用"}`),3)]))),128))])])])}const T=i(p,[["render",f]]);export{T as default};