import{a as f,S as v,i as c}from"./assets/vendor-D6BwaWIN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();f.defaults.baseURL="https://pixabay.com/api/";const y=async(o,e)=>{const a={params:{key:"45746393-55b87f9c702251a87b9ae7181",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};try{return(await f.get("",a)).data}catch(s){throw console.error("Error fetching photos:",s),s}},p=({webformatURL:o,largeImageURL:e,tags:a,likes:s,views:t,comments:r,downloads:i})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
          class="gallery-image"
          src="${o}"
          alt="${a}"/>
        </a>
        <ul class="gallary-descr">
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Likes</h2>
            <p class="gallary-descr-item-num">${s}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Views</h2>
            <p class="gallary-descr-item-num">${t}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Comments</h2>
            <p class="gallary-descr-item-num">${r}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Downloads</h2>
            <p class="gallary-descr-item-num">${i}</p>
          </li>
        </ul>
    </li>
    `,n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),h=document.querySelector(".js-load-more");let l=1,m="",b=0,u=0;const L=new v(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),C=async o=>{try{if(o.preventDefault(),g.classList.remove("is-hidden"),m=n.elements.user_query.value.trim(),!m){c.error({message:"Enter what we are looking for",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"});return}l=1;const e=await y(m,l);if(e.data.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),h.classList.add("is-hidden"),d.innerHTML="",n.reset();return}const a=e.data.hits.map(s=>p(s)).join("");d.innerHTML=a,b=d.querySelector("li").getBoundingClientRect().height,u=Math.ceil(e.data.totalHits/15),l>=u&&c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h.classList.remove("is-hidden"),L.refresh()}catch(e){console.log(e)}finally{n.reset(),g.classList.add("is-hidden")}},E=async o=>{try{l++;const e=await y(m,l),a=e.data.hits.map(s=>p(s)).join("");d.insertAdjacentHTML("beforeend",a),L.refresh(),scrollBy({top:b*2,behavior:"smooth"}),u=Math.ceil(e.data.totalHits/15),l>=u&&(h.classList.add("is-hidden"),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};n.addEventListener("submit",C);h.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
