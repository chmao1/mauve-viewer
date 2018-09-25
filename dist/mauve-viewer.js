var MauveViewer=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=5)}([function(t,e){t.exports={schemeCategory20:["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"]}},function(t,e){t.exports='\n\n<div class="mauve-viewer" style="position: relative;">\n    <div class="mv-header" style="text-align: left;">\n        <h4 class="title">Mauve Viewer (Alpha)</h4>\n        <div class="help-text">\n            <b>Tips:</b> click and drag to pan; use ctrl-scroll to zoom.\n        </div><br>\n        <button class="reset-btn">Reset</button>\n        \x3c!--<button id="shift-btn">Shift</button>\n\n        <div class="dropdown">\n            <button class="opts-btn dd-btn">Options <i class="caret-down"></i></button>\n            <div class="dd-content">\n                <div>\n                    <label>\n                        <input type="checkbox" name="fileNames" value="fileNames" />\n                        Show File Names\n                    </label>\n                </div>\n                <div>Hide track controls</div>\n            </div>\n        </div>\n        --\x3e\n\n        <div class="cursor-info pull-right">\n            <span class="nt-pos">-</span><br>\n            LCB Length: <span class="lcb-length">-</span>\n        </div>\n\n\n        <br>\n    </div>\n    <br>\n    <div class="mv-chart">\n        <svg></svg>\n\n        <div style="position: relative;">\n            <div class="mv-context-menu" style="display: none;">\n                <ul>\n                    <li id="nucleotide-align">Align by nucleotide</li>\n                    <li>Another item</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>'},function(t,e,n){"use strict";n.r(e);var i=n(0),r=20,s=105;function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.hidden=e.hidden,this.id=e.id,this.name=e.name,this.label=e.label,this.width=e.width,this.xLength=e.xLength,this.regions=e.regions,this.yPos=e.yPos||r+(this.id-1)*s,this.x,this.xAxis,this.gX,this.track,this.render(),this}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(t,[{key:"render",value:function(){var t=this;if(this.hidden)this.hiddenTrack();else{var e=this.d3;this.x=e.scaleLinear().domain([0,this.xLength]).range([1,this.width+1]),this.xAxis=e.axisBottom(this.x).ticks(5).tickSize(10).tickFormat(e.format("d"));var n=this.track=this.svg.append("g").attr("class",function(e){return"track id-".concat(t.id)});this.gX=n.append("g").attr("class","axis axis-x-".concat(this.id)).call(this.xAxis).attr("transform","translate(0, ".concat(this.yPos,")")),n.append("text").attr("x",0).attr("y",this.yPos+s-5).text(this.label||this.name).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#888"),this.regions&&this.addRegions(this.regions)}}},{key:"addRegions",value:function(t){var e=this,n=t.length;this.track.selectAll("rect").data(t).enter().append("rect").attr("class",function(t){return"region track-id-".concat(e.id," group-").concat(t.groupID," id-").concat(t.id)}).attr("x",function(t){return e.x(t.start)}).attr("y",function(t){return e._getRegionYPos(e.id,t.strand)}).attr("width",function(t){return e.x(t.end-t.start)}).attr("height",22).attr("stroke","#fffff").attr("fill",function(t){return i.schemeCategory20[t.groupID%n%20]}),this.regions=t}},{key:"hiddenTrack",value:function(){var t=this,e=this.track.append("g").attr("class",function(t){return"hidden-track"});e.append("rect").attr("class",function(e){return"hidden-track track-".concat(t.id)}).attr("x",0).attr("y",function(e){return(t.id-1)*s}).attr("width",function(t){return 1e4}).attr("height",20).attr("stroke","#fffff").attr("fill",function(t){return"#aaa"}),e.append("text").attr("x",10).attr("y",this.yPos-2).text(this.label||this.name).attr("font-family","sans-serif").attr("font-size","10px").attr("fill","#222")}},{key:"rescaleAxis",value:function(){if(console.log("called zoom"),!this.hidden){var t=this.d3.event.sourceEvent,e=this.d3.event.transform.rescaleX(this.x);this.gX.call(this.xAxis.scale(e)),t&&"wheel"!==t.type&&"click"!==t.type?"mousemove"===this.d3.event.sourceEvent.type&&this._panRegions(e):this._scaleRegions(e),this.zoomScale=e.copy()}}},{key:"_scaleRegions",value:function(t){this.track.selectAll(".region").attr("x",function(e){return t(e.start)}).attr("width",function(e){return t(e.end)-t(e.start)})}},{key:"_panRegions",value:function(t){this.track.selectAll(".region").attr("x",function(e){return t(e.start)})}},{key:"_getRegionYPos",value:function(t,e){return this.yPos+("-"===e?52:30)}},{key:"shift",value:function(t,e,n){var i=this,r=this.d3,s=this.getScale(),o=e.invert(t);this.gX.transition().tween("axis",function(t){var e=r.interpolate([s.domain()[0],s.domain()[1]],[s.domain()[0]-o,s.domain()[1]-o]);return function(t){i.x.domain(e(t)),i.gX.call(i.xAxis),n()}})}},{key:"reset",value:function(){this.x=this.d3.scaleLinear().domain([0,this.xLength]).range([1,this.width+1]),this.gX.call(this.xAxis)}},{key:"getScale",value:function(){return this.zoomScale?this.zoomScale:this.x}},{key:"getZoomScale",value:function(){return this.zoomScale?this.zoomScale:this.x}},{key:"random",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}]),t}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l="width: 26px; height: 23px;",h=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e.id,this.container=e.container,this.svg=e.svg,this.trackCount=e.trackCount,this.yPos=e.yPos||r+(this.id-1)*s,this.ctrls,this.isReference=e.isReference||!1,this.hidden,this.onMoveUp=e.onMoveUp,this.onMoveDown=e.onMoveDown,this.onSetReference=e.onSetReference,this.onHide=e.onHide,this.onShow=e.onShow,this.init(),this}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"init",value:function(){this.destroy(),this.render()}},{key:"render",value:function(){var t=this.container.querySelector(".mauve-viewer").getBoundingClientRect(),e=this.svg.getBoundingClientRect().top-t.top,n=this.node=document.createElement("div");n.setAttribute("class","track-ctrl ctrl-".concat(this.id)),n.style.top=e+this.yPos+6+"px",n.style.left="-35px",n.style.width="25px",n.style.height=s+"px",n.style.position="absolute",this._addMainButtons(),this.container.querySelector(".mauve-viewer").appendChild(n)}},{key:"_addMainButtons",value:function(){var t=this.ctrls=this._getButtons(),e=t.upBtn,n=t.downBtn,i=(t.hideBtn,t.refBtn);this.node.appendChild(e),this.node.appendChild(i),this.node.appendChild(n),this.isReference&&i.classList.add("active")}},{key:"_getButtons",value:function(){var t=document.createElement("button");t.title="Move this genome up",t.style=l,t.innerHTML="▲",t.disabled=1===this.id||!1,t.onclick=this.moveTrackUp.bind(this);var e=document.createElement("button");e.title="Hide this genome",e.style=l,e.innerHTML="−",e.onclick=this.hideTrack.bind(this);var n=document.createElement("button");n.title="Set reference genome",n.classList.add("ref-btn"),n.style=l,n.innerHTML="R",n.onclick=this.refTrack.bind(this);var i=document.createElement("button");return i.title="Move this genome down",i.style=l,i.innerHTML="▼",i.disabled=this.id===this.trackCount||!1,i.onclick=this.moveTrackDown.bind(this),{upBtn:t,downBtn:i,hideBtn:e,refBtn:n}}},{key:"_getShowButton",value:function(){var t=document.createElement("button");return t.title="Show this genome",t.classList.add("show-btn"),t.style=l,t.innerHTML="+",t.onclick=this.showTrack.bind(this),t}},{key:"moveTrackUp",value:function(){this._selectNewRef(this.id,this.id-1),this.onMoveUp(this.id)}},{key:"moveTrackDown",value:function(){this._selectNewRef(this.id,this.id+1),this.onMoveDown(this.id)}},{key:"hideTrack",value:function(){this.node.innerHTML="";var t=this._getShowButton();this.node.appendChild(t),this.hidden=!0,this.onHide(this.id)}},{key:"showTrack",value:function(){console.log("called show"),this.node.innerHTML="",this._addMainButtons(),this.hidden=!1,this.onShow(this.id)}},{key:"refTrack",value:function(){this.container.querySelectorAll(".ref-btn").forEach(function(t){t.classList.remove("active")}),this.ctrls.refBtn.classList.add("active"),this.onSetReference(this.id),this.isReference=!0}},{key:"_selectNewRef",value:function(t,e){var n,i=this.container.querySelector(".ctrl-".concat(t," .ref-btn")),r=this.container.querySelector(".ctrl-".concat(e," .ref-btn"));r.classList.contains("active")&&(r.classList.remove("active"),i.classList.add("active"),n=!0),i.classList.contains("active")&&!n&&(i.classList.remove("active"),r.classList.add("active"))}},{key:"destroy",value:function(){var t=this.container.querySelector(".ctrl-".concat(this.id));t&&t.remove()}}]),t}();function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e.container,this.d3=e.d3,this.svg=e.svg,this.trackCount=e.trackCount,this.onclick=e.onclick,this.tracks=e.tracks,this.zoom=e.zoom,this.hoverXPos,this.hoverTrackID,this.hoverLCBID,this.scales=[],this.relativeXs=[],this.hoverLines=[],this.render(),this}return function(t,e,n){e&&u(t.prototype,e),n&&u(t,n)}(t,[{key:"render",value:function(){for(var t=this,e=(this.d3,1);e<=this.trackCount;e++){var n=this._getRegionYPos(e,"-"),i=this.svg.append("line").attr("class","cursor-line").style("stroke","#222").attr("y1",r+n-30).attr("y2",r+n+30);this.hoverLines.push(i)}this.resetHover(this.scale),this.svg.on("click",function(e){t.onclick({event:e,trackID:t.hoverTrackID,lcbID:t.hoverLCBID,xPos:t.hoverXPos,relativeXs:t.relativeXs,scales:t.scales})})}},{key:"resetHover",value:function(){console.log("reset hover");var t=this.svg,e=this.d3,n=this.hoverLines;t.selectAll(".track").on("mouseover",null).on("mousemove",null).on("mouseout",null);var i=this.container.querySelector(".lcb-length"),r=this.container.querySelector(".nt-pos"),s=this;t.selectAll(".track").on("mouseover",function(){e.selectAll(".cursor-line").attr("opacity",1)}).on("mousemove",function(){var o=e.event.clientX,a=e.event.clientY,c=document.elementFromPoint(o,a),l=e.select(c).data()[0];if(c)if("rect"===c.tagName&&l&&"lcb_idx"in l){var h=e.mouse(this)[0],u=s.hoverTrackID=l.lcb_idx,d=l.strand,f=s.tracks[u-1].getScale();h=f(Math.round(f.invert(h))),s.hoverXPos=h,s.relativeXs[u-1]=0,s.scales[u-1]=f;var v=h-f(l.start);n[u-1].attr("class","cursor-line").attr("x1",h).attr("x2",h);var g=s.hoverLCBID=l.groupID;t.selectAll(".group-".concat(g)).each(function(t,e){if(t.lcb_idx!==u){var i,r=s.tracks[e].getScale();i=d!==t.strand?r(t.end)-v:r(t.start)+v;var o=h-i;s.relativeXs[t.lcb_idx-1]=o,s.scales[t.lcb_idx-1]=r,n[t.lcb_idx-1].attr("x1",i).attr("x2",i)}}),t.selectAll(".group-".concat(g)).each(function(t){this.parentNode.appendChild(this),e.select(this).attr("stroke","#222").attr("stroke-width",2)}),t.selectAll(".lcb-line.id-".concat(g)).attr("stroke-width",3),i.innerHTML=l.end-l.start+1,r.innerHTML=Math.round(f.invert(h))}else{if(c.classList.contains("cursor-line"))return;for(var k=0;k<n.length;k++)n[k].attr("opacity",0)}}).on("mouseout",function(n){e.event.relatedTarget&&e.event.relatedTarget.classList.contains("cursor-line")||(e.selectAll(".cursor-line").attr("opacity",0).attr("x1",-2).attr("x2",-2),t.selectAll(".region").attr("stroke",null),t.selectAll(".lcb-line").attr("stroke-width",1),i.innerHTML="-",r.innerHTML="-")})}},{key:"_getRegionYPos",value:function(t,e){return("-"===e?52:30)+(t-1)*s}}]),t}();function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var v=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.d3=e.d3,this.svg=e.svg,this.data=e.data,this.tracks=e.tracks,this.render(this.data),this}return function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(t,[{key:"render",value:function(t){var e=this,n=(this.x,this.tracks),s=[];return t.forEach(function(t){var i=[];t.forEach(function(t){if(!t.hidden){var s=n[t.lcb_idx-1].getZoomScale();i.push({lcb_idx:t.lcb_idx,start:t.start,end:t.end,x:s(t.start)+(s(t.end)-s(t.start))/2,y:r+e._getRegionYPos(t.lcb_idx,t.strand)+11})}}),s.push(i)}),this.lineFunction=this.d3.line().x(function(t){return t.x}).y(function(t){return t.y}),s.forEach(function(t,n){e.svg.datum(t).insert("path",":first-child").attr("class","lcb-line id-".concat(n)).attr("d",e.lineFunction(t)).attr("stroke-width",1).attr("stroke",i.schemeCategory20[n%20]).attr("fill","none")}),s}},{key:"scale",value:function(t){var e=this;this.svg.selectAll("path.lcb-line").attr("d",function(t){var n=t.map(function(t){var n=e.tracks[t.lcb_idx-1].getZoomScale();return{start:t.start,end:t.end,x:n(t.start)+(n(t.end)-n(t.start))/2,y:t.y}});return e.lineFunction(n)})}},{key:"getLineFunction",value:function(){return this.lineFunction}},{key:"_getRegionYPos",value:function(t,e){return("-"===e?52:30)+(t-1)*s}}]),t}(),g=n(1),k=n.n(g);function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",function(){return b});var b=function(){function t(e){var n=e.d3,i=e.ele,r=e.data,s=e.labels;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ele=i,this.data=r,this.d3=n,this.labels=s,this.tracks=[],this.trackCount,this.hiddenTracks=[],this.backbone,this.cursor,this.init()}return function(t,e,n){e&&y(t.prototype,e),n&&y(t,n)}(t,[{key:"init",value:function(){var t=this.getGenomeRegions(this.data).regions;this.genomeRegions=t,this.trackCount=Object.keys(this.genomeRegions).length,this.setReference(1,!0),this.ele.innerHTML=k.a,this.render(),this.rendered=!0,this.initControls()}},{key:"render",value:function(){var t=this,e=this.d3,n=this.data,i=this.genomeRegions,o=this.trackCount,c=Math.max.apply(Math,p([].concat.apply([],n).map(function(t){return t.end})))+100;e.select(this.ele.querySelector("svg")).remove();var l=this.svg=e.select(this.ele.querySelector(".mv-chart")).append("svg").attr("width",1e3).attr("height",165*o),u=+l.attr("width"),f=+l.attr("height"),g=this.rect=l.append("rect").attr("class","zoom-box").attr("width",1e3).attr("height",165*o).style("fill","none").style("pointer-events","all"),k=this.zoom=e.zoom().scaleExtent([1,c/10]).translateExtent([[-u,0],[2*u,0]]).on("zoom",function(){for(var t=0;t<x.length;t++)x[t].rescaleAxis();R.scale()}).filter(function(){return e.event.ctrlKey||"mousedown"===e.event.type||"dblclick"==e.event.type});l.call(k),l.on("dblclick.zoom",null);for(var y=[],b=[],m=[],x=this.tracks,w=r,T=1;T<=o;T++){var S=this.hiddenTracks.includes(T);w+=1===T?0:S?35:s;var _=i[T][0].name,L=this.labels?this.labels[_]:"",C=new a({d3:e,yPos:w,svg:l,id:T,name:_,label:L,container:this.ele,width:u,xLength:c,hidden:S,regions:i[T]});y.push(C.xAxis),b.push(C.gX),m.push(C.x),x.push(C),this.rendered||new h({id:T,yPos:w,height:f,container:this.ele,svg:this.ele.querySelector("svg"),trackCount:this.trackCount,isReference:1===T,onMoveUp:function(e){t.moveTrackUp(e)},onMoveDown:function(e){t.moveTrackDown(e)},onSetReference:function(e){t.setReference(e)},onHide:function(e){t.hideTrack(e)},onShow:function(e){t.showTrack(e)}})}this.cursor=new d({d3:e,trackCount:o,svg:l,container:this.ele,tracks:this.tracks,onclick:function(t){}});var R=this.backbone=new v({tracks:x,data:n,d3:e,svg:l});e.select(this.ele.querySelector(".reset-btn")).on("click",function(){t.tracks.forEach(function(t){t.reset()}),k.transform(g,e.zoomIdentity)})}},{key:"moveTrackUp",value:function(t){var e=t-1;e<1||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"moveTrackDown",value:function(t){var e=t+1;e>this.trackCount||(this.swapTrack(t,e),this.swapBackbones(t,e),this.render())}},{key:"swapTrack",value:function(t,e){var n=this.genomeRegions[e];this.genomeRegions[e]=this.genomeRegions[t],this.genomeRegions[t]=n}},{key:"swapBackbones",value:function(t,e){this.data.forEach(function(n){n.forEach(function(n){n.lcb_idx===t?n.lcb_idx=e:n.lcb_idx===e&&(n.lcb_idx=t)}),n.sort(function(t,e){return t.lcb_idx-e.lcb_idx})})}},{key:"setReference",value:function(t,e){this.data.forEach(function(e){var n=!1;e.forEach(function(e){e.lcb_idx===t&&"+"!==e.strand&&(e.strand="+",n=!0)}),n&&e.forEach(function(e){e.lcb_idx!==t&&(e.strand="-"===e.strand?"+":"-")})}),e||this.render()}},{key:"hideTrack",value:function(t){this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&(e.hidden=!0)})}),this.hiddenTracks.push(t),this.render()}},{key:"showTrack",value:function(t){this.data.forEach(function(e){e.forEach(function(e){e.lcb_idx==t&&delete e.hidden})}),this.hiddenTracks.splice(this.hiddenTracks.indexOf(t)),this.render()}},{key:"onCursorClick",value:function(t){var e=this,n=t.trackID,i=t.relativeXs;t.lcbID,t.xPos,t.scales;n&&(this.tracks.forEach(function(t){t.reset()}),this.tracks.forEach(function(t,r){if(!(t.id==n||t.id>e.trackCount)){var s=i[r];if(s){var o=0,a=e.tracks[n-1].getScale();t.shift(s,a,function(){(o+=1)==e.trackCount&&(console.log("call trasnform"),e.rect.transition().call(e.zoom.transform,e.d3.zoomTransform(t.track.select(".region"))))})}}}))}},{key:"getSharedLCBs",value:function(t){var e=Math.max.apply(Math,p(t.map(function(t){return t.length})));return t.filter(function(t){return t.length===e})}},{key:"getGenomeRegions",value:function(t){var e={},n=0,i=0;return t.forEach(function(t,r){i+=1,t.forEach(function(t){n+=1,t.id=n,t.groupID=r;var i=t.lcb_idx;i in e?e[i].push(t):e[i]=[t]})}),{regions:e,regionCount:n,lcbCount:i}}},{key:"initControls",value:function(){var t=this;this.ele.querySelector(".opts-btn").onclick=function(){t.ele.querySelector(".dd-content").classList.toggle("show")},document.onclick=function(e){if(!t.ele.querySelector(".dropdown").contains(e.target)&&!e.target.matches(".dd-btn")){var n=t.ele.getElementsByClassName("dd-content");Array.from(n).forEach(function(t){t.classList.remove("show")})}}}}]),t}()},,,function(t,e,n){t.exports=n(2)}]);
//# sourceMappingURL=mauve-viewer.js.map