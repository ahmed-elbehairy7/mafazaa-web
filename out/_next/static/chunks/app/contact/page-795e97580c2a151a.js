(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{877:function(e,l,o){Promise.resolve().then(o.bind(o,496))},496:function(e,l,o){"use strict";var a=o(7437),t=o(2265);let n={name:"363973468",phone:"352758841",email:"1290881859",category:"11630139",message:"1905445608"};l.default=()=>{let[e,l]=(0,t.useState)({name:"",phone:"",email:"",category:"",message:""}),[o,r]=(0,t.useState)("اكتب رسالتك هنا"),f=e=>{let{name:o,value:a}=e.target;"category"===o&&r("contribute"===a?"كيف تود أن تساهم معنا":"كيف نساعدك"),l(e=>({...e,[o]:a}))},s=async l=>{l.preventDefault();let o="https://docs.google.com/forms/d/e/1FAIpQLSc14podGZFjpmWE4Sc4Z5GOIlLSSF2ZbeqsoKFbLg-MsWBmVA/formResponse?submit=Submit&usp=pp_url";for(let l of Object.keys(e))o+="&entry.".concat(n[l],"=").concat(e[l]);console.log(await fetch(o,{method:"POST"}))};return(0,a.jsxs)("div",{className:"max-w-lg lg:max-w-xl px-6 lg:px-0 mx-auto py-24",children:[(0,a.jsx)("h1",{className:"text-center text-2xl lg:text-[40px] font-bold mb-3",children:"ساهم او اطلب مساعدة"}),(0,a.jsx)("p",{className:"text-center font-medium text-base lg:text-[20px] mb-8",children:"تفضل اخي و اعرض علينا ما عندك و أفدنا جزاك الله عنا خير الجزاء"}),(0,a.jsxs)("form",{onSubmit:s,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col lg:flex-row gap-6 ",children:[(0,a.jsx)("input",{type:"text",name:"name",placeholder:"الاسم",value:e.name,onChange:f,className:"w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"}),(0,a.jsx)("input",{type:"text",name:"phone",placeholder:"رقم الهاتف",value:e.phone,onChange:f,className:"w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"})]}),(0,a.jsx)("input",{type:"email",name:"email",placeholder:"البريد الالكتروني",value:e.email,onChange:f,className:"w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"}),(0,a.jsxs)("select",{name:"category",value:e.category,onChange:f,className:"w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold",children:[(0,a.jsx)("option",{value:"",children:"ماذا تود أن تفعل"}),(0,a.jsx)("option",{value:"help",children:"طلب مساعدة"}),(0,a.jsx)("option",{value:"contribute",children:"مساهمة"})]}),(0,a.jsx)("textarea",{name:"message",placeholder:o,value:e.message,onChange:f,className:"w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold",rows:4}),(0,a.jsx)("button",{type:"submit",className:"w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg  placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold shadow-sm active:shadow-inner",children:"ارسال"})]})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=877)}),_N_E=e.O()}]);