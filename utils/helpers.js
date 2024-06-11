module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    ifEquals: function (arg1, arg2, options) {
        console.log(typeof arg1 + " " + typeof arg2)
        return (parseInt(parseInt(arg1)) === parseInt(arg2)) ? options.fn(this) : options.inverse(this);
    }
}
