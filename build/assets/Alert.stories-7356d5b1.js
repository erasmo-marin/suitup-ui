import{j as t,r as c,a,F as f}from"./index-8d7dd934.js";import{H as m,u as S,S as L,C as h}from"./StoriesWrapper-1590f6a9.js";import{B as l}from"./index-b36c276d.js";import{O as x,L as p,M as u}from"./index-30237fbe.js";import{L as z}from"./LoremIpsum-16927354.js";import"./react-icons.esm-7d868620.js";const I=m.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
`,M=m(x)`
  z-index: ${e=>e.zIndex};
`,T=m(x.Child)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({styles:e})=>e.mobile.backgroundColor};
  border-radius: ${({styles:e})=>e.mobile.borderRadius};
  width: ${({styles:e})=>e.mobile.width};
  max-width: ${({styles:e})=>e.mobile.maxWidth};
  height: ${({styles:e})=>e.mobile.height};
  max-height: ${({styles:e})=>e.mobile.maxHeight};
  box-shadow: ${({styles:e})=>e.mobile.boxShadow};
  margin: ${({styles:e})=>e.mobile.margin};
  overflow: hidden;
  z-index: ${e=>e.zIndex};
  backdrop-filter: blur(4px);

  @media (min-width: 769px) {
    background-color: ${({styles:e})=>e.desktop.backgroundColor};
    border-radius: ${({styles:e})=>e.desktop.borderRadius};
    width: ${({styles:e})=>e.desktop.width};
    max-width: ${({styles:e})=>e.desktop.maxWidth};
    height: ${({styles:e})=>e.desktop.height};
    max-height: ${({styles:e})=>e.desktop.maxHeight};
    box-shadow: ${({styles:e})=>e.desktop.boxShadow};
    margin: ${({styles:e})=>e.desktop.margin};
  }
`,j={type:"spring",bounce:.15,duration:.5},E={initial:{y:"100vh",scale:.8},appear:{y:0,scale:1},disappear:{y:"100vh",scale:.8}},b=({label:e="modal",role:r="dialog",open:o,onClose:n,onBlur:i,closeOnBlur:d=!1,closeOnEsc:w=!1,animationVariants:g=E,vailAnimationVariants:y,transition:A=j,vailTransition:k,overrides:v,animate:C={},children:$})=>{const O=S({key:"Alert",overrides:v});return t(M,{open:o,hasFocusTrap:o,closeOnBlur:d,closeOnEsc:w,onClose:n,onBlur:i,transition:k,animationVariants:y,zIndex:p.ALERT,children:t(T,{animationVariants:g,open:o,transition:A,label:e,role:r,animate:C,styles:O,zIndex:p.ALERT+1,children:$})})};b.Content=I;const s=b,q={decorators:[e=>t(L,{children:t(e,{})})]},_=()=>{const[e,r]=c.useState(!1),o=()=>r(!1);return a(f,{children:[t(l,{variant:"primary",onClick:()=>r(!0),children:"Open Alert"}),t(s,{open:e,onBlur:o,onClose:o,children:t(s.Content,{children:a(h,{children:[t("p",{children:"This is an alert"}),t(l,{variant:"primary",style:{width:"100%",justifyContent:"center"},children:"Save"})]})})})]})},D=()=>{const[e,r]=c.useState(!1),[o,n]=c.useState(!0),i=()=>{r(!1),n(!1)},d=()=>r(!0);return a(f,{children:[t(l,{variant:"primary",onClick:()=>n(!0),children:"Open Modal"}),t(u,{uniqId:"bottom-sheet-test",open:o,children:t(u.Content,{children:a(h,{children:[t(l,{variant:"primary",onClick:d,children:"Open Alert"}),t(z,{paragraphs:10})]})})}),t(s,{open:e,onBlur:i,onClose:i,children:t(s.Content,{children:a(h,{children:[t("p",{children:"This is an alert"}),t(l,{variant:"primary",style:{width:"100%",justifyContent:"center"},onClick:i,children:"Save"})]})})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as AlertAndModal,_ as MinimalAlert,q as default};
