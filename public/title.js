$(function () {
    let ssStorage = sessionStorage;
    ssStorage.setItem('search_flag',false);

    $("#search_button").click(() => {
        let search_data = getSearchData();
        console.log(search_data);
        ssStorage.setItem('search_result',JSON.stringify(search_data));
        ssStorage.setItem('search_flag',true);
        location.href= "search_page/course_list.html";
    })
})