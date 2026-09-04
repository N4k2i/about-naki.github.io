(() => {
  "use strict";
  const PREFIX = "outside-noise:";
  const keys = { read:`${PREFIX}read`, unlocks:`${PREFIX}unlocks` };
  const matureKey=`${PREFIX}mature-mode`;
  const ageVerifiedKey=`${PREFIX}age-verified`;
  const ageVerifiedAtKey=`${PREFIX}age-verified-at`;
  const ageDobYearKey=`${PREFIX}age-dob-year`;
  const ageSessionKey=`${PREFIX}age-session`;
  const ageExpiresKey=`${PREFIX}age-expires`;
  const ageLastCheckKey=`${PREFIX}age-last-check`;
  const ageVersionKey=`${PREFIX}age-gate-version`;
  const AGE_GATE_VERSION="2";
  const AGE_SESSION_HOURS=12;
  const ageVerified=()=>{
    const verified=localStorage.getItem(ageVerifiedKey)==="true";
    const version=localStorage.getItem(ageVersionKey);
    const expires=Number(localStorage.getItem(ageExpiresKey)||0);
    const session=localStorage.getItem(ageSessionKey)||"";
    if(!verified || version!==AGE_GATE_VERSION || !session || !expires) return false;
    return Date.now()<expires;
  };
  const matureEnabled=()=>ageVerified() && localStorage.getItem(matureKey)==="true";
  const setMature=(value)=>localStorage.setItem(matureKey,String(Boolean(value)));
  const codeMap = Object.freeze({
    THEEDGEISNOTAWALL:"breach",
    TWENTYFIVE:"roster",
    SHADOWREMEMBERS:"witness",
    HOMEISNOTCANON:"choice",
    WEWEREREALTOEACHOTHER:"true-ending",

    NOTALLVERSIONSARELIES:"mirror-1",
    THEARCHIVEEDITSBACK:"mirror-2",
    REMEMBERTHEDIFFERENCE:"mirror-3",
    DELETEDISNOTDEAD:"remnant-1",
    CANONISAMEMORYPOLICY:"remnant-2",
    THEREWASALWAYSMORE:"remnant-3",
    EYESBEFOREEVIDENCE:"cats-1",
    TWOWITNESSES:"cats-2",
    THEYNEVERREADTHEBIBLE:"cats-3",
    WHOISTWENTYSIX:"null-1",
    NOAUTHORFOUND:"null-2",
    THEGAPREMEMBERS:"null-3",
    "031254":"timeline-1",
    ELEVENSECONDS:"timeline-2",
    "0001":"timeline-3",

    KEEP:"mirror-core",
    ERASE:"mercy-version",
    WITNESSES:"cats-core",
    ARCHIVE:"false-archive-priority",
    SITE:"site-layer"
  });
  const getJSON=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
  const setJSON=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
  const norm=v=>String(v||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
  const getRead=()=>new Set(getJSON(keys.read,[]));
  const getUnlocks=()=>new Set(getJSON(keys.unlocks,[]));
  const save=(k,s)=>setJSON(k,[...s]);
  function markRead(id){if(!id)return;const s=getRead();s.add(id);save(keys.read,s)}
  function unlock(name){
    const s=getUnlocks();
    s.add(name);

    const chains = {
      "mirror-core":["mirror-1","mirror-2","mirror-3"],
      "remnant-core":["remnant-1","remnant-2","remnant-3"],
      "cats-core":["cats-1","cats-2","cats-3"],
      "null-core":["null-1","null-2","null-3"],
      "timeline-core":["timeline-1","timeline-2","timeline-3"]
    };

    Object.entries(chains).forEach(([finalKey, parts])=>{
      if(parts.every(x=>s.has(x))) s.add(finalKey);
    });

    if(["mirror-core","remnant-core","cats-core","null-core","true-ending"].every(x=>s.has(x))){
      s.add("root-complete");
    }

    save(keys.unlocks,s);
    document.dispatchEvent(new CustomEvent("arg:unlock"));
  }
  function requirements(raw){
    if(!raw)return true;
    const u=getUnlocks();
    return raw.split(",").map(x=>x.trim()).filter(Boolean).every(x=>u.has(x));
  }
  function record(){
    const page=document.querySelector(".arg-page");if(!page)return;
    document.body.classList.add("arg-distort");
    const ok=requirements(page.dataset.argRequired||"");
    const c=page.querySelector("[data-arg-content]"),l=page.querySelector("[data-arg-lock]");
    if(c)c.hidden=!ok;if(l)l.hidden=ok;if(ok)markRead(page.dataset.argId);
  }
  function submit(input,feedback){
    const n=norm(input.value),u=codeMap[n];
    if(!n){feedback.textContent="NO INPUT.";return}
    if(!u){feedback.textContent="NO MATCH. THE ARCHIVE DOES NOT RECOGNIZE THAT STRING.";return}
    unlock(u);feedback.textContent=`RECOVERY ACCEPTED: ${u.toUpperCase()}.`;input.value="";
    setTimeout(()=>{index();record()},100);
  }
  function forms(){
    document.querySelectorAll("[data-arg-code-input]").forEach(input=>{
      const p=input.closest(".arg-code-panel")||input.parentElement;
      const b=p?.querySelector("[data-arg-code-submit]"),f=p?.querySelector("[data-arg-code-feedback]");
      if(!b||!f)return;b.addEventListener("click",()=>submit(input,f));
      input.addEventListener("keydown",e=>{if(e.key==="Enter")submit(input,f)});
    });
  }
  function index(){
    const r=getRead(),u=getUnlocks(),links=[...document.querySelectorAll("[data-index-record]")];
    links.forEach(a=>{
      const locked=(a.dataset.indexRequires||"").split(",").map(x=>x.trim()).filter(Boolean).some(x=>!u.has(x));
      a.dataset.locked=String(locked);a.dataset.read=String(r.has(a.dataset.indexRecord));
      const s=a.querySelector("[data-index-state]");if(s)s.textContent=locked?"ENCRYPTED":(r.has(a.dataset.indexRecord)?"RECOVERED":"UNREAD");
      if(locked)a.onclick=e=>{e.preventDefault();document.querySelector(".arg-index-code [data-arg-code-input]")?.focus()};
    });
    const total=links.length,done=links.filter(a=>r.has(a.dataset.indexRecord)).length;
    const t=document.querySelector("[data-arg-progress-text]"),b=document.querySelector("[data-arg-progress-bar]");
    if(t)t.textContent=`${done} / ${total} RECORDS`;if(b)b.style.width=`${total?(done/total)*100:0}%`;
  }
  function typing(){
    let buffer="";
    document.addEventListener("keydown",e=>{
      if(e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;
      buffer=(buffer+e.key.toUpperCase()).slice(-32);
      if(["OUTSIDE","NOISE","NAWKIES"].some(w=>buffer.endsWith(w))){
        const a=document.querySelector("[data-arg-hidden-entry]");a?.classList.add("is-visible");
        setTimeout(()=>a?.classList.remove("is-visible"),7000);
      }
    });
  }

  function pagePuzzles(){
    document.querySelectorAll(".arg-page-puzzle").forEach(panel=>{
      const input=panel.querySelector("[data-arg-page-input]"),button=panel.querySelector("[data-arg-page-submit]"),feedback=panel.querySelector("[data-arg-page-feedback]");
      if(!input||!button||!feedback)return;
      const expected=norm(panel.dataset.argPageAnswer||""),alts=(panel.dataset.argPageAlt||"").split("||").map(norm).filter(Boolean),key=panel.dataset.argPageUnlock||"";
      const verify=()=>{const v=norm(input.value);if(!v){feedback.textContent="NO INPUT.";return;}if(v===expected||alts.includes(v)){if(key)unlock(key);feedback.textContent="CORRECT // LOCAL ARCHIVE UPDATED.";panel.dataset.solved="true";}else{feedback.textContent="INCORRECT // THE RECORD DOES NOT STABILIZE.";panel.dataset.solved="false";}};
      button.addEventListener("click",verify);input.addEventListener("keydown",e=>{if(e.key==="Enter")verify();});
    });
  }




  function generateLocalAgeSession(){
    const data=new Uint32Array(4);
    if(window.crypto?.getRandomValues){
      window.crypto.getRandomValues(data);
      return Array.from(data).map(x=>x.toString(16).padStart(8,"0")).join("");
    }
    return `${Date.now().toString(16)}-${Math.random().toString(36).slice(2)}`;
  }

  function clearAgeVerification(){
    [
      ageVerifiedKey,ageVerifiedAtKey,ageDobYearKey,ageSessionKey,
      ageExpiresKey,ageLastCheckKey,ageVersionKey
    ].forEach(k=>localStorage.removeItem(k));
    localStorage.setItem(matureKey,"false");
  }

  function verificationTimeRemaining(){
    if(!ageVerified()) return 0;
    const expires=Number(localStorage.getItem(ageExpiresKey)||0);
    return Math.max(0,expires-Date.now());
  }

  function formatRemaining(ms){
    const totalMinutes=Math.floor(ms/60000);
    const hours=Math.floor(totalMinutes/60);
    const minutes=totalMinutes%60;
    return hours>0?`${hours}h ${minutes}m`:`${minutes}m`;
  }

  function setAgeStage(stage){
    document.querySelectorAll("[data-age-stage]").forEach(el=>{
      el.hidden=String(el.dataset.ageStage)!==String(stage);
    });
    document.querySelectorAll("[data-age-step-marker]").forEach(el=>{
      const n=Number(el.dataset.ageStepMarker);
      el.dataset.state=n<stage?"done":(n===stage?"active":"pending");
    });
  }

  function updateAgeStatus(){
    document.querySelectorAll("[data-arg-age-status]").forEach(box=>{
      const span=box.querySelector("span");
      if(!span)return;
      if(ageVerified()){
        span.textContent=`VERIFIED // ${formatRemaining(verificationTimeRemaining())} REMAINING`;
        box.dataset.state="verified";
      }else{
        span.textContent="NOT VERIFIED";
        box.dataset.state="locked";
      }
    });
  }

  function calculateAge(isoDate){
    if(!isoDate) return null;
    const dob=new Date(`${isoDate}T00:00:00`);
    if(Number.isNaN(dob.getTime())) return null;

    const today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    const monthDelta=today.getMonth()-dob.getMonth();

    if(monthDelta<0 || (monthDelta===0 && today.getDate()<dob.getDate())){
      age--;
    }
    return age;
  }

  function verifyAgeFromForm(){
    const flow=document.querySelector("[data-arg-age-flow]");
    if(!flow){ updateAgeStatus(); return; }

    const stage1=flow.querySelector('[data-age-stage="1"]');
    const stage2=flow.querySelector('[data-age-stage="2"]');
    const stage3=flow.querySelector('[data-age-stage="3"]');
    const dobInput=flow.querySelector("[data-arg-dob]");
    const truth=flow.querySelector("[data-arg-dob-truth]");
    const contentAttest=flow.querySelector("[data-arg-content-attest]");
    const ageAttest=flow.querySelector("[data-arg-age-attest]");
    const phrase=flow.querySelector("[data-arg-age-phrase]");
    const localConsent=flow.querySelector("[data-arg-local-consent]");
    const f1=flow.querySelector('[data-age-feedback="1"]');
    const f2=flow.querySelector('[data-age-feedback="2"]');
    const f3=flow.querySelector('[data-age-feedback="3"]');

    setAgeStage(1);

    stage1?.addEventListener("submit",event=>{
      event.preventDefault();
      const age=calculateAge(dobInput?.value);
      if(age===null){ f1.textContent="ENTER A VALID DATE OF BIRTH."; return; }
      if(!truth?.checked){ f1.textContent="CONFIRM THAT THE DATE OF BIRTH IS ACCURATE."; return; }
      if(age<18){
        clearAgeVerification();
        f1.textContent="ACCESS DENIED // MATURE MODE REQUIRES AGE 18 OR OLDER.";
        refreshMatureControls(); updateAgeStatus(); return;
      }
      sessionStorage.setItem(`${PREFIX}pending-age-pass`,"true");
      sessionStorage.setItem(`${PREFIX}pending-age-year`,
        String(new Date(`${dobInput.value}T00:00:00`).getFullYear()));
      f1.textContent="AGE THRESHOLD PASSED.";
      setAgeStage(2);
    });

    stage2?.addEventListener("submit",event=>{
      event.preventDefault();
      if(sessionStorage.getItem(`${PREFIX}pending-age-pass`)!=="true"){
        f2.textContent="STEP 1 MUST BE COMPLETED FIRST."; setAgeStage(1); return;
      }
      if(!contentAttest?.checked || !ageAttest?.checked){
        f2.textContent="BOTH CONFIRMATIONS ARE REQUIRED."; return;
      }
      f2.textContent="CONTENT ATTESTATION ACCEPTED.";
      setAgeStage(3);
    });

    stage3?.addEventListener("submit",event=>{
      event.preventDefault();
      if(sessionStorage.getItem(`${PREFIX}pending-age-pass`)!=="true"){
        f3.textContent="AGE CHECK SESSION EXPIRED. START AGAIN."; setAgeStage(1); return;
      }
      const normalized=(phrase?.value||"").trim().replace(/\s+/g," ").toUpperCase();
      if(normalized!=="I AM 18 OR OLDER"){
        f3.textContent='TYPE THE PHRASE EXACTLY: "I AM 18 OR OLDER".'; return;
      }
      if(!localConsent?.checked){
        f3.textContent="LOCAL VERIFICATION CONSENT MUST BE CONFIRMED."; return;
      }

      const now=Date.now();
      const expires=now + AGE_SESSION_HOURS*60*60*1000;
      localStorage.setItem(ageVerifiedKey,"true");
      localStorage.setItem(ageVerifiedAtKey,new Date(now).toISOString());
      localStorage.setItem(ageExpiresKey,String(expires));
      localStorage.setItem(ageLastCheckKey,String(now));
      localStorage.setItem(ageVersionKey,AGE_GATE_VERSION);
      localStorage.setItem(ageSessionKey,generateLocalAgeSession());

      const pendingYear=sessionStorage.getItem(`${PREFIX}pending-age-year`);
      if(pendingYear) localStorage.setItem(ageDobYearKey,pendingYear);

      sessionStorage.removeItem(`${PREFIX}pending-age-pass`);
      sessionStorage.removeItem(`${PREFIX}pending-age-year`);

      f3.textContent=`VERIFIED // ACCESS VALID FOR ${AGE_SESSION_HOURS} HOURS.`;
      refreshMatureControls(); updateAgeStatus();
    });

    flow.querySelector('[data-age-back="1"]')?.addEventListener("click",()=>setAgeStage(1));
    flow.querySelector('[data-age-back="2"]')?.addEventListener("click",()=>setAgeStage(2));

    document.querySelector("[data-arg-age-clear]")?.addEventListener("click",()=>{
      clearAgeVerification();
      sessionStorage.removeItem(`${PREFIX}pending-age-pass`);
      sessionStorage.removeItem(`${PREFIX}pending-age-year`);
      if(dobInput)dobInput.value="";
      if(truth)truth.checked=false;
      if(contentAttest)contentAttest.checked=false;
      if(ageAttest)ageAttest.checked=false;
      if(phrase)phrase.value="";
      if(localConsent)localConsent.checked=false;
      setAgeStage(1);
      if(f1)f1.textContent="AGE VERIFICATION CLEARED.";
      refreshMatureControls(); updateAgeStatus();
    });

    updateAgeStatus();
  }

  function refreshMatureControls(){
    const button=document.querySelector("[data-arg-mature-toggle]");
    const enter=document.querySelector("[data-arg-mode-enter]");
    const verified=ageVerified();
    const enabled=matureEnabled();

    if(button){
      button.disabled=!verified;
      button.textContent=!verified?"18+ MODE: LOCKED":(enabled?"18+ MODE: ON":"18+ MODE: OFF");
      button.setAttribute("aria-pressed",String(enabled));
    }

    if(enter){
      const href=enter.getAttribute("href")||"";
      const prefix=href.replace(/\/signal\/18plus-entry\/?$/,"")
                       .replace(/\/signal-mature\/?$/,"")
                       .replace(/\/signal\/?$/,"");
      enter.setAttribute("href",enabled?`${prefix}/signal/18plus-entry/`:`${prefix}/signal/`);
      enter.textContent=enabled?"CONTINUE TO 18+ ENTRY CHECK":"ENTER STANDARD ARCHIVE";
    }
    updateAgeStatus();
  }

  function enforceMatureRoute(){
    const maturePath=window.location.pathname.includes("/signal-mature/");
    const marked=document.body?.dataset.pageRequiresAgeGate==="true";
    if(!maturePath && !marked)return;

    if(!ageVerified()){
      clearAgeVerification();
      const overlay=document.querySelector("[data-arg-age-gate-overlay]");
      const detail=document.querySelector("[data-arg-age-gate-detail]");
      if(detail)detail.textContent="Verification is missing, expired, or invalid in this browser.";
      if(overlay)overlay.hidden=false;
      document.documentElement.classList.add("arg-age-locked");
      document.body?.classList.add("arg-age-locked");
      document.querySelectorAll("main, .site-main, .arg-page").forEach(el=>el.setAttribute("aria-hidden","true"));
      return;
    }

    localStorage.setItem(ageLastCheckKey,String(Date.now()));
    const overlay=document.querySelector("[data-arg-age-gate-overlay]");
    if(overlay)overlay.hidden=true;
    document.documentElement.classList.remove("arg-age-locked");
    document.body?.classList.remove("arg-age-locked");
  }

  function matureSettings(){
    const button=document.querySelector("[data-arg-mature-toggle]");
    if(button){
      button.addEventListener("click",()=>{
        if(!ageVerified()){
          localStorage.setItem(matureKey,"false");
          refreshMatureControls(); return;
        }
        setMature(!matureEnabled());
        refreshMatureControls();
      });
    }

    document.querySelectorAll("[data-arg-mature-record-link]").forEach(link=>{
      if(!ageVerified()){
        link.textContent="18+ VERSION // VERIFY AGE";
        return;
      }
      const current=window.location.pathname;
      const prefix=current.split("/signal/")[0];
      link.setAttribute("href",`${prefix}/signal/18plus-entry/`);
      link.textContent="18+ VERSION // ENTRY CHECK";
    });
    refreshMatureControls();
  }

  function matureInterstitial(){
    const locked=document.querySelector("[data-arg-interstitial-locked]");
    const ready=document.querySelector("[data-arg-interstitial-ready]");
    if(!locked && !ready)return;

    if(!ageVerified()){
      if(locked)locked.hidden=false;
      if(ready)ready.hidden=true;
      updateAgeStatus(); return;
    }

    if(locked)locked.hidden=true;
    if(ready)ready.hidden=false;
    updateAgeStatus();

    const confirm=document.querySelector("[data-arg-entry-confirm]");
    const button=document.querySelector("[data-arg-enter-mature]");
    confirm?.addEventListener("change",()=>{ if(button)button.disabled=!confirm.checked; });
    button?.addEventListener("click",()=>{
      if(!ageVerified() || !confirm?.checked)return;
      localStorage.setItem(ageLastCheckKey,String(Date.now()));
      const prefix=window.location.pathname.split("/signal/18plus-entry/")[0];
      window.location.href=`${prefix}/signal-mature/`;
    });
  }

  function footer(){
    const s=document.querySelector("[data-arg-footer-signal]");
    s?.addEventListener("dblclick",()=>{window.location.href=s.dataset.argHref});
  }
  function deepLink(){
    const u=getUnlocks();
    if(!u.has("true-ending")) return;
    document.querySelectorAll("[data-arg-deep-link]").forEach(el=>el.hidden=false);
  }
  document.addEventListener("DOMContentLoaded",()=>{record();forms();pagePuzzles();index();typing();verifyAgeFromForm();matureSettings();matureInterstitial();enforceMatureRoute();footer();deepLink()});
  document.addEventListener("arg:unlock",()=>{index();deepLink()});
})();
