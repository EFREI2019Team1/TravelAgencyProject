'use strict';

$(function(){
    let courses = new Array();
    let course1 = new Course("course1",2,"family","family","tmpUIFile/Heart.png",null,[null,10000],["Hoge1","hoge2","hoge3"]);
    let course2 = new Course("course2",3,"young","young","tmpUIFile/Heart.png",null,[10000,13000],["Normal","hanahozi","hege1"]);
    let course3 = new Course("course3",7,"old","old","tmpUIFile/Heart.png",null,[7000,15000],["HogeHoge","unti","kfa"]);
    courses.push(course1);
    courses.push(course2);
    courses.push(course3);
    courses.forEach(course=>{
        addCourseToHTML(course);
    })
})

var courseList = new Array();
//コースクラス
class Course{
    constructor(_name,_day,_target,_searchTag,_pathToImage,_pathToHTMLfile,_moneyLimit,_contentTag){
        this._id = getUniqueID();
        this._name = _name;
        this._day = _day;
        this._target = _target;
        this._searchTag = _searchTag;
        this._pathToImage = _pathToImage;
        this._pathToHTMLfile = _pathToHTMLfile;
        this._moneyLimit = _moneyLimit;
        this._contentTag = _contentTag;
        courseList.push(this);
    }

    get getID(){
        return this._id;
    }
    set name(value){
        this._name = value;
    }
    get name(){
        return this._name;
    }
    set day(value){
        this._day = value;
    }
    get day(){
        return this._day;
    }
    set target(value){
        this._target = value;
    }
    get target(){
        return this._target;
    }
    set tag(value){
        this._tag = value;
    }
    get tag(){
        return this._tag;
    }
    set pathToImage(value){
        this._pathToImage = value;
    }
    get pathToImage(){
        return this._pathToImage;
    }
    set pathToHTMLfile(value){
        this._pathToHTMLfile = value;
    }
    get pathToHTMLfile(){
        return this._pathToHTMLfile;
    }
    set moneyLimit(value){
        this._moneyLimit = value;
    }
    get moneyLimit(){
        return this._moneyLimit;
    }
    set contentTag(value){
        this._contentTag = value;
    }
    get contentTag(){
        return this._contentTag;
    }
}
//一つのコースの要素を作る
function makeCourseNesting(course){
    function $makeLabelList(classname,nametag,content){
        let label = $("<label>",{
            class:classname,
            name:nametag
        }).text(content);
        return $("<li>").append(label);
    }
    let nesting = $("<div>",{
        class:'course',
        id:course.getID
    }).click(()=>{
        alert("JUMP");
    })[0];

    let courseinfo_ul = $("<ul>").appendTo(nesting);

    courseinfo_ul.append($makeLabelList("course_name","name",course.name));
    courseinfo_ul.append($makeLabelList("course_day","day",course.day+"day"));
    courseinfo_ul.append($makeLabelList("course_target","target",course.target));
    courseinfo_ul.append($($makeLabelList("course_money","money",course.moneyLimit[0]+" ~ "+course.moneyLimit[1])));

    $("<img>",{
        class:"course_image",
        src:"tmpUIFile/Heart.png",
        alt:"imageNotFound"
    }).appendTo(nesting);

    let content = $("<div>",{
        class:"course_content",
        id:course.id+"-content"
    }).html(course.mainContent).appendTo(nesting);

    let courseTags_ul = $("<ul>").appendTo(nesting);
    course.contentTag.forEach(tag=>{
        $("<li>").text(tag).appendTo(courseTags_ul);
    })

    return nesting;
}
//コースの要素をhtmlに挿入
function addCourseToHTML(course){
    let li = $("<li>").append(makeCourseNesting(course));
    $("#courseList").append(li);
}

function searchCourse(){
    
}

function getUniqueID() {
    var digit = 10000;
    return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
}