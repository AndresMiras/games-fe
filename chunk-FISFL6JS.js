import{Aa as v2,Ba as H2,Ca as U,Da as y2,Ea as c2,Ka as D1,La as R1,M as $2,N as N1,Pa as O1,T as Z,U as w1,V as y1,W as N2,aa as S1,ba as Q2,c as i4,ca as _1,d as n4,da as k1,e as X,ea as w2,fa as k,ga as O,oa as A1,pa as T1,qa as E,ra as y,sa as _,ta as A,ua as P1,wa as F,xa as F1,ya as B1,za as m2}from"./chunk-WOC5R4OB.js";var Z3=i4(Y2=>{"use strict";(function(){"use strict";var r=function(){this.init()};r.prototype={init:function(){var a=this||c;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var s=this||c;if(a=parseFloat(a),s.ctx||u(),typeof a<"u"&&a>=0&&a<=1){if(s._volume=a,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a,c.ctx.currentTime);for(var t=0;t<s._howls.length;t++)if(!s._howls[t]._webAudio)for(var m=s._howls[t]._getSoundIds(),h=0;h<m.length;h++){var z=s._howls[t]._soundById(m[h]);z&&z._node&&(z._node.volume=z._volume*a)}return s}return s._volume},mute:function(a){var s=this||c;s.ctx||u(),s._muted=a,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a?0:s._volume,c.ctx.currentTime);for(var t=0;t<s._howls.length;t++)if(!s._howls[t]._webAudio)for(var m=s._howls[t]._getSoundIds(),h=0;h<m.length;h++){var z=s._howls[t]._soundById(m[h]);z&&z._node&&(z._node.muted=a?!0:z._muted)}return s},stop:function(){for(var a=this||c,s=0;s<a._howls.length;s++)a._howls[s].stop();return a},unload:function(){for(var a=this||c,s=a._howls.length-1;s>=0;s--)a._howls[s].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,u()),a},codecs:function(a){return(this||c)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||c;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var s=new Audio;s.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||c,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return a}if(!s||typeof s.canPlayType!="function")return a;var t=s.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",h=m.match(/OPR\/(\d+)/g),z=h&&parseInt(h[0].split("/")[1],10)<33,H=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,V=m.match(/Version\/(.*?) /),M=H&&V&&parseInt(V[1],10)<15;return a._codecs={mp3:!!(!z&&(t||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!t,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!M&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!M&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||c;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var s=function(t){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var h=0;h<a._howls.length;h++)if(!a._howls[h]._webAudio)for(var z=a._howls[h]._getSoundIds(),H=0;H<z.length;H++){var V=a._howls[h]._soundById(z[H]);V&&V._node&&!V._node._unlocked&&(V._node._unlocked=!0,V._node.load())}a._autoResume();var M=a.ctx.createBufferSource();M.buffer=a._scratchBuffer,M.connect(a.ctx.destination),typeof M.start>"u"?M.noteOn(0):M.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),M.onended=function(){M.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var C=0;C<a._howls.length;C++)a._howls[C]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),a}},_obtainHtml5Audio:function(){var a=this||c;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var s=this||c;return a._unlocked&&s._html5AudioPool.push(a),s},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!c.usingWebAudio)){for(var s=0;s<a._howls.length;s++)if(a._howls[s]._webAudio){for(var t=0;t<a._howls[s]._sounds.length;t++)if(!a._howls[s]._sounds[t]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!c.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var s=0;s<a._howls.length;s++)a._howls[s]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var c=new r,i=function(a){var s=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(a)};i.prototype={init:function(a){var s=this;return c.ctx||u(),s._autoplay=a.autoplay||!1,s._format=typeof a.format!="string"?a.format:[a.format],s._html5=a.html5||!1,s._muted=a.mute||!1,s._loop=a.loop||!1,s._pool=a.pool||5,s._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,s._rate=a.rate||1,s._sprite=a.sprite||{},s._src=typeof a.src!="string"?a.src:[a.src],s._volume=a.volume!==void 0?a.volume:1,s._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=a.onend?[{fn:a.onend}]:[],s._onfade=a.onfade?[{fn:a.onfade}]:[],s._onload=a.onload?[{fn:a.onload}]:[],s._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],s._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],s._onpause=a.onpause?[{fn:a.onpause}]:[],s._onplay=a.onplay?[{fn:a.onplay}]:[],s._onstop=a.onstop?[{fn:a.onstop}]:[],s._onmute=a.onmute?[{fn:a.onmute}]:[],s._onvolume=a.onvolume?[{fn:a.onvolume}]:[],s._onrate=a.onrate?[{fn:a.onrate}]:[],s._onseek=a.onseek?[{fn:a.onseek}]:[],s._onunlock=a.onunlock?[{fn:a.onunlock}]:[],s._onresume=[],s._webAudio=c.usingWebAudio&&!s._html5,typeof c.ctx<"u"&&c.ctx&&c.autoUnlock&&c._unlockAudio(),c._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var a=this,s=null;if(c.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var t=0;t<a._src.length;t++){var m,h;if(a._format&&a._format[t])m=a._format[t];else{if(h=a._src[t],typeof h!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(h),m||(m=/\.([^.]+)$/.exec(h.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&c.codecs(m)){s=a._src[t];break}}if(!s){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=s,a._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new e(a),a._webAudio&&o(a),a},play:function(a,s){var t=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&t._state==="loaded"&&!t._sprite[a])return null;if(typeof a>"u"&&(a="__default",!t._playLock)){for(var h=0,z=0;z<t._sounds.length;z++)t._sounds[z]._paused&&!t._sounds[z]._ended&&(h++,m=t._sounds[z]._id);h===1?a=null:m=null}}var H=m?t._soundById(m):t._inactiveSound();if(!H)return null;if(m&&!a&&(a=H._sprite||"__default"),t._state!=="loaded"){H._sprite=a,H._ended=!1;var V=H._id;return t._queue.push({event:"play",action:function(){t.play(V)}}),V}if(m&&!H._paused)return s||t._loadQueue("play"),H._id;t._webAudio&&c._autoResume();var M=Math.max(0,H._seek>0?H._seek:t._sprite[a][0]/1e3),C=Math.max(0,(t._sprite[a][0]+t._sprite[a][1])/1e3-M),N=C*1e3/Math.abs(H._rate),w=t._sprite[a][0]/1e3,P=(t._sprite[a][0]+t._sprite[a][1])/1e3;H._sprite=a,H._ended=!1;var B=function(){H._paused=!1,H._seek=M,H._start=w,H._stop=P,H._loop=!!(H._loop||t._sprite[a][2])};if(M>=P){t._ended(H);return}var L=H._node;if(t._webAudio){var D=function(){t._playLock=!1,B(),t._refreshBuffer(H);var n2=H._muted||t._muted?0:H._volume;L.gain.setValueAtTime(n2,c.ctx.currentTime),H._playStart=c.ctx.currentTime,typeof L.bufferSource.start>"u"?H._loop?L.bufferSource.noteGrainOn(0,M,86400):L.bufferSource.noteGrainOn(0,M,C):H._loop?L.bufferSource.start(0,M,86400):L.bufferSource.start(0,M,C),N!==1/0&&(t._endTimers[H._id]=setTimeout(t._ended.bind(t,H),N)),s||setTimeout(function(){t._emit("play",H._id),t._loadQueue()},0)};c.state==="running"&&c.ctx.state!=="interrupted"?D():(t._playLock=!0,t.once("resume",D),t._clearTimer(H._id))}else{var b2=function(){L.currentTime=M,L.muted=H._muted||t._muted||c._muted||L.muted,L.volume=H._volume*c.volume(),L.playbackRate=H._rate;try{var n2=L.play();if(n2&&typeof Promise<"u"&&(n2 instanceof Promise||typeof n2.then=="function")?(t._playLock=!0,B(),n2.then(function(){t._playLock=!1,L._unlocked=!0,s?t._loadQueue():t._emit("play",H._id)}).catch(function(){t._playLock=!1,t._emit("playerror",H._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),H._ended=!0,H._paused=!0})):s||(t._playLock=!1,B(),t._emit("play",H._id)),L.playbackRate=H._rate,L.paused){t._emit("playerror",H._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||H._loop?t._endTimers[H._id]=setTimeout(t._ended.bind(t,H),N):(t._endTimers[H._id]=function(){t._ended(H),L.removeEventListener("ended",t._endTimers[H._id],!1)},L.addEventListener("ended",t._endTimers[H._id],!1))}catch(r4){t._emit("playerror",H._id,r4)}};L.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(L.src=t._src,L.load());var e4=window&&window.ejecta||!L.readyState&&c._navigator.isCocoonJS;if(L.readyState>=3||e4)b2();else{t._playLock=!0,t._state="loading";var b1=function(){t._state="loaded",b2(),L.removeEventListener(c._canPlayEvent,b1,!1)};L.addEventListener(c._canPlayEvent,b1,!1),t._clearTimer(H._id)}}return H._id},pause:function(a){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(a)}}),s;for(var t=s._getSoundIds(a),m=0;m<t.length;m++){s._clearTimer(t[m]);var h=s._soundById(t[m]);if(h&&!h._paused&&(h._seek=s.seek(t[m]),h._rateSeek=0,h._paused=!0,s._stopFade(t[m]),h._node))if(s._webAudio){if(!h._node.bufferSource)continue;typeof h._node.bufferSource.stop>"u"?h._node.bufferSource.noteOff(0):h._node.bufferSource.stop(0),s._cleanBuffer(h._node)}else(!isNaN(h._node.duration)||h._node.duration===1/0)&&h._node.pause();arguments[1]||s._emit("pause",h?h._id:null)}return s},stop:function(a,s){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"stop",action:function(){t.stop(a)}}),t;for(var m=t._getSoundIds(a),h=0;h<m.length;h++){t._clearTimer(m[h]);var z=t._soundById(m[h]);z&&(z._seek=z._start||0,z._rateSeek=0,z._paused=!0,z._ended=!0,t._stopFade(m[h]),z._node&&(t._webAudio?z._node.bufferSource&&(typeof z._node.bufferSource.stop>"u"?z._node.bufferSource.noteOff(0):z._node.bufferSource.stop(0),t._cleanBuffer(z._node)):(!isNaN(z._node.duration)||z._node.duration===1/0)&&(z._node.currentTime=z._start||0,z._node.pause(),z._node.duration===1/0&&t._clearSound(z._node))),s||t._emit("stop",z._id))}return t},mute:function(a,s){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(a,s)}}),t;if(typeof s>"u")if(typeof a=="boolean")t._muted=a;else return t._muted;for(var m=t._getSoundIds(s),h=0;h<m.length;h++){var z=t._soundById(m[h]);z&&(z._muted=a,z._interval&&t._stopFade(z._id),t._webAudio&&z._node?z._node.gain.setValueAtTime(a?0:z._volume,c.ctx.currentTime):z._node&&(z._node.muted=c._muted?!0:a),t._emit("mute",z._id))}return t},volume:function(){var a=this,s=arguments,t,m;if(s.length===0)return a._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var h=a._getSoundIds(),z=h.indexOf(s[0]);z>=0?m=parseInt(s[0],10):t=parseFloat(s[0])}else s.length>=2&&(t=parseFloat(s[0]),m=parseInt(s[1],10));var H;if(typeof t<"u"&&t>=0&&t<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,s)}}),a;typeof m>"u"&&(a._volume=t),m=a._getSoundIds(m);for(var V=0;V<m.length;V++)H=a._soundById(m[V]),H&&(H._volume=t,s[2]||a._stopFade(m[V]),a._webAudio&&H._node&&!H._muted?H._node.gain.setValueAtTime(t,c.ctx.currentTime):H._node&&!H._muted&&(H._node.volume=t*c.volume()),a._emit("volume",H._id))}else return H=m?a._soundById(m):a._sounds[0],H?H._volume:0;return a},fade:function(a,s,t,m){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"fade",action:function(){h.fade(a,s,t,m)}}),h;a=Math.min(Math.max(0,parseFloat(a)),1),s=Math.min(Math.max(0,parseFloat(s)),1),t=parseFloat(t),h.volume(a,m);for(var z=h._getSoundIds(m),H=0;H<z.length;H++){var V=h._soundById(z[H]);if(V){if(m||h._stopFade(z[H]),h._webAudio&&!V._muted){var M=c.ctx.currentTime,C=M+t/1e3;V._volume=a,V._node.gain.setValueAtTime(a,M),V._node.gain.linearRampToValueAtTime(s,C)}h._startFadeInterval(V,a,s,t,z[H],typeof m>"u")}}return h},_startFadeInterval:function(a,s,t,m,h,z){var H=this,V=s,M=t-s,C=Math.abs(M/.01),N=Math.max(4,C>0?m/C:m),w=Date.now();a._fadeTo=t,a._interval=setInterval(function(){var P=(Date.now()-w)/m;w=Date.now(),V+=M*P,V=Math.round(V*100)/100,M<0?V=Math.max(t,V):V=Math.min(t,V),H._webAudio?a._volume=V:H.volume(V,a._id,!0),z&&(H._volume=V),(t<s&&V<=t||t>s&&V>=t)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,H.volume(t,a._id),H._emit("fade",a._id))},N)},_stopFade:function(a){var s=this,t=s._soundById(a);return t&&t._interval&&(s._webAudio&&t._node.gain.cancelScheduledValues(c.ctx.currentTime),clearInterval(t._interval),t._interval=null,s.volume(t._fadeTo,a),t._fadeTo=null,s._emit("fade",a)),s},loop:function(){var a=this,s=arguments,t,m,h;if(s.length===0)return a._loop;if(s.length===1)if(typeof s[0]=="boolean")t=s[0],a._loop=t;else return h=a._soundById(parseInt(s[0],10)),h?h._loop:!1;else s.length===2&&(t=s[0],m=parseInt(s[1],10));for(var z=a._getSoundIds(m),H=0;H<z.length;H++)h=a._soundById(z[H]),h&&(h._loop=t,a._webAudio&&h._node&&h._node.bufferSource&&(h._node.bufferSource.loop=t,t&&(h._node.bufferSource.loopStart=h._start||0,h._node.bufferSource.loopEnd=h._stop,a.playing(z[H])&&(a.pause(z[H],!0),a.play(z[H],!0)))));return a},rate:function(){var a=this,s=arguments,t,m;if(s.length===0)m=a._sounds[0]._id;else if(s.length===1){var h=a._getSoundIds(),z=h.indexOf(s[0]);z>=0?m=parseInt(s[0],10):t=parseFloat(s[0])}else s.length===2&&(t=parseFloat(s[0]),m=parseInt(s[1],10));var H;if(typeof t=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,s)}}),a;typeof m>"u"&&(a._rate=t),m=a._getSoundIds(m);for(var V=0;V<m.length;V++)if(H=a._soundById(m[V]),H){a.playing(m[V])&&(H._rateSeek=a.seek(m[V]),H._playStart=a._webAudio?c.ctx.currentTime:H._playStart),H._rate=t,a._webAudio&&H._node&&H._node.bufferSource?H._node.bufferSource.playbackRate.setValueAtTime(t,c.ctx.currentTime):H._node&&(H._node.playbackRate=t);var M=a.seek(m[V]),C=(a._sprite[H._sprite][0]+a._sprite[H._sprite][1])/1e3-M,N=C*1e3/Math.abs(H._rate);(a._endTimers[m[V]]||!H._paused)&&(a._clearTimer(m[V]),a._endTimers[m[V]]=setTimeout(a._ended.bind(a,H),N)),a._emit("rate",H._id)}}else return H=a._soundById(m),H?H._rate:a._rate;return a},seek:function(){var a=this,s=arguments,t,m;if(s.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(s.length===1){var h=a._getSoundIds(),z=h.indexOf(s[0]);z>=0?m=parseInt(s[0],10):a._sounds.length&&(m=a._sounds[0]._id,t=parseFloat(s[0]))}else s.length===2&&(t=parseFloat(s[0]),m=parseInt(s[1],10));if(typeof m>"u")return 0;if(typeof t=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,s)}}),a;var H=a._soundById(m);if(H)if(typeof t=="number"&&t>=0){var V=a.playing(m);V&&a.pause(m,!0),H._seek=t,H._ended=!1,a._clearTimer(m),!a._webAudio&&H._node&&!isNaN(H._node.duration)&&(H._node.currentTime=t);var M=function(){V&&a.play(m,!0),a._emit("seek",m)};if(V&&!a._webAudio){var C=function(){a._playLock?setTimeout(C,0):M()};setTimeout(C,0)}else M()}else if(a._webAudio){var N=a.playing(m)?c.ctx.currentTime-H._playStart:0,w=H._rateSeek?H._rateSeek-H._seek:0;return H._seek+(w+N*Math.abs(H._rate))}else return H._node.currentTime;return a},playing:function(a){var s=this;if(typeof a=="number"){var t=s._soundById(a);return t?!t._paused:!1}for(var m=0;m<s._sounds.length;m++)if(!s._sounds[m]._paused)return!0;return!1},duration:function(a){var s=this,t=s._duration,m=s._soundById(a);return m&&(t=s._sprite[m._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var a=this,s=a._sounds,t=0;t<s.length;t++)s[t]._paused||a.stop(s[t]._id),a._webAudio||(a._clearSound(s[t]._node),s[t]._node.removeEventListener("error",s[t]._errorFn,!1),s[t]._node.removeEventListener(c._canPlayEvent,s[t]._loadFn,!1),s[t]._node.removeEventListener("ended",s[t]._endFn,!1),c._releaseHtml5Audio(s[t]._node)),delete s[t]._node,a._clearTimer(s[t]._id);var m=c._howls.indexOf(a);m>=0&&c._howls.splice(m,1);var h=!0;for(t=0;t<c._howls.length;t++)if(c._howls[t]._src===a._src||a._src.indexOf(c._howls[t]._src)>=0){h=!1;break}return n&&h&&delete n[a._src],c.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,s,t,m){var h=this,z=h["_on"+a];return typeof s=="function"&&z.push(m?{id:t,fn:s,once:m}:{id:t,fn:s}),h},off:function(a,s,t){var m=this,h=m["_on"+a],z=0;if(typeof s=="number"&&(t=s,s=null),s||t)for(z=0;z<h.length;z++){var H=t===h[z].id;if(s===h[z].fn&&H||!s&&H){h.splice(z,1);break}}else if(a)m["_on"+a]=[];else{var V=Object.keys(m);for(z=0;z<V.length;z++)V[z].indexOf("_on")===0&&Array.isArray(m[V[z]])&&(m[V[z]]=[])}return m},once:function(a,s,t){var m=this;return m.on(a,s,t,1),m},_emit:function(a,s,t){for(var m=this,h=m["_on"+a],z=h.length-1;z>=0;z--)(!h[z].id||h[z].id===s||a==="load")&&(setTimeout((function(H){H.call(this,s,t)}).bind(m,h[z].fn),0),h[z].once&&m.off(a,h[z].fn,h[z].id));return m._loadQueue(a),m},_loadQueue:function(a){var s=this;if(s._queue.length>0){var t=s._queue[0];t.event===a&&(s._queue.shift(),s._loadQueue()),a||t.action()}return s},_ended:function(a){var s=this,t=a._sprite;if(!s._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(s._ended.bind(s,a),100),s;var m=!!(a._loop||s._sprite[t][2]);if(s._emit("end",a._id),!s._webAudio&&m&&s.stop(a._id,!0).play(a._id),s._webAudio&&m){s._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=c.ctx.currentTime;var h=(a._stop-a._start)*1e3/Math.abs(a._rate);s._endTimers[a._id]=setTimeout(s._ended.bind(s,a),h)}return s._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,s._clearTimer(a._id),s._cleanBuffer(a._node),c._autoSuspend()),!s._webAudio&&!m&&s.stop(a._id,!0),s},_clearTimer:function(a){var s=this;if(s._endTimers[a]){if(typeof s._endTimers[a]!="function")clearTimeout(s._endTimers[a]);else{var t=s._soundById(a);t&&t._node&&t._node.removeEventListener("ended",s._endTimers[a],!1)}delete s._endTimers[a]}return s},_soundById:function(a){for(var s=this,t=0;t<s._sounds.length;t++)if(a===s._sounds[t]._id)return s._sounds[t];return null},_inactiveSound:function(){var a=this;a._drain();for(var s=0;s<a._sounds.length;s++)if(a._sounds[s]._ended)return a._sounds[s].reset();return new e(a)},_drain:function(){var a=this,s=a._pool,t=0,m=0;if(!(a._sounds.length<s)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&t++;for(m=a._sounds.length-1;m>=0;m--){if(t<=s)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),t--)}}},_getSoundIds:function(a){var s=this;if(typeof a>"u"){for(var t=[],m=0;m<s._sounds.length;m++)t.push(s._sounds[m]._id);return t}else return[a]},_refreshBuffer:function(a){var s=this;return a._node.bufferSource=c.ctx.createBufferSource(),a._node.bufferSource.buffer=n[s._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,c.ctx.currentTime),s},_cleanBuffer:function(a){var s=this,t=c._navigator&&c._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return s;if(c._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),t))try{a.bufferSource.buffer=c._scratchBuffer}catch{}return a.bufferSource=null,s},_clearSound:function(a){var s=/MSIE |Trident\//.test(c._navigator&&c._navigator.userAgent);s||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var e=function(a){this._parent=a,this.init()};e.prototype={init:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++c._counter,s._sounds.push(a),a.create(),a},create:function(){var a=this,s=a._parent,t=c._muted||a._muted||a._parent._muted?0:a._volume;return s._webAudio?(a._node=typeof c.ctx.createGain>"u"?c.ctx.createGainNode():c.ctx.createGain(),a._node.gain.setValueAtTime(t,c.ctx.currentTime),a._node.paused=!0,a._node.connect(c.masterGain)):c.noAudio||(a._node=c._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(c._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=s._src,a._node.preload=s._preload===!0?"auto":s._preload,a._node.volume=t*c.volume(),a._node.load()),a},reset:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++c._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,s=a._parent;s._duration=Math.ceil(a._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),a._node.removeEventListener(c._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,s=a._parent;s._duration===1/0&&(s._duration=Math.ceil(a._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var n={},o=function(a){var s=a._src;if(n[s]){a._duration=n[s].duration,v(a);return}if(/^data:[^;]+;base64,/.test(s)){for(var t=atob(s.split(",")[1]),m=new Uint8Array(t.length),h=0;h<t.length;++h)m[h]=t.charCodeAt(h);l(m.buffer,a)}else{var z=new XMLHttpRequest;z.open(a._xhr.method,s,!0),z.withCredentials=a._xhr.withCredentials,z.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(H){z.setRequestHeader(H,a._xhr.headers[H])}),z.onload=function(){var H=(z.status+"")[0];if(H!=="0"&&H!=="2"&&H!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+z.status+".");return}l(z.response,a)},z.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete n[s],a.load())},f(z)}},f=function(a){try{a.send()}catch{a.onerror()}},l=function(a,s){var t=function(){s._emit("loaderror",null,"Decoding audio data failed.")},m=function(h){h&&s._sounds.length>0?(n[s._src]=h,v(s,h)):t()};typeof Promise<"u"&&c.ctx.decodeAudioData.length===1?c.ctx.decodeAudioData(a).then(m).catch(t):c.ctx.decodeAudioData(a,m,t)},v=function(a,s){s&&!a._duration&&(a._duration=s.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},u=function(){if(c.usingWebAudio){try{typeof AudioContext<"u"?c.ctx=new AudioContext:typeof webkitAudioContext<"u"?c.ctx=new webkitAudioContext:c.usingWebAudio=!1}catch{c.usingWebAudio=!1}c.ctx||(c.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(c._navigator&&c._navigator.platform),s=c._navigator&&c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=s?parseInt(s[1],10):null;if(a&&t&&t<9){var m=/safari/.test(c._navigator&&c._navigator.userAgent.toLowerCase());c._navigator&&!m&&(c.usingWebAudio=!1)}c.usingWebAudio&&(c.masterGain=typeof c.ctx.createGain>"u"?c.ctx.createGainNode():c.ctx.createGain(),c.masterGain.gain.setValueAtTime(c._muted?0:c._volume,c.ctx.currentTime),c.masterGain.connect(c.ctx.destination)),c._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:c,Howl:i}}),typeof Y2<"u"&&(Y2.Howler=c,Y2.Howl=i),typeof global<"u"?(global.HowlerGlobal=r,global.Howler=c,global.Howl=i,global.Sound=e):typeof window<"u"&&(window.HowlerGlobal=r,window.Howler=c,window.Howl=i,window.Sound=e)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(c){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var e=i._howls.length-1;e>=0;e--)i._howls[e].stereo(c);return i},HowlerGlobal.prototype.pos=function(c,i,e){var n=this;if(!n.ctx||!n.ctx.listener)return n;if(i=typeof i!="number"?n._pos[1]:i,e=typeof e!="number"?n._pos[2]:e,typeof c=="number")n._pos=[c,i,e],typeof n.ctx.listener.positionX<"u"?(n.ctx.listener.positionX.setTargetAtTime(n._pos[0],Howler.ctx.currentTime,.1),n.ctx.listener.positionY.setTargetAtTime(n._pos[1],Howler.ctx.currentTime,.1),n.ctx.listener.positionZ.setTargetAtTime(n._pos[2],Howler.ctx.currentTime,.1)):n.ctx.listener.setPosition(n._pos[0],n._pos[1],n._pos[2]);else return n._pos;return n},HowlerGlobal.prototype.orientation=function(c,i,e,n,o,f){var l=this;if(!l.ctx||!l.ctx.listener)return l;var v=l._orientation;if(i=typeof i!="number"?v[1]:i,e=typeof e!="number"?v[2]:e,n=typeof n!="number"?v[3]:n,o=typeof o!="number"?v[4]:o,f=typeof f!="number"?v[5]:f,typeof c=="number")l._orientation=[c,i,e,n,o,f],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(c,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(e,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(f,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(c,i,e,n,o,f);else return v;return l},Howl.prototype.init=function(c){return function(i){var e=this;return e._orientation=i.orientation||[1,0,0],e._stereo=i.stereo||null,e._pos=i.pos||null,e._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},e._onstereo=i.onstereo?[{fn:i.onstereo}]:[],e._onpos=i.onpos?[{fn:i.onpos}]:[],e._onorientation=i.onorientation?[{fn:i.onorientation}]:[],c.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(c,i){var e=this;if(!e._webAudio)return e;if(e._state!=="loaded")return e._queue.push({event:"stereo",action:function(){e.stereo(c,i)}}),e;var n=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof c=="number")e._stereo=c,e._pos=[c,0,0];else return e._stereo;for(var o=e._getSoundIds(i),f=0;f<o.length;f++){var l=e._soundById(o[f]);if(l)if(typeof c=="number")l._stereo=c,l._pos=[c,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&r(l,n),n==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(c,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(c,0,0):l._panner.pan.setValueAtTime(c,Howler.ctx.currentTime)),e._emit("stereo",l._id);else return l._stereo}return e},Howl.prototype.pos=function(c,i,e,n){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(c,i,e,n)}}),o;if(i=typeof i!="number"?0:i,e=typeof e!="number"?-.5:e,typeof n>"u")if(typeof c=="number")o._pos=[c,i,e];else return o._pos;for(var f=o._getSoundIds(n),l=0;l<f.length;l++){var v=o._soundById(f[l]);if(v)if(typeof c=="number")v._pos=[c,i,e],v._node&&((!v._panner||v._panner.pan)&&r(v,"spatial"),typeof v._panner.positionX<"u"?(v._panner.positionX.setValueAtTime(c,Howler.ctx.currentTime),v._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),v._panner.positionZ.setValueAtTime(e,Howler.ctx.currentTime)):v._panner.setPosition(c,i,e)),o._emit("pos",v._id);else return v._pos}return o},Howl.prototype.orientation=function(c,i,e,n){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(c,i,e,n)}}),o;if(i=typeof i!="number"?o._orientation[1]:i,e=typeof e!="number"?o._orientation[2]:e,typeof n>"u")if(typeof c=="number")o._orientation=[c,i,e];else return o._orientation;for(var f=o._getSoundIds(n),l=0;l<f.length;l++){var v=o._soundById(f[l]);if(v)if(typeof c=="number")v._orientation=[c,i,e],v._node&&(v._panner||(v._pos||(v._pos=o._pos||[0,0,-.5]),r(v,"spatial")),typeof v._panner.orientationX<"u"?(v._panner.orientationX.setValueAtTime(c,Howler.ctx.currentTime),v._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),v._panner.orientationZ.setValueAtTime(e,Howler.ctx.currentTime)):v._panner.setOrientation(c,i,e)),o._emit("orientation",v._id);else return v._orientation}return o},Howl.prototype.pannerAttr=function(){var c=this,i=arguments,e,n,o;if(!c._webAudio)return c;if(i.length===0)return c._pannerAttr;if(i.length===1)if(typeof i[0]=="object")e=i[0],typeof n>"u"&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),c._pannerAttr={coneInnerAngle:typeof e.pannerAttr.coneInnerAngle<"u"?e.pannerAttr.coneInnerAngle:c._coneInnerAngle,coneOuterAngle:typeof e.pannerAttr.coneOuterAngle<"u"?e.pannerAttr.coneOuterAngle:c._coneOuterAngle,coneOuterGain:typeof e.pannerAttr.coneOuterGain<"u"?e.pannerAttr.coneOuterGain:c._coneOuterGain,distanceModel:typeof e.pannerAttr.distanceModel<"u"?e.pannerAttr.distanceModel:c._distanceModel,maxDistance:typeof e.pannerAttr.maxDistance<"u"?e.pannerAttr.maxDistance:c._maxDistance,refDistance:typeof e.pannerAttr.refDistance<"u"?e.pannerAttr.refDistance:c._refDistance,rolloffFactor:typeof e.pannerAttr.rolloffFactor<"u"?e.pannerAttr.rolloffFactor:c._rolloffFactor,panningModel:typeof e.pannerAttr.panningModel<"u"?e.pannerAttr.panningModel:c._panningModel});else return o=c._soundById(parseInt(i[0],10)),o?o._pannerAttr:c._pannerAttr;else i.length===2&&(e=i[0],n=parseInt(i[1],10));for(var f=c._getSoundIds(n),l=0;l<f.length;l++)if(o=c._soundById(f[l]),o){var v=o._pannerAttr;v={coneInnerAngle:typeof e.coneInnerAngle<"u"?e.coneInnerAngle:v.coneInnerAngle,coneOuterAngle:typeof e.coneOuterAngle<"u"?e.coneOuterAngle:v.coneOuterAngle,coneOuterGain:typeof e.coneOuterGain<"u"?e.coneOuterGain:v.coneOuterGain,distanceModel:typeof e.distanceModel<"u"?e.distanceModel:v.distanceModel,maxDistance:typeof e.maxDistance<"u"?e.maxDistance:v.maxDistance,refDistance:typeof e.refDistance<"u"?e.refDistance:v.refDistance,rolloffFactor:typeof e.rolloffFactor<"u"?e.rolloffFactor:v.rolloffFactor,panningModel:typeof e.panningModel<"u"?e.panningModel:v.panningModel};var u=o._panner;u||(o._pos||(o._pos=c._pos||[0,0,-.5]),r(o,"spatial"),u=o._panner),u.coneInnerAngle=v.coneInnerAngle,u.coneOuterAngle=v.coneOuterAngle,u.coneOuterGain=v.coneOuterGain,u.distanceModel=v.distanceModel,u.maxDistance=v.maxDistance,u.refDistance=v.refDistance,u.rolloffFactor=v.rolloffFactor,u.panningModel=v.panningModel}return c},Sound.prototype.init=function(c){return function(){var i=this,e=i._parent;i._orientation=e._orientation,i._stereo=e._stereo,i._pos=e._pos,i._pannerAttr=e._pannerAttr,c.call(this),i._stereo?e.stereo(i._stereo):i._pos&&e.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(c){return function(){var i=this,e=i._parent;return i._orientation=e._orientation,i._stereo=e._stereo,i._pos=e._pos,i._pannerAttr=e._pannerAttr,i._stereo?e.stereo(i._stereo):i._pos?e.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,e._refreshBuffer(i)),c.call(this)}}(Sound.prototype.reset);var r=function(c,i){i=i||"spatial",i==="spatial"?(c._panner=Howler.ctx.createPanner(),c._panner.coneInnerAngle=c._pannerAttr.coneInnerAngle,c._panner.coneOuterAngle=c._pannerAttr.coneOuterAngle,c._panner.coneOuterGain=c._pannerAttr.coneOuterGain,c._panner.distanceModel=c._pannerAttr.distanceModel,c._panner.maxDistance=c._pannerAttr.maxDistance,c._panner.refDistance=c._pannerAttr.refDistance,c._panner.rolloffFactor=c._pannerAttr.rolloffFactor,c._panner.panningModel=c._pannerAttr.panningModel,typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(c._pos[0],Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(c._pos[1],Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(c._pos[2],Howler.ctx.currentTime)):c._panner.setPosition(c._pos[0],c._pos[1],c._pos[2]),typeof c._panner.orientationX<"u"?(c._panner.orientationX.setValueAtTime(c._orientation[0],Howler.ctx.currentTime),c._panner.orientationY.setValueAtTime(c._orientation[1],Howler.ctx.currentTime),c._panner.orientationZ.setValueAtTime(c._orientation[2],Howler.ctx.currentTime)):c._panner.setOrientation(c._orientation[0],c._orientation[1],c._orientation[2])):(c._panner=Howler.ctx.createStereoPanner(),c._panner.pan.setValueAtTime(c._stereo,Howler.ctx.currentTime)),c._panner.connect(c._node),c._paused||c._parent.pause(c._id,!0).play(c._id,!0)}})()});var S2=class{constructor(c,i,e="transparent",n="white",o=20,f=1){this._x=0,this._y=0,this._size=20,this._x=c,this._y=i,this._fillColor=e,this._borderColor=n,this._borderWidth=f,this._size=o}draw(c){c.fillStyle=this._borderColor,c.fillRect(this._x,this._y,this._size,this._size),c.fillStyle="rgba(255, 255, 255,0.5)";let i=this._size-this._borderWidth*2;c.fillRect(this._x+this._borderWidth,this._y+this._borderWidth,i,i),c.fillStyle=this._fillColor,i=this._size-this._borderWidth*4,c.fillRect(this._x+this._borderWidth*2,this._y+this._borderWidth*2,i,i)}},Y=class r{constructor(c,i){this._toDraw=!1,this._matrix=c,this._index=i}forEachCells(c){this._matrix.forEach((i,e)=>{this._matrix[e].forEach((n,o)=>{c(this._matrix[e][o],e,o)})})}everyCells(c){return this._matrix.every((i,e)=>this._matrix[e].every((n,o)=>c(this._matrix[e][o],e,o)))}someCells(c){return this._matrix.some((i,e)=>this._matrix[e].some((n,o)=>c(this._matrix[e][o],e,o)))}mapCells(c){this.forEachCells((i,e,n)=>{this._matrix[e][n]=c(i,e,n)})}setColor(c){this.mapCells(i=>(i.color=c,i))}markFigureToDraw(){this.mapCells(c=>(c.y>=0&&(c.drawed=!0),c))}getIsFigureReadyToMatrix(){return this.forEachCells(c=>c.drawed)}markAllCellsToDraw(){this.mapCells(c=>(c.drawed=!0,c))}removeFigureInMatrix(c,i=0,e=0){this.forEachCells(n=>{if(n.y>=0){let{x:o,y:f,active:l}=n;l&&(c[o+i][f+e].color=void 0,c[o+i][f+e].drawed=!1)}})}downOneLevel(){this.mapCells(c=>(c.y++,c))}bothFiguresHaveSameActiveColumns(c){return c.everyCells((i,e,n)=>{let o=this._matrix[e][n];return o.x==i.x&&o.active==i.active})}checkIfCanMove(c,i){return this.everyCells(e=>{let n=e.x+c,o=n>=0&&n<i.length&&e.y>=0,f=!!i[n]&&i[n][e.y]?.drawed;return o&&!f})}hasSpaceInColumn(c,i){return this._matrix.every(e=>{let n=e[i];return n&&!n.active&&!c[n.x][n.y]?.drawed})}goRight(c){if(c&&this.hasSpaceInColumn(c,this._matrix.length-1)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(n=>(n.active=!1,n))),this.forEachCells((e,n,o)=>{e.active&&(i[n][o+1].active=!0)}),this._matrix=i}else this.checkIfCanMove(1,c)&&this.mapCells(i=>(i.x++,i))}goLeft(c){if(this.hasSpaceInColumn(c,0)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(n=>(n.active=!1,n))),this.forEachCells((e,n,o)=>{e.active&&(i[n][o-1].active=!0)}),this._matrix=i}else this.checkIfCanMove(-1,c)&&this.mapCells(i=>(i.x--,i))}canDrawInMatrix(c){return!this.someCells(i=>(c[i.x][i.y]?.drawed||i.y==c[0].length)&&i.active)}cloneCells(){return JSON.parse(JSON.stringify(this._matrix))}rotate90(){let c=this._matrix.length,i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(n=>(n.active=!1,n))),this.forEachCells((e,n,o)=>{i[c-1-n][o].active=e.active}),this._matrix=i}rotate45(c){let i=this._matrix.length,e=JSON.parse(JSON.stringify(this._matrix));e.forEach(o=>o.forEach(f=>(f.active=!1,f)));let n=!0;for(let o=0;o<i;o++)for(let f=0;f<i;f++){let l=this._matrix[i-f-1][o].active;if(l){let{x:v,y:u}=e[o][f];if(e[o][f].active=l,c[v][u]?.drawed){n=!1;break}}}n&&(this._matrix=e)}static getRandomFigure(){let c=[new r([[{x:0,y:0,active:!0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1,active:!0},{x:1,y:1},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],0),new r([[{x:0,y:0},{x:1,y:0,active:!0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],1),new r([[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],[{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0},{x:3,y:2,active:!0}],[{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3}]],2),new r([[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0}]],3),new r([[{x:0,y:0,active:!0},{x:1,y:0,active:!0}],[{x:0,y:1,active:!0},{x:1,y:1,active:!0}]],4)],i=Math.floor(Math.random()*c.length),e=c[i];return i==0?e.setColor("rgb(139, 50, 168)"):i==1?e.setColor("rgb(1, 105, 58)"):i==2?e.setColor("rgb(50, 85, 168)"):i==3?e.setColor("rgb(131, 121, 242)"):e.setColor("rgb(179, 43, 43)"),e.mapCells(n=>(n.active||(n.active=!1),n)),e}};var E1={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var I1={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]};var s4={prefix:"fas",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},U1=s4;var G1={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]};var W1={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};var q1={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var o4={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},j1=o4;var X1={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};var Y1={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function $1(r,c){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);c&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),i.push.apply(i,e)}return i}function p(r){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?$1(Object(i),!0).forEach(function(e){S(r,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):$1(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}function I2(r){"@babel/helpers - typeof";return I2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},I2(r)}function t4(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}function Q1(r,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function f4(r,c,i){return c&&Q1(r.prototype,c),i&&Q1(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}function S(r,c,i){return c in r?Object.defineProperty(r,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[c]=i,r}function v1(r,c){return m4(r)||H4(r,c)||C3(r,c)||z4()}function L2(r){return l4(r)||v4(r)||C3(r)||h4()}function l4(r){if(Array.isArray(r))return a1(r)}function m4(r){if(Array.isArray(r))return r}function v4(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function H4(r,c){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var e=[],n=!0,o=!1,f,l;try{for(i=i.call(r);!(n=(f=i.next()).done)&&(e.push(f.value),!(c&&e.length===c));n=!0);}catch(v){o=!0,l=v}finally{try{!n&&i.return!=null&&i.return()}finally{if(o)throw l}}return e}}function C3(r,c){if(r){if(typeof r=="string")return a1(r,c);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a1(r,c)}}function a1(r,c){(c==null||c>r.length)&&(c=r.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=r[i];return e}function h4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K1=function(){},H1={},L3={},g3=null,x3={mark:K1,measure:K1};try{typeof window<"u"&&(H1=window),typeof document<"u"&&(L3=document),typeof MutationObserver<"u"&&(g3=MutationObserver),typeof performance<"u"&&(x3=performance)}catch{}var u4=H1.navigator||{},J1=u4.userAgent,Z1=J1===void 0?"":J1,Q=H1,x=L3,c3=g3,_2=x3,i0=!!Q.document,j=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",b3=~Z1.indexOf("MSIE")||~Z1.indexOf("Trident/"),k2,A2,T2,P2,F2,G="___FONT_AWESOME___",e1=16,N3="fa",w3="svg-inline--fa",r2="data-fa-i2svg",r1="data-fa-pseudo-element",p4="data-fa-pseudo-element-pending",h1="data-prefix",z1="data-icon",a3="fontawesome-i2svg",V4="async",d4=["HTML","HEAD","STYLE","SCRIPT"],y3=function(){try{return!0}catch{return!1}}(),g="classic",b="sharp",u1=[g,b];function g2(r){return new Proxy(r,{get:function(i,e){return e in i?i[e]:i[g]}})}var p2=g2((k2={},S(k2,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(k2,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),k2)),V2=g2((A2={},S(A2,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(A2,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),A2)),d2=g2((T2={},S(T2,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(T2,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),T2)),M4=g2((P2={},S(P2,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(P2,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),P2)),C4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,S3="fa-layers-text",L4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g4=g2((F2={},S(F2,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(F2,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),F2)),_3=[1,2,3,4,5,6,7,8,9,10],x4=_3.concat([11,12,13,14,15,16,17,18,19,20]),b4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],a2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M2=new Set;Object.keys(V2[g]).map(M2.add.bind(M2));Object.keys(V2[b]).map(M2.add.bind(M2));var N4=[].concat(u1,L2(M2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",a2.GROUP,a2.SWAP_OPACITY,a2.PRIMARY,a2.SECONDARY]).concat(_3.map(function(r){return"".concat(r,"x")})).concat(x4.map(function(r){return"w-".concat(r)})),z2=Q.FontAwesomeConfig||{};function w4(r){var c=x.querySelector("script["+r+"]");if(c)return c.getAttribute(r)}function y4(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}x&&typeof x.querySelector=="function"&&(e3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],e3.forEach(function(r){var c=v1(r,2),i=c[0],e=c[1],n=y4(w4(i));n!=null&&(z2[e]=n)}));var e3,k3={styleDefault:"solid",familyDefault:"classic",cssPrefix:N3,replacementClass:w3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z2.familyPrefix&&(z2.cssPrefix=z2.familyPrefix);var f2=p(p({},k3),z2);f2.autoReplaceSvg||(f2.observeMutations=!1);var d={};Object.keys(k3).forEach(function(r){Object.defineProperty(d,r,{enumerable:!0,set:function(i){f2[r]=i,u2.forEach(function(e){return e(d)})},get:function(){return f2[r]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(c){f2.cssPrefix=c,u2.forEach(function(i){return i(d)})},get:function(){return f2.cssPrefix}});Q.FontAwesomeConfig=d;var u2=[];function S4(r){return u2.push(r),function(){u2.splice(u2.indexOf(r),1)}}var $=e1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _4(r){if(!(!r||!j)){var c=x.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=r;for(var i=x.head.childNodes,e=null,n=i.length-1;n>-1;n--){var o=i[n],f=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=o)}return x.head.insertBefore(c,e),r}}var k4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C2(){for(var r=12,c="";r-- >0;)c+=k4[Math.random()*62|0];return c}function l2(r){for(var c=[],i=(r||[]).length>>>0;i--;)c[i]=r[i];return c}function p1(r){return r.classList?l2(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(c){return c})}function A3(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A4(r){return Object.keys(r||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(A3(r[i]),'" ')},"").trim()}function W2(r){return Object.keys(r||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(r[i].trim(),";")},"")}function V1(r){return r.size!==I.size||r.x!==I.x||r.y!==I.y||r.rotate!==I.rotate||r.flipX||r.flipY}function T4(r){var c=r.transform,i=r.containerWidth,e=r.iconWidth,n={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(c.x*32,", ").concat(c.y*32,") "),f="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),l="rotate(".concat(c.rotate," 0 0)"),v={transform:"".concat(o," ").concat(f," ").concat(l)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:n,inner:v,path:u}}function P4(r){var c=r.transform,i=r.width,e=i===void 0?e1:i,n=r.height,o=n===void 0?e1:n,f=r.startCentered,l=f===void 0?!1:f,v="";return l&&b3?v+="translate(".concat(c.x/$-e/2,"em, ").concat(c.y/$-o/2,"em) "):l?v+="translate(calc(-50% + ".concat(c.x/$,"em), calc(-50% + ").concat(c.y/$,"em)) "):v+="translate(".concat(c.x/$,"em, ").concat(c.y/$,"em) "),v+="scale(".concat(c.size/$*(c.flipX?-1:1),", ").concat(c.size/$*(c.flipY?-1:1),") "),v+="rotate(".concat(c.rotate,"deg) "),v}var F4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function T3(){var r=N3,c=w3,i=d.cssPrefix,e=d.replacementClass,n=F4;if(i!==r||e!==c){var o=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),l=new RegExp("\\.".concat(c),"g");n=n.replace(o,".".concat(i,"-")).replace(f,"--".concat(i,"-")).replace(l,".".concat(e))}return n}var r3=!1;function K2(){d.autoAddCss&&!r3&&(_4(T3()),r3=!0)}var B4={mixout:function(){return{dom:{css:T3,insertCss:K2}}},hooks:function(){return{beforeDOMElementCreation:function(){K2()},beforeI2svg:function(){K2()}}}},W=Q||{};W[G]||(W[G]={});W[G].styles||(W[G].styles={});W[G].hooks||(W[G].hooks={});W[G].shims||(W[G].shims=[]);var R=W[G],P3=[],D4=function r(){x.removeEventListener("DOMContentLoaded",r),U2=1,P3.map(function(c){return c()})},U2=!1;j&&(U2=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),U2||x.addEventListener("DOMContentLoaded",D4));function R4(r){j&&(U2?setTimeout(r,0):P3.push(r))}function x2(r){var c=r.tag,i=r.attributes,e=i===void 0?{}:i,n=r.children,o=n===void 0?[]:n;return typeof r=="string"?A3(r):"<".concat(c," ").concat(A4(e),">").concat(o.map(x2).join(""),"</").concat(c,">")}function i3(r,c,i){if(r&&r[c]&&r[c][i])return{prefix:c,iconName:i,icon:r[c][i]}}var O4=function(c,i){return function(e,n,o,f){return c.call(i,e,n,o,f)}},J2=function(c,i,e,n){var o=Object.keys(c),f=o.length,l=n!==void 0?O4(i,n):i,v,u,a;for(e===void 0?(v=1,a=c[o[0]]):(v=0,a=e);v<f;v++)u=o[v],a=l(a,c[u],u,c);return a};function E4(r){for(var c=[],i=0,e=r.length;i<e;){var n=r.charCodeAt(i++);if(n>=55296&&n<=56319&&i<e){var o=r.charCodeAt(i++);(o&64512)==56320?c.push(((n&1023)<<10)+(o&1023)+65536):(c.push(n),i--)}else c.push(n)}return c}function i1(r){var c=E4(r);return c.length===1?c[0].toString(16):null}function I4(r,c){var i=r.length,e=r.charCodeAt(c),n;return e>=55296&&e<=56319&&i>c+1&&(n=r.charCodeAt(c+1),n>=56320&&n<=57343)?(e-55296)*1024+n-56320+65536:e}function n3(r){return Object.keys(r).reduce(function(c,i){var e=r[i],n=!!e.icon;return n?c[e.iconName]=e.icon:c[i]=e,c},{})}function n1(r,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,n=e===void 0?!1:e,o=n3(c);typeof R.hooks.addPack=="function"&&!n?R.hooks.addPack(r,n3(c)):R.styles[r]=p(p({},R.styles[r]||{}),o),r==="fas"&&n1("fa",c)}var B2,D2,R2,s2=R.styles,U4=R.shims,G4=(B2={},S(B2,g,Object.values(d2[g])),S(B2,b,Object.values(d2[b])),B2),d1=null,F3={},B3={},D3={},R3={},O3={},W4=(D2={},S(D2,g,Object.keys(p2[g])),S(D2,b,Object.keys(p2[b])),D2);function q4(r){return~N4.indexOf(r)}function j4(r,c){var i=c.split("-"),e=i[0],n=i.slice(1).join("-");return e===r&&n!==""&&!q4(n)?n:null}var E3=function(){var c=function(o){return J2(s2,function(f,l,v){return f[v]=J2(l,o,{}),f},{})};F3=c(function(n,o,f){if(o[3]&&(n[o[3]]=f),o[2]){var l=o[2].filter(function(v){return typeof v=="number"});l.forEach(function(v){n[v.toString(16)]=f})}return n}),B3=c(function(n,o,f){if(n[f]=f,o[2]){var l=o[2].filter(function(v){return typeof v=="string"});l.forEach(function(v){n[v]=f})}return n}),O3=c(function(n,o,f){var l=o[2];return n[f]=f,l.forEach(function(v){n[v]=f}),n});var i="far"in s2||d.autoFetchSvg,e=J2(U4,function(n,o){var f=o[0],l=o[1],v=o[2];return l==="far"&&!i&&(l="fas"),typeof f=="string"&&(n.names[f]={prefix:l,iconName:v}),typeof f=="number"&&(n.unicodes[f.toString(16)]={prefix:l,iconName:v}),n},{names:{},unicodes:{}});D3=e.names,R3=e.unicodes,d1=q2(d.styleDefault,{family:d.familyDefault})};S4(function(r){d1=q2(r.styleDefault,{family:d.familyDefault})});E3();function M1(r,c){return(F3[r]||{})[c]}function X4(r,c){return(B3[r]||{})[c]}function e2(r,c){return(O3[r]||{})[c]}function I3(r){return D3[r]||{prefix:null,iconName:null}}function Y4(r){var c=R3[r],i=M1("fas",r);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function K(){return d1}var C1=function(){return{prefix:null,iconName:null,rest:[]}};function q2(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?g:i,n=p2[e][r],o=V2[e][r]||V2[e][n],f=r in R.styles?r:null;return o||f||null}var s3=(R2={},S(R2,g,Object.keys(d2[g])),S(R2,b,Object.keys(d2[b])),R2);function j2(r){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,n=e===void 0?!1:e,o=(c={},S(c,g,"".concat(d.cssPrefix,"-").concat(g)),S(c,b,"".concat(d.cssPrefix,"-").concat(b)),c),f=null,l=g;(r.includes(o[g])||r.some(function(u){return s3[g].includes(u)}))&&(l=g),(r.includes(o[b])||r.some(function(u){return s3[b].includes(u)}))&&(l=b);var v=r.reduce(function(u,a){var s=j4(d.cssPrefix,a);if(s2[a]?(a=G4[l].includes(a)?M4[l][a]:a,f=a,u.prefix=a):W4[l].indexOf(a)>-1?(f=a,u.prefix=q2(a,{family:l})):s?u.iconName=s:a!==d.replacementClass&&a!==o[g]&&a!==o[b]&&u.rest.push(a),!n&&u.prefix&&u.iconName){var t=f==="fa"?I3(u.iconName):{},m=e2(u.prefix,u.iconName);t.prefix&&(f=null),u.iconName=t.iconName||m||u.iconName,u.prefix=t.prefix||u.prefix,u.prefix==="far"&&!s2.far&&s2.fas&&!d.autoFetchSvg&&(u.prefix="fas")}return u},C1());return(r.includes("fa-brands")||r.includes("fab"))&&(v.prefix="fab"),(r.includes("fa-duotone")||r.includes("fad"))&&(v.prefix="fad"),!v.prefix&&l===b&&(s2.fass||d.autoFetchSvg)&&(v.prefix="fass",v.iconName=e2(v.prefix,v.iconName)||v.iconName),(v.prefix==="fa"||f==="fa")&&(v.prefix=K()||"fas"),v}var $4=function(){function r(){t4(this,r),this.definitions={}}return f4(r,[{key:"add",value:function(){for(var i=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var f=n.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(l){i.definitions[l]=p(p({},i.definitions[l]||{}),f[l]),n1(l,f[l]);var v=d2[g][l];v&&n1(v,f[l]),E3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(o){var f=n[o],l=f.prefix,v=f.iconName,u=f.icon,a=u[2];i[l]||(i[l]={}),a.length>0&&a.forEach(function(s){typeof s=="string"&&(i[l][s]=u)}),i[l][v]=u}),i}}]),r}(),o3=[],o2={},t2={},Q4=Object.keys(t2);function K4(r,c){var i=c.mixoutsTo;return o3=r,o2={},Object.keys(t2).forEach(function(e){Q4.indexOf(e)===-1&&delete t2[e]}),o3.forEach(function(e){var n=e.mixout?e.mixout():{};if(Object.keys(n).forEach(function(f){typeof n[f]=="function"&&(i[f]=n[f]),I2(n[f])==="object"&&Object.keys(n[f]).forEach(function(l){i[f]||(i[f]={}),i[f][l]=n[f][l]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(f){o2[f]||(o2[f]=[]),o2[f].push(o[f])})}e.provides&&e.provides(t2)}),i}function s1(r,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),n=2;n<i;n++)e[n-2]=arguments[n];var o=o2[r]||[];return o.forEach(function(f){c=f.apply(null,[c].concat(e))}),c}function i2(r){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var n=o2[r]||[];n.forEach(function(o){o.apply(null,i)})}function q(){var r=arguments[0],c=Array.prototype.slice.call(arguments,1);return t2[r]?t2[r].apply(null,c):void 0}function o1(r){r.prefix==="fa"&&(r.prefix="fas");var c=r.iconName,i=r.prefix||K();if(c)return c=e2(i,c)||c,i3(U3.definitions,i,c)||i3(R.styles,i,c)}var U3=new $4,J4=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,i2("noAuto")},Z4={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(i2("beforeI2svg",c),q("pseudoElements2svg",c),q("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,R4(function(){a6({autoReplaceSvgRoot:i}),i2("watch",c)})}},c6={icon:function(c){if(c===null)return null;if(I2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:e2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=q2(c[0]);return{prefix:e,iconName:e2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(d.cssPrefix,"-"))>-1||c.match(C4))){var n=j2(c.split(" "),{skipLookups:!0});return{prefix:n.prefix||K(),iconName:e2(n.prefix,n.iconName)||n.iconName}}if(typeof c=="string"){var o=K();return{prefix:o,iconName:e2(o,c)||c}}}},T={noAuto:J4,config:d,dom:Z4,parse:c6,library:U3,findIconDefinition:o1,toHtml:x2},a6=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?x:i;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&T.dom.i2svg({node:e})};function X2(r,c){return Object.defineProperty(r,"abstract",{get:c}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(e){return x2(e)})}}),Object.defineProperty(r,"node",{get:function(){if(j){var e=x.createElement("div");return e.innerHTML=r.html,e.children}}}),r}function e6(r){var c=r.children,i=r.main,e=r.mask,n=r.attributes,o=r.styles,f=r.transform;if(V1(f)&&i.found&&!e.found){var l=i.width,v=i.height,u={x:l/v/2,y:.5};n.style=W2(p(p({},o),{},{"transform-origin":"".concat(u.x+f.x/16,"em ").concat(u.y+f.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function r6(r){var c=r.prefix,i=r.iconName,e=r.children,n=r.attributes,o=r.symbol,f=o===!0?"".concat(c,"-").concat(d.cssPrefix,"-").concat(i):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},n),{},{id:f}),children:e}]}]}function L1(r){var c=r.icons,i=c.main,e=c.mask,n=r.prefix,o=r.iconName,f=r.transform,l=r.symbol,v=r.title,u=r.maskId,a=r.titleId,s=r.extra,t=r.watchable,m=t===void 0?!1:t,h=e.found?e:i,z=h.width,H=h.height,V=n==="fak",M=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(D){return s.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(s.classes).join(" "),C={children:[],attributes:p(p({},s.attributes),{},{"data-prefix":n,"data-icon":o,class:M,role:s.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(H)})},N=V&&!~s.classes.indexOf("fa-fw")?{width:"".concat(z/H*16*.0625,"em")}:{};m&&(C.attributes[r2]=""),v&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(a||C2())},children:[v]}),delete C.attributes.title);var w=p(p({},C),{},{prefix:n,iconName:o,main:i,mask:e,maskId:u,transform:f,symbol:l,styles:p(p({},N),s.styles)}),P=e.found&&i.found?q("generateAbstractMask",w)||{children:[],attributes:{}}:q("generateAbstractIcon",w)||{children:[],attributes:{}},B=P.children,L=P.attributes;return w.children=B,w.attributes=L,l?r6(w):e6(w)}function t3(r){var c=r.content,i=r.width,e=r.height,n=r.transform,o=r.title,f=r.extra,l=r.watchable,v=l===void 0?!1:l,u=p(p(p({},f.attributes),o?{title:o}:{}),{},{class:f.classes.join(" ")});v&&(u[r2]="");var a=p({},f.styles);V1(n)&&(a.transform=P4({transform:n,startCentered:!0,width:i,height:e}),a["-webkit-transform"]=a.transform);var s=W2(a);s.length>0&&(u.style=s);var t=[];return t.push({tag:"span",attributes:u,children:[c]}),o&&t.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),t}function i6(r){var c=r.content,i=r.title,e=r.extra,n=p(p(p({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),o=W2(e.styles);o.length>0&&(n.style=o);var f=[];return f.push({tag:"span",attributes:n,children:[c]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}var Z2=R.styles;function t1(r){var c=r[0],i=r[1],e=r.slice(4),n=v1(e,1),o=n[0],f=null;return Array.isArray(o)?f={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(a2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(a2.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(a2.PRIMARY),fill:"currentColor",d:o[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:c,height:i,icon:f}}var n6={found:!1,width:512,height:512};function s6(r,c){!y3&&!d.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(c,'" is missing.'))}function f1(r,c){var i=c;return c==="fa"&&d.styleDefault!==null&&(c=K()),new Promise(function(e,n){var o={found:!1,width:512,height:512,icon:q("missingIconAbstract")||{}};if(i==="fa"){var f=I3(r)||{};r=f.iconName||r,c=f.prefix||c}if(r&&c&&Z2[c]&&Z2[c][r]){var l=Z2[c][r];return e(t1(l))}s6(r,c),e(p(p({},n6),{},{icon:d.showMissingIcons&&r?q("missingIconAbstract")||{}:{}}))})}var f3=function(){},l1=d.measurePerformance&&_2&&_2.mark&&_2.measure?_2:{mark:f3,measure:f3},h2='FA "6.5.1"',o6=function(c){return l1.mark("".concat(h2," ").concat(c," begins")),function(){return G3(c)}},G3=function(c){l1.mark("".concat(h2," ").concat(c," ends")),l1.measure("".concat(h2," ").concat(c),"".concat(h2," ").concat(c," begins"),"".concat(h2," ").concat(c," ends"))},g1={begin:o6,end:G3},O2=function(){};function l3(r){var c=r.getAttribute?r.getAttribute(r2):null;return typeof c=="string"}function t6(r){var c=r.getAttribute?r.getAttribute(h1):null,i=r.getAttribute?r.getAttribute(z1):null;return c&&i}function f6(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(d.replacementClass)}function l6(){if(d.autoReplaceSvg===!0)return E2.replace;var r=E2[d.autoReplaceSvg];return r||E2.replace}function m6(r){return x.createElementNS("http://www.w3.org/2000/svg",r)}function v6(r){return x.createElement(r)}function W3(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?r.tag==="svg"?m6:v6:i;if(typeof r=="string")return x.createTextNode(r);var n=e(r.tag);Object.keys(r.attributes||[]).forEach(function(f){n.setAttribute(f,r.attributes[f])});var o=r.children||[];return o.forEach(function(f){n.appendChild(W3(f,{ceFn:e}))}),n}function H6(r){var c=" ".concat(r.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var E2={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(n){i.parentNode.insertBefore(W3(n),i)}),i.getAttribute(r2)===null&&d.keepOriginalSource){var e=x.createComment(H6(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~p1(i).indexOf(d.replacementClass))return E2.replace(c);var n=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(l,v){return v===d.replacementClass||v.match(n)?l.toSvg.push(v):l.toNode.push(v),l},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",o.toNode.join(" "))}var f=e.map(function(l){return x2(l)}).join(`
`);i.setAttribute(r2,""),i.innerHTML=f}};function m3(r){r()}function q3(r,c){var i=typeof c=="function"?c:O2;if(r.length===0)i();else{var e=m3;d.mutateApproach===V4&&(e=Q.requestAnimationFrame||m3),e(function(){var n=l6(),o=g1.begin("mutate");r.map(n),o(),i()})}}var x1=!1;function j3(){x1=!0}function m1(){x1=!1}var G2=null;function v3(r){if(c3&&d.observeMutations){var c=r.treeCallback,i=c===void 0?O2:c,e=r.nodeCallback,n=e===void 0?O2:e,o=r.pseudoElementsCallback,f=o===void 0?O2:o,l=r.observeMutationsRoot,v=l===void 0?x:l;G2=new c3(function(u){if(!x1){var a=K();l2(u).forEach(function(s){if(s.type==="childList"&&s.addedNodes.length>0&&!l3(s.addedNodes[0])&&(d.searchPseudoElements&&f(s.target),i(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&f(s.target.parentNode),s.type==="attributes"&&l3(s.target)&&~b4.indexOf(s.attributeName))if(s.attributeName==="class"&&t6(s.target)){var t=j2(p1(s.target)),m=t.prefix,h=t.iconName;s.target.setAttribute(h1,m||a),h&&s.target.setAttribute(z1,h)}else f6(s.target)&&n(s.target)})}}),j&&G2.observe(v,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h6(){G2&&G2.disconnect()}function z6(r){var c=r.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,n){var o=n.split(":"),f=o[0],l=o.slice(1);return f&&l.length>0&&(e[f]=l.join(":").trim()),e},{})),i}function u6(r){var c=r.getAttribute("data-prefix"),i=r.getAttribute("data-icon"),e=r.innerText!==void 0?r.innerText.trim():"",n=j2(p1(r));return n.prefix||(n.prefix=K()),c&&i&&(n.prefix=c,n.iconName=i),n.iconName&&n.prefix||(n.prefix&&e.length>0&&(n.iconName=X4(n.prefix,r.innerText)||M1(n.prefix,i1(r.innerText))),!n.iconName&&d.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=r.firstChild.data)),n}function p6(r){var c=l2(r.attributes).reduce(function(n,o){return n.name!=="class"&&n.name!=="style"&&(n[o.name]=o.value),n},{}),i=r.getAttribute("title"),e=r.getAttribute("data-fa-title-id");return d.autoA11y&&(i?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||C2()):(c["aria-hidden"]="true",c.focusable="false")),c}function V6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H3(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=u6(r),e=i.iconName,n=i.prefix,o=i.rest,f=p6(r),l=s1("parseNodeAttributes",{},r),v=c.styleParser?z6(r):[];return p({iconName:e,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:n,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:v,attributes:f}},l)}var d6=R.styles;function X3(r){var c=d.autoReplaceSvg==="nest"?H3(r,{styleParser:!1}):H3(r);return~c.extra.classes.indexOf(S3)?q("generateLayersText",r,c):q("generateSvgReplacementMutation",r,c)}var J=new Set;u1.map(function(r){J.add("fa-".concat(r))});Object.keys(p2[g]).map(J.add.bind(J));Object.keys(p2[b]).map(J.add.bind(J));J=L2(J);function h3(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var i=x.documentElement.classList,e=function(s){return i.add("".concat(a3,"-").concat(s))},n=function(s){return i.remove("".concat(a3,"-").concat(s))},o=d.autoFetchSvg?J:u1.map(function(a){return"fa-".concat(a)}).concat(Object.keys(d6));o.includes("fa")||o.push("fa");var f=[".".concat(S3,":not([").concat(r2,"])")].concat(o.map(function(a){return".".concat(a,":not([").concat(r2,"])")})).join(", ");if(f.length===0)return Promise.resolve();var l=[];try{l=l2(r.querySelectorAll(f))}catch{}if(l.length>0)e("pending"),n("complete");else return Promise.resolve();var v=g1.begin("onTree"),u=l.reduce(function(a,s){try{var t=X3(s);t&&a.push(t)}catch(m){y3||m.name==="MissingIcon"&&console.error(m)}return a},[]);return new Promise(function(a,s){Promise.all(u).then(function(t){q3(t,function(){e("active"),e("complete"),n("pending"),typeof c=="function"&&c(),v(),a()})}).catch(function(t){v(),s(t)})})}function M6(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X3(r).then(function(i){i&&q3([i],c)})}function C6(r){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:o1(c||{}),n=i.mask;return n&&(n=(n||{}).icon?n:o1(n||{})),r(e,p(p({},i),{},{mask:n}))}}var L6=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,n=e===void 0?I:e,o=i.symbol,f=o===void 0?!1:o,l=i.mask,v=l===void 0?null:l,u=i.maskId,a=u===void 0?null:u,s=i.title,t=s===void 0?null:s,m=i.titleId,h=m===void 0?null:m,z=i.classes,H=z===void 0?[]:z,V=i.attributes,M=V===void 0?{}:V,C=i.styles,N=C===void 0?{}:C;if(c){var w=c.prefix,P=c.iconName,B=c.icon;return X2(p({type:"icon"},c),function(){return i2("beforeDOMElementCreation",{iconDefinition:c,params:i}),d.autoA11y&&(t?M["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||C2()):(M["aria-hidden"]="true",M.focusable="false")),L1({icons:{main:t1(B),mask:v?t1(v.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:P,transform:p(p({},I),n),symbol:f,title:t,maskId:a,titleId:h,extra:{attributes:M,styles:N,classes:H}})})}},g6={mixout:function(){return{icon:C6(L6)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=h3,i.nodeCallback=M6,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,n=e===void 0?x:e,o=i.callback,f=o===void 0?function(){}:o;return h3(n,f)},c.generateSvgReplacementMutation=function(i,e){var n=e.iconName,o=e.title,f=e.titleId,l=e.prefix,v=e.transform,u=e.symbol,a=e.mask,s=e.maskId,t=e.extra;return new Promise(function(m,h){Promise.all([f1(n,l),a.iconName?f1(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var H=v1(z,2),V=H[0],M=H[1];m([i,L1({icons:{main:V,mask:M},prefix:l,iconName:n,transform:v,symbol:u,maskId:s,title:o,titleId:f,extra:t,watchable:!0})])}).catch(h)})},c.generateAbstractIcon=function(i){var e=i.children,n=i.attributes,o=i.main,f=i.transform,l=i.styles,v=W2(l);v.length>0&&(n.style=v);var u;return V1(f)&&(u=q("generateAbstractTransformGrouping",{main:o,transform:f,containerWidth:o.width,iconWidth:o.width})),e.push(u||o.icon),{children:e,attributes:n}}}},x6={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,o=n===void 0?[]:n;return X2({type:"layer"},function(){i2("beforeDOMElementCreation",{assembler:i,params:e});var f=[];return i(function(l){Array.isArray(l)?l.map(function(v){f=f.concat(v.abstract)}):f=f.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(L2(o)).join(" ")},children:f}]})}}}},b6={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,o=n===void 0?null:n,f=e.classes,l=f===void 0?[]:f,v=e.attributes,u=v===void 0?{}:v,a=e.styles,s=a===void 0?{}:a;return X2({type:"counter",content:i},function(){return i2("beforeDOMElementCreation",{content:i,params:e}),i6({content:i.toString(),title:o,extra:{attributes:u,styles:s,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(L2(l))}})})}}}},N6={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,o=n===void 0?I:n,f=e.title,l=f===void 0?null:f,v=e.classes,u=v===void 0?[]:v,a=e.attributes,s=a===void 0?{}:a,t=e.styles,m=t===void 0?{}:t;return X2({type:"text",content:i},function(){return i2("beforeDOMElementCreation",{content:i,params:e}),t3({content:i,transform:p(p({},I),o),title:l,extra:{attributes:s,styles:m,classes:["".concat(d.cssPrefix,"-layers-text")].concat(L2(u))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var n=e.title,o=e.transform,f=e.extra,l=null,v=null;if(b3){var u=parseInt(getComputedStyle(i).fontSize,10),a=i.getBoundingClientRect();l=a.width/u,v=a.height/u}return d.autoA11y&&!n&&(f.attributes["aria-hidden"]="true"),Promise.resolve([i,t3({content:i.innerHTML,width:l,height:v,transform:o,title:n,extra:f,watchable:!0})])}}},w6=new RegExp('"',"ug"),z3=[1105920,1112319];function y6(r){var c=r.replace(w6,""),i=I4(c,0),e=i>=z3[0]&&i<=z3[1],n=c.length===2?c[0]===c[1]:!1;return{value:i1(n?c[0]:c),isSecondary:e||n}}function u3(r,c){var i="".concat(p4).concat(c.replace(":","-"));return new Promise(function(e,n){if(r.getAttribute(i)!==null)return e();var o=l2(r.children),f=o.filter(function(B){return B.getAttribute(r1)===c})[0],l=Q.getComputedStyle(r,c),v=l.getPropertyValue("font-family").match(L4),u=l.getPropertyValue("font-weight"),a=l.getPropertyValue("content");if(f&&!v)return r.removeChild(f),e();if(v&&a!=="none"&&a!==""){var s=l.getPropertyValue("content"),t=~["Sharp"].indexOf(v[2])?b:g,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(v[2])?V2[t][v[2].toLowerCase()]:g4[t][u],h=y6(s),z=h.value,H=h.isSecondary,V=v[0].startsWith("FontAwesome"),M=M1(m,z),C=M;if(V){var N=Y4(z);N.iconName&&N.prefix&&(M=N.iconName,m=N.prefix)}if(M&&!H&&(!f||f.getAttribute(h1)!==m||f.getAttribute(z1)!==C)){r.setAttribute(i,C),f&&r.removeChild(f);var w=V6(),P=w.extra;P.attributes[r1]=c,f1(M,m).then(function(B){var L=L1(p(p({},w),{},{icons:{main:B,mask:C1()},prefix:m,iconName:C,extra:P,watchable:!0})),D=x.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?r.insertBefore(D,r.firstChild):r.appendChild(D),D.outerHTML=L.map(function(b2){return x2(b2)}).join(`
`),r.removeAttribute(i),e()}).catch(n)}else e()}else e()})}function S6(r){return Promise.all([u3(r,"::before"),u3(r,"::after")])}function _6(r){return r.parentNode!==document.head&&!~d4.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(r1)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function p3(r){if(j)return new Promise(function(c,i){var e=l2(r.querySelectorAll("*")).filter(_6).map(S6),n=g1.begin("searchPseudoElements");j3(),Promise.all(e).then(function(){n(),m1(),c()}).catch(function(){n(),m1(),i()})})}var k6={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=p3,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,n=e===void 0?x:e;d.searchPseudoElements&&p3(n)}}},V3=!1,A6={mixout:function(){return{dom:{unwatch:function(){j3(),V3=!0}}}},hooks:function(){return{bootstrap:function(){v3(s1("mutationObserverCallbacks",{}))},noAuto:function(){h6()},watch:function(i){var e=i.observeMutationsRoot;V3?m1():v3(s1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},d3=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,n){var o=n.toLowerCase().split("-"),f=o[0],l=o.slice(1).join("-");if(f&&l==="h")return e.flipX=!0,e;if(f&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(f){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},i)},T6={mixout:function(){return{parse:{transform:function(i){return d3(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-transform");return n&&(i.transform=d3(n)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,n=i.transform,o=i.containerWidth,f=i.iconWidth,l={transform:"translate(".concat(o/2," 256)")},v="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),a="rotate(".concat(n.rotate," 0 0)"),s={transform:"".concat(v," ").concat(u," ").concat(a)},t={transform:"translate(".concat(f/2*-1," -256)")},m={outer:l,inner:s,path:t};return{tag:"g",attributes:p({},m.outer),children:[{tag:"g",attributes:p({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:p(p({},e.icon.attributes),m.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function M3(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||c)&&(r.attributes.fill="black"),r}function P6(r){return r.tag==="g"?r.children:[r]}var F6={hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-mask"),o=n?j2(n.split(" ").map(function(f){return f.trim()})):C1();return o.prefix||(o.prefix=K()),i.mask=o,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,n=i.attributes,o=i.main,f=i.mask,l=i.maskId,v=i.transform,u=o.width,a=o.icon,s=f.width,t=f.icon,m=T4({transform:v,containerWidth:s,iconWidth:u}),h={tag:"rect",attributes:p(p({},c1),{},{fill:"white"})},z=a.children?{children:a.children.map(M3)}:{},H={tag:"g",attributes:p({},m.inner),children:[M3(p({tag:a.tag,attributes:p(p({},a.attributes),m.path)},z))]},V={tag:"g",attributes:p({},m.outer),children:[H]},M="mask-".concat(l||C2()),C="clip-".concat(l||C2()),N={tag:"mask",attributes:p(p({},c1),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,V]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:P6(t)},N]};return e.push(w,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(M,")")},c1)}),{children:e,attributes:n}}}},B6={provides:function(c){var i=!1;Q.matchMedia&&(i=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:p(p({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=p(p({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:p(p({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||l.children.push({tag:"animate",attributes:p(p({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},f),{},{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:p(p({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:p(p({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:p(p({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},D6={hooks:function(){return{parseNodeAttributes:function(i,e){var n=e.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return i.symbol=o,i}}}},R6=[B4,g6,x6,b6,N6,k6,A6,T6,F6,B6,D6];K4(R6,{mixoutsTo:T});var n0=T.noAuto,s0=T.config,o0=T.library,t0=T.dom,Y3=T.parse,f0=T.findIconDefinition,l0=T.toHtml,$3=T.icon,m0=T.layer,O6=T.text,E6=T.counter;var I6=["*"],U6=r=>{throw new Error(`Could not find icon with iconName=${r.iconName} and prefix=${r.prefix} in the icon library.`)},G6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},W6=r=>{let c={[`fa-${r.animation}`]:r.animation!=null&&!r.animation.startsWith("spin"),"fa-spin":r.animation==="spin"||r.animation==="spin-reverse","fa-spin-pulse":r.animation==="spin-pulse"||r.animation==="spin-pulse-reverse","fa-spin-reverse":r.animation==="spin-reverse"||r.animation==="spin-pulse-reverse","fa-pulse":r.animation==="spin-pulse"||r.animation==="spin-pulse-reverse","fa-fw":r.fixedWidth,"fa-border":r.border,"fa-inverse":r.inverse,"fa-layers-counter":r.counter,"fa-flip-horizontal":r.flip==="horizontal"||r.flip==="both","fa-flip-vertical":r.flip==="vertical"||r.flip==="both",[`fa-${r.size}`]:r.size!==null,[`fa-rotate-${r.rotate}`]:r.rotate!==null,[`fa-pull-${r.pull}`]:r.pull!==null,[`fa-stack-${r.stackItemSize}`]:r.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},q6=r=>r.prefix!==void 0&&r.iconName!==void 0,j6=(r,c)=>q6(r)?r:typeof r=="string"?{prefix:c,iconName:r}:{prefix:r[0],iconName:r[1]},X6=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=$2({token:c,factory:c.\u0275fac,providedIn:"root"});let r=c;return r})(),Y6=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let o of n.icon[2])typeof o=="string"&&(this.definitions[n.prefix][o]=n)}}addIconPacks(...e){for(let n of e){let o=Object.keys(n).map(f=>n[f]);this.addIcons(...o)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=$2({token:c,factory:c.\u0275fac,providedIn:"root"});let r=c;return r})(),$6=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=y1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[N2]});let r=c;return r})(),Q6=(()=>{let c=class c{constructor(e,n){this.renderer=e,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(n){return new(n||c)(O(w2),O(k1))},c.\u0275cmp=Z({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[N2,c2],ngContentSelectors:I6,decls:1,vars:0,template:function(n,o){n&1&&(F1(),B1(0))},encapsulation:2});let r=c;return r})(),K3=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,n,o,f,l){this.sanitizer=e,this.config=n,this.iconLibrary=o,this.stackItem=f,this.classes=[],l!=null&&f==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){G6();return}if(e){let n=this.icon!=null?this.icon:this.config.fallbackIcon,o=this.findIconDefinition(n);if(o!=null){let f=this.buildParams();this.renderIcon(o,f)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let n=j6(e,this.config.defaultPrefix);if("icon"in n)return n;let o=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return o??(U6(n),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?Y3.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...W6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,n){let o=$3(e,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(o.html.join(`
`))}};c.\u0275fac=function(n){return new(n||c)(O(O1),O(X6),O(Y6),O($6,8),O(Q6,8))},c.\u0275cmp=Z({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,o){n&2&&(P1("innerHTML",o.renderedIconHTML,_1),T1("title",o.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[N2,c2],decls:0,vars:0,template:function(n,o){},encapsulation:2});let r=c;return r})();var J3=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=w1({type:c}),c.\u0275inj=N1({});let r=c;return r})();var a4=n4(Z3());var J6=["canvas"],c4=(()=>{let c=class c{constructor(){this.numStars=100,this.stars=[]}ngOnInit(){return X(this,null,function*(){this.ctx=this.canvasRef.nativeElement.getContext("2d"),this.createStars(),this.animateStars()})}onResize(e){return X(this,null,function*(){this.createStars()})}createStars(){let e=this.canvasRef.nativeElement;e.width=window.innerWidth,e.height=window.innerHeight,this.stars=[];for(let n=0;n<this.numStars;n++){let o=Math.random()*e.width,f=Math.random()*e.height,l=Math.random()*2;this.stars.push({x:o,y:f,radius:l})}}animateStars(){requestAnimationFrame(()=>this.animateStars());let e=this.canvasRef.nativeElement;e.getContext("2d").clearRect(0,0,e.width,e.height),this.stars.forEach(o=>{o.y+=.1,o.y>e.height&&(o.y=0),this.drawStar(o.x,o.y,o.radius)})}drawStar(e,n,o){this.ctx.beginPath(),this.ctx.arc(e,n,o,0,Math.PI*2),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.closePath()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=Z({type:c,selectors:[["app-star-background"]],viewQuery:function(n,o){if(n&1&&m2(J6,7),n&2){let f;v2(f=H2())&&(o.canvasRef=f.first)}},hostBindings:function(n,o){n&1&&F("resize",function(l){return o.onResize(l)},!1,S1)},standalone:!0,features:[c2],decls:2,vars:0,consts:[["canvas",""]],template:function(n,o){n&1&&A(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:0;background-color:#505050;height:100%;width:100%}"]});let r=c;return r})();var Z6=["board"],c0=["next_figure"];function a0(r,c){r&1&&(y(0,"div",27)(1,"div",28)(2,"h3"),U(3,"GAME OVER"),_()()())}var w0=(()=>{let c=class c{get canvasBoard(){return this._canvasBoard.nativeElement}get canvasNextFigure(){return this._canvasNextFigure.nativeElement}constructor(e){this.renderer=e,this._rows=20,this._rowsNextFigure=6,this._columns=10,this._columnsNextFigure=6,this._blockSize=30,this._blockSizeNextFigure=20,this._canvasBoardWidth=0,this._canvasBoardHeight=0,this._canvasNextFigureWidth=0,this._canvasNextFigureHeight=0,this._timer=420,this._timerGoDown=0,this._boardM=[],this._nextFigureM=[],this._isTetrisSongPlaying=!1,this._endGame=!1,this.level=0,this.lines=0,this.score=0,this.faCirclePlay=I1,this.faRotateRight=W1,this.faPauseCircle=U1,this.faAngleLeft=Y1,this.faAngleRight=E1,this.faAngleUp=X1,this.faAngleDown=q1,this.faVolumeHigh=G1,this.faVolumeMute=j1,this.initFigures(),this.initSongTheme()}initSongTheme(){this._tetrisSongTheme=new a4.Howl({src:["../assets/songs/tetris_song_short_theme.mp3"],loop:!0})}initFigures(){this._figure=Y.getRandomFigure(),this.mapCurrentFigureToCenterBoard(),this._nextFigure=Y.getRandomFigure(),this.mapNextFigureToCenterBoard()}ngAfterViewInit(){this._nextFigureCTX=this.canvasNextFigure.getContext("2d"),this.setDefaultNextFigureCanvasSize(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure),this._boardCTX=this.canvasBoard.getContext("2d"),this.setDefaultBoardSize(),this.defineMatrix(this._boardM),this.enableMobileControls()}startIntervalUpdate(e=this._timer){this._boardInterval=setInterval(()=>{try{this.update()}catch(n){console.error(n),clearInterval(this._boardInterval),clearInterval(this._timer)}},e)}update(){this._boardCTX.clearRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this.setDefaultFrameStyles(),this.addFigureToMatrix(),this.drawMatrix(),this.figureDownLevel(),this.checkRows()}setDefaultBoardSize(){this._canvasBoardWidth=this._columns*this._blockSize,this._canvasBoardHeight=this._rows*this._blockSize,this.canvasBoard.width=this._canvasBoardWidth,this.canvasBoard.height=this._canvasBoardHeight}setDefaultNextFigureCanvasSize(){this._canvasNextFigureWidth=this._columnsNextFigure*this._blockSizeNextFigure,this._canvasNextFigureHeight=this._rowsNextFigure*this._blockSizeNextFigure,this.canvasNextFigure.width=this._canvasNextFigureWidth,this.canvasNextFigure.height=this._canvasNextFigureHeight}forEachRows(e,n=this._blockSize,o=this._canvasBoardHeight){for(let f=0,l=0;f<o;f+=n,l++)e(f,l)}forEachColumns(e,n=this._blockSize,o=this._canvasBoardWidth){for(let f=0,l=0;f<o;f+=n,l++)e(f,l)}defineMatrix(e,n=this._blockSize,o=this._canvasBoardWidth,f=this._canvasBoardHeight){this.forEachColumns((l,v)=>{e.push([]),this.forEachRows((u,a)=>{e[v][a]={x:l,y:u,drawed:!1}},n,f)},n,o)}setDefaultFrameStyles(){this._boardCTX.fillStyle="rgba(170, 175, 125, 0.2)",this._boardCTX.fillRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this._boardCTX.strokeStyle="rgba(55, 55, 55, .8)",this._boardCTX.lineWidth=.5,this.forEachColumns(e=>{e!=0&&e!=this._columns&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(e,0),this._boardCTX.lineTo(e,this._canvasBoardHeight),this._boardCTX.stroke())}),this.forEachRows(e=>{e!=0&&e!=this._rows&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(0,e),this._boardCTX.lineTo(this._canvasBoardHeight,e),this._boardCTX.lineWidth=.5,this._boardCTX.stroke())})}addFigureToMatrix(e=this._figure,n=this._boardM){e.forEachCells(o=>{if(o.y>=0){let{x:f,y:l,color:v,active:u,drawed:a}=o;u&&(n[f][l].color=v,n[f][l].active=u,n[f][l].drawed=a)}})}drawMatrix(e=this._boardM,n=this._boardCTX,o=this._blockSize){e.forEach(f=>{f.forEach(l=>{let{x:v,y:u,color:a,active:s,drawed:t}=l;(t||s)&&new S2(v,u,a,"transparent",o).draw(n)})})}removeFigureInMatrix(){this._figure.forEachCells(e=>{if(e.y>=0){let{x:n,y:o,active:f}=e;f&&(this._boardM[n][o].color=void 0,this._boardM[n][o].active=!1,this._boardM[n][o].drawed=!1)}})}isEndGame(){return this._boardM.some(e=>e[0].drawed)}cleanFigureNextBoard(){}mapCurrentFigureToCenterBoard(){let{_index:e}=this._figure;this._figure.mapCells(n=>(n.x+=e==2||e==3?3:4,n.y+=e==2||e==-3?-3:-4,n))}mapNextFigureToCenterBoard(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(n=>(n.x+=e!=2?2:1,n.y+=e!=2&&e!=3?2:1,n))}mapNextFigureToDefault(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(n=>(n.x+=e!=2?-2:-1,n.y+=e!=2&&e!=3?-2:-1,n))}figureDownLevel(){let e=new Y(this._figure.cloneCells(),this._figure._index);e.mapCells(o=>(o.y++,o));let n=e.canDrawInMatrix(this._boardM);this._endGame?clearInterval(this._boardInterval):this._figure._toDraw?this._figure.bothFiguresHaveSameActiveColumns(this._figureCloned)?(this._figure.mapCells(o=>{let{x:f,y:l,active:v}=o;return l>=0&&v&&(this._boardM[f][l].drawed=!0,this._boardM[f][l].active=!1,o.active=!1),l==0&&(this._endGame=!0),o}),this.mapNextFigureToDefault(),this._figure=new Y(this._nextFigure.cloneCells(),this._nextFigure._index),this.mapCurrentFigureToCenterBoard(),this.addFigureToMatrix(),this._nextFigure=Y.getRandomFigure(),this.mapNextFigureToCenterBoard(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this._nextFigureCTX.clearRect(0,0,this.canvasNextFigure.width,this.canvasNextFigure.height),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure)):(this._figure._toDraw=!1,this.removeFigureInMatrix()):n?(this.removeFigureInMatrix(),this._figure.downOneLevel()):(this._figureCloned=e,this.removeFigureInMatrix(),this._figure._toDraw=!0)}checkRows(){let e=[],n=JSON.parse(JSON.stringify(this._boardM));for(let o=0;o<this._boardM[0].length;o++)if(this._boardM.every(f=>f[o].drawed)){e.push(o);for(let f=0;f<this._boardM.length;f++)this._boardM[f][o].color="white",n[f].splice(o,1),n[f].unshift({})}if(e.length>0){this.drawMatrix();let o=e.length;for(let f=this._boardM[0].length-1;f>=0;f--)for(let l=this._boardM.length-1;l>=0;l--)this._boardM[l][f].drawed=n[l][f]?.drawed,this._boardM[l][f].color=n[l][f]?.color;this.setScore(o)}}setScore(e){this.lines+=e,this.score+=e*100,this.level=Number((this.score/(this._rows/4*100)).toFixed(0)),this._timer=this._timer-(this.level>0?2:0),clearInterval(this._boardInterval),this.startIntervalUpdate(this._timer)}onClickRotate(){return X(this,null,function*(){this._figure.rotate45(this._boardM),this.drawMatrix()})}onClickGoRight(){return X(this,null,function*(){this._figure.goRight(this._boardM),this.drawMatrix()})}onClickGoLeft(){return X(this,null,function*(){this._figure.goLeft(this._boardM),this.drawMatrix()})}onMouseDownGoDown(){this._timerGoDown!=20&&(clearInterval(this._boardInterval),this._timerGoDown=20,this.startIntervalUpdate(this._timerGoDown))}onMouseUpStopGoDown(){clearInterval(this._boardInterval),this._timerGoDown=this._timer,this.startIntervalUpdate(this._timer)}onKeyboardKeyDown(e){return X(this,null,function*(){let{code:n}=e;n==="ArrowRight"&&this.onClickGoRight(),n==="ArrowLeft"&&this.onClickGoLeft(),n==="ArrowDown"&&this.onMouseDownGoDown(),(n==="Space"||n==="Enter")&&this.onClickRotate()})}onKeyboardKeyUp(e){let{code:n}=e;n==="ArrowDown"&&this.onMouseUpStopGoDown()}forEachCellsOfMatrix(e){this._boardM.forEach(n=>{n.forEach(o=>{e(o)})})}onClickInitGame(){this._boardInterval&&clearInterval(this._boardInterval),this._timer&&clearInterval(this._timer),this.startIntervalUpdate()}onClickStopGame(){clearInterval(this._boardInterval)}onClickResetGame(){clearInterval(this._boardInterval),clearInterval(this._timer),this._endGame=!1,this.level=0,this.score=0,this.lines=0,this._boardM=[],this.defineMatrix(this._boardM),this.initFigures(),this.startIntervalUpdate()}enableMobileControls(){let e=document.getElementById("btn-down");this.renderer.listen(e,"touchstart",n=>{this.onMouseDownGoDown()}),this.renderer.listen(e,"touchend",n=>{this.onMouseUpStopGoDown()})}playStopTetrisTheme(){this._isTetrisSongPlaying?this._tetrisSongTheme.play():this._tetrisSongTheme.pause()}playTetrisTheme(){this._isTetrisSongPlaying=!this._isTetrisSongPlaying,this.playStopTetrisTheme()}ngOnDestroy(){clearInterval(this._boardInterval)}};c.\u0275fac=function(n){return new(n||c)(O(w2))},c.\u0275cmp=Z({type:c,selectors:[["tetris-game"]],viewQuery:function(n,o){if(n&1&&(m2(Z6,7),m2(c0,7)),n&2){let f;v2(f=H2())&&(o._canvasBoard=f.first),v2(f=H2())&&(o._canvasNextFigure=f.first)}},hostBindings:function(n,o){n&1&&F("keydown",function(l){return o.onKeyboardKeyDown(l)},!1,Q2)("keyup",function(l){return o.onKeyboardKeyUp(l)},!1,Q2)},standalone:!0,features:[c2],decls:54,vars:19,consts:[["id","tetris-container"],[1,"body","column"],[1,"game"],[1,"previsual"],[1,"info-panel"],["id","next",1,"next"],["id","next_figure"],["next_figure",""],[1,"score","txt-panel"],[1,"lines","txt-panel"],[1,"level","txt-panel"],[1,"controls","column"],[1,"board-controls"],[1,"btn-control","board-control",3,"click"],[2,"color","#26194dde",3,"icon","title"],[1,"board-frame"],["id","board"],["board",""],["id","game-over",4,"ngIf"],[1,"mobile-controls"],[1,"controls",2,"align-items","flex-end"],[3,"title"],[1,"btn-rotate",3,"click"],[2,"font-size","24px","margin","0"],[2,"column-gap","0.35em"],["id","btn-down",1,"btn-control",3,"mousedown","mouseup"],[1,"btn-control",3,"click"],["id","game-over"],[1,"gmo-container"]],template:function(n,o){n&1&&(y(0,"div",0),A(1,"app-star-background"),y(2,"div",1)(3,"section",2)(4,"div",3)(5,"section",4)(6,"div",5),A(7,"canvas",6,7),_(),y(9,"article",8)(10,"h5"),U(11,"Score: "),_(),y(12,"p"),U(13),_()(),y(14,"article",9)(15,"h5"),U(16,"Lines: "),_(),y(17,"p"),U(18),_()(),y(19,"article",10)(20,"h5"),U(21,"Level: "),_(),y(22,"p"),U(23),_()()(),y(24,"section",11)(25,"article",12)(26,"button",13),F("click",function(){return o.onClickInitGame()}),A(27,"fa-icon",14),_(),y(28,"button",13),F("click",function(){return o.onClickStopGame()}),A(29,"fa-icon",14),_()(),y(30,"article",12)(31,"button",13),F("click",function(){return o.playTetrisTheme()}),A(32,"fa-icon",14),_(),y(33,"button",13),F("click",function(){return o.onClickResetGame()}),A(34,"fa-icon",14),_()()()(),y(35,"div",15),A(36,"canvas",16,17),A1(38,a0,4,0,"div",18),_()(),y(39,"div",19)(40,"section",20)(41,"span",21)(42,"article")(43,"button",22),F("click",function(){return o.onClickRotate()}),y(44,"p",23),U(45," - "),_()()()()(),y(46,"section",11)(47,"article",24)(48,"button",25),F("mousedown",function(){return o.onMouseDownGoDown()})("mouseup",function(){return o.onMouseUpStopGoDown()}),A(49,"fa-icon",14),_(),y(50,"button",26),F("click",function(){return o.onClickGoLeft()}),A(51,"fa-icon",14),_(),y(52,"button",26),F("click",function(){return o.onClickGoRight()}),A(53,"fa-icon",14),_()()()()()()),n&2&&(k(13),y2(" ",o.score,""),k(5),y2(" ",o.lines,""),k(5),y2(" ",o.level,""),k(4),E("icon",o.faCirclePlay)("title","Iniciar Juego"),k(2),E("icon",o.faPauseCircle)("title","Pausar Juego"),k(3),E("icon",o._isTetrisSongPlaying?o.faVolumeHigh:o.faVolumeMute)("title",o._isTetrisSongPlaying?"Mutear tema":"Reanudar tema"),k(2),E("icon",o.faRotateRight)("title","Reiniciar Juego"),k(4),E("ngIf",o._endGame),k(3),E("title","Rotar pieza"),k(8),E("icon",o.faAngleDown)("title","Incrementar ca\xEDda"),k(2),E("icon",o.faAngleLeft)("title","Mover a izquierda"),k(2),E("icon",o.faAngleRight)("title","Mover a derecha"))},dependencies:[R1,D1,J3,K3,c4],styles:["*[_ngcontent-%COMP%]{color:#2f254efc}#tetris-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:2rem;width:calc(100% - .2em);height:calc(100% - .2em);padding:.1em;background-color:ivory}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{z-index:0;display:flex;align-items:center;justify-content:center;width:max-content;max-width:100%;height:100%;max-height:80%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-around;column-gap:1em;max-height:62vmax;height:100%;width:85%;padding:1em;border:2px solid linear-gradient(to right,rgba(161,120,243,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080;background-color:#e6e6ff}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]{height:100%;width:30%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;width:calc(100% - .25em)}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{width:80%;height:80%;padding:5px;border-radius:3px;border:2px solid rgba(0,0,0,.3);background-color:azure}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   #next_figure[_ngcontent-%COMP%]{width:100%;border:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .txt-panel[_ngcontent-%COMP%]{display:flex;width:90%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{background-color:#fafafafa;margin:.5em .35rem 0 .35em;display:flex;justify-content:space-between;align-items:center;border-radius:3px;padding:.2em}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px;width:50px;margin:0;font-family:monospace}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:monospace;font-size:17px;width:fit-content;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .board-frame[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;height:100%;width:100%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .board-frame[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{background-color:azure;border:2px solid rgba(50,55,50,.3);height:100%;width:100%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_opacity ease-in 2s;z-index:100;position:absolute;top:0;left:0;background-color:#783aff33;padding:.2em;height:calc(100% - .2em);width:calc(100% - .2em);display:flex;flex-direction:column;align-items:center;justify-content:center}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]   .gmo-container[_ngcontent-%COMP%]{width:5rem}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]   .gmo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{overflow:hidden;font-family:monospace;height:fit-content;padding:0;margin:0;right:0;width:0;white-space:nowrap;border-right:.25em solid #b9a2fa;animation:_ngcontent-%COMP%_typing 3s steps(38) 1s 1 normal both,blink 1s steps(1) infinite}.column[_ngcontent-%COMP%]{flex-direction:column;column-gap:.5rem}.controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;column-gap:.5rem;row-gap:.5rem;height:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:.5rem;width:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:2.5em;width:2.5rem;border:none;border:2px outset rgba(0,0,0,.3);border-radius:3px;background-color:#f3fff914}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.65;transition:.2ms;border:2px solid rgba(0,0,0,.65)}.board-controls[_ngcontent-%COMP%]{margin-top:.2rem;justify-content:space-between!important;column-gap:.2em}.board-controls[_ngcontent-%COMP%]   .board-control[_ngcontent-%COMP%]{max-width:50%!important}.mobile-controls[_ngcontent-%COMP%]{padding:.5em 1rem;margin-top:1rem;width:85%;display:flex;align-items:center;justify-content:space-around;border:2px solid linear-gradient(to right,rgba(161,120,243,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080;background-color:#e6e6ff}.btn-rotate[_ngcontent-%COMP%]{width:150px!important}@keyframes _ngcontent-%COMP%_opacity{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:100%}}@keyframes _ngcontent-%COMP%_blink{50%{border-color:transparent}}i[_ngcontent-%COMP%]{font-size:14px;font-style:normal;font-weight:550}@media only screen and (max-width: 515px){h5[_ngcontent-%COMP%]{font-size:13px}p[_ngcontent-%COMP%]{font-size:15px}  .btn-rotate{height:2.05rem!important;width:4rem}  .btn-rotate svg{height:70%;width:70%}  .btn-control{height:2.05rem!important;width:2.05rem!important}  .btn-control svg{height:70%;width:70%}}@media only screen and (max-width: 300px){.board-control[_ngcontent-%COMP%]{max-width:42%}.btn-rotate[_ngcontent-%COMP%]{height:calc(2.05rem - .45em)!important;width:4rem!important}  .btn-control{height:calc(2.05rem - .45em)!important;width:calc(2.05rem - .45em)!important}}"]});let r=c;return r})();export{w0 as TetrisComponent};
