JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.newPaymentUIForNewCreatedForms = false;
JotForm.newPaymentUI = true;
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";

JotForm.init(function() {
    /*INIT-START*/
    productID = { "0": "input_3_1000", "1": "input_3_1001", "2": "input_3_1002", "3": "input_3_1003", "4": "input_3_1004", "5": "input_3_1005", "6": "input_3_1006", "7": "input_3_1007", "8": "input_3_1008", "9": "input_3_1009" };
    paymentType = "product";
    JotForm.setCurrencyFormat('USD', true, 'point');
    JotForm.totalCounter({ "input_3_1000": { "price": "5", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1000_0", "custom_1": "input_3_custom_1000_1" }, "input_3_1001": { "price": "5", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1001_0", "custom_1": "input_3_custom_1001_1" }, "input_3_1002": { "price": "5", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1002_0", "custom_1": "input_3_custom_1002_1" }, "input_3_1003": { "price": "10", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1003_0", "custom_1": "input_3_custom_1003_1", "specialPriceField": "input_3_custom_1003_1", "specialPriceList": ["8", "10", "15"] }, "input_3_1004": { "price": "10", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1004_0", "custom_1": "input_3_custom_1004_1", "specialPriceField": "input_3_custom_1004_1", "specialPriceList": ["10", "15", "10"] }, "input_3_1005": { "price": "10", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1005_0", "custom_1": "input_3_custom_1005_1", "specialPriceField": "input_3_custom_1005_1", "specialPriceList": ["2", "2", "3"] }, "input_3_1006": { "price": "20", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1006_0", "custom_1": "input_3_custom_1006_1", "specialPriceField": "input_3_custom_1006_1", "specialPriceList": ["2"] }, "input_3_1007": { "price": "5", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1007_0", "custom_1": "input_3_custom_1007_1", "specialPriceField": "input_3_custom_1007_1", "specialPriceList": ["5", "9", "8"] }, "input_3_1008": { "price": "10", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1008_0", "custom_1": "input_3_custom_1008_1", "specialPriceField": "input_3_custom_1008_1", "specialPriceList": ["4", "5", "4"] }, "input_3_1009": { "price": "5", "shipping": { "flatRate": "10" }, "tax": { "rate": "5", "surcharge": [] }, "quantityField": "input_3_quantity_1009_0", "custom_1": "input_3_custom_1009_1", "specialPriceField": "input_3_custom_1009_1", "specialPriceList": ["15", "17", "20", "13"] } });
    $$('.form-product-custom_quantity').each(function(el, i) { el.observe('blur', function() { isNaN(this.value) || this.value < 1 ? this.value = '0' : this.value = parseInt(this.value) }) });
    $$('.form-product-custom_quantity').each(function(el, i) { el.observe('focus', function() { this.value == 0 ? this.value = '' : this.value }) });
    JotForm.paymentCategoryHandler(true, true, {}, {});
    JotForm.handleProductLightbox();

    JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    JotForm.calendarOther = { "today": "Today" };
    var languageOptions = document.querySelectorAll('#langList li');
    for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
        languageOptions[langIndex].on('click', function(e) { setTimeout(function() { JotForm.setCalendar("13", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); }, 0); });
    }
    JotForm.onTranslationsFetch(function() { JotForm.setCalendar("13", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); });
    JotForm.formatDate({ date: (new Date()), dateField: $("id_" + 13) });

    JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    JotForm.calendarOther = { "today": "Today" };
    var languageOptions = document.querySelectorAll('#langList li');
    for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
        languageOptions[langIndex].on('click', function(e) { setTimeout(function() { JotForm.setCalendar("15", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); }, 0); });
    }
    JotForm.onTranslationsFetch(function() { JotForm.setCalendar("15", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); });
    JotForm.displayLocalTime("input_15_hourSelect", "input_15_minuteSelect", "input_15_ampm", "input_15_timeInput", true);
    JotForm.setPhoneMaskingValidator('input_8_full', '(###) ###-####');
    if (window.JotForm && JotForm.accessible) $('input_12').setAttribute('tabindex', 0);
    JotForm.alterTexts(undefined);
    JotForm.alterTexts({ "couponApply": "Apply", "couponBlank": "Please enter a coupon.", "couponChange": "", "couponEnter": "Enter coupon", "couponExpired": "Coupon is expired. Please try another one.", "couponInvalid": "Coupon is invalid.", "couponValid": "Coupon is valid.", "shippingShipping": "Shipping", "taxTax": "Tax", "totalSubtotal": "Subtotal", "totalTotal": "Total" }, true);
    /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null, { "name": "heading", "qid": "1", "text": "Festival Food Order Template", "type": "control_head" }, { "name": "submit2", "qid": "2", "text": "Order Now", "type": "control_button" }, { "name": "menu", "qid": "3", "text": "Menu", "type": "control_payment" }, { "name": "divider", "qid": "4", "type": "control_divider" }, { "name": "name", "qid": "5", "text": "Name", "type": "control_fullname" }, { "name": "email", "qid": "6", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "name": "address", "qid": "7", "text": "Address", "type": "control_address" }, { "name": "phoneNumber", "qid": "8", "text": "Phone Number", "type": "control_phone" }, { "name": "customerInformation", "qid": "9", "text": "Customer Information", "type": "control_head" }, { "name": "typeA", "qid": "10", "text": "Type a question", "type": "control_radio" }, { "name": "input11", "qid": "11", "text": "IMPORTANT NOTES\n\nWe'll confirm your orders within 24-48 hours after the submission.\nShipping fees and taxes are applied to every transaction.\nKindly make sure that the address entered in the form is correct and accurate. \n\n", "type": "control_text" }, { "name": "anyFood", "qid": "12", "text": "Any food allergies? If yes, please indicate them below:", "type": "control_textarea" }, { "name": "dateOrdered", "qid": "13", "text": "Date Ordered", "type": "control_datetime" }, { "name": "orderType", "qid": "14", "text": "Order Type", "type": "control_dropdown" }, { "name": "pickupdeliveryDate", "qid": "15", "text": "Pick-up\u002FDelivery Date & Time", "type": "control_datetime" }]);
setTimeout(function() {
    JotForm.paymentExtrasOnTheFly([null, { "name": "heading", "qid": "1", "text": "Festival Food Order Template", "type": "control_head" }, { "name": "submit2", "qid": "2", "text": "Order Now", "type": "control_button" }, { "name": "menu", "qid": "3", "text": "Menu", "type": "control_payment" }, { "name": "divider", "qid": "4", "type": "control_divider" }, { "name": "name", "qid": "5", "text": "Name", "type": "control_fullname" }, { "name": "email", "qid": "6", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "name": "address", "qid": "7", "text": "Address", "type": "control_address" }, { "name": "phoneNumber", "qid": "8", "text": "Phone Number", "type": "control_phone" }, { "name": "customerInformation", "qid": "9", "text": "Customer Information", "type": "control_head" }, { "name": "typeA", "qid": "10", "text": "Type a question", "type": "control_radio" }, { "name": "input11", "qid": "11", "text": "IMPORTANT NOTES\n\nWe'll confirm your orders within 24-48 hours after the submission.\nShipping fees and taxes are applied to every transaction.\nKindly make sure that the address entered in the form is correct and accurate. \n\n", "type": "control_text" }, { "name": "anyFood", "qid": "12", "text": "Any food allergies? If yes, please indicate them below:", "type": "control_textarea" }, { "name": "dateOrdered", "qid": "13", "text": "Date Ordered", "type": "control_datetime" }, { "name": "orderType", "qid": "14", "text": "Order Type", "type": "control_dropdown" }, { "name": "pickupdeliveryDate", "qid": "15", "text": "Pick-up\u002FDelivery Date & Time", "type": "control_datetime" }]);
}, 20);
JotForm.showJotFormPowered = "new_footer";
JotForm.poweredByText = "Powered by Jotform";
var all_spc = document.querySelectorAll("form[id='221006907023544'] .si" + "mple" + "_spc");
for (var i = 0; i < all_spc.length; i++) {
    all_spc[i].value = "221006907023544-221006907023544";
}
var conx = document.getElementById("box");
var minute = document.getElementById("minSpan")
var hourS = document.getElementById("hourSpan")
var newTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
});
var pickerBox = document.getElementById("hold");

hoursVal();
minsVal();

conx.classList.add("hide");
pickerBox.onclick = () => {

    picker = conx.classList.remove("hide");
}

if (newTime == "24:00") {
    let min = document.getElementsByClassName("min");
    for (let i = 0; i < min.length; i++) {
        min[i].classList.remove("disable");
    }
    let hour = document.getElementsByClassName("hourV");
    for (let i = 0; i < hour.length; i++) {
        hour[i].classList.remove("disable");
    }
}

document.getElementById("input_2").onclick = () => {

    if (hourS.innerHTML == "00") {
        document.getElementById("warn").classList.remove("hide");

    } else {
        if (hourS.innerHTML != "00") {
            document.getElementById("warn").classList.add("hide");
            disable();
            // console.log(newTime)
        }

    }
}

function minsVal() {
    let min = document.getElementsByClassName("min");
    for (let i = 0; i < min.length; i++) {
        min[i].onclick = () => {
            minute.innerHTML = min[i].value
            if (min[i].value == "0" || min[i].value == "5") {
                minute.innerHTML = "0" + min[i].value
            }
        }
    }

}

function hoursVal() {
    let hour = document.getElementsByClassName("hourV");
    for (let i = 0; i < hour.length; i++) {
        hour[i].onclick = () => {
            hourS.innerHTML = hour[i].value
            if (hour[i].value == "1" || hour[i].value == "2" || hour[i].value == "3" || hour[i].value == "4" || hour[i].value == "5" || hour[i].value == "6" || hour[i].value == "7" || hour[i].value == "8" || hour[i].value == "9") {
                hourS.innerHTML = "0" + hour[i].value
            }
        }
    }

}

function disable() {

    let min = document.getElementsByClassName("min");
    for (let i = 0; i < min.length; i++) {
        if (min[i].value == minute.innerHTML) {
            min[i].classList.add("disable");
            min[i].value = "";
            if (newTime == "13:00") {
                min[i].classList.remove("disable")
                min[i].value = "";
                minute.innerHTML = "00";
            }
            // setTimeout(function() {
            //     min[i].classList.remove("disable")
            //     min[i].value = "";
            //     minute.innerHTML = "00";

            // }, 10000);
        }

    }
    let hour = document.getElementsByClassName("hourV");
    for (let i = 0; i < hour.length; i++) {
        if (hour[i].value == hourS.innerHTML) {
            hour[i].classList.add("disable");
            hour[i].value = "";
            if (newTime == "13:00") {
                hour[i].classList.remove("disable")
                hour[i].value = "";
                hourS.innerHTML = "00";
            }
            // setTimeout(function() {
            //     hour[i].classList.remove("disable")
            //     hour[i].value = "";
            //     hourS.innerHTML = "00";
            // }, 10000);
        }

    }
}


// document.head.insertAdjacentHTML("beforeend", ` `);


pickerBox.onclick = () => {

    picker = conx.classList.remove("hide");
}