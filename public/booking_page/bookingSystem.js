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
        console.log("aa");
        let db = firebase.firestore();
        db.collection("courses").doc('111').set(
            {
                data1:"unchi1",
            }
        )
        db.collection("courses").add(
            {
                data2:"unchi2",
            }
        )
    });
})