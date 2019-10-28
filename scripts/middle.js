function toggleEasterEgg() {
    var egg = localStorage.getItem('egg');
    if (!egg) {
        localStorage.setItem('egg', 'on');
        var title = ["What's up?", "You found the easter egg!", "Stop clicking me, it hurts.", "How would you like it if I clicked you?", "The best bot list!", 
        "Woah, what's this?", "Error, your bots are being deleted.", "Umm you shouldn't be seeing this!", "I've run out of things to say.", "🤔", "drocsiD roF stoB",
        "Founded by Habchy", "Reeeeeeeeeeeeeee", "bOtS fOr DiScOrD", "The moderator rank has been added to your account.", "Founded on October 29, 2017."][Math.floor(Math.random() * 16)];
        $(".title#bfd").text(`${title}`);
        console.log(`Set easter egg to:  ${localStorage.getItem('egg')}`);
    }
    if (egg === 'on') {
        localStorage.setItem('egg', 'off');
        $(".title#bfd").text("Bots For Discord");
        console.log(`Set easter egg to:  ${localStorage.getItem('egg')}`);
    }
    if (egg === 'off') {
        localStorage.setItem('egg', 'on');
        var title = ["What's up?", "You found the easter egg!", "Stop clicking me, it hurts.", "How would you like it if I clicked you?", "The best bot list!", 
        "Woah, what's this?", "Error, your bots are being deleted.", "Umm you shouldn't be seeing this!", "I've run out of things to say.", "🤔", "drocsiD roF stoB",
        "Founded by Habchy", "Reeeeeeeeeeeeeee", "bOtS fOr DiScOrD", "The moderator rank has been added to your account.", "Founded on October 29, 2017."][Math.floor(Math.random() * 16)];
        $(".title#bfd").text(`${title}`);
        console.log(`Set easter egg to:  ${localStorage.getItem('egg')}`);
    }
}