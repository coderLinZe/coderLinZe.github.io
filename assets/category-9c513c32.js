import{P as i}from"./page-search-41c4eb8c.js";import{u as s,a as p,p as d,b as f}from"./usePageModal-f815ff9d.js";import{d as m,o as g,j as _,b as t,f as e,k as y,_ as h}from"./index-148fbec8.js";import"./format-7c130e46.js";const C={pageName:"category",formItems:[{type:"input",prop:"name",label:"类别名称",placeholder:"请输入类别名称"},{type:"date-picker",prop:"createAt",label:"创建时间"}]},u=C,k={pageName:"category",header:{newTitle:"新建类别",editTitle:"编辑类别"},formItems:[{type:"input",label:"类别名称",prop:"name",placeholder:"请输入类别名称"}]},b=k,x={pageName:"category",header:{title:"类别列表",btnTitle:"新建类别"},propsList:[{type:"selection",width:"80px"},{type:"index",label:"序号",width:"80px"},{type:"normal",prop:"name",label:"类别名称",width:"130px"},{type:"timer",prop:"createAt",label:"创建时间"},{type:"timer",prop:"updateAt",label:"更新时间"},{type:"handler",label:"操作",width:"150px"}]},w=x,N={class:"category"},R={class:"content"},v=m({__name:"category",setup(E){const{contentRef:o,handleQueryClick:a,handleResetClick:n}=s(),{modalRef:c,handleEditClick:l,handleNewClick:r}=p();return(P,A)=>(g(),_("div",N,[t(i,{"search-config":e(u),onQueryClick:e(a),onResetClick:e(n)},null,8,["search-config","onQueryClick","onResetClick"]),y("div",R,[t(d,{"content-config":e(w),onEditClick:e(l),onNewClick:e(r),ref_key:"contentRef",ref:o},null,8,["content-config","onEditClick","onNewClick"])]),t(f,{"modal-config":e(b),ref_key:"modalRef",ref:c},null,8,["modal-config"])]))}});const $=h(v,[["__scopeId","data-v-357608e3"]]);export{$ as default};
