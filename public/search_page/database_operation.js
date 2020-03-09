'use strict';
$(function () {
    let courses = new Array();
    let course1 = new Course("course1", 2, "family", "tmpUIFile/Heart.png", null, 10000, ["kyoto", "hoge2", "hoge3"]);
    let course2 = new Course("course2", 2, "family", "tmpUIFile/Heart.png", null, 13000, ["normal", "aichi", "hege1"]);
    let course3 = new Course("course3", 7, "old", "tmpUIFile/Heart.png", null, 15000, ["hogeHoge", "unti", "kfa"]);
    courses.push(course1);
    courses.push(course2);
    courses.push(course3);
    courses.forEach(course => {
        addCourseToHTML(course);
    })
    let bool = false;
    $("#search_button").click(() => {
        if(!bool){
            location.href = "search_page/page1.html"
        }
        let matchedCourse = search();
        let message = "Search result matched course is "+matchedCourse.length+"\n";
        Object.keys(matchedCourse).forEach(function(course){
            console.log(matchedCourse[course].name);
        })
        alert(message);
    })
})

var courseList = new Array();
//コースクラス
class Course {
    constructor(_name, _day, _target, _pathToImage, _pathToHTMLfile, _moneyLimit, _contentTag) {
        this._id = getUniqueID();
        this._name = _name;
        this._day = _day;
        this._target = _target;
        this._pathToImage = _pathToImage;
        this._pathToHTMLfile = _pathToHTMLfile;
        this._moneyLimit = _moneyLimit;
        this._contentTag = _contentTag;
        courseList.push(this);
    }

    get getID() {
        return this._id;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set day(value) {
        this._day = value;
    }
    get day() {
        return this._day;
    }
    set target(value) {
        this._target = value;
    }
    get target() {
        return this._target;
    }
    set pathToImage(value) {
        this._pathToImage = value;
    }
    get pathToImage() {
        return this._pathToImage;
    }
    set pathToHTMLfile(value) {
        this._pathToHTMLfile = value;
    }
    get pathToHTMLfile() {
        return this._pathToHTMLfile;
    }
    set moneyLimit(value) {
        this._moneyLimit = value;
    }
    get moneyLimit() {
        return this._moneyLimit;
    }
    set contentTag(value) {
        this._contentTag = value;
    }
    get contentTag() {
        return this._contentTag;
    }
}
//一つのコースの要素を作る
function makeCourseNesting(course) {
    function $makeLabelList(classname, nametag, content) {
        let label = $("<label>", {
            class: classname,
            name: nametag
        }).text(content);
        return $("<li>").append(label);
    }
    let nesting = $("<div>", {
        class: 'course',
        id: course.getID
    }).click(() => {
        alert("JUMP");
    })[0];

    let courseinfo_ul = $("<ul>").appendTo(nesting);

    courseinfo_ul.append($makeLabelList("course_name", "name", course.name));
    courseinfo_ul.append($makeLabelList("course_day", "day", course.day + "day"));
    courseinfo_ul.append($makeLabelList("course_target", "target", course.target));
    courseinfo_ul.append($($makeLabelList("course_money", "money", course.moneyLimit + "euro")));

    $("<img>", {
        class: "course_image",
        src: "tmpUIFile/Heart.png",
        alt: "imageNotFound"
    }).appendTo(nesting);

    let content = $("<div>", {
        class: "course_content",
        id: course.id + "-content"
    }).html(course.mainContent).appendTo(nesting);

    let courseTags_ul = $("<ul>").appendTo(nesting);
    course.contentTag.forEach(tag => {
        $("<li>").text(tag).appendTo(courseTags_ul);
    })

    return nesting;
}

//コースの要素をhtmlに挿入
function addCourseToHTML(course) {
    let li = $("<li>").append(makeCourseNesting(course));
    $("#courseList").append(li);
}

function search() {
    function searchCourse(day, target, cost, tags) {
        let matchCourseList =
            courseList.filter(function (course) {
                // console.log(course);
                let isMatched = true;
                if (course.day != day) {
                    isMatched = false;
                    // console.log("courseday -> "+isMatched);
                }
                if (course.target != target) {
                    isMatched = false;
                    // console.log("coursetarget -> "+isMatched);
                }
                if (cost[0]) {
                    if (cost[0] > course.moneyLimit) {
                        isMatched = false;
                    }
                }
                if (cost[1]) {
                    if (cost[1] < course.moneyLimit) {
                        isMatched = false;
                    }
                }
                // console.log("isMatched result ->"+isMatched);
                if (!isMatched) {
                    return false;
                }
    
                let onceTagMatched = false;
                for (let i = 0; i < tags.length; i++) {
                    for (let k = 0; k <course.contentTag.length; k++) {
                        if (tags[i] == course.contentTag[k]) {
                            onceTagMatched = true;
                            // console.log("tag is matched "+tags[i]+" and "+course.contentTag[k]);
                            break;
                        }
                    }
                    if (onceTagMatched) break;
                }
                // console.log("onceTagMatched result -> "+onceTagMatched);
                return onceTagMatched;
            });
        return matchCourseList;
    }
    let day = $("input[name=search_day]:checked").val();
    let target = $("input[name=search_target]:checked").val();
    let minCost = $("#min_budget").val();
    let maxCost = $("#max_budget").val();
    let cost = [minCost,maxCost];

    let checkedTags = [];
    let tags = document.getElementsByName('searchtag');

    for(let item of tags){
        if(item.checked){
            checkedTags.push(item.value);
        }
    }
    
    // console.log(day);
    // console.log(target);
    // console.log(cost);
    // console.log(checkedTags);
    return searchCourse(day,target,cost,checkedTags);
}

function getUniqueID() {
    var digit = 10000
    return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
}