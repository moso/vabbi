// Let's let our tooltips come to life!

// class='api_img_line' - used to have the icon and name on the same text line as everything else

// replace skills [s=skillName]
//file: replaceAPI.js

$("div").html(function(i, html) {

    return html.replace(/\[s=(\w+)\]/g, function(s, keyAPITooltips) {
        return "<span class='api_img_line' data-armory-size='24px' data-armory-embed='skills' data-armory-ids='" + repsAPI[keyAPITooltips] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });

});

//replace traits [t=traitName]
//file: replaceAPI.js


$("div").html(function(i, html) {

    return html.replace(/\[t=(\w+)\]/g, function(s, keyAPITooltips) {
        return "<span class='api_img_line' data-armory-size='24px' data-armory-embed='traits' data-armory-ids='" + repsAPI[keyAPITooltips] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });

});

//replace items [i=itemName]
//file: replaceAPI.js

$("div").html(function(i, html) {

    return html.replace(/\[i=(\w+)\]/g, function(s, keyAPITooltips) {
        return "<span data-armory-size='24px' data-armory-embed='items' data-armory-ids='" + repsAPI[keyAPITooltips] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });

});

//replace custom [c=boon/condition/effect/class/something else]
//file: replaceCustom.js

$("div").html(function(i, html) {


    return html.replace(/\[c=(\w+)\]/g, function(s, keyCustomTooltips) {
        return "<a data-tooltip='" + repsCustom[keyCustomTooltips] + "' rel='noopener noreferrer' target='_blank' href='http://wiki-en.guildwars2.com/wiki/Special:Search/" + repsCustom[keyCustomTooltips] + "' class='c_replace customInline " + repsCustom[keyCustomTooltips] + "'>" + repsCustom[keyCustomTooltips] + "</a>" || s;
    });
});