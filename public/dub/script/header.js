const styles = ["cyan", "orange", "pink", "purple"]
var link = document.createElement( "link" );
link.href = "style/whid-" + styles[Math.floor(Math.random() * 4)] + ".css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName("head")[0].appendChild(link);