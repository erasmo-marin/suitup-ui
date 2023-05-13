import{j as i,a as h}from"./index-8d7dd934.js";import{u as g,H as n,m,O as w,S as t}from"./StoriesWrapper-1590f6a9.js";import{a as b}from"./react-icons.esm-7d868620.js";const x=(o,c)=>function(f){const u=g({key:o,fromContext:!0});return i(c,{styles:u,...f})},a=x,C=n(m.div)`
  display: ${({styles:o})=>o==null?void 0:o.display};
  align-items: ${({styles:o})=>o==null?void 0:o.alignItems};
  position: relative;
  width: ${({styles:o})=>o==null?void 0:o.width};
  padding: ${({styles:o})=>o==null?void 0:o.padding};
  border-radius: ${({styles:o})=>o==null?void 0:o.borderRadius};
  height: ${({styles:o})=>o==null?void 0:o.height};
  background: ${({styles:o})=>o==null?void 0:o.background};
  backdrop-filter: ${({styles:o})=>o==null?void 0:o.backdropFilter};
  box-shadow: ${({styles:o})=>o==null?void 0:o.boxShadow};
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    .notification-close-button {
      display: flex;
    }
  }
`,v=a("Notification.CloseButton",n(m.button)`
    position: ${({styles:o})=>o==null?void 0:o.position};
    top: ${({styles:o})=>o==null?void 0:o.top};
    left: ${({styles:o})=>o==null?void 0:o.left};
    width: ${({styles:o})=>o==null?void 0:o.width};
    height: ${({styles:o})=>o==null?void 0:o.height};
    border-radius: ${({styles:o})=>o==null?void 0:o.borderRadius};
    border: ${({styles:o})=>o==null?void 0:o.border};
    align-items: ${({styles:o})=>o==null?void 0:o.alignItems};
    justify-content: ${({styles:o})=>o==null?void 0:o.justifyContent};
    box-shadow: ${({styles:o})=>o==null?void 0:o.boxShadow};
    cursor: ${({styles:o})=>o==null?void 0:o.cursor};
    display: ${({styles:o})=>o==null?void 0:o.display};
  `),N=a("Notification.Title",n.h3`
    overflow: ${({styles:o})=>o==null?void 0:o.overflow};
    white-space: ${({styles:o})=>o==null?void 0:o.whiteSpace};
    text-overflow: ${({styles:o})=>o==null?void 0:o.textOverflow};
    font-size: ${({styles:o})=>o==null?void 0:o.fontSize};
    font-weight: ${({styles:o})=>o==null?void 0:o.fontWeight};
    color: ${({styles:o})=>o==null?void 0:o.color};
    margin: ${({styles:o})=>o==null?void 0:o.margin};
  `),T=a("Notification.Description",n.p`
    font-size: ${({styles:o})=>o==null?void 0:o.fontSize};
    font-weight: ${({styles:o})=>o==null?void 0:o.fontWeight};
    color: ${({styles:o})=>o==null?void 0:o.color};
    margin: ${({styles:o})=>o==null?void 0:o.margin};
  `),S=a("Notification.Icon",n.div`
    margin-right: ${({styles:o})=>o==null?void 0:o.marginRight};
  `),j=a("Notification.Time",n.span`
    margin-top: ${({styles:o})=>o==null?void 0:o.marginTop};
    align-self: ${({styles:o})=>o==null?void 0:o.alignSelf};
    margin-left: ${({styles:o})=>o==null?void 0:o.marginLeft};
    font-size: ${({styles:o})=>o==null?void 0:o.fontSize};
    line-height: ${({styles:o})=>o==null?void 0:o.lineHeight};
    font-weight: ${({styles:o})=>o==null?void 0:o.fontWeight};
    color: ${({styles:o})=>o==null?void 0:o.color};
  `),z=a("Notification.Content",n.div`
    overflow: ${({styles:o})=>o==null?void 0:o.overflow};
    flex-grow: ${({styles:o})=>o==null?void 0:o.flexGrow};
    display: ${({styles:o})=>o==null?void 0:o.display};
    flex-flow: ${({styles:o})=>o==null?void 0:o.flexFlow};
    justify-content: ${({styles:o})=>o==null?void 0:o.justifyContent};
  `),p=o=>i(()=>z(o),{}),d=({children:o,overrides:c,...$})=>{const f=g({key:"Notification",overrides:c});return i(w,{overrides:c,children:h(C,{styles:f,...$,children:[i(v,{className:"notification-close-button",children:i(b,{})}),o]})})};p.Title=N;p.Description=T;d.Icon=S;d.Time=j;d.Content=p;const r=d,k={decorators:[o=>i(t,{children:i(o,{})})]},D=()=>h(r,{children:[i(r.Icon,{children:i("img",{alt:"instagram",src:"https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png",width:"36px",height:"auto"})}),h(r.Content,{children:[i(r.Content.Title,{children:"This is the notification title"}),i(r.Content.Description,{children:"More than 1 line description"})]}),i(r.Time,{children:"22:22"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,k as default};
