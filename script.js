document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookieConsentBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const declineBtn = document.getElementById("declineCookies");

    // Check if user has already responded to the cookie banner
    if (!localStorage.getItem("cookieConsent")) {
        banner.style.display = "flex";
    }

    // Accept cookies
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });

    // Decline cookies
    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        banner.style.display = "none";
    });
});
