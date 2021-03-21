if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
function chkNumber(ele) {
    var vchar = String.fromCharCode(event.keyCode);
    if (vchar < '0' || vchar > '9') return false;
    ele.onKeyPress = vchar;
}

function chkNumber0(ele) {
    var vchar = String.fromCharCode(event.keyCode);
    if (vchar < '1' || vchar > '9') return false;
    ele.onKeyPress = vchar;
}

function chkNumberDot(ele) {
    var vchar = String.fromCharCode(event.keyCode);
    if ((vchar < '0' || vchar > '9') && (vchar != '.')) return false;
    ele.onKeyPress = vchar;
}
$('.tam-counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({ countNum: countTo }, {
        duration: 1000,
        easing: 'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(addCommas(this.countNum));
            
                var countNum2 = countTo;
                $this.text(addCommas(countNum2));
            
        }
    });
});
function addCommas(nStr){
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal floor
if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
    };
}

function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}


