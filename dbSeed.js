const State = require('./models/state');

function fillState() {
  State.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      if (results.length === 0) {
        const states = [
          {
            "StateName": "Alabama",
            "_id": "AL",
            "StateCode": "AL"
          },
          {
            "StateName": "Alaska",
            "_id": "AK",
            "StateCode": "AK"
          },
          {
            "StateName": "Arizona",
            "_id": "AZ",
            "StateCode": "AZ"
          },
          {
            "StateName": "Arkansas",
            "_id": "AR",
            "StateCode": "AR"
          },
          {
            "StateName": "California",
            "_id": "CA",
            "StateCode": "CA"
          },
          {
            "StateName": "Colorado",
            "_id": "CO",
            "StateCode": "CO"
          },
          {
            "StateName": "Connecticut",
            "_id": "CT",
            "StateCode": "CT"
          },
          {
            "StateName": "Delaware",
            "_id": "DE",
            "StateCode": "DE"
          },
          {
            "StateName": "District of Columbia",
            "_id": "DC",
            "StateCode": "DC"
          },
          {
            "StateName": "Florida",
            "_id": "FL",
            "StateCode": "FL"
          },
          {
            "StateName": "Georgia",
            "_id": "GA",
            "StateCode": "GA"
          },
          {
            "StateName": "Hawaii",
            "_id": "HI",
            "StateCode": "HI"
          },
          {
            "StateName": "Idaho",
            "_id": "ID",
            "StateCode": "ID"
          },
          {
            "StateName": "Illinois",
            "_id": "IL",
            "StateCode": "IL"
          },
          {
            "StateName": "Indiana",
            "_id": "IN",
            "StateCode": "IN"
          },
          {
            "StateName": "Iowa",
            "_id": "IA",
            "StateCode": "IA"
          },
          {
            "StateName": "Kansas",
            "_id": "KS",
            "StateCode": "KS"
          },
          {
            "StateName": "Kentucky",
            "_id": "KY",
            "StateCode": "KY"
          },
          {
            "StateName": "Louisiana",
            "_id": "LA",
            "StateCode": "LA"
          },
          {
            "StateName": "Maine",
            "_id": "ME",
            "StateCode": "ME"
          },
          {
            "StateName": "Maryland",
            "_id": "MD",
            "StateCode": "MD"
          },
          {
            "StateName": "Massachusetts",
            "_id": "MA",
            "StateCode": "MA"
          },
          {
            "StateName": "Michigan",
            "_id": "MI",
            "StateCode": "MI"
          },
          {
            "StateName": "Minnesota",
            "_id": "MN",
            "StateCode": "MN"
          },
          {
            "StateName": "Mississippi",
            "_id": "MS",
            "StateCode": "MS"
          },
          {
            "StateName": "Missouri",
            "_id": "MO",
            "StateCode": "MO"
          },
          {
            "StateName": "Montana",
            "_id": "MT",
            "StateCode": "MT"
          },
          {
            "StateName": "Nebraska",
            "_id": "NE",
            "StateCode": "NE"
          },
          {
            "StateName": "Nevada",
            "_id": "NV",
            "StateCode": "NV"
          },
          {
            "StateName": "New Hampshire",
            "_id": "NH",
            "StateCode": "NH"
          },
          {
            "StateName": "New Jersey",
            "_id": "NJ",
            "StateCode": "NJ"
          },
          {
            "StateName": "New Mexico",
            "_id": "NM",
            "StateCode": "NM"
          },
          {
            "StateName": "New York",
            "_id": "NY",
            "StateCode": "NY"
          },
          {
            "StateName": "North Carolina",
            "_id": "NC",
            "StateCode": "NC"
          },
          {
            "StateName": "North Dakota",
            "_id": "ND",
            "StateCode": "ND"
          },
          {
            "StateName": "Ohio",
            "_id": "OH",
            "StateCode": "OH"
          },
          {
            "StateName": "Oklahoma",
            "_id": "OK",
            "StateCode": "OK"
          },
          {
            "StateName": "Oregon",
            "_id": "OR",
            "StateCode": "OR"
          },
          {
            "StateName": "Pennsylvania",
            "_id": "PA",
            "StateCode": "PA"
          },
          {
            "StateName": "Rhode Island",
            "_id": "RI",
            "StateCode": "RI"
          },
          {
            "StateName": "South Carolina",
            "_id": "SC",
            "StateCode": "SC"
          },
          {
            "StateName": "South Dakota",
            "_id": "SD",
            "StateCode": "SD"
          },
          {
            "StateName": "Tennessee",
            "_id": "TN",
            "StateCode": "TN"
          },
          {
            "StateName": "Texas",
            "_id": "TX",
            "StateCode": "TX"
          },
          {
            "StateName": "Utah",
            "_id": "UT",
            "StateCode": "UT"
          },
          {
            "StateName": "Vermont",
            "_id": "VT",
            "StateCode": "VT"
          },
          {
            "StateName": "Virginia",
            "_id": "VA",
            "StateCode": "VA"
          },
          {
            "StateName": "Washington",
            "_id": "WA",
            "StateCode": "WA"
          },
          {
            "StateName": "West Virginia",
            "_id": "WV",
            "StateCode": "WV"
          },
          {
            "StateName": "Wisconsin",
            "_id": "WI",
            "StateCode": "WI"
          },
          {
            "StateName": "Wyoming",
            "_id": "WY",
            "StateCode": "WY"
          }
        ]
        State.insertMany(states).then(() => {
          console.log("Inserted States");
        }).catch(err => {
          console.log(err);
        });
      }
    }
  })
}
module.exports.fillState = fillState;