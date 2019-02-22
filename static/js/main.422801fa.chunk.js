(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),s=a.n(r),c=a(48),l=a(14),o=a(10),m="ADD_NEW",u="LIKE_ITEM",d="REMOVED_ITEM",p="REFRESH_ITEM",h="EDIT_ITEM",f=function(e){return{type:m,payload:e}},v=a(11),E=function(e){var t=window.indexedDB.open("nasa",1);t.onerror=function(e){console.log("Error")},t.onsuccess=function(t){t.target.result.transaction("items","readwrite").objectStore("items").get("list").onsuccess=function(t){e(t.target.result||[])}},t.onupgradeneeded=function(e){e.target.result.createObjectStore("items",{autoIncrement:!1})}},g=function(e){var t=window.indexedDB.open("nasa",1);t.onerror=function(e){console.log("Error")},t.onsuccess=function(t){t.target.result.transaction("items","readwrite").objectStore("items").put(e,"list")},t.onupgradeneeded=function(e){e.target.result.createObjectStore("items",{autoIncrement:!1})}},b=[{items:[]}];a(38),a(39);var y=a(5),N=a(6),j=a(9),S=a(7),O=a(8),w=a(49),C=a(47),k=a(27),D=a(46),I=(a(40),a(41),a(42),a(50)),A=function(e){function t(e,a){var n;return Object(y.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e,a))).titleChage=function(e){n.setState({title:e.target.value})},n.descriptionChage=function(e){n.setState({description:e.target.value})},n.typeChage=function(e){n.setState({type:e.target.value})},n.sourceChage=function(e){n.setState({source:e.target.value})},n.previewChage=function(e){n.setState({preview:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=Object.assign(n.props.item,n.state);"add"===n.props.mode?(n.props.addItem(t),n.close(),n.props.history.push("/")):(n.props.editItem(t),n.close())},n.close=function(){n.props.hide()},n.state={title:n.props.item.title,description:n.props.item.description,type:n.props.item.type,source:n.props.item.source,preview:n.props.item.preview},n}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"dialog"},i.a.createElement("div",{className:"container"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("span",null,"edit"===this.props.mode?"Edit":"Add"),i.a.createElement("i",{className:"fa fa-times",onClick:this.close})),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Title"),i.a.createElement("input",{type:"text",value:this.state.title,onChange:this.titleChage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Description"),i.a.createElement("textarea",{value:this.state.description,onChange:this.descriptionChage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Type"),i.a.createElement("select",{value:this.state.type,onChange:this.typeChage},i.a.createElement("option",{value:"image"},"Image"),i.a.createElement("option",{value:"video"},"Video"),i.a.createElement("option",{value:"audio"},"Audio"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Link preview image url"),i.a.createElement("input",{type:"text",value:this.state.preview,onChange:this.previewChage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Link file image url"),i.a.createElement("input",{type:"text",value:this.state.source,onChange:this.sourceChage}))),i.a.createElement("div",{className:"modal-footer"},"edit"===this.props.mode?i.a.createElement("input",{type:"submit",value:"Save"}):i.a.createElement("input",{type:"submit",value:"Add to Collection"}))))))}}]),t}(i.a.Component),L=Object(I.a)(Object(o.b)(null,function(e){return{addItem:function(t){return e(f(t))},editItem:function(t){return e(function(e){return{type:h,payload:e}}(t))}}})(A)),x=function(e){return i.a.createElement("video",{controls:!0,src:e.item.source})},T=function(e){return i.a.createElement("div",{className:"image-item-container"},i.a.createElement("img",{src:e.item.preview,alt:e.item.title}))},_=function(e){if(!e.date)return null;var t=new Date(e.date);return new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(t)},K=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).addToList=function(){a.props.addItem(a.props.item)},a.like=function(){a.props.likeItem(a.props.item)},a.remove=function(){var e=a.props.item.id;a.props.removeItem(e)},a.edit=function(){a.setState({isShownDialog:!0,mode:"edit"})},a.add=function(){a.setState({isShownDialog:!0,mode:"add"})},a.hideDialog=function(){a.setState({isShownDialog:!1})},a.state={isShownDialog:!1},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=null;if("search"===this.props.type)e=i.a.createElement("div",{className:"control"},i.a.createElement("button",{className:"btn-add",onClick:this.add},i.a.createElement("i",{className:"fa fa-plus"}),i.a.createElement("span",null,"Add to NASA collection")));else{var t=this.props.item.liked;e=i.a.createElement("div",{className:"control"},i.a.createElement("div",{className:"control-item like",onClick:this.like},t?i.a.createElement("i",{className:"fa fa-heart"}):i.a.createElement("i",{className:"fa fa-heart-o"})),i.a.createElement("div",{className:"control-item",onClick:this.remove},i.a.createElement("i",{className:"fa fa-trash-o"})),i.a.createElement("div",{className:"control-item",onClick:this.edit},i.a.createElement("i",{className:"fa fa-pencil"})))}return i.a.createElement("div",null,i.a.createElement("div",{className:"item"},i.a.createElement("div",null,"image"===this.props.item.type?i.a.createElement(T,{item:this.props.item}):i.a.createElement(x,{item:this.props.item})),i.a.createElement("div",{className:"time-section"},i.a.createElement("span",null,this.props.item.location),i.a.createElement("span",{className:"ml-auto"},i.a.createElement(_,{date:this.props.item.createDate}))),i.a.createElement("h2",{className:"title"},this.props.item.title),i.a.createElement("div",{className:"description"},this.props.item.description),e),this.state.isShownDialog?i.a.createElement(L,{item:this.props.item,mode:this.state.mode,hide:this.hideDialog}):null)}}]),t}(i.a.Component),M=Object(o.b)(null,function(e){return{addItem:function(t){return e(f(t))},likeItem:function(t){return e(function(e){return{type:u,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:d,payload:e}}(t))}}})(K),B=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(j.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){a.props.items&&0!==a.props.items.length||E(function(e){console.log(e),a.props.reloadItems(e)})},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home-header"},i.a.createElement("h1",{className:"name"},"NASA Collection"),i.a.createElement("div",{className:"add-link"},i.a.createElement(D.a,{to:"/search"},i.a.createElement("i",{className:"fa fa-plus mr-5"}),"Add new item"))),i.a.createElement("div",{className:"collection"},i.a.createElement("div",{className:"collection-container"},this.props.items&&this.props.items.length>0?this.props.items.map(function(e,t){return i.a.createElement(M,{item:e,key:t,type:"edit"})}):null)))}}]),t}(n.Component),R=Object(o.b)(function(e){return{items:Object(k.a)(e.items)}},function(e){return{reloadItems:function(t){return e({type:p,payload:t})}}})(B),F=(a(44),function(e){return i.a.createElement("h4",{className:"result-title"},i.a.createElement("strong",null,e.found)," Results for searching ",i.a.createElement("strong",null,e.searchStr))}),J=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).handleChange=function(e){a.setState({searchKey:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.searchKey&&a.search(a.state.searchKey)},a.search=function(e){e&&(a.setState({isLoading:!0,items:null}),fetch("https://images-api.nasa.gov/search?q="+e).then(function(e){return e.json()}).then(function(t){if(t&&t.collection){var n=[];t.collection.items&&(n=t.collection.items.map(function(e){var t,a,n=e.data[0].nasa_id,i=e.data[0].media_type,r=e.data[0].title,s=e.data[0].description,c=e.data[0].date_created,l=e.data[0].location;return"video"===i?t="https://images-assets.nasa.gov/video/"+n+"/"+n+"~preview.mp4":"image"===i?t="https://images-assets.nasa.gov/image/"+n+"/"+n+"~orig.jpg":"audio"===i&&(t="https://images-assets.nasa.gov/audio/"+n+"/"+n+"~orig.mp3"),e.links&&(a=e.links[0].href),{id:n,type:i,title:r,description:s,createDate:c,location:l,preview:a,source:t}})),a.setState({isLoading:!1,items:n,found:t.collection.metadata.total_hits,searchStr:e})}},function(e){a.setState({isLoaded:!1,items:[],found:null,searchStr:""})}))},a.state={searchStr:"",isLoading:!1,found:null,searchKey:"",items:null},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-page"},i.a.createElement("div",{className:"back-section"},i.a.createElement(D.a,{to:"/"},i.a.createElement("i",{className:"fa fa-angle-left mr-5"}),i.a.createElement("span",null,"Back to Collection"))),i.a.createElement("h2",{className:"search-title"},"Search from Nasa"),i.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Type something...",disabled:this.state.isLoading,className:"form-control",value:this.state.searchKey,onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"Search",disabled:this.state.isLoading})),i.a.createElement("div",{className:"search-result"},null!==this.state.found?i.a.createElement(F,{found:this.state.found,searchStr:this.state.searchStr}):null,i.a.createElement("div",{className:"search-result-container"},this.state.items&&this.state.items.length>0?this.state.items.map(function(e,t){return i.a.createElement(M,{item:e,key:t,type:"search"})}):null,this.state.isLoading?i.a.createElement("div",{className:"overlay"},i.a.createElement("i",{className:"fa fa-spin fa-spinner"})):null)))}}]),t}(i.a.Component),V=function(e){function t(){return Object(y.a)(this,t),Object(j.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement(w.a,null,i.a.createElement(C.a,{exact:!0,path:"/",component:R}),i.a.createElement(C.a,{path:"/search",component:J}))}}]),t}(n.Component);a.d(t,"store",function(){return q});var q=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var a=v.cloneDeep(e.items);return a.push(t.payload),g(a),{items:a};case h:var n=v.cloneDeep(e.items),i=n.find(function(e){return e.id===t.payload.id});return Object.assign(i,t.payload),g(n),{items:n};case u:var r=v.cloneDeep(e.items),s=r.find(function(e){return e.id===t.payload.id});return s.liked=!s.liked,g(r),{items:r};case d:var c=v.cloneDeep(e.items),l=c.findIndex(function(e){return e.id===t.payload});return c.splice(l,1),g(c),{items:c};case p:return{items:t.payload};default:return e}},{items:[]});s.a.render(i.a.createElement(o.a,{store:q},i.a.createElement(c.a,null,i.a.createElement(V,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.422801fa.chunk.js.map