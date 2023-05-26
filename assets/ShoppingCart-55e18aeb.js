import{i as e,j as t,r as l}from"./index-4afb4dc6.js";import{s as c}from"./submitOrder-acdf22ab.js";const x=(i,r,s,o)=>{const{value:a}=i.target,d=s.map(n=>n.titel===r?{...n,quantity:a}:{...n,quantity:1}).filter(n=>n.quantity!=="0");o(d)},u=e.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,f=e.label`
  display: block;
  font-size: 16px;
  text-transform: uppercase;
`,g=({item:i,handleChange:r,contactInfo:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{htmlFor:i,children:i}),t.jsx(u,{type:i==="email"?"email":"text",id:i,name:i,value:s[i],onChange:r,required:!0})]}),h=({contactInfo:i,setContactInfo:r})=>{const s=({target:{name:o,value:a}})=>{r(d=>({...d,[o]:a}))};return t.jsx(t.Fragment,{children:Object.keys(i).map(o=>t.jsx(g,{item:o,handleChange:s,contactInfo:i,setContactInfo:r},o))})},m=e.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`,b=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  height: 560px;
  overflow: auto;
  width: 50%;
`,j=e.div`
  display: flex;
  flex-wrap: wrap;

  gap: 18px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  width: 50%;
`,y=e.div`
  display: flex;
  gap: 28px;
`,w=e.li`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`,C=e.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 12px;
  margin-left: auto;
  background-color: #368639;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`,v=e.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
`,k=e.p`
  font-size: 22px;
  margin-top: 12px;
  margin-right: auto;
`,z=e.div`
  display: flex;
  align-items: baseline;
  margin-left: auto;
  gap: 30px;
`,I=e.input`
  width: 70%;
  padding: 5px 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`,S=e.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 18px;
  gap: 30px;
`,O=e.p`
  font-size: 18px;
`,q=e.p`
  font-size: 22px;
`,F=e.p`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
  text-align: center;
`,G=()=>{const i=JSON.parse(localStorage.getItem("basket"))||[],[r,s]=l.useState(i),[o,a]=l.useState({name:"",email:"",phone:"",address:""}),d=r.reduce((n,p)=>n+p.quantity*p.price,0);return t.jsxs(m,{children:[t.jsxs(y,{children:[r.length?t.jsx(j,{children:t.jsx(h,{contactInfo:o,setContactInfo:a})}):t.jsx(t.Fragment,{}),t.jsx(b,{children:r.length?r.map(n=>t.jsxs(w,{children:[t.jsx(v,{src:n.image,alt:"",width:250,height:180}),t.jsxs(S,{children:[t.jsx(k,{children:n.titel}),t.jsxs(O,{children:["Price: ",n.price," UAH"]}),t.jsx(I,{type:"number",min:"0",defaultValue:"1",id:`quantityOf${n.titel}`,onChange:p=>x(p,n.titel,r,s)})]})]},n._id)):t.jsx(F,{children:"The Cart is empty."})})]}),r.length?t.jsxs(z,{children:[t.jsxs(q,{children:["Total price: ",d," UAH"]}),t.jsx(C,{onClick:()=>{c(r,o,s,a,d)},children:"Submit"})]}):t.jsx(t.Fragment,{})]})};export{G as default};
