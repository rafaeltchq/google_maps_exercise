(this.webpackJsonpexercise_2=this.webpackJsonpexercise_2||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),s=n.n(c),o=(n(32),n(14)),i=n(24),u={markersPos:[]},l=Object(i.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MARKER":return Object(o.a)(Object(o.a)({},e),{},{markersPos:e.markersPos.concat(t.payLoad)});default:return e}})),j=n(13),b=n(57),d=n(21),p=n(23),O=n.n(p),f=n(26),h=n(20),g=n(17),x=(n(39),n(2));var v=function(e){var t=e.panTo,n=Object(j.b)(),r=Object(h.a)({requestOptions:{location:{lat:function(){return 41.385251760995985},lng:function(){return 2.1689619107290565}},radius:2e5}}),a=r.ready,c=r.value,s=r.suggestions,o=s.status,i=s.data,u=r.setValue,l=r.clearSuggestions;return Object(x.jsx)("div",{className:"searchbox",children:Object(x.jsxs)(g.a,{onSelect:function(){var e=Object(f.a)(O.a.mark((function e(r){var a,c,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(r,!1),l(),e.prev=2,e.next=5,Object(h.b)({address:r});case 5:return a=e.sent,e.next=8,Object(h.c)(a[0]);case 8:c=e.sent,s=c.lat,o=c.lng,n({type:"NEW_MARKER",payLoad:{lat:s,lng:o}}),t({lat:s,lng:o}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(x.jsx)(g.b,{value:c,onChange:function(e){u(e.target.value)},disabled:!a,placeholder:"Buscar..."}),Object(x.jsx)(g.e,{children:Object(x.jsx)(g.c,{children:"OK"===o&&i.map((function(e){var t=e.id,n=e.description;return Object(x.jsx)(g.d,{value:n},t)}))})})]})})},m=function(){var e=Object(j.c)((function(e){return e.markersPos})),t=Object(r.useRef)(),n=Object(r.useCallback)((function(e){t.current=e}),[]),a=Object(r.useCallback)((function(e){var n=e.lat,r=e.lng;t.current.panTo({lat:n,lng:r}),t.current.setZoom(14)}),[]),c=Object(d.c)({googleMapsApiKey:"AIzaSyD7j27KfufbP-fyPNBXksrx5zUb2HnKiS4",libraries:["places"]}),s=c.isLoaded;return c.loadError?"Map loading error...":s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{panTo:a}),Object(x.jsx)(d.a,{mapContainerClassName:"mapWrapper",zoom:10,center:{lat:41.385251760995985,lng:2.1689619107290565},onLoad:n,children:e.map((function(e,t){return Object(x.jsx)(d.b,{position:e},t)}))})]}):"Loading map..."},k=n(56),y=n(58);var C=function(){return Object(x.jsx)(k.a,{children:Object(x.jsx)(b.a,{minwidth:"xl",children:Object(x.jsx)(y.a,{component:m,style:{backgroundColor:"#cfe8fc",height:"100vh"}})})})};var P=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(j.a,{store:l,children:Object(x.jsx)(P,{})})}),document.getElementById("root")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.6c4628a7.chunk.js.map