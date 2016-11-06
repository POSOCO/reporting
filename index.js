$.ajax({
    //fetch rldcs from sever
    url: "http://103.7.130.121/WBES/Report/GetFullScheduleList?regionid=2&ScheduleDate=04-11-2016",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});