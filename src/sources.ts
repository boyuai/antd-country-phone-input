import { ReactNode } from 'react';
import { searchArea } from './third-party';

export const getAreas = (locale: any) => {
  return defaultAreas.map((area) => ({
    ...area,
    name: searchArea({ alpha2: area.short.toLowerCase() }, locale)?.name,
  }));
};

export const getSortedAreas = (areas: Area[]) => {
  return areas.sort((a, b) => {
    if (a.name && b.name) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });
};

export type Area = {
  short: string;
  phoneCode: number;
  emoji: ReactNode;
  name?: string;
};

export const defaultAreas: Area[] = [
  {
    emoji: '🇨🇦',
    phoneCode: 1,
    short: 'CA',
  },
  {
    emoji: '🇺🇸',
    phoneCode: 1,
    short: 'US',
  },
  {
    emoji: '🇧🇸',
    phoneCode: 1242,
    short: 'BS',
  },
  {
    emoji: '🇧🇧',
    phoneCode: 1246,
    short: 'BB',
  },
  {
    emoji: '🇦🇮',
    phoneCode: 1264,
    short: 'AI',
  },
  {
    emoji: '🇦🇬',
    phoneCode: 1268,
    short: 'AG',
  },
  {
    emoji: '🇻🇮',
    phoneCode: 1284,
    short: 'VI',
  },
  {
    emoji: '🇻🇬',
    phoneCode: 1340,
    short: 'VG',
  },
  {
    emoji: '🇰🇾',
    phoneCode: 1345,
    short: 'KY',
  },
  {
    emoji: '🇧🇲',
    phoneCode: 1441,
    short: 'BM',
  },
  {
    emoji: '🇬🇩',
    phoneCode: 1473,
    short: 'GD',
  },
  {
    emoji: '🇹🇨',
    phoneCode: 1649,
    short: 'TC',
  },
  {
    emoji: '🇲🇸',
    phoneCode: 1664,
    short: 'MS',
  },
  {
    emoji: '🇬🇺',
    phoneCode: 1671,
    short: 'GU',
  },
  {
    emoji: '🇦🇸',
    phoneCode: 1684,
    short: 'AS',
  },
  {
    emoji: '🇳🇱',
    phoneCode: 1721,
    short: 'SX',
  },
  {
    emoji: '🇱🇨',
    phoneCode: 1758,
    short: 'LC',
  },
  {
    emoji: '🇩🇲',
    phoneCode: 1767,
    short: 'DM',
  },
  {
    emoji: '🇻🇨',
    phoneCode: 1784,
    short: 'VC',
  },
  {
    emoji: '🇵🇷',
    phoneCode: 1787,
    short: 'PR',
  },
  {
    emoji: '🇩🇴',
    phoneCode: 1809,
    short: 'DO',
  },
  {
    emoji: '🇹🇹',
    phoneCode: 1868,
    short: 'TT',
  },
  {
    emoji: '🇰🇳',
    phoneCode: 1869,
    short: 'KN',
  },
  {
    emoji: '🇯🇲',
    phoneCode: 1876,
    short: 'JM',
  },
  {
    emoji: '🇪🇬',
    phoneCode: 20,
    short: 'EG',
  },
  {
    emoji: '🇲🇦',
    phoneCode: 212,
    short: 'MA',
  },
  {
    emoji: '🇩🇿',
    phoneCode: 213,
    short: 'DZ',
  },
  {
    emoji: '🇹🇳',
    phoneCode: 216,
    short: 'TN',
  },
  {
    emoji: '🇱🇾',
    phoneCode: 218,
    short: 'LY',
  },
  {
    emoji: '🇬🇲',
    phoneCode: 220,
    short: 'GM',
  },
  {
    emoji: '🇸🇳',
    phoneCode: 221,
    short: 'SN',
  },
  {
    emoji: '🇲🇷',
    phoneCode: 222,
    short: 'MR',
  },
  {
    emoji: '🇲🇱',
    phoneCode: 223,
    short: 'ML',
  },
  {
    emoji: '🇬🇳',
    phoneCode: 224,
    short: 'GN',
  },
  {
    emoji: '🇨🇮',
    phoneCode: 225,
    short: 'CI',
  },
  {
    emoji: '🇧🇫',
    phoneCode: 226,
    short: 'BF',
  },
  {
    emoji: '🇳🇪',
    phoneCode: 227,
    short: 'NE',
  },
  {
    emoji: '🇹🇬',
    phoneCode: 228,
    short: 'TG',
  },
  {
    emoji: '🇧🇯',
    phoneCode: 229,
    short: 'BJ',
  },
  {
    emoji: '🇲🇺',
    phoneCode: 230,
    short: 'MU',
  },
  {
    emoji: '🇱🇷',
    phoneCode: 231,
    short: 'LR',
  },
  {
    emoji: '🇸🇱',
    phoneCode: 232,
    short: 'SL',
  },
  {
    emoji: '🇬🇭',
    phoneCode: 233,
    short: 'GH',
  },
  {
    emoji: '🇳🇬',
    phoneCode: 234,
    short: 'NG',
  },
  {
    emoji: '🇹🇩',
    phoneCode: 235,
    short: 'TD',
  },
  {
    emoji: '🇨🇫',
    phoneCode: 236,
    short: 'CF',
  },
  {
    emoji: '🇨🇲',
    phoneCode: 237,
    short: 'CM',
  },
  {
    emoji: '🇨🇻',
    phoneCode: 238,
    short: 'CV',
  },
  {
    emoji: '🇸🇹',
    phoneCode: 239,
    short: 'ST',
  },
  {
    emoji: '🇬🇶',
    phoneCode: 240,
    short: 'GQ',
  },
  {
    emoji: '🇬🇦',
    phoneCode: 241,
    short: 'GA',
  },
  {
    emoji: '🇨🇬',
    phoneCode: 242,
    short: 'CG',
  },
  {
    emoji: '🇨🇩',
    phoneCode: 243,
    short: 'CD',
  },
  {
    emoji: '🇦🇴',
    phoneCode: 244,
    short: 'AO',
  },
  {
    emoji: '🇬🇼',
    phoneCode: 245,
    short: 'GW',
  },
  {
    emoji: '🇸🇨',
    phoneCode: 248,
    short: 'SC',
  },
  {
    emoji: '🇸🇩',
    phoneCode: 249,
    short: 'SD',
  },
  {
    emoji: '🇷🇼',
    phoneCode: 250,
    short: 'RW',
  },
  {
    emoji: '🇪🇹',
    phoneCode: 251,
    short: 'ET',
  },
  {
    emoji: '🇸🇴',
    phoneCode: 252,
    short: 'SO',
  },
  {
    emoji: '🇩🇯',
    phoneCode: 253,
    short: 'DJ',
  },
  {
    emoji: '🇰🇪',
    phoneCode: 254,
    short: 'KE',
  },
  {
    emoji: '🇹🇿',
    phoneCode: 255,
    short: 'TZ',
  },
  {
    emoji: '🇺🇬',
    phoneCode: 256,
    short: 'UG',
  },
  {
    emoji: '🇧🇮',
    phoneCode: 257,
    short: 'BI',
  },
  {
    emoji: '🇲🇿',
    phoneCode: 258,
    short: 'MZ',
  },
  {
    emoji: '🇿🇲',
    phoneCode: 260,
    short: 'ZM',
  },
  {
    emoji: '🇲🇬',
    phoneCode: 261,
    short: 'MG',
  },
  {
    emoji: '🇷🇪',
    phoneCode: 262,
    short: 'RE',
  },
  {
    emoji: '🇿🇼',
    phoneCode: 263,
    short: 'ZW',
  },
  {
    emoji: '🇳🇦',
    phoneCode: 264,
    short: 'NA',
  },
  {
    emoji: '🇲🇼',
    phoneCode: 265,
    short: 'MW',
  },
  {
    emoji: '🇱🇸',
    phoneCode: 266,
    short: 'LS',
  },
  {
    emoji: '🇧🇼',
    phoneCode: 267,
    short: 'BW',
  },
  {
    emoji: '🇸🇿',
    phoneCode: 268,
    short: 'SZ',
  },
  {
    emoji: '🇰🇲',
    phoneCode: 269,
    short: 'KM',
  },
  {
    emoji: '🇾🇹',
    phoneCode: 269,
    short: 'YT',
  },
  {
    emoji: '🇿🇦',
    phoneCode: 27,
    short: 'ZA',
  },
  {
    emoji: '🇪🇷',
    phoneCode: 291,
    short: 'ER',
  },
  {
    emoji: '🇦🇼',
    phoneCode: 297,
    short: 'AW',
  },
  {
    emoji: '🇫🇴',
    phoneCode: 298,
    short: 'FO',
  },
  {
    emoji: '🇬🇱',
    phoneCode: 299,
    short: 'GL',
  },
  {
    emoji: '🇬🇷',
    phoneCode: 30,
    short: 'GR',
  },
  {
    emoji: '🇳🇱',
    phoneCode: 31,
    short: 'NL',
  },
  {
    emoji: '🇧🇪',
    phoneCode: 32,
    short: 'BE',
  },
  {
    emoji: '🇫🇷',
    phoneCode: 33,
    short: 'FR',
  },
  {
    emoji: '🇪🇸',
    phoneCode: 34,
    short: 'ES',
  },
  {
    emoji: '🇬🇮',
    phoneCode: 350,
    short: 'GI',
  },
  {
    emoji: '🇵🇹',
    phoneCode: 351,
    short: 'PT',
  },
  {
    emoji: '🇱🇺',
    phoneCode: 352,
    short: 'LU',
  },
  {
    emoji: '🇮🇪',
    phoneCode: 353,
    short: 'IE',
  },
  {
    emoji: '🇮🇸',
    phoneCode: 354,
    short: 'IS',
  },
  {
    emoji: '🇦🇱',
    phoneCode: 355,
    short: 'AL',
  },
  {
    emoji: '🇲🇹',
    phoneCode: 356,
    short: 'MT',
  },
  {
    emoji: '🇨🇾',
    phoneCode: 357,
    short: 'CY',
  },
  {
    emoji: '🇫🇮',
    phoneCode: 358,
    short: 'FI',
  },
  {
    emoji: '🇧🇬',
    phoneCode: 359,
    short: 'BG',
  },
  {
    emoji: '🇭🇺',
    phoneCode: 36,
    short: 'HU',
  },
  {
    emoji: '🇱🇹',
    phoneCode: 370,
    short: 'LT',
  },
  {
    emoji: '🇱🇻',
    phoneCode: 371,
    short: 'LV',
  },
  {
    emoji: '🇪🇪',
    phoneCode: 372,
    short: 'EE',
  },
  {
    emoji: '🇲🇩',
    phoneCode: 373,
    short: 'MD',
  },
  {
    emoji: '🇦🇲',
    phoneCode: 374,
    short: 'AM',
  },
  {
    emoji: '🇧🇾',
    phoneCode: 375,
    short: 'BY',
  },
  {
    emoji: '🇦🇩',
    phoneCode: 376,
    short: 'AD',
  },
  {
    emoji: '🇲🇨',
    phoneCode: 377,
    short: 'MC',
  },
  {
    emoji: '🇸🇲',
    phoneCode: 378,
    short: 'SM',
  },
  {
    emoji: '🇺🇦',
    phoneCode: 380,
    short: 'UA',
  },
  {
    emoji: '🇷🇸',
    phoneCode: 381,
    short: 'RS',
  },
  {
    emoji: '🇲🇪',
    phoneCode: 382,
    short: 'ME',
  },
  {
    emoji: '🇭🇷',
    phoneCode: 385,
    short: 'HR',
  },
  {
    emoji: '🇸🇮',
    phoneCode: 386,
    short: 'SI',
  },
  {
    emoji: '🇧🇦',
    phoneCode: 387,
    short: 'BA',
  },
  {
    emoji: '🇲🇰',
    phoneCode: 389,
    short: 'MK',
  },
  {
    emoji: '🇮🇹',
    phoneCode: 39,
    short: 'IT',
  },
  {
    emoji: '🇷🇴',
    phoneCode: 40,
    short: 'RO',
  },
  {
    emoji: '🇨🇭',
    phoneCode: 41,
    short: 'CH',
  },
  {
    emoji: '🇨🇿',
    phoneCode: 420,
    short: 'CZ',
  },
  {
    emoji: '🇸🇰',
    phoneCode: 421,
    short: 'SK',
  },
  {
    emoji: '🇱🇮',
    phoneCode: 423,
    short: 'LI',
  },
  {
    emoji: '🇦🇹',
    phoneCode: 43,
    short: 'AT',
  },
  {
    emoji: '🇬🇧',
    phoneCode: 44,
    short: 'GB',
  },
  {
    emoji: '🇩🇰',
    phoneCode: 45,
    short: 'DK',
  },
  {
    emoji: '🇸🇪',
    phoneCode: 46,
    short: 'SE',
  },
  {
    emoji: '🇳🇴',
    phoneCode: 47,
    short: 'NO',
  },
  {
    emoji: '🇵🇱',
    phoneCode: 48,
    short: 'PL',
  },
  {
    emoji: '🇩🇪',
    phoneCode: 49,
    short: 'DE',
  },
  {
    emoji: '🇧🇿',
    phoneCode: 501,
    short: 'BZ',
  },
  {
    emoji: '🇬🇹',
    phoneCode: 502,
    short: 'GT',
  },
  {
    emoji: '🇸🇻',
    phoneCode: 503,
    short: 'SV',
  },
  {
    emoji: '🇭🇳',
    phoneCode: 504,
    short: 'HN',
  },
  {
    emoji: '🇳🇮',
    phoneCode: 505,
    short: 'NI',
  },
  {
    emoji: '🇨🇷',
    phoneCode: 506,
    short: 'CR',
  },
  {
    emoji: '🇵🇦',
    phoneCode: 507,
    short: 'PA',
  },
  {
    emoji: '🇵🇲',
    phoneCode: 508,
    short: 'PM',
  },
  {
    emoji: '🇭🇹',
    phoneCode: 509,
    short: 'HT',
  },
  {
    emoji: '🇵🇪',
    phoneCode: 51,
    short: 'PE',
  },
  {
    emoji: '🇲🇽',
    phoneCode: 52,
    short: 'MX',
  },
  {
    emoji: '🇨🇺',
    phoneCode: 53,
    short: 'CU',
  },
  {
    emoji: '🇦🇷',
    phoneCode: 54,
    short: 'AR',
  },
  {
    emoji: '🇧🇷',
    phoneCode: 55,
    short: 'BR',
  },
  {
    emoji: '🇨🇱',
    phoneCode: 56,
    short: 'CL',
  },
  {
    emoji: '🇨🇴',
    phoneCode: 57,
    short: 'CO',
  },
  {
    emoji: '🇻🇪',
    phoneCode: 58,
    short: 'VE',
  },
  {
    emoji: '🇬🇵',
    phoneCode: 590,
    short: 'GP',
  },
  {
    emoji: '🇧🇴',
    phoneCode: 591,
    short: 'BO',
  },
  {
    emoji: '🇬🇾',
    phoneCode: 592,
    short: 'GY',
  },
  {
    emoji: '🇪🇨',
    phoneCode: 593,
    short: 'EC',
  },
  {
    emoji: '🇬🇫',
    phoneCode: 594,
    short: 'GF',
  },
  {
    emoji: '🇵🇾',
    phoneCode: 595,
    short: 'PY',
  },
  {
    emoji: '🇲🇶',
    phoneCode: 596,
    short: 'MQ',
  },
  {
    emoji: '🇸🇷',
    phoneCode: 597,
    short: 'SR',
  },
  {
    emoji: '🇺🇾',
    phoneCode: 598,
    short: 'UY',
  },
  {
    emoji: '🇨🇼',
    phoneCode: 599,
    short: 'CW',
  },
  {
    emoji: '🇲🇾',
    phoneCode: 60,
    short: 'MY',
  },
  {
    emoji: '🇦🇺',
    phoneCode: 61,
    short: 'AU',
  },
  {
    emoji: '🇮🇩',
    phoneCode: 62,
    short: 'ID',
  },
  {
    emoji: '🇵🇭',
    phoneCode: 63,
    short: 'PH',
  },
  {
    emoji: '🇳🇿',
    phoneCode: 64,
    short: 'NZ',
  },
  {
    emoji: '🇸🇬',
    phoneCode: 65,
    short: 'SG',
  },
  {
    emoji: '🇹🇭',
    phoneCode: 66,
    short: 'TH',
  },
  {
    emoji: '🇹🇱',
    phoneCode: 670,
    short: 'TL',
  },
  {
    emoji: '🇧🇳',
    phoneCode: 673,
    short: 'BN',
  },
  {
    emoji: '🇵🇬',
    phoneCode: 675,
    short: 'PG',
  },
  {
    emoji: '🇹🇴',
    phoneCode: 676,
    short: 'TO',
  },
  {
    emoji: '🇸🇧',
    phoneCode: 677,
    short: 'SB',
  },
  {
    emoji: '🇻🇺',
    phoneCode: 678,
    short: 'VU',
  },
  {
    emoji: '🇫🇯',
    phoneCode: 679,
    short: 'FJ',
  },
  {
    emoji: '🇵🇼',
    phoneCode: 680,
    short: 'PW',
  },
  {
    emoji: '🇨🇰',
    phoneCode: 682,
    short: 'CK',
  },
  {
    emoji: '🇼🇸',
    phoneCode: 685,
    short: 'WS',
  },
  {
    emoji: '🇰🇮',
    phoneCode: 686,
    short: 'KI',
  },
  {
    emoji: '🇳🇨',
    phoneCode: 687,
    short: 'NC',
  },
  {
    emoji: '🇵🇫',
    phoneCode: 689,
    short: 'PF',
  },
  {
    emoji: '🇰🇿',
    phoneCode: 7,
    short: 'KZ',
  },
  {
    emoji: '🇷🇺',
    phoneCode: 7,
    short: 'RU',
  },
  {
    emoji: '🇯🇵',
    phoneCode: 81,
    short: 'JP',
  },
  {
    emoji: '🇰🇷',
    phoneCode: 82,
    short: 'KR',
  },
  {
    emoji: '🇻🇳',
    phoneCode: 84,
    short: 'VN',
  },
  {
    emoji: '🇭🇰',
    phoneCode: 852,
    short: 'HK',
  },
  {
    emoji: '🇲🇴',
    phoneCode: 853,
    short: 'MO',
  },
  {
    emoji: '🇰🇭',
    phoneCode: 855,
    short: 'KH',
  },
  {
    emoji: '🇱🇦',
    phoneCode: 856,
    short: 'LA',
  },
  {
    emoji: '🇨🇳',
    phoneCode: 86,
    short: 'CN',
  },
  {
    emoji: '🇧🇩',
    phoneCode: 880,
    short: 'BD',
  },
  {
    emoji: '🇹🇼',
    phoneCode: 886,
    short: 'TW',
  },
  {
    emoji: '🇹🇷',
    phoneCode: 90,
    short: 'TR',
  },
  {
    emoji: '🇮🇳',
    phoneCode: 91,
    short: 'IN',
  },
  {
    emoji: '🇵🇰',
    phoneCode: 92,
    short: 'PK',
  },
  {
    emoji: '🇦🇫',
    phoneCode: 93,
    short: 'AF',
  },
  {
    emoji: '🇱🇰',
    phoneCode: 94,
    short: 'LK',
  },
  {
    emoji: '🇲🇲',
    phoneCode: 95,
    short: 'MM',
  },
  {
    emoji: '🇲🇻',
    phoneCode: 960,
    short: 'MV',
  },
  {
    emoji: '🇱🇧',
    phoneCode: 961,
    short: 'LB',
  },
  {
    emoji: '🇯🇴',
    phoneCode: 962,
    short: 'JO',
  },
  {
    emoji: '🇸🇾',
    phoneCode: 963,
    short: 'SY',
  },
  {
    emoji: '🇮🇶',
    phoneCode: 964,
    short: 'IQ',
  },
  {
    emoji: '🇰🇼',
    phoneCode: 965,
    short: 'KW',
  },
  {
    emoji: '🇸🇦',
    phoneCode: 966,
    short: 'SA',
  },
  {
    emoji: '🇾🇪',
    phoneCode: 967,
    short: 'YE',
  },
  {
    emoji: '🇴🇲',
    phoneCode: 968,
    short: 'OM',
  },
  {
    emoji: '🇵🇸',
    phoneCode: 970,
    short: 'BL',
  },
  {
    emoji: '🇦🇪',
    phoneCode: 971,
    short: 'AE',
  },
  {
    emoji: '🇮🇱',
    phoneCode: 972,
    short: 'IL',
  },
  {
    emoji: '🇧🇭',
    phoneCode: 973,
    short: 'BH',
  },
  {
    emoji: '🇶🇦',
    phoneCode: 974,
    short: 'QA',
  },
  {
    emoji: '🇧🇹',
    phoneCode: 975,
    short: 'BT',
  },
  {
    emoji: '🇲🇳',
    phoneCode: 976,
    short: 'MN',
  },
  {
    emoji: '🇳🇵',
    phoneCode: 977,
    short: 'NP',
  },
  {
    emoji: '🇮🇷',
    phoneCode: 98,
    short: 'IR',
  },
  {
    emoji: '🇹🇯',
    phoneCode: 992,
    short: 'TJ',
  },
  {
    emoji: '🇹🇲',
    phoneCode: 993,
    short: 'TM',
  },
  {
    emoji: '🇦🇿',
    phoneCode: 994,
    short: 'AZ',
  },
  {
    emoji: '🇬🇪',
    phoneCode: 995,
    short: 'GE',
  },
  {
    emoji: '🇰🇬',
    phoneCode: 996,
    short: 'KG',
  },
  {
    emoji: '🇺🇿',
    phoneCode: 998,
    short: 'UZ',
  },
];

export default defaultAreas;
