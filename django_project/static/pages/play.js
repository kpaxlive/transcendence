document.addEventListener("DOMContentLoaded", () =>
{
    fetch(csvUrl)
    .then(response => response.text())
    .then(csvContent => {
    const rows = csvContent.trim().split('\n');
    const locale = {};
    
    rows.forEach(row => {
    const [msg_id, tr, en, es, fr] = row.split(',');
    locale[msg_id] = { tr, en, es, fr };
    });
    localize(locale)
    })
    .catch(error => {
    console.error('File read failed:', error);
    });
    
    
    function localize(locale)
    {
        language = document.getElementById("language").textContent.trim().replace(/^"|"$/g, '');
        document.getElementById("tr_leaderboard").innerText = locale['leaderboard'][language]
        document.getElementById("tr_logout").innerText = locale['logout'][language]
        
        document.getElementById("tr_arrowup").innerText = locale['arrowup'][language]
        document.getElementById("tr_arrowdown").innerText = locale['arrowdown'][language]
        document.getElementById("return").innerText = locale['return'][language]
        
        document.querySelectorAll("#end_game").forEach(element => {
        element.innerText = locale['end_game'][language];
        });
        document.querySelectorAll("#tr_profile").forEach(element => {
        element.innerText = locale['profile'][language];
        });
    }
});