function toggleDarkMode() {
    var theme = $('#stylesheet11927').attr('href');
    if (theme == '') {
        localStorage.setItem('theme', 'dark');
        $("#stylesheet11927").attr('href', '/stylesheets/dark_style.css');
        $('.top-hat-wumpus').attr('src', '/img/neonmiddle.png');
        console.log(`New theme is:  ${localStorage.getItem('theme')} (stylesheet has been changed to dark_style.css)`)
    }
    if (theme == '/stylesheets/style.css') {
        localStorage.setItem('theme', 'dark');
        $("#stylesheet11927").attr('href', '/stylesheets/dark_style.css');
        $('.top-hat-wumpus').attr('src', '/img/neonmiddle.png');
        console.log(`New theme is:  ${localStorage.getItem('theme')} (stylesheet has been changed to dark_style.css)`)
    }
    if (theme == '/stylesheets/dark_style.css') {
        localStorage.setItem('theme', 'light');
        $('#stylesheet11927').attr('href', '/stylesheets/style.css');
        $('.top-hat-wumpus').attr('src', '/img/middle.png');
        console.log(`New theme is:  ${localStorage.getItem('theme')} (stylesheet has been changed to style.css)`)
    }
}
$(document).ready(function() {
    var theme = localStorage.getItem('theme');
    if (theme == '') {
        localStorage.setItem('theme', 'light');
        console.log(`Could not find a theme. Defaulted to white.`)
    }
    if (theme == 'light') {
        console.log(`Theme is:  ${localStorage.getItem('theme')} (stylesheet has not been changed)`)
    }
    if (theme == 'dark') {
        $('#stylesheet11927').attr('href', '/stylesheets/dark_style.css');
        $('.top-hat-wumpus').attr('src', '/img/neonmiddle.png');
        $('.dn').prop("checked", "checked");
        console.log(`Theme is:  ${localStorage.getItem('theme')} (stylesheet has been changed to dark_style.css)`)
    }
});