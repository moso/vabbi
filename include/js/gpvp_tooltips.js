// CREATED BY ANGEELS - GODSOFPVP.NET


// Let's let our tooltips come to life!
$("div").html(function(i, html) {

    return html.replace(/\[s=(\w+)\]/g, function(s, key) {
        return "<span data-armory-embed='skills' data-armory-ids='" + repsAPI[key] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });


});

$("div").html(function(i, html) {

    return html.replace(/\[t=(\w+)\]/g, function(s, key) {
        return "<span data-armory-embed='traits' data-armory-ids='" + repsAPI[key] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });


});

$("div").html(function(i, html) {

    return html.replace(/\[i=(\w+)\]/g, function(s, key) {
        return "<span data-armory-embed='items' data-armory-ids='" + repsAPI[key] + "' data-armory-inline-text='wiki' data-armory-size='16'>dab</span>" || s;
    });


});


$("div").html(function(i, html) {


    return html.replace(/\[c=(\w+)\]/g, function(s, key2) {
        return "<a data-tooltip='" + repsCustom[key2] + "' rel='noopener noreferrer' target='_blank' href='http://wiki-en.guildwars2.com/wiki/Special:Search/" + repsCustom[key2] + "' class='c_replace customInline " + repsCustom[key2] + "'>" + repsCustom[key2] + "</a>" || s;
    });
});

// Time to create our shiny tooltips

$('.c_rune, .c_sigil, .c_weapon, .c_effect, .c_spec, .c_replace').hover(
    function() {
        console.log('hovering on', $(this).data('tooltip'));
        var tooltipJSON = tooltipData[$(this).data("tooltip")];
        var tooltipValues = [];

        if (tooltipJSON) {
            $.each(tooltipJSON, function(key, value) {
                if (key == 'url') {
                    tooltipValues.push("<div class='custom_tooltip_image' style='background-image:url(" + value + ");'></div>");
                } else if (key == 'name') {
                    tooltipValues.push("<span class='custom_tooltip_title'>" + value + "</span>");
                } else if (key == 'weapon') {
                    tooltipValues.push("<span class='custom_tooltip_weapon'>" + value + "</span>");
                } else if (key == 'description') {
                    tooltipValues.push("<span class='custom_tooltip_description'>" + value + "</span>");
                } else if (key == 'effect') {
                    tooltipValues.push("<span class='custom_tooltip_effect'>" + value + "</span>");
                } else if (key == 'rune_description') {
                    tooltipValues.push("<span class='custom_tooltip_description_rune'>" + value + "</span>");
                } else if (key == 'spec') {
                    tooltipValues.push("<span class='custom_tooltip_title'>" + value + "</span>");
                } else if (key == 'elite') {
                    if (value == 0) {
                        tooltipValues.push("<span class='custom_tooltip_cd'>This is a core specialisation.</span>");
                    } else {
                        tooltipValues.push("<span class='custom_tooltip_cd'>This is an elite specialisation of " + value + ".</span>");
                    };
                } else if (key == 'cooldown') {
                    if (value > 0) {
                        tooltipValues.push("<span class='custom_tooltip_cd'>(Cooldown: " + value + " Seconds)</span>");
                    } else if (value == 0) {
                        tooltipValues.push("<span class='custom_tooltip_cd'>Permanant Bonus.</span>");
                    } else {
                        tooltipValues.push("<span class='display_none'>Permanant Bonus.</span>");
                    };
                } else {
                    tooltipValues.push("<span class='display_none'>" + value + "</span>");
                }
            });
        }

        var tooltip = $("<div class='custom_tooltip'>" + tooltipValues.join("") + "</div>")
            .css({
                'color': '#a2a8ae',
                'position': 'fixed',
                'padding': '5px',
                'zIndex': '99999',
                'max-width': '100%',
                'background-size': '630px 647px',
                'background-color': '#333',
                'background-clip': 'padding-box',
                'background-image': 'url(https://unpkg.com/armory-embeds@%5E0.x.x/images/gw2a--2xxYoMhS.png)',
                'border': '1px solid #d5ac58',
                'border-radius': '3px',
            });
        $(this).append(tooltip);



        $('.c_sigil, .c_amulet, .c_weapon, .c_effect, .c_spec, .c_replace').mousemove(function(e) {
            $('.custom_tooltip').css({
                left: e.clientX + 10,
                top: e.clientY + 10
            });
        });
    },
    function() {
        $('.custom_tooltip').remove();
    }
);


// Dab on them incorrect values

$("body").on('DOMSubtreeModified', "div#armory_tooltip", function() {

    var query = document.querySelector('.gw2a--3viBN')

    if (query !== null) {
        var divs = document.querySelectorAll('.gw2a--3viBN > div'),
            i;
        for (i = 0; i < divs.length; ++i) {

            if (divs[i].innerHTML.indexOf("CritDamage") !== -1) {
                divs[i].innerHTML = divs[i].innerHTML.replace(/CritDamage/g, "Ferocity");
            }

            if (divs[i].innerHTML.indexOf("HealingPower") !== -1) {
                divs[i].innerHTML = divs[i].innerHTML.replace(/HealingPower/g, "Healing Power");
            }

            if (divs[i].innerHTML.indexOf("ConditionDamage") !== -1) {
                divs[i].innerHTML = divs[i].innerHTML.replace(/ConditionDamage/g, "Condition Damage");
            }

            if (divs[i].innerHTML.indexOf("BoonDuration") !== -1) {
                divs[i].innerHTML = divs[i].innerHTML.replace(/BoonDuration/g, "Concentration");
            }

            if (divs[i].innerHTML.indexOf("ConditionDuration") !== -1) {
                divs[i].innerHTML = divs[i].innerHTML.replace(/ConditionDuration/g, "Expertise");
            }

        }

    }

    var query2 = document.querySelector('.gw2a--1ufhb')

    if (query2 !== null) {
        var spans = document.querySelectorAll('.gw2a--1ufhb > span'),
            i;
        for (i = 0; i < spans.length; ++i) {

            if (spans[i].innerHTML.indexOf("StunBreak") !== -1) {
                spans[i].innerHTML = spans[i].innerHTML.replace(/StunBreak/g, "Breaks Stun");
            }

        }

    }

});