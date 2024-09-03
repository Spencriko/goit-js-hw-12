import{a as y,S as C,i as n}from"./assets/vendor-D6BwaWIN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();y.defaults.baseURL="https://pixabay.com/api/";const p=async(l,t)=>{const o={params:{key:"45746393-55b87f9c702251a87b9ae7181",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};try{return(await y.get("",o)).data}catch(a){throw console.error("Error fetching photos:",a),a}};e;const b=({webformatURL:l,largeImageURL:t,tags:o,likes:a,views:r,comments:s,downloads:c})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
          class="gallery-image"
          src="${l}"
          alt="${o}"/>
        </a>
        <ul class="gallary-descr">
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Likes</h2>
            <p class="gallary-descr-item-num">${a}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Views</h2>
            <p class="gallary-descr-item-num">${r}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Comments</h2>
            <p class="gallary-descr-item-num">${s}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Downloads</h2>
            <p class="gallary-descr-item-num">${c}</p>
          </li>
        </ul>
    </li>
    `,d=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),u=document.querySelector(".js-load-more");let i=1,h="",L=0,g=0;const v=new C(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),E=async l=>{try{if(l.preventDefault(),f.classList.remove("is-hidden"),h=d.elements.user_query.value.trim(),!h){n.error({message:"Enter what we are looking for",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"});return}i=1;const t=await p(h,i);if(t.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),u.classList.add("is-hidden"),m.innerHTML="",d.reset();return}const o=t.data.hits.map(a=>b(a)).join("");m.innerHTML=o,L=m.querySelector("li").getBoundingClientRect().height,g=Math.ceil(t.data.totalHits/15),i>=g&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.classList.remove("is-hidden"),v.refresh()}catch(t){console.log(t)}finally{d.reset(),f.classList.add("is-hidden")}},S=async l=>{try{i++;const t=await p(h,i),o=t.data.hits.map(a=>b(a)).join("");m.insertAdjacentHTML("beforeend",o),v.refresh(),scrollBy({top:L*2,behavior:"smooth"}),g=Math.ceil(t.data.totalHits/15),i>=g&&(u.classList.add("is-hidden"),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}};d.addEventListener("submit",E);u.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
