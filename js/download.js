var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(()=>{function p(e,c=5){$.getJSON(`http://web.archive.org/web/20240304191959/https://api.github.com/repos/citra-emu/citra-${e}/releases`,function(r){$(`#last-updated-${e}`).text(dayjs(r[0].published_at).fromNow());for(let s=0;s<r.length;++s){let d=r[s],g=dayjs(d.published_at).fromNow(),u=d.assets[0].name.split("-").pop().trim().split(".")[0],w=`http://web.archive.org/web/20240304191959/https://github.com/citra-emu/citra-${e}/commit/${u}`,t="";e=="nightly"?t="Nightly Build":e=="canary"?t="Canary Build":e=="android"&&(t="Android Build"),u&&(t+=" - "+u);let o="",f="";if(s==0&&(f="table-first"),d.assets.forEach(function(i){let m=i.name.includes("windows")||i.name.includes("exe");if(i.name.includes("nupkg")||i.name.includes(".aab")||!m&&i.name.includes(".7z")||m&&i.name.includes(".tar.gz")||i.name.includes("RELEASES")||i.name.includes("-msvc-"))return;let a="/images/icons/file.png";m?a="/images/icons/windows.png":i.name.includes("macos")?a="/images/icons/apple.png":i.name.includes("linux")?a="/images/icons/linux.png":i.name.includes(".apk")?a="/images/icons/android.png":i.name.includes("unified-source")&&(a="/images/icons/file-code.png");let y=`http://web.archive.org/web/20240304191959/https://github.com/citra-emu/citra-${e}/releases/download/${d.tag_name}/${i.name}`;o+=`<a class="dl-icon" href="${y}"><img src="${a}"></i></a>`}),o+=`<a class="dl-icon" href="${d.html_url}"><img src="/images/icons/github.png"></i></a>`,w!=null?$(`#downloads-${e}`).append(`<tr class="${f}"><td>${g}</td><td><a href="${w}">${t}</a></td><td>${o}</td></tr>`):$(`#downloads-${e}`).append(`<tr class="${f}"><td>${g}</td><td>${t}</td><td>${o}</td></tr>`),s+1>=c)break}})}function x(){p("nightly"),p("canary"),p("android")}dayjs.extend(dayjs_plugin_relativeTime);var n=navigator.userAgent.toLowerCase(),h=["windows","mac","linux","android"],l;n.indexOf("windows")!==-1?l="Windows":n.indexOf("mac")!==-1&&n.indexOf("mobile")===-1&&n.indexOf("phone")===-1?l="Mac":n.indexOf("linux")!==-1&&n.indexOf("android")===-1?l="Linux":n.indexOf("android")!==-1&&(l="Android");if(l!==void 0){$("#dl-"+l.toLowerCase()+"-x64").css("display","block");let e=$("#dl-autodetect");e.text("Autodetected platform: "+l),e.css("display","inline")}else $("#dl-unknown").css("display","block");$("#no-js-view").css("display","none");$("#updater-view").css("display","block");$("#other-platforms-link").click(function(){for(let e=0;e<h.length;e++){let c=h[e];$("#dl-"+c+"-x64").css("display","block"),$("#other-container").css("display","none")}});$("#manual-link").click(function(){$("#updater-view").css("display","none"),$("#manual-view").css("display","block"),x()});})();


}
/*
     FILE ARCHIVED ON 19:19:59 Mar 04, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:41:44 Mar 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.183
  exclusion.robots.policy: 0.166
  cdx.remote: 0.126
  esindex: 0.011
  LoadShardBlock: 84.729 (6)
  PetaboxLoader3.datanode: 116.678 (7)
  load_resource: 122.332
  PetaboxLoader3.resolve: 70.666
*/