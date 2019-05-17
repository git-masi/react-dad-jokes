(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/crying-laughing-emoji.6fd227e4.svg"},21:function(e,t,a){e.exports=a(54)},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),s=a.n(r),c=(a(27),a(28),a(20)),i=a(8),l=a.n(i),u=a(10),m=a(3),d=a(4),f=a(6),p=a(5),h=a(7),k=(a(30),a(18)),g=a.n(k),v=(a(50),a(2)),j=(a(51),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).voteUp=a.voteUp.bind(Object(v.a)(a)),a.voteDown=a.voteDown.bind(Object(v.a)(a)),a.getColor=a.getColor.bind(Object(v.a)(a)),a.getEmoji=a.getEmoji.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"voteUp",value:function(){this.props.click(this.props.id,1)}},{key:"voteDown",value:function(){this.props.click(this.props.id,-1)}},{key:"getColor",value:function(){var e=this.props.votes;switch(!0){case e>=15:return"#4CAF50";case e>=12:return"#8BC34A";case e>=9:return"#CDDC39";case e>=6:return"#FFEB3B";case e>=3:return"#FFC107";case e>=0:return"#FF9800";default:return"#f44336"}}},{key:"getEmoji",value:function(){var e=this.props.votes;switch(!0){case e>=15:return"em em-rolling_on_the_floor_laughing";case e>=12:return"em em-laughing";case e>=9:return"em em-smiley";case e>=6:return"em em-slightly_smiling_face";case e>=3:return"em em-neutral_face";case e>=0:return"em em-confused";default:return"em em-angry"}}},{key:"render",value:function(){return o.a.createElement("div",{className:"Joke"},o.a.createElement("div",{className:"Joke-vote-container"},o.a.createElement("i",{onClick:this.voteUp,className:"far fa-thumbs-up",role:"button"}),o.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),o.a.createElement("i",{onClick:this.voteDown,className:"far fa-thumbs-down",role:"button"})),o.a.createElement("div",{className:"Joke-text"},this.props.text),o.a.createElement("i",{className:"".concat(this.getEmoji()," joke-emoji-animate")}))}}]),t}(n.Component)),b=(a(52),function(e){return o.a.createElement("div",{className:"Loader"},o.a.createElement("i",{className:"far fa-8x fa-laugh-beam fa-spin"}),o.a.createElement("h2",null,"Loading..."))}),w=function(e){var t=e.data,a=e.voteHandler,n=(e.hide,e.loading),r=t.sort(function(e,t){return t.votes-e.votes}).map(function(e){return o.a.createElement(j,{text:e.jokeText,id:e.id,key:e.id,votes:e.votes,click:a})});return n?o.a.createElement(b,null):o.a.createElement("div",{className:"JokeList"},r)},E=(a(53),a(19)),y=a.n(E),O=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.disabled;return o.a.createElement("div",{className:"SideBar"},o.a.createElement("h1",null,o.a.createElement("span",null,"Dad")," Jokes"),o.a.createElement("img",{src:y.a,alt:"crying laughing emoji"}),o.a.createElement("button",{onClick:t,className:"SidebarButton",disabled:a},"Get Jokes"))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={jokes:window.localStorage.getItem("jokes")?JSON.parse(window.localStorage.getItem("jokes")):[],loading:!1},a.seenJokes=new Set(a.state.jokes.map(function(e){return e.id})),a.getJoke=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 2:return t=e.sent,e.abrupt("return",{jokeText:t.data.joke,id:t.data.id,votes:0});case 4:case"end":return e.stop()}},e)})),a.getJokes=Object(u.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),e.prev=1,t=[];case 3:if(!(t.length<a.props.numJokesToGet)){e.next=10;break}return e.next=6,a.getJoke();case 6:n=e.sent,a.seenJokes.has(n.id)||t.push(n),e.next=3;break;case 10:a.setState({jokes:[].concat(Object(c.a)(a.state.jokes),t)},a.afterLoading),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),a.setState({loading:!1});case 17:case"end":return e.stop()}},e,null,[[1,13]])})),a.afterLoading=function(){setTimeout(function(){a.setState({loading:!1})},1500),a.updateLocalStorage()},a.updateLocalStorage=function(){window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))},a.voteHandler=function(e,t){a.setState({jokes:a.state.jokes.map(function(a){return a.id===e&&(a.votes+=t),a})},a.updateLocalStorage)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"JokeUI"},o.a.createElement(O,{onClick:this.getJokes,disabled:this.state.loading}),o.a.createElement(w,{data:this.state.jokes,loading:this.state.loading,voteHandler:this.voteHandler}),o.a.createElement("footer",{className:"footer"},o.a.createElement("a",{href:"https://dryicons.com/free-icons/emoji-icons"}," Icon by Dryicons ")))}}]),t}(n.Component);J.defaultProps={numJokesToGet:10};var C=J;var N=function(){return o.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.1a244090.chunk.js.map