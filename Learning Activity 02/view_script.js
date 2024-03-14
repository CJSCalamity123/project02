var model = [
    {
        name: "Christopher Sanon",
        expertise: "Sophomore, Video Game Lover, Anime Lover, Computer Science Major",
        profile: "https://cjscalamity123.github.io/CUS-1172/P1M3"
    },
    {
        name:"Myriam Sanon",
        expertise:"High School Senior, YECA",
        profile: "https://aniwave.to/home"
    },
    {
        name:"Sandra Sanon",
        expertise:"Nurse and Mother",
        profile:"https://mail.google.com/mail/u/0/?tab=km#inbox"
    }
];


var render_view = (view_id, model_index) => {
    console.log("Rendering View");
    var source = document.querySelector(view_id).innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model[model_index]);

    document.querySelector("view_Widget").innerHTML = html;
}