(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665,161,129],{7462:function(e,r,t){Promise.resolve().then(t.bind(t,6560)),Promise.resolve().then(t.t.bind(t,231,23))},495:function(e,r,t){"use strict";t.d(r,{d:function(){return l},z:function(){return d}});var n=t(7437),s=t(2265),i=t(1538),a=t(3027),o=t(7440);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:a,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:a,className:t})),ref:r,...c})});d.displayName="Button"},6560:function(e,r,t){"use strict";t.d(r,{UserAuthForm:function(){return R}});var n=t(7437),s=t(495),i=t(2265),a=t(1538),o=t(9343),l=t(7440),d=t(8364);let c=(0,t(3027).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=i.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(d.f,{ref:r,className:(0,l.cn)(c(),t),...s})});u.displayName=d.f.displayName;let m=o.RV,f=i.createContext({}),p=e=>{let{...r}=e;return(0,n.jsx)(f.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},x=()=>{let e=i.useContext(f),r=i.useContext(h),{getFieldState:t,formState:n}=(0,o.Gc)(),s=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=r;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...s}},h=i.createContext({}),b=i.forwardRef((e,r)=>{let{className:t,...s}=e,a=i.useId();return(0,n.jsx)(h.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...s})})});b.displayName="FormItem",i.forwardRef((e,r)=>{let{className:t,...s}=e,{error:i,formItemId:a}=x();return(0,n.jsx)(u,{ref:r,className:(0,l.cn)(i&&"text-destructive",t),htmlFor:a,...s})}).displayName="FormLabel";let g=i.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:o,formMessageId:l}=x();return(0,n.jsx)(a.g7,{ref:r,id:i,"aria-describedby":s?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!s,...t})});g.displayName="FormControl",i.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:i}=x();return(0,n.jsx)("p",{ref:r,id:i,className:(0,l.cn)("text-[0.8rem] text-muted-foreground",t),...s})}).displayName="FormDescription";let v=i.forwardRef((e,r)=>{let{className:t,children:s,...i}=e,{error:a,formMessageId:o}=x(),d=a?String(null==a?void 0:a.message):s;return d?(0,n.jsx)("p",{ref:r,id:o,className:(0,l.cn)("text-[0.8rem] font-medium text-destructive",t),...i,children:d}):null});v.displayName="FormMessage";let y=i.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});y.displayName="Input";var w=t(1014),j=t(4867),N=t(3274),k=t(7776),C=t(9772);let F=C.Ry({email:C.Z_().email(),password:C.Z_().optional()});function R(e){let{className:r,...t}=e,a=(0,o.cI)({resolver:(0,w.F)(F),defaultValues:{email:""}}),[d,c]=i.useState(!1),[u,f]=i.useState(!1);async function x(e){c(!0),await new Promise(e=>setTimeout(e,1e3));let r={ok:!0};return(c(!1),null==r?void 0:r.ok)?k.Am.success("Check your email",{description:"We sent you a login link. Be sure to check your spam too."}):k.Am.error("Something went wrong.",{description:"Your sign in request failed. Please try again."})}async function h(){f(!0),await new Promise(e=>setTimeout(e,1e3)),f(!1)}return(0,n.jsxs)("div",{className:(0,l.cn)("grid gap-6",r),...t,children:[(0,n.jsx)(m,{...a,children:(0,n.jsx)("form",{onSubmit:a.handleSubmit(x),children:(0,n.jsxs)("div",{className:"grid gap-4",children:[(0,n.jsx)(p,{control:a.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(b,{children:[(0,n.jsx)(g,{children:(0,n.jsx)(y,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:d||u,...r})}),(0,n.jsx)(v,{})]})}}),(0,n.jsxs)("button",{type:"submit",className:(0,l.cn)((0,s.d)()),disabled:d||u,onClick:()=>{},children:[d&&(0,n.jsx)(N.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Sign In with Email"]})]})})}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,n.jsx)("span",{className:"w-full border-t"})}),(0,n.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,n.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:"Or continue with"})})]}),(0,n.jsxs)("button",{type:"button",className:(0,l.cn)((0,s.d)({variant:"outline"})),onClick:()=>{h()},disabled:d||u,children:[u?(0,n.jsx)(N.Z,{className:"mr-2 h-4 w-4 animate-spin"}):(0,n.jsx)(j.wGg,{className:"mr-2 h-4 w-4"})," ","Github"]})]})}},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(4839),s=t(6164);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[310,422,776,859,971,23,744],function(){return e(e.s=7462)}),_N_E=e.O()}]);