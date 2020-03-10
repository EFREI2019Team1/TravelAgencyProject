'use strict';
var TARGET = {
    FAMILY: 0,
    COUPLE: 1,
    YOUNG: 2,
    ADULT: 3
};

var CONTENT = {
    WORLD_HERITAGE: 0,
    SHOPPING: 1,
    IVENT: 2,
    FASHION: 3,
    MUSEUM: 4,
    SIMBOL: 5,
    TEA_TIME: 6,
    PARK: 7,
    SHOW: 8,
    HISTORIC: 9,
    INSTAGRAM: 10,
    FILMING_LOCATION: 11
};

function equalsStr(string1, string2) {
    return string1.toLowerCase() == string2.toLowerCase();
}

function getKeyFromValue(data, value) {
    return Object.keys(data).filter(key => {
        return data[key] == value
    })[0];
}

$(function () {
    let courses = new Array();
    let course1 = new Course("コッツウォルズ地方とロンドン", 7, TARGET.ADULT, "UI/course01.jpg", null, 289900, [CONTENT.WORLD_HERITAGE, CONTENT.MUSEUM, CONTENT.SIMBOL]);
    let course2 = new Course("最低価格！1weekぶらり旅", 7, TARGET.YOUNG, "UI/course02.jpg", null, 30000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
    let course3 = new Course("ロンドン観光、一週間の旅", 7, TARGET.YOUNG, "UI/course03.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.MUSEUM, CONTENT.SIMBOL, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
    let course4 = new Course("ロンドン建築巡り！", 2, TARGET.COUPLE, "UI/course04.jpg", null, 20000, [CONTENT.WORLD_HERITAGE, CONTENT.SIMBOL, CONTENT.HISTORIC, CONTENT.INSTAGRAM]);
    let course5 = new Course("最低価格！3daysぶらり旅", 3, TARGET.YOUNG, "UI/course05.jpg", null, 10000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
    let course6 = new Course("最低価格！2daysぶらり旅", 2, TARGET.YOUNG, "UI/course06.jpg", null, 5000, [CONTENT.SHOPPING, CONTENT.IVENT, CONTENT.FASHION, CONTENT.TEA_TIME, CONTENT.INSTAGRAM]);
    let course7 = new Course("ロンドン名所巡り", 2, TARGET.YOUNG, "UI/course07.jpg", null, 10000, [CONTENT.WORLD_HERITAGE, CONTENT.SIMBOL, CONTENT.PARK, CONTENT.HISTORIC]);
    let course8 = new Course("街歩きとミュージカル鑑賞", 2, TARGET.FAMILY, "UI/course08.jpg", null, 15000, [CONTENT.SHOPPING, CONTENT.SHOW, CONTENT.HISTORIC]);
    let course9 = new Course("クルーズ&バス", 2, TARGET.ADULT, "UI/course09.jpg", null, 15000, [CONTENT.WORLD_HERITAGE, CONTENT.SHOPPING, CONTENT.SIMBOL, CONTENT.PARK, CONTENT.HISTORIC]);
    let course10 = new Course("ハリーポッターとシャーロックホームズ/名作のロケ地巡り", 5, TARGET.FAMILY, "UI/course10.jpg", null, 25000, [CONTENT.SHOW, CONTENT.FILMING_LOCATION]);
    let course11 = new Course("ファミリーツアー", 7, TARGET.FAMILY, "UI/course11.jpg", null, 270000, [CONTENT.SHOPPING, CONTENT.PARK, CONTENT.HISTORIC, CONTENT.INSTAGRAM]);
    let course12 = new Course("3days for family", 3, TARGET.FAMILY, "UI/course12.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.PARK, CONTENT.FILMING_LOCATION]);
    let course13 = new Course("2人でまったり絶景巡り", 2, TARGET.COUPLE, "UI/course13.jpg", null, 20000, [CONTENT.SIMBOL, CONTENT.INSTAGRAM]);
    let course14 = new Course("3days for couple", 3, TARGET.COUPLE, "UI/course14.jpg", null, 100000, [CONTENT.WORLD_HERITAGE, CONTENT.HISTORIC, CONTENT.FILMING_LOCATION]);
    let course15 = new Course("まったり博物館・美術館巡り", 7, TARGET.ADULT, "UI/course15.jpg", null, 70000, [CONTENT.WORLD_HERITAGE, CONTENT.MUSEUM, CONTENT.SIMBOL, CONTENT.HISTORIC]);
    let course16 = new Course("3 days for adults(優雅)", 3, TARGET.ADULT, "UI/course16.jpg", null, 100000, [CONTENT.WORLD_HERITAGE, CONTENT.TEA_TIME, CONTENT.SHOW, CONTENT.HISTORIC]);
    let course17 = new Course("shopping and theatre", 2, TARGET.FAMILY, "UI/course17.jpg", null, 15000, [CONTENT.SHOPPING, CONTENT.FASHION, CONTENT.SHOW]);
    let course18 = new Course("ロンドンのおすすめ観光スポット15選！", 3, TARGET.COUPLE, "UI/course18.jpg", null, 20000, [CONTENT.SIMBOL, CONTENT.HISTORIC, CONTENT.INSTAGRAM, CONTENT.FILMING_LOCATION]);
    let course19 = new Course("3 days with musical", 3, TARGET.FAMILY, "UI/course19.jpg", null, 100000, [CONTENT.SHOPPING, CONTENT.MUSEUM, CONTENT.SHOW]);
    courses.push(course1);
    courses.push(course2);
    courses.push(course3);
    courses.push(course4);
    courses.push(course5);
    courses.push(course6);
    courses.push(course7);
    courses.push(course8);
    courses.push(course9);
    courses.push(course10);
    courses.push(course11);
    courses.push(course12);
    courses.push(course13);
    courses.push(course14);
    courses.push(course15);
    courses.push(course16);
    courses.push(course17);
    courses.push(course18);
    courses.push(course19);
    // console.log(courses);

    $("#search_button").click(() => {
        let matchedCourse = search();
        let message = "Search result matched course is " + matchedCourse.length + "\n";
        Object.keys(matchedCourse).forEach(function (course) {
            console.log(matchedCourse[course].name);
        })

        displayCourseReset();

        matchedCourse.forEach(course => {
            addCourseToHTML(course);
        })
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
    courseinfo_ul.append($makeLabelList("course_target", "target", getKeyFromValue(TARGET, course.target)));
    courseinfo_ul.append($($makeLabelList("course_money", "money", course.moneyLimit + "yen")));

    $("<img>", {
        class: "course_image",
        src: course.pathToImage,
        alt: "imageNotFound"
    }).appendTo(nesting);

    let content = $("<div>", {
        class: "course_content",
        id: course.id + "-content"
    }).html(course.mainContent).appendTo(nesting);

    // console.log(course.contentTag);
    let courseTags_ul = $("<ul>").appendTo(nesting);
    /*
    Object.key(course.contentTag).forEach(tag => {
        console.log(tag);
        // console.log(getKeyFromValue(CONTENT, tag));
        // $('<li>').text(getKeyFromValue(CONTENT, tag)).appendTo(courseTags_ul);
    })
    */
    course.contentTag.forEach(tag => {
        $('<li>').text(getKeyFromValue(CONTENT, tag)).appendTo(courseTags_ul);
    })


    return nesting;
}

//コースの要素をhtmlに挿入
function addCourseToHTML(course) {
    let li = $("<li>").append(makeCourseNesting(course));
    $("#courseList").append(li);
}

function addAllCourse(){
    displayCourseReset();
    courseList.forEach(course=>{
        addCourseToHTML(course);
    })
}

function displayCourseReset() {
    $("#courseList").children().remove();
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
                    for (let k = 0; k < course.contentTag.length; k++) {
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
    let cost = [minCost, maxCost];

    let checkedTags = [];
    let tags = document.getElementsByName('searchtag');

    for (let item of tags) {
        if (item.checked) {
            checkedTags.push(item.value);
        }
    }

    return searchCourse(day, target, cost, checkedTags);
}

function getUniqueID() {
    var digit = 10000
    return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
}