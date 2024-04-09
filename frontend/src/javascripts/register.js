var carinfo, driverinfo, helperinfo, companyinfo
var count = 2
function addname() {
    $('#companyNameContainer').append(`
    <div class="flex items-center gap-2">
    <p>${count}.</p>
    <select name="company-name-${count}" id="company-name-${count}"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="">--Please choose an option--</option>
        ${$.map(companyinfo, function (item) {
        return `<option value="${item.companyName}">${item.companyName}</option>`;
    })
        }
    </select>
</div>
    `);

    $('#docContainer').append(`
    <input type="number" name="doc-${count}"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    `);

    $('#boxContainer').append(`
    <input type="number" name="box-unit-${count}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    `);

    $('#whightContainer').append(`
    <input type="number" name="meterial-whight-${count}"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    `);

    $('#billContainer').append(`
    <input type="number" name="bill-no-${count}"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    `);
    count += 1
};


$('#driverName-select').change(function (e) {
    e.preventDefault();
    let driver = $('#driverName-select').val();
    let result = driverinfo.filter((driverDetails) => {
        if (driverDetails.name == driver) {
            return driverDetails
        }
    })
    $('#driverNumber').val(result[0].phoneNumber);

});
$('#helperName-select').change(function (e) {
    e.preventDefault();
    let helper = $('#helperName-select').val();
    let result = helperinfo.filter((helperDetails) => {
        if (helperDetails.name == helper) {
            return helperDetails
        }
    })
    $('#helperNumber').val(result[0].phoneNumber);

});


$.getJSON("http://localhost:3000/vehiclesdata", (data) => {
    carinfo = data;
    $.map(data, function (item) {
        $('#carNo-select').append(`<option value="${item.vehicleNo}">${item.vehicleNo}</option>`)
    });
}
);
$.getJSON("http://localhost:3000/driversdata", (data) => {
    driverinfo = data
    $.map(data, function (item) {
        $('#driverName-select').append(`<option value="${item.name}">${item.name}</option>`);
    });
});
$.getJSON("http://localhost:3000/helpersdata", (data) => {
    helperinfo = data
    $.map(data, function (item) {
        $('#helperName-select').append(`<option value="${item.name}">${item.name}</option>`);
    });
}
);
$.getJSON("http://localhost:3000/companyesdata", (data) => {
    companyinfo = data
    $.map(data, function (item) {
        $('.company-name').append(`<option value="${item.companyName}">${item.companyName}</option>`);
    });
}
);

$('#tip-details-form').submit(function (e) {
    e.preventDefault();
    var carNo = $('[name="car-no"]').val();
    var driverName = $('[name="driver-name"]').val();
    var driverNum = $('[name="driver-number"]').val();
    var helperName = $('[name="helper-name"]').val();
    var helperNum = $('[name="helper-number"]').val();
    var oilAmount = $('[name="oil-amount"]').val();
    var inTime = $('[name="in-time"]').val();
    var outTime = $('[name="out-time"]').val();



    // Form data
    var tip = {
        carNo: carNo,
        driver: {
            driverName: driverName,
            driverNum: driverNum
        },
        helper: {
            helperName: helperName,
            helperNum: helperNum
        },
        oliAmount: oilAmount,
        time: {
            in: inTime,
            out: outTime
        }

    }

    $.ajax({
        url: 'http://localhost:3000/api/data',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({ data: tip }),
        success: function () {
            console.log('Data sent successfully');
        },
        error: function () {
            console.error('Failed to send data');
        }
    });


    console.log(tip);

});

// $('#tip-details-form').submit(function (e) {
//     e.preventDefault();
//     var carNo = $('[name="car-no"]').val();
//     var driverName = $('[name="driver-name"]').val();
//     var driverNum = $('[name="driver-number"]').val();
//     var helperName = $('[name="helper-name"]').val();
//     var helperNum = $('[name="helper-number"]').val();
//     var oilAmount = $('[name="oil-amount"]').val();
//     var inTime = $('[name="in-time"]').val();
//     var outTime = $('[name="out-time"]').val();
//     var companyNames = []
//     var docNo = $('[name="doc"]').val()
//     var box = $('[name="box-unit"]').val()
//     var whight = $('[name="meterial-whight"]').val()
//     var eoaBill = $('[name="bill-no"]').val()
//     // adding company names
//     for (let i = 1; i <= $('#companyNameContainer > *').length; i++) {
//         companyNames.push($(`[name="company-name-${i}"]`).val())
//     }

//     // Form data
//     var tip = {
//         carNo: carNo,
//         driver: {
//             driverName: driverName,
//             driverNum: driverNum
//         },
//         helper: {
//             helperName: helperName,
//             helperNum: helperNum
//         },
//         oliAmount: oilAmount,
//         time: {
//             in: inTime,
//             out: outTime
//         },
//         shippingDetails: {
//             companys: companyNames,
//             docNumber: docNo,
//             boxNo: box,
//             whight: whight,
//             EOA: eoaBill
//         },

//     }

//     console.log(tip);

// });