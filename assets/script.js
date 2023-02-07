$.ajax({
    type: 'GET',
    url: 'https://www.zillow.com/webservice/GetRegionChildren.htm',
    data: {
        'zws-id': '<Your Zillow Web Services ID>',
        'state': '<Your state code>',
        'city': '<Your city name>',
        'childtype': 'neighborhood'
    },
    success: function (data) {
        console.log(data);
    }
});

