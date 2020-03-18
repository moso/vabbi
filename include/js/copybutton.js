function copyFunction(templateCode, tooltipId) {
    var copyText = document.getElementById(templateCode);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunction(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Copy to clipboard";
}