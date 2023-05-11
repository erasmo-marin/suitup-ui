import{j as s}from"./index-ac209825.js";import{H as i,d as a}from"./StoriesWrapper-e2c7a095.js";const e=i.button`
  display: flex;
  background-color: ${({styles:r,variant:t="primary"})=>{var o;return(o=r[t])==null?void 0:o.backgroundColor}};
  color: ${({styles:r,variant:t})=>{var o;return(o=r[t])==null?void 0:o.color}};
  border: ${({styles:r,variant:t})=>{var o;return(o=r[t])==null?void 0:o.border}};
  padding: ${({styles:r,variant:t})=>{var o;return(o=r[t])==null?void 0:o.padding}};
  border-radius: ${({styles:r,variant:t})=>{var o;return(o=r[t])==null?void 0:o.borderRadius}};
  cursor: pointer;
  box-sizing: border-box;
  transition: opacity 0.15s linear;
  &:hover {
    opacity: 0.85;
  },
`,d=({children:r,overrides:t,...o})=>{const n=a("Button",t);return s(e,{styles:n,...o,children:r})},b=d;export{b as B};
