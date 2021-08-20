//---------------------------common function---------------------------------------//
function addAndMinusItems(product, singleItemPrice, isAdd) {
    /////////////////////case and phone calculation
    const itemInput = document.getElementById(product + "-input");
    let itemCount = parseInt(itemInput.value);
    if (isAdd == true) {
        // debugger;
        itemCount = itemCount + 1;

    }
    else {
        if (itemCount >= 1) {
            itemCount = itemCount - 1;
        }
    }
    itemInput.value = itemCount;
    document.getElementById(product + "-total").innerText = singleItemPrice * itemCount;

    /////////////////////////total calculation
    document.getElementById("sub-total").innerText = parseFloat(document.getElementById("mobile-total").innerText) + parseFloat(document.getElementById("case-total").innerText);
    document.getElementById("tax").innerText = parseInt(document.getElementById("sub-total").innerText) / 10;
    document.getElementById("total").innerText = parseFloat(document.getElementById("tax").innerText) + parseInt(document.getElementById("sub-total").innerText);
}
/////////////////////////////////////mobile//////////////////////////////
document.getElementById("increase-btn").addEventListener("click", function () {
    // const mobileInput = document.getElementById("mobile-input");
    // const mobileCount = parseInt(mobileInput.value) + 1;
    // mobileInput.value = mobileCount;
    addAndMinusItems("mobile", 1219, true);
})
document.getElementById("decrease-btn").addEventListener("click", function () {
    // const mobileInput = document.getElementById("mobile-input");
    // const mobileCount = parseInt(mobileInput.value);
    // if (mobileCount >= 1) {
    //     mobileInput.value = mobileCount - 1;
    // }
    addAndMinusItems("mobile", 1219, false);

})

///////////////////////////////////////////Case//////////////////////////////////
document.getElementById("case-plus").addEventListener("click", function () {
    addAndMinusItems("case", 59, true);
})
document.getElementById("case-minus").addEventListener("click", function () {
    addAndMinusItems("case", 59, false);
})

