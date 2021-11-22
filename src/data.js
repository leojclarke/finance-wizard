const transactionData = [
        {
            "id": 1,
            "description": "Aldi sagt danke",
            "amount": 12.5,
            "currency": "EUR",
            "date": new Date('2021-11-17T09:24:00').toDateString(),
            "category": "Food shopping",
            "account": "Postbank",
            "payee": {
                "shortname": "ALDI",
                "longname": "ALDI 293 HH-Langenhorner Chaussee",
                "imgsrc": "//logo.clearbit.com/aldi-nord.de",
            },
            "reference": "djfhs-ldkjf234h-pozasd",
            "type": "expense",
            //isRead: true,
            //isRecurring: false,      
        
        },
        {
            "id": 2,
            "description": "Penny sagt danke",
            "amount": 24.5,
            "currency": "EUR",
            "date": new Date('2021-11-18T11:34:00').toDateString(),
            "category": "Food shopping",
            "account": "Postbank",
            "payee": {
                "shortname": "Penny",
                "longname": "Penny 53 HH-Troplowitz",
                "imgsrc": "//logo.clearbit.com/penny.de",
            },
            "reference": "nvdhiur8-83thzd6-psldje",
            "type": "expense",
            //isRead: true,
            //isRecurring: false,      
        
        },
        {
            "id": 3,
            "description": "Gehalt",
            "amount": 5.000,
            "currency": "EUR",
            "date": new Date('2021-11-18T16:45:00').toDateString(),
            "category": "Salary",
            "account": "Postbank",
            "payee": {
                "shortname": "Apple",
                "longname": "Apple Computer Industries",
                "imgsrc": "//logo.clearbit.com/apple.com",
            },
            "reference": "Gehaltsabrechnung Oktober 2021",
            "type": "income",
            //isRead: true,
            //isRecurring: false,      
        
        }
    ]


export default transactionData;