import{r,h as s}from"./p-0b743a73.js";const p=class{constructor(s){r(this,s)}nombre(r){return r||""}render(){if(this.match&&this.match.params.name)return s("div",{class:"app-profile"},s("p",null,"Hello! My name is ",this.nombre(this.match.params.name),". My name was passed in through a route param!"))}};p.style=".app-profile{padding:10px}";export{p as app_profile}