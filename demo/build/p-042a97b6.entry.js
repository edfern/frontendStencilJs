import{r as t,h as a}from"./p-0b743a73.js";const r=class{constructor(a){t(this,a)}componentWillLoad(){this.getUser()}async getUser(){let t=JSON.parse(localStorage.getItem("dataU"));this.dataLogeo=t,t?((new Date).getTime()>t.timeSession&&(localStorage.removeItem("dataU"),this.history.push("/")),this.logeo=t.data.statusLogin):this.history.push("/")}render(){return this.logeo&&a("app-navbar",null)}};r.style=".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}";export{r as app_home}