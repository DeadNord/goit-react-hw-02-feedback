(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={statistics:"Statistics_statistics__WzxUR"}},11:function(e,t,n){e.exports={text:"Notification_text__35NiT"}},2:function(e,t,n){e.exports={control:"Feedback_control__2t_XG",button:"Feedback_button__3WQwT"}},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),o=n(7),r=n(8),d=n(9),l=n(13),b=n(12),u=n(5),j=n.n(u),h=n(2),x=n.n(h),O=n(0),f=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:x.a.button,onClick:function(){return n(t)},children:t})})};Notification.propTypes={options:j.a.array.isRequired,onLeaveFeedback:j.a.func.isRequired};var p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)("ul",{className:x.a.control,children:t.map((function(e){return Object(O.jsx)(f,{option:e,onLeaveFeedback:n},e)}))})},v=n(3),k=n.n(v),_=function(e){var t=e.children,n=e.title;return Object(O.jsx)("section",{className:k.a.section,children:Object(O.jsxs)("div",{className:k.a.container,children:[Object(O.jsx)("h2",{className:k.a.title,children:n}),t]})})},g=n(10),m=n.n(g),F=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(O.jsxs)("ul",{className:m.a.statistics,children:[Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Good: ",t]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Neutral: ",n]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Bad: ",c]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Total: ",a]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Positive feedback: ",i,"%"]})})]})},S=n(11),N=n.n(S),P=function(e){var t=e.message;return Object(O.jsx)("p",{className:N.a.text,children:t})},T=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.hiddeStats=!0,e.feedbackIncrement=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)})),e.hiddeStats=!1},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(t){return Math.round(e.state.good/t*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{title:"Please leave feedback",children:Object(O.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.feedbackIncrement})}),Object(O.jsx)(_,{title:"Statistics",children:this.hiddeStats?Object(O.jsx)(P,{message:"There is no feedback"}):Object(O.jsx)(F,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})})]})}}]),n}(a.a.Component),w=T;n(21);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.querySelector("#root"))},3:function(e,t,n){e.exports={section:"Section_section__PWiBP",container:"Section_container__1uplv",title:"Section_title__JS9CK"}}},[[22,1,2]]]);
//# sourceMappingURL=main.19f4ecaa.chunk.js.map