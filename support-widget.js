(function () {
  var SUPPORT_URL = 'https://support.catchiq.fishing';
  var CTX = 'public';
  var SK = 'ciq_sw_open';
  var loaded = false;
  var open = false;

  var ICON_CHAT = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  var ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  function build() {
    var panel = document.createElement('div');
    panel.id = 'ciq-sw';
    panel.style.cssText = 'position:fixed;bottom:88px;right:24px;width:380px;height:600px;border-radius:16px;overflow:hidden;box-shadow:0 8px 48px rgba(0,0,0,0.4);z-index:9997;display:none;';

    var iframe = document.createElement('iframe');
    iframe.id = 'ciq-sw-frame';
    iframe.title = 'CatchIQ Support';
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';
    panel.appendChild(iframe);

    var btn = document.createElement('button');
    btn.id = 'ciq-sw-btn';
    btn.setAttribute('aria-label', 'Open CatchIQ Support');
    btn.innerHTML = ICON_CHAT;
    btn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:#1abc8c;color:#fff;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:9998;display:flex;align-items:center;justify-content:center;transition:transform 0.15s;';
    btn.onmouseenter = function () { btn.style.transform = 'scale(1.08)'; };
    btn.onmouseleave = function () { btn.style.transform = ''; };
    btn.onclick = function () { setOpen(!open); };

    document.body.appendChild(panel);
    document.body.appendChild(btn);
  }

  function setOpen(next) {
    open = next;
    var panel = document.getElementById('ciq-sw');
    var btn = document.getElementById('ciq-sw-btn');
    if (!panel || !btn) return;

    if (open && !loaded) {
      document.getElementById('ciq-sw-frame').src = SUPPORT_URL + '/?ctx=' + CTX;
      loaded = true;
    }

    panel.style.display = open ? 'block' : 'none';
    btn.innerHTML = open ? ICON_CLOSE : ICON_CHAT;
    try { sessionStorage.setItem(SK, open ? '1' : '0'); } catch (e) {}
  }

  function init() {
    build();
    var saved = false;
    try { saved = sessionStorage.getItem(SK) === '1'; } catch (e) {}
    if (saved) setOpen(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
