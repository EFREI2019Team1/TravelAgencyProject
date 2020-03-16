'use strict';
var SEARCH_DATA = {
    DAY:0,
    TARGET:1,
    COST:2,
    TAG:3
}

function equalsStr(string1, string2) {
    return string1.toLowerCase() == string2.toLowerCase();
}

function getKeyFromValue(data, value) {
    return Object.keys(data).filter(key => {
        return data[key] == value
    })[0];
}

function getUniqueID() {
    var digit = 10000
    return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
}

function getSearchData() {
    let day = $("input[name=search_day]:checked").val();
    let target = $("input[name=search_target]:checked").val();
    let minCost = $("#min_budget").val();
    let maxCost = $("#max_budget").val();
    let cost = [minCost, maxCost];

    let checkedTags = [];
    let tags = document.getElementsByName('searchtag');

    for (let item of tags) {
        if (item.checked) {
            checkedTags.push(item.value);
        }
    }

    if (checkedTags.length === 0) {
        Object.keys(CONTENT).forEach(key => {
            checkedTags.push(CONTENT[key]);
        })
    }

    return [day, target, cost, checkedTags];
}