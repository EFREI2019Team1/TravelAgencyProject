'use strict';
$(function () {
    let ssStorage = sessionStorage;
    let search_flag = JSON.parse(ssStorage.getItem('search_flag'));
    if (search_flag) {
        let search_data = JSON.parse(ssStorage.getItem('search_result'));
        let matchedCourse = searchCourse(search_data[SEARCH_DATA.DAY], search_data[SEARCH_DATA.TARGET], search_data[SEARCH_DATA.COST], search_data[SEARCH_DATA.TAG]);
        if (matchedCourse.length === 0) {
            alert("search result : 0");
        }
        matchedCourse.forEach(course => {
            addCourseToHTML(course);
        })
        ssStorage.setItem('search_flag',false);
    } else {
        addAllCourse();
    }

    $("#search_button").click(() => {
        let matchedCourse = searchExecute();
        //debug message 
        let message = "Search result matched course is " + matchedCourse.length + "\n";
        Object.keys(matchedCourse).forEach(function (course) {
            console.log(matchedCourse[course].name);
        })
        //

        displayCourseReset();
        if (matchedCourse.length === 0) {
            alert("search result : 0");
        }
        matchedCourse.forEach(course => {
            addCourseToHTML(course);
        })
    })
})

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

    $("<img>", {
        class: "course_image",
        src: course.pathToImage,
        alt: "imageNotFound"
    }).appendTo(nesting);

    $("<label>", {
        class: "course_name",
        name: "name"
    }).text(course.name).appendTo(nesting);

    let courseinfo_ul = $("<ul>").appendTo(nesting);

    courseinfo_ul.append($makeLabelList("course_day", "day", course.day + "day"));
    courseinfo_ul.append($makeLabelList("course_target", "target", getKeyFromValue(TARGET, course.target)));
    courseinfo_ul.append($($makeLabelList("course_money", "money", course.moneyLimit + "yen")));

    let content = $("<div>", {
        class: "course_content",
        id: course.id + "-content"
    }).html(course.mainContent).appendTo(nesting);

    // console.log(course.contentTag);
    let courseTags_ul = $("<ul>").appendTo(content);
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

function addAllCourse() {
    displayCourseReset();
    courseList.forEach(course => {
        addCourseToHTML(course);
    })
}

function displayCourseReset() {
    $("#courseList").children().remove();
}

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

function searchExecute() {
    let search_data = getSearchData();
    return searchCourse(search_data[SEARCH_DATA.DAY], search_data[SEARCH_DATA.TARGET], search_data[SEARCH_DATA.COST], search_data[SEARCH_DATA.TAG]);
}