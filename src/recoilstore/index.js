import { atom } from "recoil";

export const $countries = atom({
  key:"$countries",
  default:
  [
      {
          "name": "Afghanistan",
          "unicode": "U+1F1E6 U+1F1EB",
          "emoji": "🇦🇫",
          "alpha2": "AF",
          "dialCode": "93",
          "alpha3": "AFG",
          "region": "Asia",
          "capital": "Kabul",
          "geo": {
              "lat": 33,
              "long": 33
          },
          "timezones": [
              "Asia/Kabul"
          ]
      },
      {
          "name": "Albania",
          "unicode": "U+1F1E6 U+1F1F1",
          "emoji": "🇦🇱",
          "alpha2": "AL",
          "dialCode": "355",
          "alpha3": "ALB",
          "region": "Europe",
          "capital": "Tirana",
          "geo": {
              "lat": 41,
              "long": 41
          },
          "timezones": [
              "Europe/Tirane"
          ]
      },
      {
          "name": "Algeria",
          "unicode": "U+1F1E9 U+1F1FF",
          "emoji": "🇩🇿",
          "alpha2": "DZ",
          "dialCode": "213",
          "alpha3": "DZA",
          "region": "Africa",
          "capital": "Algiers",
          "geo": {
              "lat": 28,
              "long": 28
          },
          "timezones": [
              "Africa/Algiers"
          ]
      },
      {
          "name": "American Samoa",
          "unicode": "U+1F1E6 U+1F1F8",
          "emoji": "🇦🇸",
          "alpha2": "AS",
          "dialCode": "1 684",
          "alpha3": "ASM",
          "region": "Oceania",
          "capital": "Pago Pago",
          "geo": {
              "lat": -14.33333333,
              "long": -14.33333333
          },
          "timezones": [
              "Pacific/Pago_Pago"
          ]
      },
      {
          "name": "Andorra",
          "unicode": "U+1F1E6 U+1F1E9",
          "emoji": "🇦🇩",
          "alpha2": "AD",
          "dialCode": "376",
          "alpha3": "AND",
          "region": "Europe",
          "capital": "Andorra la Vella",
          "geo": {
              "lat": 42.5,
              "long": 42.5
          },
          "timezones": [
              "Europe/Andorra"
          ]
      },
      {
          "name": "Angola",
          "unicode": "U+1F1E6 U+1F1F4",
          "emoji": "🇦🇴",
          "alpha2": "AO",
          "dialCode": "244",
          "alpha3": "AGO",
          "region": "Africa",
          "capital": "Luanda",
          "geo": {
              "lat": -12.5,
              "long": -12.5
          },
          "timezones": [
              "Africa/Luanda"
          ]
      },
      {
          "name": "Anguilla",
          "unicode": "U+1F1E6 U+1F1EE",
          "emoji": "🇦🇮",
          "alpha2": "AI",
          "dialCode": "1 264",
          "alpha3": "AIA",
          "region": "Americas",
          "capital": "The Valley",
          "geo": {
              "lat": 18.25,
              "long": 18.25
          },
          "timezones": [
              "America/Anguilla"
          ]
      },
      {
          "name": "Antarctica",
          "unicode": "U+1F1E6 U+1F1F6",
          "emoji": "🇦🇶",
          "alpha2": "AQ",
          "dialCode": "",
          "alpha3": "ATA",
          "region": "",
          "capital": null,
          "geo": {
              "lat": -90,
              "long": -90
          },
          "timezones": [
              "Antarctica/McMurdo",
              "Antarctica/Casey",
              "Antarctica/Davis",
              "Antarctica/DumontDUrville",
              "Antarctica/Mawson",
              "Antarctica/Palmer",
              "Antarctica/Rothera",
              "Antarctica/Syowa",
              "Antarctica/Troll",
              "Antarctica/Vostok"
          ]
      },
      {
          "name": "Antigua and Barbuda",
          "unicode": "U+1F1E6 U+1F1EC",
          "emoji": "🇦🇬",
          "alpha2": "AG",
          "dialCode": "1268",
          "alpha3": "ATG",
          "region": "Americas",
          "capital": "Saint John's",
          "geo": {
              "lat": 17.05,
              "long": 17.05
          },
          "timezones": [
              "America/Antigua"
          ]
      },
      {
          "name": "Argentina",
          "unicode": "U+1F1E6 U+1F1F7",
          "emoji": "🇦🇷",
          "alpha2": "AR",
          "dialCode": "54",
          "alpha3": "ARG",
          "region": "Americas",
          "capital": "Buenos Aires",
          "geo": {
              "lat": -34,
              "long": -34
          },
          "timezones": [
              "America/Argentina/Buenos_Aires",
              "America/Argentina/Cordoba",
              "America/Argentina/Salta",
              "America/Argentina/Jujuy",
              "America/Argentina/Tucuman",
              "America/Argentina/Catamarca",
              "America/Argentina/La_Rioja",
              "America/Argentina/San_Juan",
              "America/Argentina/Mendoza",
              "America/Argentina/San_Luis",
              "America/Argentina/Rio_Gallegos",
              "America/Argentina/Ushuaia"
          ]
      },
      {
          "name": "Armenia",
          "unicode": "U+1F1E6 U+1F1F2",
          "emoji": "🇦🇲",
          "alpha2": "AM",
          "dialCode": "374",
          "alpha3": "ARM",
          "region": "Asia",
          "capital": "Yerevan",
          "geo": {
              "lat": 40,
              "long": 40
          },
          "timezones": [
              "Asia/Yerevan"
          ]
      },
      {
          "name": "Aruba",
          "unicode": "U+1F1E6 U+1F1FC",
          "emoji": "🇦🇼",
          "alpha2": "AW",
          "dialCode": "297",
          "alpha3": "ABW",
          "region": "Americas",
          "capital": "Oranjestad",
          "geo": {
              "lat": 12.5,
              "long": 12.5
          },
          "timezones": [
              "America/Aruba"
          ]
      },
      {
          "name": "Australia",
          "unicode": "U+1F1E6 U+1F1FA",
          "emoji": "🇦🇺",
          "alpha2": "AU",
          "dialCode": "61",
          "alpha3": "AUS",
          "region": "Oceania",
          "capital": "Canberra",
          "geo": {
              "lat": -27,
              "long": -27
          },
          "timezones": [
              "Australia/Lord_Howe",
              "Antarctica/Macquarie",
              "Australia/Hobart",
              "Australia/Currie",
              "Australia/Melbourne",
              "Australia/Sydney",
              "Australia/Broken_Hill",
              "Australia/Brisbane",
              "Australia/Lindeman",
              "Australia/Adelaide",
              "Australia/Darwin",
              "Australia/Perth",
              "Australia/Eucla"
          ]
      },
      {
          "name": "Austria",
          "unicode": "U+1F1E6 U+1F1F9",
          "emoji": "🇦🇹",
          "alpha2": "AT",
          "dialCode": "43",
          "alpha3": "AUT",
          "region": "Europe",
          "capital": "Vienna",
          "geo": {
              "lat": 47.33333333,
              "long": 47.33333333
          },
          "timezones": [
              "Europe/Vienna"
          ]
      },
      {
          "name": "Azerbaijan",
          "unicode": "U+1F1E6 U+1F1FF",
          "emoji": "🇦🇿",
          "alpha2": "AZ",
          "dialCode": "994",
          "alpha3": "AZE",
          "region": "Asia",
          "capital": "Baku",
          "geo": {
              "lat": 40.5,
              "long": 40.5
          },
          "timezones": [
              "Asia/Baku"
          ]
      },
      {
          "name": "Bahamas",
          "unicode": "U+1F1E7 U+1F1F8",
          "emoji": "🇧🇸",
          "alpha2": "BS",
          "dialCode": "1 242",
          "alpha3": "BHS",
          "region": "Americas",
          "capital": "Nassau",
          "geo": {
              "lat": 24.25,
              "long": 24.25
          },
          "timezones": [
              "America/Nassau"
          ]
      },
      {
          "name": "Bahrain",
          "unicode": "U+1F1E7 U+1F1ED",
          "emoji": "🇧🇭",
          "alpha2": "BH",
          "dialCode": "973",
          "alpha3": "BHR",
          "region": "Asia",
          "capital": "Manama",
          "geo": {
              "lat": 26,
              "long": 26
          },
          "timezones": [
              "Asia/Bahrain"
          ]
      },
      {
          "name": "Bangladesh",
          "unicode": "U+1F1E7 U+1F1E9",
          "emoji": "🇧🇩",
          "alpha2": "BD",
          "dialCode": "880",
          "alpha3": "BGD",
          "region": "Asia",
          "capital": "Dhaka",
          "geo": {
              "lat": 24,
              "long": 24
          },
          "timezones": [
              "Asia/Dhaka"
          ]
      },
      {
          "name": "Barbados",
          "unicode": "U+1F1E7 U+1F1E7",
          "emoji": "🇧🇧",
          "alpha2": "BB",
          "dialCode": "1 246",
          "alpha3": "BRB",
          "region": "Americas",
          "capital": "Bridgetown",
          "geo": {
              "lat": 13.16666666,
              "long": 13.16666666
          },
          "timezones": [
              "America/Barbados"
          ]
      },
      {
          "name": "Belarus",
          "unicode": "U+1F1E7 U+1F1FE",
          "emoji": "🇧🇾",
          "alpha2": "BY",
          "dialCode": "375",
          "alpha3": "BLR",
          "region": "Europe",
          "capital": "Minsk",
          "geo": {
              "lat": 53,
              "long": 53
          },
          "timezones": [
              "Europe/Minsk"
          ]
      },
      {
          "name": "Belgium",
          "unicode": "U+1F1E7 U+1F1EA",
          "emoji": "🇧🇪",
          "alpha2": "BE",
          "dialCode": "32",
          "alpha3": "BEL",
          "region": "Europe",
          "capital": "Brussels",
          "geo": {
              "lat": 50.83333333,
              "long": 50.83333333
          },
          "timezones": [
              "Europe/Brussels"
          ]
      },
      {
          "name": "Belize",
          "unicode": "U+1F1E7 U+1F1FF",
          "emoji": "🇧🇿",
          "alpha2": "BZ",
          "dialCode": "501",
          "alpha3": "BLZ",
          "region": "Americas",
          "capital": "Belmopan",
          "geo": {
              "lat": 17.25,
              "long": 17.25
          },
          "timezones": [
              "America/Belize"
          ]
      },
      {
          "name": "Benin",
          "unicode": "U+1F1E7 U+1F1EF",
          "emoji": "🇧🇯",
          "alpha2": "BJ",
          "dialCode": "229",
          "alpha3": "BEN",
          "region": "Africa",
          "capital": "Porto-Novo",
          "geo": {
              "lat": 9.5,
              "long": 9.5
          },
          "timezones": [
              "Africa/Porto-Novo"
          ]
      },
      {
          "name": "Bermuda",
          "unicode": "U+1F1E7 U+1F1F2",
          "emoji": "🇧🇲",
          "alpha2": "BM",
          "dialCode": "1 441",
          "alpha3": "BMU",
          "region": "Americas",
          "capital": "Hamilton",
          "geo": {
              "lat": 32.33333333,
              "long": 32.33333333
          },
          "timezones": [
              "Atlantic/Bermuda"
          ]
      },
      {
          "name": "Bhutan",
          "unicode": "U+1F1E7 U+1F1F9",
          "emoji": "🇧🇹",
          "alpha2": "BT",
          "dialCode": "975",
          "alpha3": "BTN",
          "region": "Asia",
          "capital": "Thimphu",
          "geo": {
              "lat": 27.5,
              "long": 27.5
          },
          "timezones": [
              "Asia/Thimphu"
          ]
      },
      {
          "name": "Bolivia",
          "unicode": "U+1F1E7 U+1F1F4",
          "emoji": "🇧🇴",
          "alpha2": "BO",
          "dialCode": "591",
          "alpha3": "BOL",
          "region": "Americas",
          "capital": "Sucre",
          "geo": {
              "lat": -17,
              "long": -17
          },
          "timezones": [
              "America/La_Paz"
          ]
      },
      {
          "name": "Bonaire, Sint Eustatius and Saba",
          "unicode": "U+1F1E7 U+1F1F6",
          "emoji": "🇧🇶",
          "alpha2": "BQ",
          "dialCode": "",
          "alpha3": "BES",
          "region": "Americas",
          "geo": {},
          "capital": "",
          "timezones": []
      },
      {
          "name": "Bosnia and Herzegovina",
          "unicode": "U+1F1E7 U+1F1E6",
          "emoji": "🇧🇦",
          "alpha2": "BA",
          "dialCode": "387",
          "alpha3": "BIH",
          "region": "Europe",
          "capital": "Sarajevo",
          "geo": {
              "lat": 44,
              "long": 44
          },
          "timezones": [
              "Europe/Sarajevo"
          ]
      },
      {
          "name": "Botswana",
          "unicode": "U+1F1E7 U+1F1FC",
          "emoji": "🇧🇼",
          "alpha2": "BW",
          "dialCode": "267",
          "alpha3": "BWA",
          "region": "Africa",
          "capital": "Gaborone",
          "geo": {
              "lat": -22,
              "long": -22
          },
          "timezones": [
              "Africa/Gaborone"
          ]
      },
      {
          "name": "Bouvet Island",
          "unicode": "U+1F1E7 U+1F1FB",
          "emoji": "🇧🇻",
          "alpha2": "BV",
          "dialCode": "",
          "alpha3": "BVT",
          "region": "Americas",
          "capital": null,
          "geo": {
              "lat": -54.43333333,
              "long": -54.43333333
          },
          "timezones": [
              "Europe/Oslo"
          ]
      },
      {
          "name": "Brazil",
          "unicode": "U+1F1E7 U+1F1F7",
          "emoji": "🇧🇷",
          "alpha2": "BR",
          "dialCode": "55",
          "alpha3": "BRA",
          "region": "Americas",
          "capital": "Brasília",
          "geo": {
              "lat": -10,
              "long": -10
          },
          "timezones": [
              "America/Noronha",
              "America/Belem",
              "America/Fortaleza",
              "America/Recife",
              "America/Araguaina",
              "America/Maceio",
              "America/Bahia",
              "America/Sao_Paulo",
              "America/Campo_Grande",
              "America/Cuiaba",
              "America/Santarem",
              "America/Porto_Velho",
              "America/Boa_Vista",
              "America/Manaus",
              "America/Eirunepe",
              "America/Rio_Branco"
          ]
      },
      {
          "name": "British Indian Ocean Territory",
          "unicode": "U+1F1EE U+1F1F4",
          "emoji": "🇮🇴",
          "alpha2": "IO",
          "dialCode": "246",
          "alpha3": "IOT",
          "region": "Africa",
          "capital": "Diego Garcia",
          "geo": {
              "lat": -6,
              "long": -6
          },
          "timezones": [
              "Indian/Chagos"
          ]
      },
      {
          "name": "Brunei Darussalam",
          "unicode": "U+1F1E7 U+1F1F3",
          "emoji": "🇧🇳",
          "alpha2": "BN",
          "dialCode": "673",
          "alpha3": "BRN",
          "region": "Asia",
          "capital": "Bandar Seri Begawan",
          "geo": {
              "lat": 4.5,
              "long": 4.5
          },
          "timezones": [
              "Asia/Brunei"
          ]
      },
      {
          "name": "Bulgaria",
          "unicode": "U+1F1E7 U+1F1EC",
          "emoji": "🇧🇬",
          "alpha2": "BG",
          "dialCode": "359",
          "alpha3": "BGR",
          "region": "Europe",
          "capital": "Sofia",
          "geo": {
              "lat": 43,
              "long": 43
          },
          "timezones": [
              "Europe/Sofia"
          ]
      },
      {
          "name": "Burkina Faso",
          "unicode": "U+1F1E7 U+1F1EB",
          "emoji": "🇧🇫",
          "alpha2": "BF",
          "dialCode": "226",
          "alpha3": "BFA",
          "region": "Africa",
          "capital": "Ouagadougou",
          "geo": {
              "lat": 13,
              "long": 13
          },
          "timezones": [
              "Africa/Ouagadougou"
          ]
      },
      {
          "name": "Burundi",
          "unicode": "U+1F1E7 U+1F1EE",
          "emoji": "🇧🇮",
          "alpha2": "BI",
          "dialCode": "257",
          "alpha3": "BDI",
          "region": "Africa",
          "capital": "Bujumbura",
          "geo": {
              "lat": -3.5,
              "long": -3.5
          },
          "timezones": [
              "Africa/Bujumbura"
          ]
      },
      {
          "name": "Cambodia",
          "unicode": "U+1F1F0 U+1F1ED",
          "emoji": "🇰🇭",
          "alpha2": "KH",
          "dialCode": "855",
          "alpha3": "KHM",
          "region": "Asia",
          "capital": "Phnom Penh",
          "geo": {
              "lat": 13,
              "long": 13
          },
          "timezones": [
              "Asia/Phnom_Penh"
          ]
      },
      {
          "name": "Cameroon",
          "unicode": "U+1F1E8 U+1F1F2",
          "emoji": "🇨🇲",
          "alpha2": "CM",
          "dialCode": "237",
          "alpha3": "CMR",
          "region": "Africa",
          "capital": "Yaoundé",
          "geo": {
              "lat": 6,
              "long": 6
          },
          "timezones": [
              "Africa/Douala"
          ]
      },
      {
          "name": "Canada",
          "unicode": "U+1F1E8 U+1F1E6",
          "emoji": "🇨🇦",
          "alpha2": "CA",
          "dialCode": "1",
          "alpha3": "CAN",
          "region": "Americas",
          "capital": "Ottawa",
          "geo": {
              "lat": 60,
              "long": 60
          },
          "timezones": [
              "America/St_Johns",
              "America/Halifax",
              "America/Glace_Bay",
              "America/Moncton",
              "America/Goose_Bay",
              "America/Blanc-Sablon",
              "America/Toronto",
              "America/Nipigon",
              "America/Thunder_Bay",
              "America/Iqaluit",
              "America/Pangnirtung",
              "America/Atikokan",
              "America/Winnipeg",
              "America/Rainy_River",
              "America/Resolute",
              "America/Rankin_Inlet",
              "America/Regina",
              "America/Swift_Current",
              "America/Edmonton",
              "America/Cambridge_Bay",
              "America/Yellowknife",
              "America/Inuvik",
              "America/Creston",
              "America/Dawson_Creek",
              "America/Fort_Nelson",
              "America/Vancouver",
              "America/Whitehorse",
              "America/Dawson"
          ]
      },
      {
          "name": "Cape Verde",
          "unicode": "U+1F1E8 U+1F1FB",
          "emoji": "🇨🇻",
          "alpha2": "CV",
          "dialCode": "238",
          "alpha3": "CPV",
          "region": "Africa",
          "capital": "Praia",
          "geo": {
              "lat": 16,
              "long": 16
          },
          "timezones": [
              "Atlantic/Cape_Verde"
          ]
      },
      {
          "name": "Cayman Islands",
          "unicode": "U+1F1F0 U+1F1FE",
          "emoji": "🇰🇾",
          "alpha2": "KY",
          "dialCode": " 345",
          "alpha3": "CYM",
          "region": "Americas",
          "capital": "George Town",
          "geo": {
              "lat": 19.5,
              "long": 19.5
          },
          "timezones": [
              "America/Cayman"
          ]
      },
      {
          "name": "Central African Republic",
          "unicode": "U+1F1E8 U+1F1EB",
          "emoji": "🇨🇫",
          "alpha2": "CF",
          "dialCode": "236",
          "alpha3": "CAF",
          "region": "Africa",
          "capital": "Bangui",
          "geo": {
              "lat": 7,
              "long": 7
          },
          "timezones": [
              "Africa/Bangui"
          ]
      },
      {
          "name": "Chad",
          "unicode": "U+1F1F9 U+1F1E9",
          "emoji": "🇹🇩",
          "alpha2": "TD",
          "dialCode": "235",
          "alpha3": "TCD",
          "region": "Africa",
          "capital": "N'Djamena",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "Africa/Ndjamena"
          ]
      },
      {
          "name": "Chile",
          "unicode": "U+1F1E8 U+1F1F1",
          "emoji": "🇨🇱",
          "alpha2": "CL",
          "dialCode": "56",
          "alpha3": "CHL",
          "region": "Americas",
          "capital": "Santiago",
          "geo": {
              "lat": -30,
              "long": -30
          },
          "timezones": [
              "America/Santiago",
              "Pacific/Easter"
          ]
      },
      {
          "name": "China",
          "unicode": "U+1F1E8 U+1F1F3",
          "emoji": "🇨🇳",
          "alpha2": "CN",
          "dialCode": "86",
          "alpha3": "CHN",
          "region": "Asia",
          "capital": "Beijing",
          "geo": {
              "lat": 35,
              "long": 35
          },
          "timezones": [
              "Asia/Shanghai",
              "Asia/Urumqi"
          ]
      },
      {
          "name": "Christmas Island",
          "unicode": "U+1F1E8 U+1F1FD",
          "emoji": "🇨🇽",
          "alpha2": "CX",
          "dialCode": "61",
          "alpha3": "CXR",
          "region": "Oceania",
          "capital": "Flying Fish Cove",
          "geo": {
              "lat": -10.5,
              "long": -10.5
          },
          "timezones": [
              "Indian/Christmas"
          ]
      },
      {
          "name": "Cocos (Keeling) Islands",
          "unicode": "U+1F1E8 U+1F1E8",
          "emoji": "🇨🇨",
          "alpha2": "CC",
          "dialCode": "61",
          "alpha3": "CCK",
          "region": "Oceania",
          "capital": "West Island",
          "geo": {
              "lat": -12.5,
              "long": -12.5
          },
          "timezones": [
              "Indian/Cocos"
          ]
      },
      {
          "name": "Colombia",
          "unicode": "U+1F1E8 U+1F1F4",
          "emoji": "🇨🇴",
          "alpha2": "CO",
          "dialCode": "57",
          "alpha3": "COL",
          "region": "Americas",
          "capital": "Bogotá",
          "geo": {
              "lat": 4,
              "long": 4
          },
          "timezones": [
              "America/Bogota"
          ]
      },
      {
          "name": "Comoros",
          "unicode": "U+1F1F0 U+1F1F2",
          "emoji": "🇰🇲",
          "alpha2": "KM",
          "dialCode": "269",
          "alpha3": "COM",
          "region": "Africa",
          "capital": "Moroni",
          "geo": {
              "lat": -12.16666666,
              "long": -12.16666666
          },
          "timezones": [
              "Indian/Comoro"
          ]
      },
      {
          "name": "Congo",
          "unicode": "U+1F1E8 U+1F1E9",
          "emoji": "🇨🇩",
          "alpha2": "CD",
          "dialCode": "243",
          "alpha3": "COD",
          "region": "Africa",
          "capital": "Kinshasa",
          "geo": {
              "lat": 0,
              "long": 0
          },
          "timezones": [
              "Africa/Kinshasa",
              "Africa/Lubumbashi"
          ]
      },
      {
          "name": "Congo",
          "unicode": "U+1F1E8 U+1F1EC",
          "emoji": "🇨🇬",
          "alpha2": "CG",
          "dialCode": "242",
          "alpha3": "COG",
          "region": "Africa",
          "capital": "Brazzaville",
          "geo": {
              "lat": -1,
              "long": -1
          },
          "timezones": [
              "Africa/Brazzaville"
          ]
      },
      {
          "name": "Cook Islands",
          "unicode": "U+1F1E8 U+1F1F0",
          "emoji": "🇨🇰",
          "alpha2": "CK",
          "dialCode": "682",
          "alpha3": "COK",
          "region": "Oceania",
          "capital": "Avarua",
          "geo": {
              "lat": -21.23333333,
              "long": -21.23333333
          },
          "timezones": [
              "Pacific/Rarotonga"
          ]
      },
      {
          "name": "Costa Rica",
          "unicode": "U+1F1E8 U+1F1F7",
          "emoji": "🇨🇷",
          "alpha2": "CR",
          "dialCode": "506",
          "alpha3": "CRI",
          "region": "Americas",
          "capital": "San José",
          "geo": {
              "lat": 10,
              "long": 10
          },
          "timezones": [
              "America/Costa_Rica"
          ]
      },
      {
          "name": "Croatia",
          "unicode": "U+1F1ED U+1F1F7",
          "emoji": "🇭🇷",
          "alpha2": "HR",
          "dialCode": "385",
          "alpha3": "HRV",
          "region": "Europe",
          "capital": "Zagreb",
          "geo": {
              "lat": 45.16666666,
              "long": 45.16666666
          },
          "timezones": [
              "Europe/Zagreb"
          ]
      },
      {
          "name": "Cuba",
          "unicode": "U+1F1E8 U+1F1FA",
          "emoji": "🇨🇺",
          "alpha2": "CU",
          "dialCode": "53",
          "alpha3": "CUB",
          "region": "Americas",
          "capital": "Havana",
          "geo": {
              "lat": 21.5,
              "long": 21.5
          },
          "timezones": [
              "America/Havana"
          ]
      },
      {
          "name": "Curaçao",
          "unicode": "U+1F1E8 U+1F1FC",
          "emoji": "🇨🇼",
          "alpha2": "CW",
          "dialCode": "",
          "alpha3": "CUW",
          "region": "Americas",
          "capital": "Willemstad",
          "geo": {
              "lat": 12.116667,
              "long": 12.116667
          },
          "timezones": [
              "America/Curacao"
          ]
      },
      {
          "name": "Cyprus",
          "unicode": "U+1F1E8 U+1F1FE",
          "emoji": "🇨🇾",
          "alpha2": "CY",
          "dialCode": "537",
          "alpha3": "CYP",
          "region": "Asia",
          "capital": "Nicosia",
          "geo": {
              "lat": 35,
              "long": 35
          },
          "timezones": [
              "Asia/Nicosia"
          ]
      },
      {
          "name": "Czech Republic",
          "unicode": "U+1F1E8 U+1F1FF",
          "emoji": "🇨🇿",
          "alpha2": "CZ",
          "dialCode": "420",
          "alpha3": "CZE",
          "region": "Europe",
          "capital": "Prague",
          "geo": {
              "lat": 49.75,
              "long": 49.75
          },
          "timezones": [
              "Europe/Prague"
          ]
      },
      {
          "name": "Côte D'Ivoire",
          "unicode": "U+1F1E8 U+1F1EE",
          "emoji": "🇨🇮",
          "alpha2": "CI",
          "dialCode": "225",
          "alpha3": "CIV",
          "region": "Africa",
          "capital": "Yamoussoukro",
          "geo": {
              "lat": 8,
              "long": 8
          },
          "timezones": [
              "Africa/Abidjan"
          ]
      },
      {
          "name": "Denmark",
          "unicode": "U+1F1E9 U+1F1F0",
          "emoji": "🇩🇰",
          "alpha2": "DK",
          "dialCode": "45",
          "alpha3": "DNK",
          "region": "Europe",
          "capital": "Copenhagen",
          "geo": {
              "lat": 56,
              "long": 56
          },
          "timezones": [
              "Europe/Copenhagen"
          ]
      },
      {
          "name": "Djibouti",
          "unicode": "U+1F1E9 U+1F1EF",
          "emoji": "🇩🇯",
          "alpha2": "DJ",
          "dialCode": "253",
          "alpha3": "DJI",
          "region": "Africa",
          "capital": "Djibouti",
          "geo": {
              "lat": 11.5,
              "long": 11.5
          },
          "timezones": [
              "Africa/Djibouti"
          ]
      },
      {
          "name": "Dominica",
          "unicode": "U+1F1E9 U+1F1F2",
          "emoji": "🇩🇲",
          "alpha2": "DM",
          "dialCode": "1 767",
          "alpha3": "DMA",
          "region": "Americas",
          "capital": "Roseau",
          "geo": {
              "lat": 15.41666666,
              "long": 15.41666666
          },
          "timezones": [
              "America/Dominica"
          ]
      },
      {
          "name": "Dominican Republic",
          "unicode": "U+1F1E9 U+1F1F4",
          "emoji": "🇩🇴",
          "alpha2": "DO",
          "dialCode": "1 849",
          "alpha3": "DOM",
          "region": "Americas",
          "capital": "Santo Domingo",
          "geo": {
              "lat": 19,
              "long": 19
          },
          "timezones": [
              "America/Santo_Domingo"
          ]
      },
      {
          "name": "Ecuador",
          "unicode": "U+1F1EA U+1F1E8",
          "emoji": "🇪🇨",
          "alpha2": "EC",
          "dialCode": "593",
          "alpha3": "ECU",
          "region": "Americas",
          "capital": "Quito",
          "geo": {
              "lat": -2,
              "long": -2
          },
          "timezones": [
              "America/Guayaquil",
              "Pacific/Galapagos"
          ]
      },
      {
          "name": "Egypt",
          "unicode": "U+1F1EA U+1F1EC",
          "emoji": "🇪🇬",
          "alpha2": "EG",
          "dialCode": "20",
          "alpha3": "EGY",
          "region": "Africa",
          "capital": "Cairo",
          "geo": {
              "lat": 27,
              "long": 27
          },
          "timezones": [
              "Africa/Cairo"
          ]
      },
      {
          "name": "El Salvador",
          "unicode": "U+1F1F8 U+1F1FB",
          "emoji": "🇸🇻",
          "alpha2": "SV",
          "dialCode": "503",
          "alpha3": "SLV",
          "region": "Americas",
          "capital": "San Salvador",
          "geo": {
              "lat": 13.83333333,
              "long": 13.83333333
          },
          "timezones": [
              "America/El_Salvador"
          ]
      },
      {
          "name": "Equatorial Guinea",
          "unicode": "U+1F1EC U+1F1F6",
          "emoji": "🇬🇶",
          "alpha2": "GQ",
          "dialCode": "240",
          "alpha3": "GNQ",
          "region": "Africa",
          "capital": "Malabo",
          "geo": {
              "lat": 2,
              "long": 2
          },
          "timezones": [
              "Africa/Malabo"
          ]
      },
      {
          "name": "Eritrea",
          "unicode": "U+1F1EA U+1F1F7",
          "emoji": "🇪🇷",
          "alpha2": "ER",
          "dialCode": "291",
          "alpha3": "ERI",
          "region": "Africa",
          "capital": "Asmara",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "Africa/Asmara"
          ]
      },
      {
          "name": "Estonia",
          "unicode": "U+1F1EA U+1F1EA",
          "emoji": "🇪🇪",
          "alpha2": "EE",
          "dialCode": "372",
          "alpha3": "EST",
          "region": "Europe",
          "capital": "Tallinn",
          "geo": {
              "lat": 59,
              "long": 59
          },
          "timezones": [
              "Europe/Tallinn"
          ]
      },
      {
          "name": "Ethiopia",
          "unicode": "U+1F1EA U+1F1F9",
          "emoji": "🇪🇹",
          "alpha2": "ET",
          "dialCode": "251",
          "alpha3": "ETH",
          "region": "Africa",
          "capital": "Addis Ababa",
          "geo": {
              "lat": 8,
              "long": 8
          },
          "timezones": [
              "Africa/Addis_Ababa"
          ]
      },
      {
          "name": "European Union",
          "unicode": "U+1F1EA U+1F1FA",
          "emoji": "🇪🇺",
          "alpha2": "EU",
          "dialCode": "",
          "alpha3": "",
          "region": "",
          "geo": {},
          "capital": "",
          "timezones": []
      },
      {
          "name": "Falkland Islands (Malvinas)",
          "unicode": "U+1F1EB U+1F1F0",
          "emoji": "🇫🇰",
          "alpha2": "FK",
          "dialCode": "500",
          "alpha3": "FLK",
          "region": "Americas",
          "capital": "Stanley",
          "geo": {
              "lat": -51.75,
              "long": -51.75
          },
          "timezones": [
              "Atlantic/Stanley"
          ]
      },
      {
          "name": "Faroe Islands",
          "unicode": "U+1F1EB U+1F1F4",
          "emoji": "🇫🇴",
          "alpha2": "FO",
          "dialCode": "298",
          "alpha3": "FRO",
          "region": "Europe",
          "capital": "Tórshavn",
          "geo": {
              "lat": 62,
              "long": 62
          },
          "timezones": [
              "Atlantic/Faroe"
          ]
      },
      {
          "name": "Fiji",
          "unicode": "U+1F1EB U+1F1EF",
          "emoji": "🇫🇯",
          "alpha2": "FJ",
          "dialCode": "679",
          "alpha3": "FJI",
          "region": "Oceania",
          "capital": "Suva",
          "geo": {
              "lat": -18,
              "long": -18
          },
          "timezones": [
              "Pacific/Fiji"
          ]
      },
      {
          "name": "Finland",
          "unicode": "U+1F1EB U+1F1EE",
          "emoji": "🇫🇮",
          "alpha2": "FI",
          "dialCode": "358",
          "alpha3": "FIN",
          "region": "Europe",
          "capital": "Helsinki",
          "geo": {
              "lat": 64,
              "long": 64
          },
          "timezones": [
              "Europe/Helsinki"
          ]
      },
      {
          "name": "France",
          "unicode": "U+1F1EB U+1F1F7",
          "emoji": "🇫🇷",
          "alpha2": "FR",
          "dialCode": "33",
          "alpha3": "FRA",
          "region": "Europe",
          "capital": "Paris",
          "geo": {
              "lat": 46,
              "long": 46
          },
          "timezones": [
              "Europe/Paris"
          ]
      },
      {
          "name": "French Guiana",
          "unicode": "U+1F1EC U+1F1EB",
          "emoji": "🇬🇫",
          "alpha2": "GF",
          "dialCode": "594",
          "alpha3": "GUF",
          "region": "Americas",
          "capital": "Cayenne",
          "geo": {
              "lat": 4,
              "long": 4
          },
          "timezones": [
              "America/Cayenne"
          ]
      },
      {
          "name": "French Polynesia",
          "unicode": "U+1F1F5 U+1F1EB",
          "emoji": "🇵🇫",
          "alpha2": "PF",
          "dialCode": "689",
          "alpha3": "PYF",
          "region": "Oceania",
          "capital": "Papeetē",
          "geo": {
              "lat": -15,
              "long": -15
          },
          "timezones": [
              "Pacific/Tahiti",
              "Pacific/Marquesas",
              "Pacific/Gambier"
          ]
      },
      {
          "name": "French Southern Territories",
          "unicode": "U+1F1F9 U+1F1EB",
          "emoji": "🇹🇫",
          "alpha2": "TF",
          "dialCode": "",
          "alpha3": "ATF",
          "region": "Africa",
          "capital": "Port-aux-Français",
          "geo": {
              "lat": -49.25,
              "long": -49.25
          },
          "timezones": [
              "Indian/Kerguelen"
          ]
      },
      {
          "name": "Gabon",
          "unicode": "U+1F1EC U+1F1E6",
          "emoji": "🇬🇦",
          "alpha2": "GA",
          "dialCode": "241",
          "alpha3": "GAB",
          "region": "Africa",
          "capital": "Libreville",
          "geo": {
              "lat": -1,
              "long": -1
          },
          "timezones": [
              "Africa/Libreville"
          ]
      },
      {
          "name": "Gambia",
          "unicode": "U+1F1EC U+1F1F2",
          "emoji": "🇬🇲",
          "alpha2": "GM",
          "dialCode": "220",
          "alpha3": "GMB",
          "region": "Africa",
          "capital": "Banjul",
          "geo": {
              "lat": 13.46666666,
              "long": 13.46666666
          },
          "timezones": [
              "Africa/Banjul"
          ]
      },
      {
          "name": "Georgia",
          "unicode": "U+1F1EC U+1F1EA",
          "emoji": "🇬🇪",
          "alpha2": "GE",
          "dialCode": "995",
          "alpha3": "GEO",
          "region": "Asia",
          "capital": "Tbilisi",
          "geo": {
              "lat": 42,
              "long": 42
          },
          "timezones": [
              "Asia/Tbilisi"
          ]
      },
      {
          "name": "Germany",
          "unicode": "U+1F1E9 U+1F1EA",
          "emoji": "🇩🇪",
          "alpha2": "DE",
          "dialCode": "49",
          "alpha3": "DEU",
          "region": "Europe",
          "capital": "Berlin",
          "geo": {
              "lat": 51,
              "long": 51
          },
          "timezones": [
              "Europe/Berlin",
              "Europe/Busingen"
          ]
      },
      {
          "name": "Ghana",
          "unicode": "U+1F1EC U+1F1ED",
          "emoji": "🇬🇭",
          "alpha2": "GH",
          "dialCode": "233",
          "alpha3": "GHA",
          "region": "Africa",
          "capital": "Accra",
          "geo": {
              "lat": 8,
              "long": 8
          },
          "timezones": [
              "Africa/Accra"
          ]
      },
      {
          "name": "Gibraltar",
          "unicode": "U+1F1EC U+1F1EE",
          "emoji": "🇬🇮",
          "alpha2": "GI",
          "dialCode": "350",
          "alpha3": "GIB",
          "region": "Europe",
          "capital": "Gibraltar",
          "geo": {
              "lat": 36.13333333,
              "long": 36.13333333
          },
          "timezones": [
              "Europe/Gibraltar"
          ]
      },
      {
          "name": "Greece",
          "unicode": "U+1F1EC U+1F1F7",
          "emoji": "🇬🇷",
          "alpha2": "GR",
          "dialCode": "30",
          "alpha3": "GRC",
          "region": "Europe",
          "capital": "Athens",
          "geo": {
              "lat": 39,
              "long": 39
          },
          "timezones": [
              "Europe/Athens"
          ]
      },
      {
          "name": "Greenland",
          "unicode": "U+1F1EC U+1F1F1",
          "emoji": "🇬🇱",
          "alpha2": "GL",
          "dialCode": "299",
          "alpha3": "GRL",
          "region": "Americas",
          "capital": "Nuuk",
          "geo": {
              "lat": 72,
              "long": 72
          },
          "timezones": [
              "America/Godthab",
              "America/Danmarkshavn",
              "America/Scoresbysund",
              "America/Thule"
          ]
      },
      {
          "name": "Grenada",
          "unicode": "U+1F1EC U+1F1E9",
          "emoji": "🇬🇩",
          "alpha2": "GD",
          "dialCode": "1 473",
          "alpha3": "GRD",
          "region": "Americas",
          "capital": "St. George's",
          "geo": {
              "lat": 12.11666666,
              "long": 12.11666666
          },
          "timezones": [
              "America/Grenada"
          ]
      },
      {
          "name": "Guadeloupe",
          "unicode": "U+1F1EC U+1F1F5",
          "emoji": "🇬🇵",
          "alpha2": "GP",
          "dialCode": "590",
          "alpha3": "GLP",
          "region": "Americas",
          "capital": "Basse-Terre",
          "geo": {
              "lat": 16.25,
              "long": 16.25
          },
          "timezones": [
              "America/Guadeloupe"
          ]
      },
      {
          "name": "Guam",
          "unicode": "U+1F1EC U+1F1FA",
          "emoji": "🇬🇺",
          "alpha2": "GU",
          "dialCode": "1 671",
          "alpha3": "GUM",
          "region": "Oceania",
          "capital": "Hagåtña",
          "geo": {
              "lat": 13.46666666,
              "long": 13.46666666
          },
          "timezones": [
              "Pacific/Guam"
          ]
      },
      {
          "name": "Guatemala",
          "unicode": "U+1F1EC U+1F1F9",
          "emoji": "🇬🇹",
          "alpha2": "GT",
          "dialCode": "502",
          "alpha3": "GTM",
          "region": "Americas",
          "capital": "Guatemala City",
          "geo": {
              "lat": 15.5,
              "long": 15.5
          },
          "timezones": [
              "America/Guatemala"
          ]
      },
      {
          "name": "Guernsey",
          "unicode": "U+1F1EC U+1F1EC",
          "emoji": "🇬🇬",
          "alpha2": "GG",
          "dialCode": "44",
          "alpha3": "GGY",
          "region": "Europe",
          "capital": "St. Peter Port",
          "geo": {
              "lat": 49.46666666,
              "long": 49.46666666
          },
          "timezones": [
              "Europe/Guernsey"
          ]
      },
      {
          "name": "Guinea",
          "unicode": "U+1F1EC U+1F1F3",
          "emoji": "🇬🇳",
          "alpha2": "GN",
          "dialCode": "224",
          "alpha3": "GIN",
          "region": "Africa",
          "capital": "Conakry",
          "geo": {
              "lat": 11,
              "long": 11
          },
          "timezones": [
              "Africa/Conakry"
          ]
      },
      {
          "name": "Guinea-Bissau",
          "unicode": "U+1F1EC U+1F1FC",
          "emoji": "🇬🇼",
          "alpha2": "GW",
          "dialCode": "245",
          "alpha3": "GNB",
          "region": "Africa",
          "capital": "Bissau",
          "geo": {
              "lat": 12,
              "long": 12
          },
          "timezones": [
              "Africa/Bissau"
          ]
      },
      {
          "name": "Guyana",
          "unicode": "U+1F1EC U+1F1FE",
          "emoji": "🇬🇾",
          "alpha2": "GY",
          "dialCode": "595",
          "alpha3": "GUY",
          "region": "Americas",
          "capital": "Georgetown",
          "geo": {
              "lat": 5,
              "long": 5
          },
          "timezones": [
              "America/Guyana"
          ]
      },
      {
          "name": "Haiti",
          "unicode": "U+1F1ED U+1F1F9",
          "emoji": "🇭🇹",
          "alpha2": "HT",
          "dialCode": "509",
          "alpha3": "HTI",
          "region": "Americas",
          "capital": "Port-au-Prince",
          "geo": {
              "lat": 19,
              "long": 19
          },
          "timezones": [
              "America/Port-au-Prince"
          ]
      },
      {
          "name": "Heard Island and Mcdonald Islands",
          "unicode": "U+1F1ED U+1F1F2",
          "emoji": "🇭🇲",
          "alpha2": "HM",
          "dialCode": "",
          "alpha3": "HMD",
          "region": "Oceania",
          "geo": {},
          "capital": "",
          "timezones": []
      },
      {
          "name": "Honduras",
          "unicode": "U+1F1ED U+1F1F3",
          "emoji": "🇭🇳",
          "alpha2": "HN",
          "dialCode": "504",
          "alpha3": "HND",
          "region": "Americas",
          "capital": "Tegucigalpa",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "America/Tegucigalpa"
          ]
      },
      {
          "name": "Hong Kong",
          "unicode": "U+1F1ED U+1F1F0",
          "emoji": "🇭🇰",
          "alpha2": "HK",
          "dialCode": "852",
          "alpha3": "HKG",
          "region": "Asia",
          "capital": "City of Victoria",
          "geo": {
              "lat": 22.267,
              "long": 22.267
          },
          "timezones": [
              "Asia/Hong_Kong"
          ]
      },
      {
          "name": "Hungary",
          "unicode": "U+1F1ED U+1F1FA",
          "emoji": "🇭🇺",
          "alpha2": "HU",
          "dialCode": "36",
          "alpha3": "HUN",
          "region": "Europe",
          "capital": "Budapest",
          "geo": {
              "lat": 47,
              "long": 47
          },
          "timezones": [
              "Europe/Budapest"
          ]
      },
      {
          "name": "Iceland",
          "unicode": "U+1F1EE U+1F1F8",
          "emoji": "🇮🇸",
          "alpha2": "IS",
          "dialCode": "354",
          "alpha3": "ISL",
          "region": "Europe",
          "capital": "Reykjavik",
          "geo": {
              "lat": 65,
              "long": 65
          },
          "timezones": [
              "Atlantic/Reykjavik"
          ]
      },
      {
          "name": "India",
          "unicode": "U+1F1EE U+1F1F3",
          "emoji": "🇮🇳",
          "alpha2": "IN",
          "dialCode": "91",
          "alpha3": "IND",
          "region": "Asia",
          "capital": "New Delhi",
          "geo": {
              "lat": 20,
              "long": 20
          },
          "timezones": [
              "Asia/Kolkata"
          ]
      },
      {
          "name": "Indonesia",
          "unicode": "U+1F1EE U+1F1E9",
          "emoji": "🇮🇩",
          "alpha2": "ID",
          "dialCode": "62",
          "alpha3": "IDN",
          "region": "Asia",
          "capital": "Jakarta",
          "geo": {
              "lat": -5,
              "long": -5
          },
          "timezones": [
              "Asia/Jakarta",
              "Asia/Pontianak",
              "Asia/Makassar",
              "Asia/Jayapura"
          ]
      },
      {
          "name": "Iran",
          "unicode": "U+1F1EE U+1F1F7",
          "emoji": "🇮🇷",
          "alpha2": "IR",
          "dialCode": "98",
          "alpha3": "IRN",
          "region": "Asia",
          "capital": "Tehran",
          "geo": {
              "lat": 32,
              "long": 32
          },
          "timezones": [
              "Asia/Tehran"
          ]
      },
      {
          "name": "Iraq",
          "unicode": "U+1F1EE U+1F1F6",
          "emoji": "🇮🇶",
          "alpha2": "IQ",
          "dialCode": "964",
          "alpha3": "IRQ",
          "region": "Asia",
          "capital": "Baghdad",
          "geo": {
              "lat": 33,
              "long": 33
          },
          "timezones": [
              "Asia/Baghdad"
          ]
      },
      {
          "name": "Ireland",
          "unicode": "U+1F1EE U+1F1EA",
          "emoji": "🇮🇪",
          "alpha2": "IE",
          "dialCode": "353",
          "alpha3": "IRL",
          "region": "Europe",
          "capital": "Dublin",
          "geo": {
              "lat": 53,
              "long": 53
          },
          "timezones": [
              "Europe/Dublin"
          ]
      },
      {
          "name": "Isle of Man",
          "unicode": "U+1F1EE U+1F1F2",
          "emoji": "🇮🇲",
          "alpha2": "IM",
          "dialCode": "44",
          "alpha3": "IMN",
          "region": "Europe",
          "capital": "Douglas",
          "geo": {
              "lat": 54.25,
              "long": 54.25
          },
          "timezones": [
              "Europe/Isle_of_Man"
          ]
      },
      {
          "name": "Israel",
          "unicode": "U+1F1EE U+1F1F1",
          "emoji": "🇮🇱",
          "alpha2": "IL",
          "dialCode": "972",
          "alpha3": "ISR",
          "region": "Asia",
          "capital": "Jerusalem",
          "geo": {
              "lat": 31.47,
              "long": 31.47
          },
          "timezones": [
              "Asia/Jerusalem"
          ]
      },
      {
          "name": "Italy",
          "unicode": "U+1F1EE U+1F1F9",
          "emoji": "🇮🇹",
          "alpha2": "IT",
          "dialCode": "39",
          "alpha3": "ITA",
          "region": "Europe",
          "capital": "Rome",
          "geo": {
              "lat": 42.83333333,
              "long": 42.83333333
          },
          "timezones": [
              "Europe/Rome"
          ]
      },
      {
          "name": "Jamaica",
          "unicode": "U+1F1EF U+1F1F2",
          "emoji": "🇯🇲",
          "alpha2": "JM",
          "dialCode": "1 876",
          "alpha3": "JAM",
          "region": "Americas",
          "capital": "Kingston",
          "geo": {
              "lat": 18.25,
              "long": 18.25
          },
          "timezones": [
              "America/Jamaica"
          ]
      },
      {
          "name": "Japan",
          "unicode": "U+1F1EF U+1F1F5",
          "emoji": "🇯🇵",
          "alpha2": "JP",
          "dialCode": "81",
          "alpha3": "JPN",
          "region": "Asia",
          "capital": "Tokyo",
          "geo": {
              "lat": 36,
              "long": 36
          },
          "timezones": [
              "Asia/Tokyo"
          ]
      },
      {
          "name": "Jersey",
          "unicode": "U+1F1EF U+1F1EA",
          "emoji": "🇯🇪",
          "alpha2": "JE",
          "dialCode": "44",
          "alpha3": "JEY",
          "region": "Europe",
          "capital": "Saint Helier",
          "geo": {
              "lat": 49.25,
              "long": 49.25
          },
          "timezones": [
              "Europe/Jersey"
          ]
      },
      {
          "name": "Jordan",
          "unicode": "U+1F1EF U+1F1F4",
          "emoji": "🇯🇴",
          "alpha2": "JO",
          "dialCode": "962",
          "alpha3": "JOR",
          "region": "Asia",
          "capital": "Amman",
          "geo": {
              "lat": 31,
              "long": 31
          },
          "timezones": [
              "Asia/Amman"
          ]
      },
      {
          "name": "Kazakhstan",
          "unicode": "U+1F1F0 U+1F1FF",
          "emoji": "🇰🇿",
          "alpha2": "KZ",
          "dialCode": "7 7",
          "alpha3": "KAZ",
          "region": "Asia",
          "capital": "Astana",
          "geo": {
              "lat": 48,
              "long": 48
          },
          "timezones": [
              "Asia/Almaty",
              "Asia/Qyzylorda",
              "Asia/Aqtobe",
              "Asia/Aqtau",
              "Asia/Oral"
          ]
      },
      {
          "name": "Kenya",
          "unicode": "U+1F1F0 U+1F1EA",
          "emoji": "🇰🇪",
          "alpha2": "KE",
          "dialCode": "254",
          "alpha3": "KEN",
          "region": "Africa",
          "capital": "Nairobi",
          "geo": {
              "lat": 1,
              "long": 1
          },
          "timezones": [
              "Africa/Nairobi"
          ]
      },
      {
          "name": "Kiribati",
          "unicode": "U+1F1F0 U+1F1EE",
          "emoji": "🇰🇮",
          "alpha2": "KI",
          "dialCode": "686",
          "alpha3": "KIR",
          "region": "Oceania",
          "capital": "South Tarawa",
          "geo": {
              "lat": 1.41666666,
              "long": 1.41666666
          },
          "timezones": [
              "Pacific/Tarawa",
              "Pacific/Enderbury",
              "Pacific/Kiritimati"
          ]
      },
      {
          "name": "Kosovo",
          "unicode": "U+1F1FD U+1F1F0",
          "emoji": "🇽🇰",
          "alpha2": "XK",
          "dialCode": "383",
          "alpha3": "",
          "region": "",
          "capital": "Pristina",
          "geo": {
              "lat": 42.666667,
              "long": 42.666667
          },
          "timezones": [
              "Europe/Belgrade"
          ]
      },
      {
          "name": "Kuwait",
          "unicode": "U+1F1F0 U+1F1FC",
          "emoji": "🇰🇼",
          "alpha2": "KW",
          "dialCode": "965",
          "alpha3": "KWT",
          "region": "Asia",
          "capital": "Kuwait City",
          "geo": {
              "lat": 29.5,
              "long": 29.5
          },
          "timezones": [
              "Asia/Kuwait"
          ]
      },
      {
          "name": "Kyrgyzstan",
          "unicode": "U+1F1F0 U+1F1EC",
          "emoji": "🇰🇬",
          "alpha2": "KG",
          "dialCode": "996",
          "alpha3": "KGZ",
          "region": "Asia",
          "capital": "Bishkek",
          "geo": {
              "lat": 41,
              "long": 41
          },
          "timezones": [
              "Asia/Bishkek"
          ]
      },
      {
          "name": "Lao People's Democratic Republic",
          "unicode": "U+1F1F1 U+1F1E6",
          "emoji": "🇱🇦",
          "alpha2": "LA",
          "dialCode": "856",
          "alpha3": "LAO",
          "region": "Asia",
          "capital": "Vientiane",
          "geo": {
              "lat": 18,
              "long": 18
          },
          "timezones": [
              "Asia/Vientiane"
          ]
      },
      {
          "name": "Latvia",
          "unicode": "U+1F1F1 U+1F1FB",
          "emoji": "🇱🇻",
          "alpha2": "LV",
          "dialCode": "371",
          "alpha3": "LVA",
          "region": "Europe",
          "capital": "Riga",
          "geo": {
              "lat": 57,
              "long": 57
          },
          "timezones": [
              "Europe/Riga"
          ]
      },
      {
          "name": "Lebanon",
          "unicode": "U+1F1F1 U+1F1E7",
          "emoji": "🇱🇧",
          "alpha2": "LB",
          "dialCode": "961",
          "alpha3": "LBN",
          "region": "Asia",
          "capital": "Beirut",
          "geo": {
              "lat": 33.83333333,
              "long": 33.83333333
          },
          "timezones": [
              "Asia/Beirut"
          ]
      },
      {
          "name": "Lesotho",
          "unicode": "U+1F1F1 U+1F1F8",
          "emoji": "🇱🇸",
          "alpha2": "LS",
          "dialCode": "266",
          "alpha3": "LSO",
          "region": "Africa",
          "capital": "Maseru",
          "geo": {
              "lat": -29.5,
              "long": -29.5
          },
          "timezones": [
              "Africa/Maseru"
          ]
      },
      {
          "name": "Liberia",
          "unicode": "U+1F1F1 U+1F1F7",
          "emoji": "🇱🇷",
          "alpha2": "LR",
          "dialCode": "231",
          "alpha3": "LBR",
          "region": "Africa",
          "capital": "Monrovia",
          "geo": {
              "lat": 6.5,
              "long": 6.5
          },
          "timezones": [
              "Africa/Monrovia"
          ]
      },
      {
          "name": "Libya",
          "unicode": "U+1F1F1 U+1F1FE",
          "emoji": "🇱🇾",
          "alpha2": "LY",
          "dialCode": "218",
          "alpha3": "LBY",
          "region": "Africa",
          "capital": "Tripoli",
          "geo": {
              "lat": 25,
              "long": 25
          },
          "timezones": [
              "Africa/Tripoli"
          ]
      },
      {
          "name": "Liechtenstein",
          "unicode": "U+1F1F1 U+1F1EE",
          "emoji": "🇱🇮",
          "alpha2": "LI",
          "dialCode": "423",
          "alpha3": "LIE",
          "region": "Europe",
          "capital": "Vaduz",
          "geo": {
              "lat": 47.26666666,
              "long": 47.26666666
          },
          "timezones": [
              "Europe/Vaduz"
          ]
      },
      {
          "name": "Lithuania",
          "unicode": "U+1F1F1 U+1F1F9",
          "emoji": "🇱🇹",
          "alpha2": "LT",
          "dialCode": "370",
          "alpha3": "LTU",
          "region": "Europe",
          "capital": "Vilnius",
          "geo": {
              "lat": 56,
              "long": 56
          },
          "timezones": [
              "Europe/Vilnius"
          ]
      },
      {
          "name": "Luxembourg",
          "unicode": "U+1F1F1 U+1F1FA",
          "emoji": "🇱🇺",
          "alpha2": "LU",
          "dialCode": "352",
          "alpha3": "LUX",
          "region": "Europe",
          "capital": "Luxembourg",
          "geo": {
              "lat": 49.75,
              "long": 49.75
          },
          "timezones": [
              "Europe/Luxembourg"
          ]
      },
      {
          "name": "Macao",
          "unicode": "U+1F1F2 U+1F1F4",
          "emoji": "🇲🇴",
          "alpha2": "MO",
          "dialCode": "853",
          "alpha3": "MAC",
          "region": "Asia",
          "capital": null,
          "geo": {
              "lat": 22.16666666,
              "long": 22.16666666
          },
          "timezones": [
              "Asia/Macau"
          ]
      },
      {
          "name": "Macedonia",
          "unicode": "U+1F1F2 U+1F1F0",
          "emoji": "🇲🇰",
          "alpha2": "MK",
          "dialCode": "389",
          "alpha3": "MKD",
          "region": "Europe",
          "capital": "Skopje",
          "geo": {
              "lat": 41.83333333,
              "long": 41.83333333
          },
          "timezones": [
              "Europe/Skopje"
          ]
      },
      {
          "name": "Madagascar",
          "unicode": "U+1F1F2 U+1F1EC",
          "emoji": "🇲🇬",
          "alpha2": "MG",
          "dialCode": "261",
          "alpha3": "MDG",
          "region": "Africa",
          "capital": "Antananarivo",
          "geo": {
              "lat": -20,
              "long": -20
          },
          "timezones": [
              "Indian/Antananarivo"
          ]
      },
      {
          "name": "Malawi",
          "unicode": "U+1F1F2 U+1F1FC",
          "emoji": "🇲🇼",
          "alpha2": "MW",
          "dialCode": "265",
          "alpha3": "MWI",
          "region": "Africa",
          "capital": "Lilongwe",
          "geo": {
              "lat": -13.5,
              "long": -13.5
          },
          "timezones": [
              "Africa/Blantyre"
          ]
      },
      {
          "name": "Malaysia",
          "unicode": "U+1F1F2 U+1F1FE",
          "emoji": "🇲🇾",
          "alpha2": "MY",
          "dialCode": "60",
          "alpha3": "MYS",
          "region": "Asia",
          "capital": "Kuala Lumpur",
          "geo": {
              "lat": 2.5,
              "long": 2.5
          },
          "timezones": [
              "Asia/Kuala_Lumpur",
              "Asia/Kuching"
          ]
      },
      {
          "name": "Maldives",
          "unicode": "U+1F1F2 U+1F1FB",
          "emoji": "🇲🇻",
          "alpha2": "MV",
          "dialCode": "960",
          "alpha3": "MDV",
          "region": "Asia",
          "capital": "Malé",
          "geo": {
              "lat": 3.25,
              "long": 3.25
          },
          "timezones": [
              "Indian/Maldives"
          ]
      },
      {
          "name": "Mali",
          "unicode": "U+1F1F2 U+1F1F1",
          "emoji": "🇲🇱",
          "alpha2": "ML",
          "dialCode": "223",
          "alpha3": "MLI",
          "region": "Africa",
          "capital": "Bamako",
          "geo": {
              "lat": 17,
              "long": 17
          },
          "timezones": [
              "Africa/Bamako"
          ]
      },
      {
          "name": "Malta",
          "unicode": "U+1F1F2 U+1F1F9",
          "emoji": "🇲🇹",
          "alpha2": "MT",
          "dialCode": "356",
          "alpha3": "MLT",
          "region": "Europe",
          "capital": "Valletta",
          "geo": {
              "lat": 35.83333333,
              "long": 35.83333333
          },
          "timezones": [
              "Europe/Malta"
          ]
      },
      {
          "name": "Marshall Islands",
          "unicode": "U+1F1F2 U+1F1ED",
          "emoji": "🇲🇭",
          "alpha2": "MH",
          "dialCode": "692",
          "alpha3": "MHL",
          "region": "Oceania",
          "capital": "Majuro",
          "geo": {
              "lat": 9,
              "long": 9
          },
          "timezones": [
              "Pacific/Majuro",
              "Pacific/Kwajalein"
          ]
      },
      {
          "name": "Martinique",
          "unicode": "U+1F1F2 U+1F1F6",
          "emoji": "🇲🇶",
          "alpha2": "MQ",
          "dialCode": "596",
          "alpha3": "MTQ",
          "region": "Americas",
          "capital": "Fort-de-France",
          "geo": {
              "lat": 14.666667,
              "long": 14.666667
          },
          "timezones": [
              "America/Martinique"
          ]
      },
      {
          "name": "Mauritania",
          "unicode": "U+1F1F2 U+1F1F7",
          "emoji": "🇲🇷",
          "alpha2": "MR",
          "dialCode": "222",
          "alpha3": "MRT",
          "region": "Africa",
          "capital": "Nouakchott",
          "geo": {
              "lat": 20,
              "long": 20
          },
          "timezones": [
              "Africa/Nouakchott"
          ]
      },
      {
          "name": "Mauritius",
          "unicode": "U+1F1F2 U+1F1FA",
          "emoji": "🇲🇺",
          "alpha2": "MU",
          "dialCode": "230",
          "alpha3": "MUS",
          "region": "Africa",
          "capital": "Port Louis",
          "geo": {
              "lat": -20.28333333,
              "long": -20.28333333
          },
          "timezones": [
              "Indian/Mauritius"
          ]
      },
      {
          "name": "Mayotte",
          "unicode": "U+1F1FE U+1F1F9",
          "emoji": "🇾🇹",
          "alpha2": "YT",
          "dialCode": "262",
          "alpha3": "MYT",
          "region": "Africa",
          "capital": "Mamoudzou",
          "geo": {
              "lat": -12.83333333,
              "long": -12.83333333
          },
          "timezones": [
              "Indian/Mayotte"
          ]
      },
      {
          "name": "Mexico",
          "unicode": "U+1F1F2 U+1F1FD",
          "emoji": "🇲🇽",
          "alpha2": "MX",
          "dialCode": "52",
          "alpha3": "MEX",
          "region": "Americas",
          "capital": "Mexico City",
          "geo": {
              "lat": 23,
              "long": 23
          },
          "timezones": [
              "America/Mexico_City",
              "America/Cancun",
              "America/Merida",
              "America/Monterrey",
              "America/Matamoros",
              "America/Mazatlan",
              "America/Chihuahua",
              "America/Ojinaga",
              "America/Hermosillo",
              "America/Tijuana",
              "America/Bahia_Banderas"
          ]
      },
      {
          "name": "Micronesia",
          "unicode": "U+1F1EB U+1F1F2",
          "emoji": "🇫🇲",
          "alpha2": "FM",
          "dialCode": "691",
          "alpha3": "FSM",
          "region": "Oceania",
          "capital": "Palikir",
          "geo": {
              "lat": 6.91666666,
              "long": 6.91666666
          },
          "timezones": [
              "Pacific/Chuuk",
              "Pacific/Pohnpei",
              "Pacific/Kosrae"
          ]
      },
      {
          "name": "Moldova",
          "unicode": "U+1F1F2 U+1F1E9",
          "emoji": "🇲🇩",
          "alpha2": "MD",
          "dialCode": "373",
          "alpha3": "MDA",
          "region": "Europe",
          "capital": "Chișinău",
          "geo": {
              "lat": 47,
              "long": 47
          },
          "timezones": [
              "Europe/Chisinau"
          ]
      },
      {
          "name": "Monaco",
          "unicode": "U+1F1F2 U+1F1E8",
          "emoji": "🇲🇨",
          "alpha2": "MC",
          "dialCode": "377",
          "alpha3": "MCO",
          "region": "Europe",
          "capital": "Monaco",
          "geo": {
              "lat": 43.73333333,
              "long": 43.73333333
          },
          "timezones": [
              "Europe/Monaco"
          ]
      },
      {
          "name": "Mongolia",
          "unicode": "U+1F1F2 U+1F1F3",
          "emoji": "🇲🇳",
          "alpha2": "MN",
          "dialCode": "976",
          "alpha3": "MNG",
          "region": "Asia",
          "capital": "Ulan Bator",
          "geo": {
              "lat": 46,
              "long": 46
          },
          "timezones": [
              "Asia/Ulaanbaatar",
              "Asia/Hovd",
              "Asia/Choibalsan"
          ]
      },
      {
          "name": "Montenegro",
          "unicode": "U+1F1F2 U+1F1EA",
          "emoji": "🇲🇪",
          "alpha2": "ME",
          "dialCode": "382",
          "alpha3": "MNE",
          "region": "Europe",
          "capital": "Podgorica",
          "geo": {
              "lat": 42.5,
              "long": 42.5
          },
          "timezones": [
              "Europe/Podgorica"
          ]
      },
      {
          "name": "Montserrat",
          "unicode": "U+1F1F2 U+1F1F8",
          "emoji": "🇲🇸",
          "alpha2": "MS",
          "dialCode": "1664",
          "alpha3": "MSR",
          "region": "Americas",
          "capital": "Plymouth",
          "geo": {
              "lat": 16.75,
              "long": 16.75
          },
          "timezones": [
              "America/Montserrat"
          ]
      },
      {
          "name": "Morocco",
          "unicode": "U+1F1F2 U+1F1E6",
          "emoji": "🇲🇦",
          "alpha2": "MA",
          "dialCode": "212",
          "alpha3": "MAR",
          "region": "Africa",
          "capital": "Rabat",
          "geo": {
              "lat": 32,
              "long": 32
          },
          "timezones": [
              "Africa/Casablanca"
          ]
      },
      {
          "name": "Mozambique",
          "unicode": "U+1F1F2 U+1F1FF",
          "emoji": "🇲🇿",
          "alpha2": "MZ",
          "dialCode": "258",
          "alpha3": "MOZ",
          "region": "Africa",
          "capital": "Maputo",
          "geo": {
              "lat": -18.25,
              "long": -18.25
          },
          "timezones": [
              "Africa/Maputo"
          ]
      },
      {
          "name": "Myanmar",
          "unicode": "U+1F1F2 U+1F1F2",
          "emoji": "🇲🇲",
          "alpha2": "MM",
          "dialCode": "95",
          "alpha3": "MMR",
          "region": "Asia",
          "capital": "Naypyidaw",
          "geo": {
              "lat": 22,
              "long": 22
          },
          "timezones": [
              "Asia/Rangoon"
          ]
      },
      {
          "name": "Namibia",
          "unicode": "U+1F1F3 U+1F1E6",
          "emoji": "🇳🇦",
          "alpha2": "NA",
          "dialCode": "264",
          "alpha3": "NAM",
          "region": "Africa",
          "capital": "Windhoek",
          "geo": {
              "lat": -22,
              "long": -22
          },
          "timezones": [
              "Africa/Windhoek"
          ]
      },
      {
          "name": "Nauru",
          "unicode": "U+1F1F3 U+1F1F7",
          "emoji": "🇳🇷",
          "alpha2": "NR",
          "dialCode": "674",
          "alpha3": "NRU",
          "region": "Oceania",
          "capital": "Yaren",
          "geo": {
              "lat": -0.53333333,
              "long": -0.53333333
          },
          "timezones": [
              "Pacific/Nauru"
          ]
      },
      {
          "name": "Nepal",
          "unicode": "U+1F1F3 U+1F1F5",
          "emoji": "🇳🇵",
          "alpha2": "NP",
          "dialCode": "977",
          "alpha3": "NPL",
          "region": "Asia",
          "capital": "Kathmandu",
          "geo": {
              "lat": 28,
              "long": 28
          },
          "timezones": [
              "Asia/Kathmandu"
          ]
      },
      {
          "name": "Netherlands",
          "unicode": "U+1F1F3 U+1F1F1",
          "emoji": "🇳🇱",
          "alpha2": "NL",
          "dialCode": "31",
          "alpha3": "NLD",
          "region": "Europe",
          "capital": "Amsterdam",
          "geo": {
              "lat": 52.5,
              "long": 52.5
          },
          "timezones": [
              "Europe/Amsterdam"
          ]
      },
      {
          "name": "New Caledonia",
          "unicode": "U+1F1F3 U+1F1E8",
          "emoji": "🇳🇨",
          "alpha2": "NC",
          "dialCode": "687",
          "alpha3": "NCL",
          "region": "Oceania",
          "capital": "Nouméa",
          "geo": {
              "lat": -21.5,
              "long": -21.5
          },
          "timezones": [
              "Pacific/Noumea"
          ]
      },
      {
          "name": "New Zealand",
          "unicode": "U+1F1F3 U+1F1FF",
          "emoji": "🇳🇿",
          "alpha2": "NZ",
          "dialCode": "64",
          "alpha3": "NZL",
          "region": "Oceania",
          "capital": "Wellington",
          "geo": {
              "lat": -41,
              "long": -41
          },
          "timezones": [
              "Pacific/Auckland",
              "Pacific/Chatham"
          ]
      },
      {
          "name": "Nicaragua",
          "unicode": "U+1F1F3 U+1F1EE",
          "emoji": "🇳🇮",
          "alpha2": "NI",
          "dialCode": "505",
          "alpha3": "NIC",
          "region": "Americas",
          "capital": "Managua",
          "geo": {
              "lat": 13,
              "long": 13
          },
          "timezones": [
              "America/Managua"
          ]
      },
      {
          "name": "Niger",
          "unicode": "U+1F1F3 U+1F1EA",
          "emoji": "🇳🇪",
          "alpha2": "NE",
          "dialCode": "227",
          "alpha3": "NER",
          "region": "Africa",
          "capital": "Niamey",
          "geo": {
              "lat": 16,
              "long": 16
          },
          "timezones": [
              "Africa/Niamey"
          ]
      },
      {
          "name": "Nigeria",
          "unicode": "U+1F1F3 U+1F1EC",
          "emoji": "🇳🇬",
          "alpha2": "NG",
          "dialCode": "234",
          "alpha3": "NGA",
          "region": "Africa",
          "capital": "Abuja",
          "geo": {
              "lat": 10,
              "long": 10
          },
          "timezones": [
              "Africa/Lagos"
          ]
      },
      {
          "name": "Niue",
          "unicode": "U+1F1F3 U+1F1FA",
          "emoji": "🇳🇺",
          "alpha2": "NU",
          "dialCode": "683",
          "alpha3": "NIU",
          "region": "Oceania",
          "capital": "Alofi",
          "geo": {
              "lat": -19.03333333,
              "long": -19.03333333
          },
          "timezones": [
              "Pacific/Niue"
          ]
      },
      {
          "name": "Norfolk Island",
          "unicode": "U+1F1F3 U+1F1EB",
          "emoji": "🇳🇫",
          "alpha2": "NF",
          "dialCode": "672",
          "alpha3": "NFK",
          "region": "Oceania",
          "capital": "Kingston",
          "geo": {
              "lat": -29.03333333,
              "long": -29.03333333
          },
          "timezones": [
              "Pacific/Norfolk"
          ]
      },
      {
          "name": "North Korea",
          "unicode": "U+1F1F0 U+1F1F5",
          "emoji": "🇰🇵",
          "alpha2": "KP",
          "dialCode": "850",
          "alpha3": "PRK",
          "region": "Asia",
          "capital": "Pyongyang",
          "geo": {
              "lat": 40,
              "long": 40
          },
          "timezones": [
              "Asia/Pyongyang"
          ]
      },
      {
          "name": "Northern Mariana Islands",
          "unicode": "U+1F1F2 U+1F1F5",
          "emoji": "🇲🇵",
          "alpha2": "MP",
          "dialCode": "1 670",
          "alpha3": "MNP",
          "region": "Oceania",
          "capital": "Saipan",
          "geo": {
              "lat": 15.2,
              "long": 15.2
          },
          "timezones": [
              "Pacific/Saipan"
          ]
      },
      {
          "name": "Norway",
          "unicode": "U+1F1F3 U+1F1F4",
          "emoji": "🇳🇴",
          "alpha2": "NO",
          "dialCode": "47",
          "alpha3": "NOR",
          "region": "Europe",
          "capital": "Oslo",
          "geo": {
              "lat": 62,
              "long": 62
          },
          "timezones": [
              "Europe/Oslo"
          ]
      },
      {
          "name": "Oman",
          "unicode": "U+1F1F4 U+1F1F2",
          "emoji": "🇴🇲",
          "alpha2": "OM",
          "dialCode": "968",
          "alpha3": "OMN",
          "region": "Asia",
          "capital": "Muscat",
          "geo": {
              "lat": 21,
              "long": 21
          },
          "timezones": [
              "Asia/Muscat"
          ]
      },
      {
          "name": "Pakistan",
          "unicode": "U+1F1F5 U+1F1F0",
          "emoji": "🇵🇰",
          "alpha2": "PK",
          "dialCode": "92",
          "alpha3": "PAK",
          "region": "Asia",
          "capital": "Islamabad",
          "geo": {
              "lat": 30,
              "long": 30
          },
          "timezones": [
              "Asia/Karachi"
          ]
      },
      {
          "name": "Palau",
          "unicode": "U+1F1F5 U+1F1FC",
          "emoji": "🇵🇼",
          "alpha2": "PW",
          "dialCode": "680",
          "alpha3": "PLW",
          "region": "Oceania",
          "capital": "Ngerulmud",
          "geo": {
              "lat": 7.5,
              "long": 7.5
          },
          "timezones": [
              "Pacific/Palau"
          ]
      },
      {
          "name": "Palestinian Territory",
          "unicode": "U+1F1F5 U+1F1F8",
          "emoji": "🇵🇸",
          "alpha2": "PS",
          "dialCode": "970",
          "alpha3": "PSE",
          "region": "Asia",
          "capital": "Ramallah",
          "geo": {
              "lat": 31.9,
              "long": 31.9
          },
          "timezones": [
              "Asia/Gaza",
              "Asia/Hebron"
          ]
      },
      {
          "name": "Panama",
          "unicode": "U+1F1F5 U+1F1E6",
          "emoji": "🇵🇦",
          "alpha2": "PA",
          "dialCode": "507",
          "alpha3": "PAN",
          "region": "Americas",
          "capital": "Panama City",
          "geo": {
              "lat": 9,
              "long": 9
          },
          "timezones": [
              "America/Panama"
          ]
      },
      {
          "name": "Papua New Guinea",
          "unicode": "U+1F1F5 U+1F1EC",
          "emoji": "🇵🇬",
          "alpha2": "PG",
          "dialCode": "675",
          "alpha3": "PNG",
          "region": "Oceania",
          "capital": "Port Moresby",
          "geo": {
              "lat": -6,
              "long": -6
          },
          "timezones": [
              "Pacific/Port_Moresby",
              "Pacific/Bougainville"
          ]
      },
      {
          "name": "Paraguay",
          "unicode": "U+1F1F5 U+1F1FE",
          "emoji": "🇵🇾",
          "alpha2": "PY",
          "dialCode": "595",
          "alpha3": "PRY",
          "region": "Americas",
          "capital": "Asunción",
          "geo": {
              "lat": -23,
              "long": -23
          },
          "timezones": [
              "America/Asuncion"
          ]
      },
      {
          "name": "Peru",
          "unicode": "U+1F1F5 U+1F1EA",
          "emoji": "🇵🇪",
          "alpha2": "PE",
          "dialCode": "51",
          "alpha3": "PER",
          "region": "Americas",
          "capital": "Lima",
          "geo": {
              "lat": -10,
              "long": -10
          },
          "timezones": [
              "America/Lima"
          ]
      },
      {
          "name": "Philippines",
          "unicode": "U+1F1F5 U+1F1ED",
          "emoji": "🇵🇭",
          "alpha2": "PH",
          "dialCode": "63",
          "alpha3": "PHL",
          "region": "Asia",
          "capital": "Manila",
          "geo": {
              "lat": 13,
              "long": 13
          },
          "timezones": [
              "Asia/Manila"
          ]
      },
      {
          "name": "Pitcairn",
          "unicode": "U+1F1F5 U+1F1F3",
          "emoji": "🇵🇳",
          "alpha2": "PN",
          "dialCode": "872",
          "alpha3": "PCN",
          "region": "Oceania",
          "capital": "Adamstown",
          "geo": {
              "lat": -25.06666666,
              "long": -25.06666666
          },
          "timezones": [
              "Pacific/Pitcairn"
          ]
      },
      {
          "name": "Poland",
          "unicode": "U+1F1F5 U+1F1F1",
          "emoji": "🇵🇱",
          "alpha2": "PL",
          "dialCode": "48",
          "alpha3": "POL",
          "region": "Europe",
          "capital": "Warsaw",
          "geo": {
              "lat": 52,
              "long": 52
          },
          "timezones": [
              "Europe/Warsaw"
          ]
      },
      {
          "name": "Portugal",
          "unicode": "U+1F1F5 U+1F1F9",
          "emoji": "🇵🇹",
          "alpha2": "PT",
          "dialCode": "351",
          "alpha3": "PRT",
          "region": "Europe",
          "capital": "Lisbon",
          "geo": {
              "lat": 39.5,
              "long": 39.5
          },
          "timezones": [
              "Europe/Lisbon",
              "Atlantic/Madeira",
              "Atlantic/Azores"
          ]
      },
      {
          "name": "Puerto Rico",
          "unicode": "U+1F1F5 U+1F1F7",
          "emoji": "🇵🇷",
          "alpha2": "PR",
          "dialCode": "1 939",
          "alpha3": "PRI",
          "region": "Americas",
          "capital": "San Juan",
          "geo": {
              "lat": 18.25,
              "long": 18.25
          },
          "timezones": [
              "America/Puerto_Rico"
          ]
      },
      {
          "name": "Qatar",
          "unicode": "U+1F1F6 U+1F1E6",
          "emoji": "🇶🇦",
          "alpha2": "QA",
          "dialCode": "974",
          "alpha3": "QAT",
          "region": "Asia",
          "capital": "Doha",
          "geo": {
              "lat": 25.5,
              "long": 25.5
          },
          "timezones": [
              "Asia/Qatar"
          ]
      },
      {
          "name": "Romania",
          "unicode": "U+1F1F7 U+1F1F4",
          "emoji": "🇷🇴",
          "alpha2": "RO",
          "dialCode": "40",
          "alpha3": "ROU",
          "region": "Europe",
          "capital": "Bucharest",
          "geo": {
              "lat": 46,
              "long": 46
          },
          "timezones": [
              "Europe/Bucharest"
          ]
      },
      {
          "name": "Russia",
          "unicode": "U+1F1F7 U+1F1FA",
          "emoji": "🇷🇺",
          "alpha2": "RU",
          "dialCode": "7",
          "alpha3": "RUS",
          "region": "Europe",
          "capital": "Moscow",
          "geo": {
              "lat": 60,
              "long": 60
          },
          "timezones": [
              "Europe/Kaliningrad",
              "Europe/Moscow",
              "Europe/Simferopol",
              "Europe/Volgograd",
              "Europe/Kirov",
              "Europe/Astrakhan",
              "Europe/Samara",
              "Europe/Ulyanovsk",
              "Asia/Yekaterinburg",
              "Asia/Omsk",
              "Asia/Novosibirsk",
              "Asia/Barnaul",
              "Asia/Tomsk",
              "Asia/Novokuznetsk",
              "Asia/Krasnoyarsk",
              "Asia/Irkutsk",
              "Asia/Chita",
              "Asia/Yakutsk",
              "Asia/Khandyga",
              "Asia/Vladivostok",
              "Asia/Ust-Nera",
              "Asia/Magadan",
              "Asia/Sakhalin",
              "Asia/Srednekolymsk",
              "Asia/Kamchatka",
              "Asia/Anadyr"
          ]
      },
      {
          "name": "Rwanda",
          "unicode": "U+1F1F7 U+1F1FC",
          "emoji": "🇷🇼",
          "alpha2": "RW",
          "dialCode": "250",
          "alpha3": "RWA",
          "region": "Africa",
          "capital": "Kigali",
          "geo": {
              "lat": -2,
              "long": -2
          },
          "timezones": [
              "Africa/Kigali"
          ]
      },
      {
          "name": "Réunion",
          "unicode": "U+1F1F7 U+1F1EA",
          "emoji": "🇷🇪",
          "alpha2": "RE",
          "dialCode": "262",
          "alpha3": "REU",
          "region": "Africa",
          "capital": "Saint-Denis",
          "geo": {
              "lat": -21.15,
              "long": -21.15
          },
          "timezones": [
              "Indian/Reunion"
          ]
      },
      {
          "name": "Saint Barthélemy",
          "unicode": "U+1F1E7 U+1F1F1",
          "emoji": "🇧🇱",
          "alpha2": "BL",
          "dialCode": "590",
          "alpha3": "BLM",
          "region": "Americas",
          "capital": "Gustavia",
          "geo": {
              "lat": 18.5,
              "long": 18.5
          },
          "timezones": [
              "America/St_Barthelemy"
          ]
      },
      {
          "name": "Saint Helena, Ascension and Tristan Da Cunha",
          "unicode": "U+1F1F8 U+1F1ED",
          "emoji": "🇸🇭",
          "alpha2": "SH",
          "dialCode": "290",
          "alpha3": "SHN",
          "region": "Africa",
          "geo": {},
          "capital": "",
          "timezones": []
      },
      {
          "name": "Saint Kitts and Nevis",
          "unicode": "U+1F1F0 U+1F1F3",
          "emoji": "🇰🇳",
          "alpha2": "KN",
          "dialCode": "1 869",
          "alpha3": "KNA",
          "region": "Americas",
          "capital": "Basseterre",
          "geo": {
              "lat": 17.33333333,
              "long": 17.33333333
          },
          "timezones": [
              "America/St_Kitts"
          ]
      },
      {
          "name": "Saint Lucia",
          "unicode": "U+1F1F1 U+1F1E8",
          "emoji": "🇱🇨",
          "alpha2": "LC",
          "dialCode": "1 758",
          "alpha3": "LCA",
          "region": "Americas",
          "capital": "Castries",
          "geo": {
              "lat": 13.88333333,
              "long": 13.88333333
          },
          "timezones": [
              "America/St_Lucia"
          ]
      },
      {
          "name": "Saint Martin (French Part)",
          "unicode": "U+1F1F2 U+1F1EB",
          "emoji": "🇲🇫",
          "alpha2": "MF",
          "dialCode": "590",
          "alpha3": "MAF",
          "region": "Americas",
          "capital": "Marigot",
          "geo": {
              "lat": 18.08333333,
              "long": 18.08333333
          },
          "timezones": [
              "America/Marigot"
          ]
      },
      {
          "name": "Saint Pierre and Miquelon",
          "unicode": "U+1F1F5 U+1F1F2",
          "emoji": "🇵🇲",
          "alpha2": "PM",
          "dialCode": "508",
          "alpha3": "SPM",
          "region": "Americas",
          "capital": "Saint-Pierre",
          "geo": {
              "lat": 46.83333333,
              "long": 46.83333333
          },
          "timezones": [
              "America/Miquelon"
          ]
      },
      {
          "name": "Saint Vincent and The Grenadines",
          "unicode": "U+1F1FB U+1F1E8",
          "emoji": "🇻🇨",
          "alpha2": "VC",
          "dialCode": "1 784",
          "alpha3": "VCT",
          "region": "Americas",
          "capital": "Kingstown",
          "geo": {
              "lat": 13.25,
              "long": 13.25
          },
          "timezones": [
              "America/St_Vincent"
          ]
      },
      {
          "name": "Samoa",
          "unicode": "U+1F1FC U+1F1F8",
          "emoji": "🇼🇸",
          "alpha2": "WS",
          "dialCode": "685",
          "alpha3": "WSM",
          "region": "Oceania",
          "capital": "Apia",
          "geo": {
              "lat": -13.58333333,
              "long": -13.58333333
          },
          "timezones": [
              "Pacific/Apia"
          ]
      },
      {
          "name": "San Marino",
          "unicode": "U+1F1F8 U+1F1F2",
          "emoji": "🇸🇲",
          "alpha2": "SM",
          "dialCode": "378",
          "alpha3": "SMR",
          "region": "Europe",
          "capital": "City of San Marino",
          "geo": {
              "lat": 43.76666666,
              "long": 43.76666666
          },
          "timezones": [
              "Europe/San_Marino"
          ]
      },
      {
          "name": "Sao Tome and Principe",
          "unicode": "U+1F1F8 U+1F1F9",
          "emoji": "🇸🇹",
          "alpha2": "ST",
          "dialCode": "239",
          "alpha3": "STP",
          "region": "Africa",
          "capital": "São Tomé",
          "geo": {
              "lat": 1,
              "long": 1
          },
          "timezones": [
              "Africa/Sao_Tome"
          ]
      },
      {
          "name": "Saudi Arabia",
          "unicode": "U+1F1F8 U+1F1E6",
          "emoji": "🇸🇦",
          "alpha2": "SA",
          "dialCode": "966",
          "alpha3": "SAU",
          "region": "Asia",
          "capital": "Riyadh",
          "geo": {
              "lat": 25,
              "long": 25
          },
          "timezones": [
              "Asia/Riyadh"
          ]
      },
      {
          "name": "Senegal",
          "unicode": "U+1F1F8 U+1F1F3",
          "emoji": "🇸🇳",
          "alpha2": "SN",
          "dialCode": "221",
          "alpha3": "SEN",
          "region": "Africa",
          "capital": "Dakar",
          "geo": {
              "lat": 14,
              "long": 14
          },
          "timezones": [
              "Africa/Dakar"
          ]
      },
      {
          "name": "Serbia",
          "unicode": "U+1F1F7 U+1F1F8",
          "emoji": "🇷🇸",
          "alpha2": "RS",
          "dialCode": "381",
          "alpha3": "SRB",
          "region": "Europe",
          "capital": "Belgrade",
          "geo": {
              "lat": 44,
              "long": 44
          },
          "timezones": [
              "Europe/Belgrade"
          ]
      },
      {
          "name": "Seychelles",
          "unicode": "U+1F1F8 U+1F1E8",
          "emoji": "🇸🇨",
          "alpha2": "SC",
          "dialCode": "248",
          "alpha3": "SYC",
          "region": "Africa",
          "capital": "Victoria",
          "geo": {
              "lat": -4.58333333,
              "long": -4.58333333
          },
          "timezones": [
              "Indian/Mahe"
          ]
      },
      {
          "name": "Sierra Leone",
          "unicode": "U+1F1F8 U+1F1F1",
          "emoji": "🇸🇱",
          "alpha2": "SL",
          "dialCode": "232",
          "alpha3": "SLE",
          "region": "Africa",
          "capital": "Freetown",
          "geo": {
              "lat": 8.5,
              "long": 8.5
          },
          "timezones": [
              "Africa/Freetown"
          ]
      },
      {
          "name": "Singapore",
          "unicode": "U+1F1F8 U+1F1EC",
          "emoji": "🇸🇬",
          "alpha2": "SG",
          "dialCode": "65",
          "alpha3": "SGP",
          "region": "Asia",
          "capital": "Singapore",
          "geo": {
              "lat": 1.36666666,
              "long": 1.36666666
          },
          "timezones": [
              "Asia/Singapore"
          ]
      },
      {
          "name": "Sint Maarten (Dutch Part)",
          "unicode": "U+1F1F8 U+1F1FD",
          "emoji": "🇸🇽",
          "alpha2": "SX",
          "dialCode": "",
          "alpha3": "SXM",
          "region": "Americas",
          "capital": "Philipsburg",
          "geo": {
              "lat": 18.033333,
              "long": 18.033333
          },
          "timezones": [
              "America/Lower_Princes"
          ]
      },
      {
          "name": "Slovakia",
          "unicode": "U+1F1F8 U+1F1F0",
          "emoji": "🇸🇰",
          "alpha2": "SK",
          "dialCode": "421",
          "alpha3": "SVK",
          "region": "Europe",
          "capital": "Bratislava",
          "geo": {
              "lat": 48.66666666,
              "long": 48.66666666
          },
          "timezones": [
              "Europe/Bratislava"
          ]
      },
      {
          "name": "Slovenia",
          "unicode": "U+1F1F8 U+1F1EE",
          "emoji": "🇸🇮",
          "alpha2": "SI",
          "dialCode": "386",
          "alpha3": "SVN",
          "region": "Europe",
          "capital": "Ljubljana",
          "geo": {
              "lat": 46.11666666,
              "long": 46.11666666
          },
          "timezones": [
              "Europe/Ljubljana"
          ]
      },
      {
          "name": "Solomon Islands",
          "unicode": "U+1F1F8 U+1F1E7",
          "emoji": "🇸🇧",
          "alpha2": "SB",
          "dialCode": "677",
          "alpha3": "SLB",
          "region": "Oceania",
          "capital": "Honiara",
          "geo": {
              "lat": -8,
              "long": -8
          },
          "timezones": [
              "Pacific/Guadalcanal"
          ]
      },
      {
          "name": "Somalia",
          "unicode": "U+1F1F8 U+1F1F4",
          "emoji": "🇸🇴",
          "alpha2": "SO",
          "dialCode": "252",
          "alpha3": "SOM",
          "region": "Africa",
          "capital": "Mogadishu",
          "geo": {
              "lat": 10,
              "long": 10
          },
          "timezones": [
              "Africa/Mogadishu"
          ]
      },
      {
          "name": "South Africa",
          "unicode": "U+1F1FF U+1F1E6",
          "emoji": "🇿🇦",
          "alpha2": "ZA",
          "dialCode": "27",
          "alpha3": "ZAF",
          "region": "Africa",
          "capital": "Pretoria",
          "geo": {
              "lat": -29,
              "long": -29
          },
          "timezones": [
              "Africa/Johannesburg"
          ]
      },
      {
          "name": "South Georgia",
          "unicode": "U+1F1EC U+1F1F8",
          "emoji": "🇬🇸",
          "alpha2": "GS",
          "dialCode": "500",
          "alpha3": "SGS",
          "region": "Americas",
          "capital": "King Edward Point",
          "geo": {
              "lat": -54.5,
              "long": -54.5
          },
          "timezones": [
              "Atlantic/South_Georgia"
          ]
      },
      {
          "name": "South Korea",
          "unicode": "U+1F1F0 U+1F1F7",
          "emoji": "🇰🇷",
          "alpha2": "KR",
          "dialCode": "82",
          "alpha3": "KOR",
          "region": "Asia",
          "capital": "Seoul",
          "geo": {
              "lat": 37,
              "long": 37
          },
          "timezones": [
              "Asia/Seoul"
          ]
      },
      {
          "name": "South Sudan",
          "unicode": "U+1F1F8 U+1F1F8",
          "emoji": "🇸🇸",
          "alpha2": "SS",
          "dialCode": "",
          "alpha3": "SSD",
          "region": "Africa",
          "capital": "Juba",
          "geo": {
              "lat": 7,
              "long": 7
          },
          "timezones": [
              "Africa/Juba"
          ]
      },
      {
          "name": "Spain",
          "unicode": "U+1F1EA U+1F1F8",
          "emoji": "🇪🇸",
          "alpha2": "ES",
          "dialCode": "34",
          "alpha3": "ESP",
          "region": "Europe",
          "capital": "Madrid",
          "geo": {
              "lat": 40,
              "long": 40
          },
          "timezones": [
              "Europe/Madrid",
              "Africa/Ceuta",
              "Atlantic/Canary"
          ]
      },
      {
          "name": "Sri Lanka",
          "unicode": "U+1F1F1 U+1F1F0",
          "emoji": "🇱🇰",
          "alpha2": "LK",
          "dialCode": "94",
          "alpha3": "LKA",
          "region": "Asia",
          "capital": "Colombo",
          "geo": {
              "lat": 7,
              "long": 7
          },
          "timezones": [
              "Asia/Colombo"
          ]
      },
      {
          "name": "Sudan",
          "unicode": "U+1F1F8 U+1F1E9",
          "emoji": "🇸🇩",
          "alpha2": "SD",
          "dialCode": "249",
          "alpha3": "SDN",
          "region": "Africa",
          "capital": "Khartoum",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "Africa/Khartoum"
          ]
      },
      {
          "name": "Suriname",
          "unicode": "U+1F1F8 U+1F1F7",
          "emoji": "🇸🇷",
          "alpha2": "SR",
          "dialCode": "597",
          "alpha3": "SUR",
          "region": "Americas",
          "capital": "Paramaribo",
          "geo": {
              "lat": 4,
              "long": 4
          },
          "timezones": [
              "America/Paramaribo"
          ]
      },
      {
          "name": "Svalbard and Jan Mayen",
          "unicode": "U+1F1F8 U+1F1EF",
          "emoji": "🇸🇯",
          "alpha2": "SJ",
          "dialCode": "47",
          "alpha3": "SJM",
          "region": "Europe",
          "capital": "Longyearbyen",
          "geo": {
              "lat": 78,
              "long": 78
          },
          "timezones": [
              "Arctic/Longyearbyen"
          ]
      },
      {
          "name": "Swaziland",
          "unicode": "U+1F1F8 U+1F1FF",
          "emoji": "🇸🇿",
          "alpha2": "SZ",
          "dialCode": "268",
          "alpha3": "SWZ",
          "region": "Africa",
          "capital": "Lobamba",
          "geo": {
              "lat": -26.5,
              "long": -26.5
          },
          "timezones": [
              "Africa/Mbabane"
          ]
      },
      {
          "name": "Sweden",
          "unicode": "U+1F1F8 U+1F1EA",
          "emoji": "🇸🇪",
          "alpha2": "SE",
          "dialCode": "46",
          "alpha3": "SWE",
          "region": "Europe",
          "capital": "Stockholm",
          "geo": {
              "lat": 62,
              "long": 62
          },
          "timezones": [
              "Europe/Stockholm"
          ]
      },
      {
          "name": "Switzerland",
          "unicode": "U+1F1E8 U+1F1ED",
          "emoji": "🇨🇭",
          "alpha2": "CH",
          "dialCode": "41",
          "alpha3": "CHE",
          "region": "Europe",
          "capital": "Bern",
          "geo": {
              "lat": 47,
              "long": 47
          },
          "timezones": [
              "Europe/Zurich"
          ]
      },
      {
          "name": "Syrian Arab Republic",
          "unicode": "U+1F1F8 U+1F1FE",
          "emoji": "🇸🇾",
          "alpha2": "SY",
          "dialCode": "963",
          "alpha3": "SYR",
          "region": "Asia",
          "capital": "Damascus",
          "geo": {
              "lat": 35,
              "long": 35
          },
          "timezones": [
              "Asia/Damascus"
          ]
      },
      {
          "name": "Taiwan",
          "unicode": "U+1F1F9 U+1F1FC",
          "emoji": "🇹🇼",
          "alpha2": "TW",
          "dialCode": "886",
          "alpha3": "TWN",
          "region": "Asia",
          "capital": "Taipei",
          "geo": {
              "lat": 23.5,
              "long": 23.5
          },
          "timezones": [
              "Asia/Taipei"
          ]
      },
      {
          "name": "Tajikistan",
          "unicode": "U+1F1F9 U+1F1EF",
          "emoji": "🇹🇯",
          "alpha2": "TJ",
          "dialCode": "992",
          "alpha3": "TJK",
          "region": "Asia",
          "capital": "Dushanbe",
          "geo": {
              "lat": 39,
              "long": 39
          },
          "timezones": [
              "Asia/Dushanbe"
          ]
      },
      {
          "name": "Tanzania",
          "unicode": "U+1F1F9 U+1F1FF",
          "emoji": "🇹🇿",
          "alpha2": "TZ",
          "dialCode": "255",
          "alpha3": "TZA",
          "region": "Africa",
          "capital": "Dodoma",
          "geo": {
              "lat": -6,
              "long": -6
          },
          "timezones": [
              "Africa/Dar_es_Salaam"
          ]
      },
      {
          "name": "Thailand",
          "unicode": "U+1F1F9 U+1F1ED",
          "emoji": "🇹🇭",
          "alpha2": "TH",
          "dialCode": "66",
          "alpha3": "THA",
          "region": "Asia",
          "capital": "Bangkok",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "Asia/Bangkok"
          ]
      },
      {
          "name": "Timor-Leste",
          "unicode": "U+1F1F9 U+1F1F1",
          "emoji": "🇹🇱",
          "alpha2": "TL",
          "dialCode": "670",
          "alpha3": "TLS",
          "region": "Asia",
          "capital": "Dili",
          "geo": {
              "lat": -8.83333333,
              "long": -8.83333333
          },
          "timezones": [
              "Asia/Dili"
          ]
      },
      {
          "name": "Togo",
          "unicode": "U+1F1F9 U+1F1EC",
          "emoji": "🇹🇬",
          "alpha2": "TG",
          "dialCode": "228",
          "alpha3": "TGO",
          "region": "Africa",
          "capital": "Lomé",
          "geo": {
              "lat": 8,
              "long": 8
          },
          "timezones": [
              "Africa/Lome"
          ]
      },
      {
          "name": "Tokelau",
          "unicode": "U+1F1F9 U+1F1F0",
          "emoji": "🇹🇰",
          "alpha2": "TK",
          "dialCode": "690",
          "alpha3": "TKL",
          "region": "Oceania",
          "capital": "Fakaofo",
          "geo": {
              "lat": -9,
              "long": -9
          },
          "timezones": [
              "Pacific/Fakaofo"
          ]
      },
      {
          "name": "Tonga",
          "unicode": "U+1F1F9 U+1F1F4",
          "emoji": "🇹🇴",
          "alpha2": "TO",
          "dialCode": "676",
          "alpha3": "TON",
          "region": "Oceania",
          "capital": "Nuku'alofa",
          "geo": {
              "lat": -20,
              "long": -20
          },
          "timezones": [
              "Pacific/Tongatapu"
          ]
      },
      {
          "name": "Trinidad and Tobago",
          "unicode": "U+1F1F9 U+1F1F9",
          "emoji": "🇹🇹",
          "alpha2": "TT",
          "dialCode": "1 868",
          "alpha3": "TTO",
          "region": "Americas",
          "capital": "Port of Spain",
          "geo": {
              "lat": 11,
              "long": 11
          },
          "timezones": [
              "America/Port_of_Spain"
          ]
      },
      {
          "name": "Tunisia",
          "unicode": "U+1F1F9 U+1F1F3",
          "emoji": "🇹🇳",
          "alpha2": "TN",
          "dialCode": "216",
          "alpha3": "TUN",
          "region": "Africa",
          "capital": "Tunis",
          "geo": {
              "lat": 34,
              "long": 34
          },
          "timezones": [
              "Africa/Tunis"
          ]
      },
      {
          "name": "Turkey",
          "unicode": "U+1F1F9 U+1F1F7",
          "emoji": "🇹🇷",
          "alpha2": "TR",
          "dialCode": "90",
          "alpha3": "TUR",
          "region": "Asia",
          "capital": "Ankara",
          "geo": {
              "lat": 39,
              "long": 39
          },
          "timezones": [
              "Europe/Istanbul"
          ]
      },
      {
          "name": "Turkmenistan",
          "unicode": "U+1F1F9 U+1F1F2",
          "emoji": "🇹🇲",
          "alpha2": "TM",
          "dialCode": "993",
          "alpha3": "TKM",
          "region": "Asia",
          "capital": "Ashgabat",
          "geo": {
              "lat": 40,
              "long": 40
          },
          "timezones": [
              "Asia/Ashgabat"
          ]
      },
      {
          "name": "Turks and Caicos Islands",
          "unicode": "U+1F1F9 U+1F1E8",
          "emoji": "🇹🇨",
          "alpha2": "TC",
          "dialCode": "1 649",
          "alpha3": "TCA",
          "region": "Americas",
          "capital": "Cockburn Town",
          "geo": {
              "lat": 21.75,
              "long": 21.75
          },
          "timezones": [
              "America/Grand_Turk"
          ]
      },
      {
          "name": "Tuvalu",
          "unicode": "U+1F1F9 U+1F1FB",
          "emoji": "🇹🇻",
          "alpha2": "TV",
          "dialCode": "688",
          "alpha3": "TUV",
          "region": "Oceania",
          "capital": "Funafuti",
          "geo": {
              "lat": -8,
              "long": -8
          },
          "timezones": [
              "Pacific/Funafuti"
          ]
      },
      {
          "name": "Uganda",
          "unicode": "U+1F1FA U+1F1EC",
          "emoji": "🇺🇬",
          "alpha2": "UG",
          "dialCode": "256",
          "alpha3": "UGA",
          "region": "Africa",
          "capital": "Kampala",
          "geo": {
              "lat": 1,
              "long": 1
          },
          "timezones": [
              "Africa/Kampala"
          ]
      },
      {
          "name": "Ukraine",
          "unicode": "U+1F1FA U+1F1E6",
          "emoji": "🇺🇦",
          "alpha2": "UA",
          "dialCode": "380",
          "alpha3": "UKR",
          "region": "Europe",
          "capital": "Kiev",
          "geo": {
              "lat": 49,
              "long": 49
          },
          "timezones": [
              "Europe/Kiev",
              "Europe/Uzhgorod",
              "Europe/Zaporozhye"
          ]
      },
      {
          "name": "United Arab Emirates",
          "unicode": "U+1F1E6 U+1F1EA",
          "emoji": "🇦🇪",
          "alpha2": "AE",
          "dialCode": "971",
          "alpha3": "ARE",
          "region": "Asia",
          "capital": "Abu Dhabi",
          "geo": {
              "lat": 24,
              "long": 24
          },
          "timezones": [
              "Asia/Dubai"
          ]
      },
      {
          "name": "United Kingdom",
          "unicode": "U+1F1EC U+1F1E7",
          "emoji": "🇬🇧",
          "alpha2": "GB",
          "dialCode": "44",
          "alpha3": "GBR",
          "region": "Europe",
          "capital": "London",
          "geo": {
              "lat": 54,
              "long": 54
          },
          "timezones": [
              "Europe/London"
          ]
      },
      {
          "name": "United States",
          "unicode": "U+1F1FA U+1F1F8",
          "emoji": "🇺🇸",
          "alpha2": "US",
          "dialCode": "1",
          "alpha3": "USA",
          "region": "Americas",
          "capital": "Washington D.C.",
          "geo": {
              "lat": 38,
              "long": 38
          },
          "timezones": [
              "America/New_York",
              "America/Detroit",
              "America/Kentucky/Louisville",
              "America/Kentucky/Monticello",
              "America/Indiana/Indianapolis",
              "America/Indiana/Vincennes",
              "America/Indiana/Winamac",
              "America/Indiana/Marengo",
              "America/Indiana/Petersburg",
              "America/Indiana/Vevay",
              "America/Chicago",
              "America/Indiana/Tell_City",
              "America/Indiana/Knox",
              "America/Menominee",
              "America/North_Dakota/Center",
              "America/North_Dakota/New_Salem",
              "America/North_Dakota/Beulah",
              "America/Denver",
              "America/Boise",
              "America/Phoenix",
              "America/Los_Angeles",
              "America/Anchorage",
              "America/Juneau",
              "America/Sitka",
              "America/Metlakatla",
              "America/Yakutat",
              "America/Nome",
              "America/Adak",
              "Pacific/Honolulu"
          ]
      },
      {
          "name": "United States Minor Outlying Islands",
          "unicode": "U+1F1FA U+1F1F2",
          "emoji": "🇺🇲",
          "alpha2": "UM",
          "dialCode": "",
          "alpha3": "UMI",
          "region": "Oceania",
          "capital": null,
          "geo": {
              "lat": 19.2911437,
              "long": 19.2911437
          },
          "timezones": [
              "Pacific/Johnston",
              "Pacific/Midway",
              "Pacific/Wake"
          ]
      },
      {
          "name": "Uruguay",
          "unicode": "U+1F1FA U+1F1FE",
          "emoji": "🇺🇾",
          "alpha2": "UY",
          "dialCode": "598",
          "alpha3": "URY",
          "region": "Americas",
          "capital": "Montevideo",
          "geo": {
              "lat": -33,
              "long": -33
          },
          "timezones": [
              "America/Montevideo"
          ]
      },
      {
          "name": "Uzbekistan",
          "unicode": "U+1F1FA U+1F1FF",
          "emoji": "🇺🇿",
          "alpha2": "UZ",
          "dialCode": "998",
          "alpha3": "UZB",
          "region": "Asia",
          "capital": "Tashkent",
          "geo": {
              "lat": 41,
              "long": 41
          },
          "timezones": [
              "Asia/Samarkand",
              "Asia/Tashkent"
          ]
      },
      {
          "name": "Vanuatu",
          "unicode": "U+1F1FB U+1F1FA",
          "emoji": "🇻🇺",
          "alpha2": "VU",
          "dialCode": "678",
          "alpha3": "VUT",
          "region": "Oceania",
          "capital": "Port Vila",
          "geo": {
              "lat": -16,
              "long": -16
          },
          "timezones": [
              "Pacific/Efate"
          ]
      },
      {
          "name": "Vatican City",
          "unicode": "U+1F1FB U+1F1E6",
          "emoji": "🇻🇦",
          "alpha2": "VA",
          "dialCode": "379",
          "alpha3": "VAT",
          "region": "Europe",
          "capital": "Vatican City",
          "geo": {
              "lat": 41.9,
              "long": 41.9
          },
          "timezones": [
              "Europe/Vatican"
          ]
      },
      {
          "name": "Venezuela",
          "unicode": "U+1F1FB U+1F1EA",
          "emoji": "🇻🇪",
          "alpha2": "VE",
          "dialCode": "58",
          "alpha3": "VEN",
          "region": "Americas",
          "capital": "Caracas",
          "geo": {
              "lat": 8,
              "long": 8
          },
          "timezones": [
              "America/Caracas"
          ]
      },
      {
          "name": "Viet Nam",
          "unicode": "U+1F1FB U+1F1F3",
          "emoji": "🇻🇳",
          "alpha2": "VN",
          "dialCode": "84",
          "alpha3": "VNM",
          "region": "Asia",
          "capital": "Hanoi",
          "geo": {
              "lat": 16.16666666,
              "long": 16.16666666
          },
          "timezones": [
              "Asia/Ho_Chi_Minh"
          ]
      },
      {
          "name": "Virgin Islands, British",
          "unicode": "U+1F1FB U+1F1EC",
          "emoji": "🇻🇬",
          "alpha2": "VG",
          "dialCode": "1 284",
          "alpha3": "VGB",
          "region": "Americas",
          "capital": "Road Town",
          "geo": {
              "lat": 18.431383,
              "long": 18.431383
          },
          "timezones": [
              "America/Tortola"
          ]
      },
      {
          "name": "Virgin Islands, U.S.",
          "unicode": "U+1F1FB U+1F1EE",
          "emoji": "🇻🇮",
          "alpha2": "VI",
          "dialCode": "1 340",
          "alpha3": "VIR",
          "region": "Americas",
          "capital": "Charlotte Amalie",
          "geo": {
              "lat": 18.35,
              "long": 18.35
          },
          "timezones": [
              "America/St_Thomas"
          ]
      },
      {
          "name": "Wallis and Futuna",
          "unicode": "U+1F1FC U+1F1EB",
          "emoji": "🇼🇫",
          "alpha2": "WF",
          "dialCode": "681",
          "alpha3": "WLF",
          "region": "Oceania",
          "capital": "Mata-Utu",
          "geo": {
              "lat": -13.3,
              "long": -13.3
          },
          "timezones": [
              "Pacific/Wallis"
          ]
      },
      {
          "name": "Western Sahara",
          "unicode": "U+1F1EA U+1F1ED",
          "emoji": "🇪🇭",
          "alpha2": "EH",
          "dialCode": "",
          "alpha3": "ESH",
          "region": "Africa",
          "capital": "El Aaiún",
          "geo": {
              "lat": 24.5,
              "long": 24.5
          },
          "timezones": [
              "Africa/El_Aaiun"
          ]
      },
      {
          "name": "Yemen",
          "unicode": "U+1F1FE U+1F1EA",
          "emoji": "🇾🇪",
          "alpha2": "YE",
          "dialCode": "967",
          "alpha3": "YEM",
          "region": "Asia",
          "capital": "Sana'a",
          "geo": {
              "lat": 15,
              "long": 15
          },
          "timezones": [
              "Asia/Aden"
          ]
      },
      {
          "name": "Zambia",
          "unicode": "U+1F1FF U+1F1F2",
          "emoji": "🇿🇲",
          "alpha2": "ZM",
          "dialCode": "260",
          "alpha3": "ZMB",
          "region": "Africa",
          "capital": "Lusaka",
          "geo": {
              "lat": -15,
              "long": -15
          },
          "timezones": [
              "Africa/Lusaka"
          ]
      },
      {
          "name": "Zimbabwe",
          "unicode": "U+1F1FF U+1F1FC",
          "emoji": "🇿🇼",
          "alpha2": "ZW",
          "dialCode": "263",
          "alpha3": "ZWE",
          "region": "Africa",
          "capital": "Harare",
          "geo": {
              "lat": -20,
              "long": -20
          },
          "timezones": [
              "Africa/Harare"
          ]
      },
      {
          "name": "Åland Islands",
          "unicode": "U+1F1E6 U+1F1FD",
          "emoji": "🇦🇽",
          "alpha2": "AX",
          "dialCode": "",
          "alpha3": "ALA",
          "region": "Europe",
          "capital": "Mariehamn",
          "geo": {
              "lat": 60.116667,
              "long": 60.116667
          },
          "timezones": [
              "Europe/Mariehamn"
          ]
      }
  ],
});