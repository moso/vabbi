// Dab on them incorrect values

$("body").on('DOMSubtreeModified', "div#armory_tooltip", function() {

  var query = document.querySelector('.gw2a--3viBN')

  if ( query !== null) {
    var divs = document.querySelectorAll('.gw2a--3viBN > div'), i;
        for (i = 0; i < divs.length; ++i) {
          
          if(divs[i].innerHTML.indexOf("CritDamage") !== -1) {
              divs[i].innerHTML = divs[i].innerHTML.replace(/CritDamage/g, "Ferocity");
          }

          if(divs[i].innerHTML.indexOf("HealingPower") !== -1) {
            divs[i].innerHTML = divs[i].innerHTML.replace(/HealingPower/g, "Healing Power");
          }

          if(divs[i].innerHTML.indexOf("ConditionDamage") !== -1) {
            divs[i].innerHTML = divs[i].innerHTML.replace(/ConditionDamage/g, "Condition Damage");
          }  

          if(divs[i].innerHTML.indexOf("BoonDuration") !== -1) {
            divs[i].innerHTML = divs[i].innerHTML.replace(/BoonDuration/g, "Concentration");
          }  

          if(divs[i].innerHTML.indexOf("ConditionDuration") !== -1) {
            divs[i].innerHTML = divs[i].innerHTML.replace(/ConditionDuration/g, "Expertise");
          }  

      }

    }

    var query2 = document.querySelector('.gw2a--1ufhb')

  if ( query2 !== null) {
    var spans = document.querySelectorAll('.gw2a--1ufhb > span'), i;
        for (i = 0; i < spans.length; ++i) {
          
          if(spans[i].innerHTML.indexOf("StunBreak") !== -1) {
            spans[i].innerHTML = spans[i].innerHTML.replace(/StunBreak/g, "Breaks Stun");
          }

      }

    }

});




