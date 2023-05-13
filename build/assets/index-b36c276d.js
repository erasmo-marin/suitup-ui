import{j as s}from"./index-8d7dd934.js";import{H as e,u as i}from"./StoriesWrapper-1590f6a9.js";const a=e.button`
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
  }
`,d=({children:r,overrides:t,...o})=>{const n=i({key:"Button",overrides:t});return s(a,{styles:n,...o,children:r})},b=d;export{b as B};
