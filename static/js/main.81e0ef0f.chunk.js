(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={statistics:"Statistics_statistics__WzxUR"}},11:function(t,e,n){t.exports={text:"Notification_text__35NiT"}},2:function(t,e,n){t.exports={control:"Feedback_control__2t_XG",button:"Feedback_button__3WQwT"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(6),s=n.n(a),o=n(7),r=n(8),l=n(9),d=n(13),b=n(12),u=n(5),j=n.n(u),h=n(2),x=n.n(h),O=n(0),f=function(t){var e=t.option,n=t.onFeedback;return Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:x.a.button,onClick:function(){return n(e)},children:e})})};Notification.propTypes={options:j.a.array.isRequired,onFeedback:j.a.func.isRequired};var p=function(t){var e=t.options,n=t.onFeedback;return Object(O.jsx)("ul",{className:x.a.control,children:e.map((function(t){return Object(O.jsx)(f,{option:t,onFeedback:n},t)}))})},_=n(3),k=n.n(_),v=function(t){var e=t.children,n=t.title;return Object(O.jsx)("section",{className:k.a.section,children:Object(O.jsxs)("div",{className:k.a.container,children:[Object(O.jsx)("h2",{className:k.a.title,children:n}),e]})})},g=n(10),m=n.n(g),S=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage;return Object(O.jsxs)("ul",{className:m.a.statistics,children:[Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Good: ",e]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Neutral: ",n]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Bad: ",c]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Total: ",i]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Positive feedback: ",a,"%"]})})]})},N=n(11),F=n.n(N),P=function(t){var e=t.message;return Object(O.jsx)("p",{className:F.a.text,children:e})},T=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.hiddeStats=!0,t.feedbackIncrement=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)})),t.hiddeStats=!1},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositivePercentage=function(e){return Math.round(t.state.good/e*100)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositivePercentage(t);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{title:"Please leave feedback",children:Object(O.jsx)(p,{options:["good","neutral","bad"],onFeedback:this.feedbackIncrement})}),Object(O.jsx)(v,{title:"Statistics",children:this.hiddeStats?Object(O.jsx)(P,{message:"There is no feedback"}):Object(O.jsx)(S,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})})]})}}]),n}(i.a.Component),w=T;n(21);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.querySelector("#root"))},3:function(t,e,n){t.exports={section:"Section_section__PWiBP",container:"Section_container__1uplv",title:"Section_title__JS9CK"}}},[[22,1,2]]]);
//# sourceMappingURL=main.81e0ef0f.chunk.js.map