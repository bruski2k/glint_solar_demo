(this.webpackJsonpgs_demo=this.webpackJsonpgs_demo||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(2),i=s.n(a),c=s(4),r=s.n(c),o=(s(14),s(5)),u=s(6),d=s(1),l=s(8),h=s(7),j=(s.p,s(15),function(t){Object(l.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={records:[],isLoaded:!1,longitude:0,latitude:0,viewResults:!1},n.changeLong=n.changeLong.bind(Object(d.a)(n)),n.changeLati=n.changeLati.bind(Object(d.a)(n)),n.search=n.search.bind(Object(d.a)(n)),n.results=n.results.bind(Object(d.a)(n)),n}return Object(u.a)(s,[{key:"changeLong",value:function(t){this.setState({records:this.state.records,isLoaded:this.state.isLoaded,longitude:t,latitude:this.state.latitude,viewResults:this.state.viewResults})}},{key:"changeLati",value:function(t){this.setState({records:this.state.records,isLoaded:this.state.isLoaded,longitude:this.state.longitude,latitude:t,viewResults:this.state.viewResults})}},{key:"search",value:function(){var t=this,e="https://europe-west1-freesolarcalc.cloudfunctions.net/wave_max/?lat="+this.state.latitude.toString()+"&lon="+this.state.longitude.toString();fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({records:e,isLoaded:!0,longitude:t.state.longitude,latitude:t.state.latitude,viewResults:t.state.viewResults})}))}},{key:"results",value:function(){this.search()}},{key:"render",value:function(){var t=this,e="";return e=this.state.records==[]||this.state.records=={}||"Invalid arguments, give arguments like so: lat=23.23&lon=73.12, where -90<=lat<=90 and -180<=lon<=180"==this.state.records?Object(n.jsx)("div",{className:"search_results",children:Object(n.jsx)("ul",{children:" For these coordinates there is no results, as the coordinate might simply have no data or might be landlocked. "})}):Object(n.jsx)("div",{className:"search_results",children:Object.keys(this.state.records).map((function(e,s){return Object(n.jsxs)("p",{children:[" Year: ",e," hmax: ",t.state.records[e]," m"]},s)}))}),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"Inputs",children:[Object(n.jsx)("h1",{children:"Longitude"}),Object(n.jsx)("input",{type:"text",onChange:function(e){return t.changeLong(e.target.value)}}),Object(n.jsx)("h1",{children:"Latitude"}),Object(n.jsx)("input",{type:"text",onChange:function(e){return t.changeLati(e.target.value)}}),Object(n.jsx)("h1",{children:" Current Long, Lati: "}),Object(n.jsxs)("h1",{children:[" ",this.state.longitude,", ",this.state.latitude," "]})]}),Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{onClick:this.results,children:"Search results"})}),e]})}}]),s}(i.a.Component)),g=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),n(t),a(t),i(t),c(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.3914562a.chunk.js.map