window.onload = function(e) {
    function lastMonday() {
        var today = new Date();
        var day = today.getDay() === 0 ? 7 : today.getDay();
        var monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - day + 1);
        return monday
    }

    var relevantDates = dates.filter(function(a) { return a.date.getTime() > lastMonday().getTime() });

    var thisWeek = relevantDates.shift();
    var nextWeek = relevantDates.shift();

    document.querySelector('.this-supplier').innerHTML = formatSupplier(thisWeek);
    document.querySelector('.next-supplier').innerHTML = formatSupplier(nextWeek);
};

function formatSupplier(data) {
    return data.name + "<br/>" + data.date.getDate() + "/" + (data.date.getMonth()+1) 
        + "/" + data.date.getFullYear();
}
