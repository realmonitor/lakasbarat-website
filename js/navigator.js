var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS detection
    window.location.href = "https://itunes.apple.com/appstore";
} else if (/Android/.test(userAgent)) {
    // Android detection
    window.location.href = "https://play.google.com/store";
}