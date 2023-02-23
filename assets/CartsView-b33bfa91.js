import{_ as g,o as c,c as i,b as t,F as _,f as p,t as o,g as f,v as b}from"./index-505f496e.js";const{VITE_URL:r,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"cookiesss",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},m={components:{},data(){return{cart:{},itemStatus:""}},methods:{getCarts(){this.$http.get(`${r}/api/${u}/cart`).then(e=>{console.log(e.data.data),this.cart=e.data.data}).catch(e=>{console.log(e)})},updateCartItem(e){this.itemStatus=e.product.id;const l={product_id:e.product.id,qty:e.qty};this.$http.put(`${r}/api/${u}/cart/${e.id}`,{data:l}).then(n=>{alert(n.data.message),this.getCarts(),this.itemStatus=""}).catch(n=>{console.log(n)})},deleteItem(e){this.itemStatus=e.product.id,this.$http.delete(`${r}/api/${u}/cart/${e.id}`).then(l=>{alert(l.data.message),this.getCarts(),this.itemStatus=""}).catch(l=>{console.log(l)})},deleteAll(){this.$http.delete(`${r}/api/${u}/carts`).then(e=>{alert(e.data.message),this.getCarts()}).catch(e=>{console.log(e)})}},mounted(){this.getCarts()}},v={class:"d-flex justify-content-center"},y={class:"col-10"},C={class:"table",style:{"vertical-align":"middle"}},$=t("th",null,"品名",-1),x=t("th",null,"數量",-1),S=t("th",null,"單價",-1),V=["onClick"],k={class:"text-end",style:{width:"200px"}},E={class:"input-group mb-3"},I=["onUpdate:modelValue","onChange","disabled"],A=["value"],T={class:"input-group-text"},D={class:"text-end"},U=t("td",null,null,-1),q=t("td",null,null,-1),B=t("td",{class:"text-end"},"總計",-1),L={class:"text-end"};function R(e,l,n,w,h,d){return c(),i("div",v,[t("div",y,[t("table",C,[t("thead",null,[t("tr",null,[t("th",null,[t("button",{type:"button",class:"btn btn-danger",onClick:l[0]||(l[0]=(...s)=>d.deleteAll&&d.deleteAll(...s))},"清空購物車")]),$,x,S])]),t("tbody",null,[(c(!0),i(_,null,p(h.cart.carts,s=>(c(),i("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:a=>d.deleteItem(s)},"移除購物車",8,V)]),t("td",null,o(s.product.title),1),t("td",k,[t("div",E,[f(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a=>s.qty=a,onChange:a=>d.updateCartItem(s),disabled:h.itemStatus===s.product.id},[(c(),i(_,null,p(20,a=>t("option",{key:a,value:a},o(a),9,A)),64))],40,I),[[b,s.qty]]),t("span",T,o(s.product.unit),1)])]),t("td",D,o(s.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[U,q,B,t("td",L,o(h.cart.final_total),1)])])])])])}const F=g(m,[["render",R]]);export{F as default};
