const rangeValues1 = {
    "0": " 3 PIPS",
    "1": " 4 PIPS",
    "2": " 5 PIPS",
};
const rangeValues2 = {
    "0": " 1 PIP",
    "1": " 2 PIPS",
    "2": " 3 PIPS",
    "3": " 4 PIPS",
    "4": " 5 PIPS",
    "5": " 6 PIPS",
    "6": " 7 PIPS",
};
const rangeValues3 = {
    "0": " 0 PIPS",
    "1": " 1 PIP",
};
const rangeValues4 = {
    "0": " 0 PIPS",
    "1": " 1 PIP",
};
const rangeValues5 = {
    "0": " 0 PIPS",
    "1": " 5 PIPS",
};

const rangeValues6 = {
    "0": " 0 PARTICIPATION",
    "1": " 25 PARTICIPATION",
    "2": " 60 PARTICIPATION",
    "3": " 95 PARTICIPATION",
    "4": " 125 PARTICIPATION",
    "5": " 160 PARTICIPATION",
    "6": " 195 PARTICIPATION",
};
const rangeValues7 = {
    "0": " 0 PARTICIPATION",
    "1": " 19 PARTICIPATION",
    "2": " 46 PARTICIPATION",
    "3": " 76 PARTICIPATION",
    "4": " 90 PARTICIPATION",
    "5": " 120 PARTICIPATION",
    "6": " 146 PARTICIPATION",
};
const rangeValues8 = {
    "0": " 0 %",
    "1": " 3 %",
    "2": " 4 %",
    "3": " 5 %",
    "4": " 6 %",
    "5": " 7 %",
    "6": " 8 %",
    "7": " 9 %",
    "8": " 10 %",
};
const rangeValues9 = {
    "0": " 0 PIPS",
    "1": " 3 PIPS",
};

$(function () {
    // SLIDER 1
    // on page load, set the text of the label based the value of the range
    $('#rangeText1').text(rangeValues1[$('#sliderWarScorePlacement').val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $('#sliderWarScorePlacement').on('input change', function () {
        $('#rangeText1').text(rangeValues1[$(this).val()]);

    });
    //SLIDER 2 PIP RANK
    $('#rangeText2').text(rangeValues2[$('#sliderWvWRank').val()]);
    $('#sliderWvWRank').on('input change', function () {
        $('#rangeText2').text(rangeValues2[$(this).val()]);
    });
    //SLIDER 3 PIP PRIVATE COMMANDER
    $('#rangeText3').text(rangeValues3[$('#sliderCommander').val()]);
    $('#sliderCommander').on('input change', function () {
        $('#rangeText3').text(rangeValues3[$(this).val()]);
    });
    //SLIDER 4 PIP COMMITMENT
    $('#rangeText4').text(rangeValues4[$('#sliderCommitment').val()]);
    $('#sliderCommitment').on('input change', function () {
        $('#rangeText4').text(rangeValues4[$(this).val()]);
    });
    //SLIDER 5 PIP OUTNUMBERED
    $('#rangeText5').text(rangeValues5[$('#sliderOutnumbered').val()]);
    $('#sliderOutnumbered').on('input change', function () {
        $('#rangeText5').text(rangeValues5[$(this).val()]);
    });
    //SLIDER 6 PARTICIPATION WVW CORE
    $('#rangeText6').text(rangeValues6[$('#sliderWvWCore').val()]);
    $('#sliderWvWCore').on('input change', function () {
        $('#rangeText6').text(rangeValues6[$(this).val()]);
    });
    //SLIDER 7 PARTICIPATION EOTM
    $('#rangeText7').text(rangeValues7[$('#sliderEOTM').val()]);
    $('#sliderEOTM').on('input change', function () {
        $('#rangeText7').text(rangeValues7[$(this).val()]);
    });
    //SLIDER 8 PARTICIPATION GUILD
    $('#rangeText8').text(rangeValues8[$('#sliderGuild').val()]);
    $('#sliderGuild').on('input change', function () {
        $('#rangeText8').text(rangeValues8[$(this).val()]);
    });
    //SLIDER 9 PIP PUBLIC COMMANDER
    $('#rangeText9').text(rangeValues9[$('#sliderCommanderPublic').val()]);
    $('#sliderCommanderPublic').on('input change', function () {
        $('#rangeText9').text(rangeValues9[$(this).val()]);
    });
});