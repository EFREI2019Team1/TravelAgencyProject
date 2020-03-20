'use strict';
$(function () {
    const login = $('#login');
    const logout = $('#logout');
    const userstate = $('#userstate');
    const auth = firebase.auth();

    login[0].addEventListener('click', () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(result => {
                var user = result.user;
            })
            .catch(error => {
                console.log("error --->\n" + error);
            })
    });

    logout[0].addEventListener('click', () => auth.signOut());

    auth.onAuthStateChanged(user => {
        let userImage = $("#userImage");
        if (user) {
            login.addClass('hidden');
            logout.removeClass('hidden');
            userstate.html(user.displayName)
            userImage.attr('src', user.photoURL);
        } else {
            login.removeClass('hidden');
            logout.addClass('hidden');
            userstate.html("None")
            userImage.attr('src', "personImage.jpg");
        }
    })

    $("#book_button").click(function () {
        reserveCourseOnDB(courseList[0].getID);
        addCourseOnDisp(courseList[0].name,courseList[0].getID);
    });

    $("#delete_button").click(() => {
        deleteReservedCourseOnDB(courseList[0].getID);
        deleteCOurseOnDisp(courseList[0].getID);
    })

    $("#zikken").click(() => {
        updateReservedCourseDisp();
        // deleteCOurseOnDisp(courseList[0].getID);
        // updateReservedCourseDisp();
    })
})

//add a course to display(ul li)
function addCourseOnDisp(name, uid) {
    let $bookList = $("#bookCourseList");

    let $label = $("<label>", {
        class: "reserved_course_name",
    }).text(name);

    //データタグの使い方、jqueryとの違い
    $label.data('uid', uid);

    let $list = $('<li>').append($label);

    $bookList.append($list);
}

//delete a course from display(ul li)
function deleteCOurseOnDisp(course_uid) {
    let $reservedCourseLists = $("#bookCourseList > li >label");
    $.each($reservedCourseLists, function (indexInArray, elem) {
        let reservedCourseID = $(elem).data('uid');
        if (reservedCourseID === course_uid) {
            $(elem).parent().remove();
        }
    });
}

//update display reserved course(get from database and make reserved course)
function updateReservedCourseDisp() {
    let myuser = firebase.auth().currentUser;
    if (myuser) {
        $("#bookCourseList").empty();

        let db = firebase.firestore();

        let reservedCourseIDList = new Array();
        db.collection('clients').doc(myuser.uid).get().then(clientDoc => {
            let data = clientDoc.data();
            reservedCourseIDList = data.booking_courseid;
        }).finally(() => {
            courseList.forEach(course => {
                let isMatchedID = false;
                reservedCourseIDList.forEach(targetID => {
                    if (course.getID === targetID) isMatchedID = true;
                })
                if (isMatchedID) {
                    addCourseOnDisp(course.name, course.getID);
                }
            })
        })
    } else {
        alert("Please login your account");
    }
}

//database operation
function deleteReservedCourseOnDB(courseID) {
    let myuser = firebase.auth().currentUser;
    if (myuser) {
        let db = firebase.firestore();
        db.collection('clients').doc(myuser.uid).update({
            booking_courseid: firebase.firestore.FieldValue.arrayRemove(courseList[0].getID)
        })
    } else {
        alert("Please login your account in order to remove travel course");
    }
}

//database operation
function reserveCourseOnDB(courseID) {
    let myuser = firebase.auth().currentUser;
    if (myuser) {
        let db = firebase.firestore();
        db.collection("clients").doc(myuser.uid).update({
            booking_courseid: firebase.firestore.FieldValue.arrayUnion(courseID)
        })
    } else {
        alert("Please login your account in order to book travel course");
    }
}