var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Brave"] = 1] = "Brave";
    Browser[Browser["Firefox"] = 2] = "Firefox";
    Browser[Browser["Edge"] = 1] = "Edge";
    Browser[Browser["Opera"] = 2] = "Opera";
    Browser[Browser["UcBrowser"] = 3] = "UcBrowser";
    Browser[Browser["Yahoo"] = 4] = "Yahoo";
    Browser[Browser["Safari"] = 5] = "Safari";
})(Browser || (Browser = {}));
function PrintBrowserEnum() {
    console.log(Browser.Yahoo);
}
PrintBrowserEnum();
