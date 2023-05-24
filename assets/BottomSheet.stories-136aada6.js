import{j as e,r as c,a as i,F as f}from"./index-8d7dd934.js";import{H as l,c as u,u as O,S as M,C as m}from"./StoriesWrapper-1590f6a9.js";import{B as d}from"./index-b36c276d.js";import{O as g,L as x,M as b}from"./index-30237fbe.js";import"./react-icons.esm-7d868620.js";const E=l.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`,j=l.div`
  position: relative;
  height: 56px;
  min-height: 56px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(${u.fill.secondary}, 0.2);
  &:after {
    content: ' ';
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background-color: rgba(${u.fill.secondary}, 0.2);
    position: absolute;
    top: 5px;
  }
`,z=l(g)`
  z-index: ${t=>t.zIndex};
`,H=l(g.Child)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({styles:t})=>t.mobile.backgroundColor};
  border-radius: ${({styles:t})=>t.mobile.borderRadius};
  width: ${({styles:t})=>t.mobile.width};
  max-width: ${({styles:t})=>t.mobile.maxWidth};
  height: ${({styles:t})=>t.mobile.height};
  max-height: ${({styles:t})=>t.mobile.maxHeight};
  box-shadow: ${({styles:t})=>t.mobile.boxShadow};
  margin: ${({styles:t})=>t.mobile.margin};
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  overflow: hidden;
  z-index: ${t=>t.zIndex};

  @media (min-width: 769px) {
    background-color: ${({styles:t})=>t.desktop.backgroundColor};
    border-radius: ${({styles:t})=>t.desktop.borderRadius};
    width: ${({styles:t})=>t.desktop.width};
    max-width: ${({styles:t})=>t.desktop.maxWidth};
    height: ${({styles:t})=>t.desktop.height};
    max-height: ${({styles:t})=>t.desktop.maxHeight};
    box-shadow: ${({styles:t})=>t.desktop.boxShadow};
    margin: ${({styles:t})=>t.desktop.margin};
  }
`,I={type:"spring",bounce:.15,duration:.5},A={initial:{y:"calc(100% + 100px)"},appear:{y:"100px"},disappear:{y:"calc(100% + 100px)"}},p=({label:t="modal",role:n="dialog",open:o,onClose:a,onBlur:s,closeOnBlur:h=!0,closeOnEsc:S=!0,animationVariants:w=A,vailAnimationVariants:y,transition:B=I,vailTransition:$,overrides:k,animate:v={},children:C})=>{const T=O({key:"BottomSheet",overrides:k});return e(z,{open:o,hasFocusTrap:o,closeOnBlur:h,closeOnEsc:S,onClose:a,onBlur:s,transition:$,animationVariants:y,zIndex:x.BOTTOM_SHEET,children:e(H,{animationVariants:w,open:o,transition:B,label:t,role:n,animate:v,styles:T,zIndex:x.BOTTOM_SHEET+1,children:C})})};p.Content=E;p.Title=j;const r=p,V={decorators:[t=>e(M,{children:e(t,{})})]},q=()=>{const[t,n]=c.useState(!1),o=()=>n(!1);return i(f,{children:[e(d,{variant:"primary",onClick:()=>n(!0),children:"Open BottomSheet"}),i(r,{open:t,onBlur:o,onClose:o,children:[e(r.Title,{children:"This is the title"}),e(r.Content,{children:i(m,{children:[e("p",{children:"This is a bottom sheet"}),e(d,{variant:"primary",style:{width:"100%",justifyContent:"center"},children:"Save"})]})})]})]})},D=()=>{const[t,n]=c.useState(!1),[o,a]=c.useState(!0),s=()=>{n(!1),a(!1)},h=()=>n(!0);return i(f,{children:[e(d,{variant:"primary",onClick:()=>a(!0),children:"Open Modal"}),e(b,{uniqId:"bottom-sheet-test",open:o,children:e(b.Content,{children:e(m,{children:e(d,{variant:"primary",onClick:h,children:"Open BottomSheet"})})})}),i(r,{open:t,onBlur:s,onClose:s,children:[e(r.Title,{children:"This is the title"}),e(r.Content,{children:i(m,{children:[e("p",{children:"This is a bottom sheet"}),e(d,{variant:"primary",style:{width:"100%",justifyContent:"center"},onClick:s,children:"Save"})]})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as BottomSheetAndModal,q as MinimalBottomSheet,V as default};
