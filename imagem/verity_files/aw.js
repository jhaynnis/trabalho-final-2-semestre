var hostname=window.location.hostname;var app_path=document.getElementById("aw_app_path")!==null?document.getElementById("aw_app_path").value:"";var urlAw="https://api.siteblindado.com/"+hostname+"/info"+(app_path?"?path="+app_path:"");var languagesAw={pt:{title:"Navegue tranquilamente! Este &#233; um Site Blindado contra ataques! Clique e confira mais detalhes.",context_text:"C&#243;pia Proibida por Lei - Site Blindado&#174; &#233; marca registrada de Site Blindado S.A."}};function insertSealAw(e,t){var a="https://www.siteblindado.com/consumidor/selo-blindado/";var n=t.side||"";var o=t.position;var i=t.status_seal==="1";var s=t.image;e.style.width="115px";e.style.height="32px";var l='<style type="text/css"> '+"#sb-shield { "+"position: fixed; "+"background: url("+s+") no-repeat; "+"width: 50px; "+"height: 50px; "+n+": 0; "+"bottom: 20px; "+"cursor: pointer; "+"display: block; "+"text-decoration: none; "+"} "+"#sb-shield, "+"#sb-shield:hover { width:170px; } "+"#sb-shield:hover #sb-banner { opacity:1; }"+"#sb-shield-2 { "+"background: url("+s+") no-repeat; "+"width: 100%; "+"height: 100%; "+"cursor: pointer; "+"display: block; "+"text-decoration: none; "+"} "+"</style>";if(i){var r=a+"?language1="+"pt"+(app_path?"&path="+app_path:"")+"&hostname="+hostname;var d='<a href="'+r+'" '+(o==="float"&&e.getAttribute("id")==="armored_website"?'id="sb-shield"':'id="sb-shield-2"')+'target="_blank" '+'rel="noopener"'+'aria-label="Verificar"'+'title="'+languagesAw["pt"].title+'"> '+(o!=="float"?'<img src="'+s+'" '+'rel="noopener nofollow "'+'alt="site blindado"'+' oncontextmenu=alert("'+languagesAw["pt"].context_text.replace(/ /g,"&nbsp;")+'")">':"")+"</a>"}else{var d=""}e.innerHTML=(o==="float"?l:"")+d}function sealConditionAw(t){if(t.enabled){var e=[document.getElementById("armored_website"),document.getElementById("armored_website_02"),document.getElementById("armored_website_03")];e.forEach(function(e){if(e!==null){insertSealAw(e,t)}})}}function xmlGetAw(){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest}else{e=new ActiveXObject("Microsoft.XMLHTTP")}try{e.open("GET",urlAw,false);e.send();if(e.status==200||e.status==304){var t=JSON.parse(e.responseText);sealConditionAw(t)}}catch(e){console.log(e)}}try{fetch(urlAw,{method:"GET"}).then(function(e){e.json().then(function(e){sealConditionAw(e)})})}catch(e){xmlGetAw()}