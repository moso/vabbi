

$('.c_rune, .c_sigil, .c_weapon, .c_effect, .c_spec, .c_replace').hover(
    function() {
        console.log( 'hovering on' , $(this).data('tooltip') ); 
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