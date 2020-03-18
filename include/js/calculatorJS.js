// FUNCTION 1
function calculateTimeForPips() {

    const warScoreValues = [3, 4, 5]
    const warScorePlacement = parseInt(warScoreValues[sliderWarScorePlacement.value])

    const wvwRankValues = [1, 2, 3, 4, 5, 6, 7]
    const wvwRank = parseInt(wvwRankValues[sliderWvWRank.value])

    const commanderValues = [0, 1]
    const commander = parseInt(commanderValues[sliderCommander.value])

    const commanderPublicValues = [0, 3]
    const commanderPublic = parseInt(commanderPublicValues[sliderCommanderPublic.value])

    const commitmentValues = [0, 1]
    const commitment = parseInt(commitmentValues[sliderCommitment.value])

    const outnumberedValues = [0, 5]
    const outnumbered = parseInt(outnumberedValues[sliderOutnumbered.value])

    const totalPips = warScorePlacement + wvwRank + commander + commanderPublic + commitment + outnumbered

    let result = Math.ceil((1450 / totalPips) * 5)
    if (result % 5 !== 0)
        result += 5 - (result % 5)
    document.forms['calculatorHoursPips'].Result.value = result
    document.forms['calculatorHoursPips'].Result2.value = (result / 60).toFixed(2)

    // calculation for warscore 3
    let minimum = totalPips - warScorePlacement + 3
    minimum = Math.ceil((1450 / minimum) * 5)
    if (minimum % 5 !== 0)
        minimum += 5 - (minimum % 5)
    document.forms['calculatorHoursPips'].MinimumResult.value = minimum;
    document.forms['calculatorHoursPips'].MinimumResult2.value = (minimum / 60).toFixed(2);

    // calculation for warscore 4
    let average = totalPips - warScorePlacement + 4
    average = Math.ceil((1450 / average) * 5)
    if (average % 5 !== 0)
        average += 5 - (average % 5)
    document.forms['calculatorHoursPips'].AverageResult.value = average;
    document.forms['calculatorHoursPips'].AverageResult2.value = (average / 60).toFixed(2);

    // calculation for warscore 5
    let maximum = totalPips - warScorePlacement + 5
    maximum = Math.ceil((1450 / maximum) * 5)
    if (maximum % 5 !== 0)
        maximum += 5 - (maximum % 5)
    document.forms['calculatorHoursPips'].MaximumResult.value = maximum;
    document.forms['calculatorHoursPips'].MaximumResult2.value = (maximum / 60).toFixed(2);
}

// FUNCTION 2
function calculateRewardTrack() {

    const fullTrack = 20000
    var trackPlaceholder = document.getElementById("progression").placeholder
    var trackProgressed = parseInt(document.forms['rewardTrackCalculator'].ParticipationCompleted.value)
    if (trackPlaceholder !== "" && trackProgressed > 0)
        trackPlaceholder = trackProgressed
    else
        trackProgressed = 0
    console.log("progression logged:", trackProgressed)
    console.log(trackPlaceholder)
    const participationValuesCore = [0, 25, 60, 95, 125, 160, 195]
    let participation = parseInt(participationValuesCore[sliderWvWCore.value])

    const participationValuesEOTM = [0, 19, 46, 76, 90, 120, 146]
    let participationEOTM = parseInt(participationValuesEOTM[sliderEOTM.value])

    if (participationEOTM !== 0 && participation !== 0)
        alert("Can't have both normal WvW and EOTM participation on, please select only one of the two")
    else
    if (participation === 0 && participationEOTM !== 0)
        participation = participationEOTM

    const guildValues = [0, 3, 4, 5, 6, 7, 8, 9, 10]
    let guildBooster = guildValues[sliderGuild.value]
    let elements = document.forms['rewardTrackCalculator'].elements
    let totalBoosters = guildBooster
    for (let element of elements) {
        if (element.id === "userInput" && element.type === "radio" && element.checked) {
            totalBoosters += parseInt(element.value)
        } else if (element.id === "userInput" && element.type === "text" && element.value !== undefined) {
            totalBoosters += parseInt(element.value)
        }
    }
    document.forms['rewardTrackCalculator'].TotalBoosterValue.value = totalBoosters + "%"
    var newParticipation = ((participation * totalBoosters) / 100) + participation
    document.forms['rewardTrackCalculator'].ParticipationValueWithBoosters.value = Math.floor(newParticipation)
    
    var totalTimeNeeded = Math.ceil((fullTrack / newParticipation) * 5)
    if (totalTimeNeeded % 5 !== 0)
        totalTimeNeeded += 5 - (totalTimeNeeded % 5)
    document.forms['rewardTrackCalculator'].TimeMinutes.value = totalTimeNeeded
    var hours = Math.floor(totalTimeNeeded / 60)
    var minutes = Math.floor(totalTimeNeeded % 60)
    document.forms['rewardTrackCalculator'].TimeHours.value = hours
    document.forms['rewardTrackCalculator'].TimeMinutes2.value = minutes
    console.log(hours)
    console.log(minutes)
    if(trackProgressed != 0){
        var progressionLeft = fullTrack - trackProgressed
        document.forms['rewardTrackCalculator'].ProgressionOutput.value = progressionLeft
        var totalTimeNeeded2 = Math.ceil((progressionLeft / newParticipation) * 5)
        if (totalTimeNeeded2 % 5 !== 0)
            totalTimeNeeded2 += 5 - (totalTimeNeeded2 % 5)
        document.forms['rewardTrackCalculator'].TimeMinutes3.value = totalTimeNeeded2
        var hours2 = Math.floor(totalTimeNeeded2 / 60)
        var minutes2 = Math.floor(totalTimeNeeded2 % 60)
        document.forms['rewardTrackCalculator'].TimeHours2.value = hours2
        document.forms['rewardTrackCalculator'].TimeMinutes4.value = minutes2
    }
    if(trackProgressed > 20000){
        document.forms['rewardTrackCalculator'].ProgressionOutput.value = 0
        document.forms['rewardTrackCalculator'].TimeMinutes3.value = 0
        document.forms['rewardTrackCalculator'].TimeHours2.value = 0
        document.forms['rewardTrackCalculator'].TimeMinutes4.value = 0
    }
        
}

// FUNCTION 3

function calculateTotalTicketsBackpiece() {
    const warbringer = 2800
    var ticketsPlaceholder = document.getElementById("userInput000").placeholder
    var ticketsOwned = parseInt(document.forms['calculatorTicketsBackpiece'].Tickets.value)
    if (ticketsPlaceholder !== "" && ticketsOwned > 0)
        ticketsPlaceholder = ticketsOwned
    else
        ticketsOwned = 0
    let recruit = document.getElementById("RecruitID")
    let soldier = document.getElementById("SoldierID")
    let general = document.getElementById("GeneralID")
    let commander = document.getElementById("CommanderID")

    if (recruit.checked == true)
        recruit = parseInt(document.getElementById("RecruitID").value)
    else
        recruit = 0

    if (soldier.checked == true)
        soldier = parseInt(document.getElementById("SoldierID").value)
    else
        soldier = 0

    if (general.checked == true)
        general = parseInt(document.getElementById("GeneralID").value)
    else
        general = 0

    if (commander.checked == true)
        commander = parseInt(document.getElementById("CommanderID").value)
    else
        commander = 0

    const ticketsSpent = recruit + soldier + general + commander
    const ticketsRemaining = warbringer - ticketsSpent - ticketsOwned

    if (ticketsRemaining <= 0)
        document.forms['calculatorTicketsBackpiece'].MissingTickets.value = 0
    else
        document.forms['calculatorTicketsBackpiece'].MissingTickets.value = ticketsRemaining

    const fullWeeks = Math.ceil(ticketsRemaining / 365)

    if (fullWeeks <= 0)
        document.forms['calculatorTicketsBackpiece'].MissingWeeks.value = 0
    else
        document.forms['calculatorTicketsBackpiece'].MissingWeeks.value = fullWeeks
}

// FUNCTION 4
function calculateTotalTicketsArmor() {
    let elements = document.forms['calculatorTicketsArmor'].elements
    let hasTickets = parseInt(document.getElementById("userInput001").placeholder)
    let wantsT3 = false 
    let hasPieces = document.getElementById("armorCheckbox").checked 
    for (let element of elements) {
        if (element.id === "userInput" && element.value === "3" && element.type === "radio" && element.checked)
            wantsT3 = true 
        if (element.id === "userInput001" && element.value !== undefined && element.name === "Tickets")
            hasTickets += parseInt(element.value) 
        if (hasPieces && element.id === "userInputArmors" && element.checked && element.offsetParent !== null) {
            console.log("element.name " + element.name)
            console.log("element.offsetParent " + element.offsetParent)
            console.log("element.id " + element.id)
            hasTickets += parseInt(element.value) 
        }     
    }
    /* if i leave this here the placeholder works and counts as 0, if i put it within the other for or above it stops working
    for (let element of elements) {
        if (element.id === "userInput001" && element.placeholder !== "" && hasTickets > 0)
            hasTickets = hasTickets
        else
            hasTickets = 0
    }
    */
    

    let fullArmorCost
    if (wantsT3)
        fullArmorCost = 9190 - hasTickets
    else
        fullArmorCost = 7880 - hasTickets
    document.forms['calculatorTicketsArmor'].MissingTickets.value = fullArmorCost

    let fullWeeks = Math.ceil(fullArmorCost / 365)
    document.forms['calculatorTicketsArmor'].MissingWeeks.value = fullWeeks

}

function updateArmorDisplay() {
    if (document.getElementById("armorCheckbox").checked) {
        const armorProperties = {
            tier2: false,
            tier3: false,
            weight: undefined
        }
        const elements = document.forms['calculatorTicketsArmor'].elements

        for (element of elements) {
            if (element.name === "ArmorTier" && element.id === "userInput" && element.type === "radio" && element.checked) {
                if (element.value === "3") {
                    armorProperties.tier3 = true
                } else {
                    armorProperties.tier2 = true
                }
            }
            if (element.name === "ArmorWeight" && element.id === "userInput" && element.type === "radio" && element.checked) {
                armorProperties.weight = element.value
            }
        }

        if (!(armorProperties.tier2 || armorProperties.tier3) || !armorProperties.weight) {
            return
        }

        if (armorProperties.tier2) {
            switch (armorProperties.weight) {
                case "4":
                    toggleArmor("lightHero")
                    break;
                case "5":
                    toggleArmor("mediumHero")
                    break;
                case "6":
                    toggleArmor("heavyHero")
                    break;
            }
        } else if (armorProperties.tier3) {
            switch (armorProperties.weight) {
                case "4":
                    toggleArmor("lightMistforged")
                    break;
                case "5":
                    toggleArmor("mediumMistforged")
                    break;
                case "6":
                    toggleArmor("heavyMistforged")
                    break;
            }
        }
    } else {
        toggleArmor()
    }
}

function toggleArmor(show) {
    document.getElementById("lightHero").style.display = "none"
    document.getElementById("mediumHero").style.display = "none"
    document.getElementById("heavyHero").style.display = "none"
    document.getElementById("lightMistforged").style.display = "none"
    document.getElementById("mediumMistforged").style.display = "none"
    document.getElementById("heavyMistforged").style.display = "none"
    if (show !== undefined)
        document.getElementById(show).style.display = "block"
}

function updateBackpieceDisplay(){
    if (document.getElementById("backpieceCheckbox").checked) {
        toggleBackpiece("backpiecesSelection")
    }
}

function toggleBackpiece(show){
    document.getElementById("backpiecesSelection").style.display = "none"
    if (show !== undefined)
        document.getElementById(show).style.display = "block"
}

function updateItemsDisplay(){
    if (document.getElementById("itemsCheckbox").checked) {
        toggleItems("itemsSelection")
    }
}

function toggleItems(show){
    document.getElementById("itemsSelection").style.display = "none"
    if (show !== undefined)
        document.getElementById(show).style.display = "block"
}

function calculateRing(){

    const conflux = 1850
    const kills = 100
    const objectives = 100

    var ticketsPlaceholder = document.getElementById("inputTickets").placeholder
    var ticketsOwned = parseInt(document.forms['calculatorTicketsRing'].Tickets.value)
    if (ticketsPlaceholder !== "" && ticketsOwned > 0)
        ticketsPlaceholder = ticketsOwned
    else
        ticketsOwned = 0

    var killsPlaceholder = document.getElementById("inputKills").placeholder
    var killsOwned = parseInt(document.forms['calculatorTicketsRing'].Kills.value)
    if (killsPlaceholder !== "" && killsOwned > 0)
        killsPlaceholder = killsOwned
    else
        killsOwned = 0
    
    var objectivesPlaceholder = document.getElementById("inputObjectives").placeholder
    var objectivesOwned = parseInt(document.forms['calculatorTicketsRing'].Objectives.value)
    if (objectivesPlaceholder !== "" && objectivesOwned > 0)
        objectivesPlaceholder = objectivesOwned
    else
        objectivesOwned = 0
    
    let mithril = document.getElementById("MithrilID")
    let pearl = document.getElementById("PearlID")
    let annihilation = document.getElementById("AnnihilationID")

    if (mithril.checked == true)
        mithril = parseInt(document.getElementById("MithrilID").value)
    else
        mithril = 0

    if (pearl.checked == true)
        pearl = parseInt(document.getElementById("PearlID").value)
    else
        pearl = 0

    if (annihilation.checked == true)
        annihilation = parseInt(document.getElementById("AnnihilationID").value)
    else
        annihilation = 0

    var ticketsSpent = mithril + pearl + annihilation
    var ticketsRemaining = conflux - ticketsSpent - ticketsOwned
    var killsRemaining = kills - killsOwned
    var objectivesRemaining = objectives - objectivesOwned
    
    if (ticketsRemaining <= 0)
        document.forms['calculatorTicketsRing'].MissingTicketsRing.value = 0
    else
        document.forms['calculatorTicketsRing'].MissingTicketsRing.value = ticketsRemaining

    if (killsRemaining <= 0)
        document.forms['calculatorTicketsRing'].MissingKills.value = 0
    else
        document.forms['calculatorTicketsRing'].MissingKills.value = killsRemaining

    if (objectivesRemaining <= 0)
        document.forms['calculatorTicketsRing'].MissingObjectives.value = 0
    else
        document.forms['calculatorTicketsRing'].MissingObjectives.value = objectivesRemaining

    var fullWeeks = Math.ceil(ticketsRemaining / 365)
    
    if (fullWeeks <= 0)
        document.forms['calculatorTicketsRing'].MissingWeeksRing.value = 0
    else
        document.forms['calculatorTicketsRing'].MissingWeeksRing.value = fullWeeks
}