/**
 * @see https://github.com/stefangabos/world_countries
 */

export enum LocaleEnum {
  'ar',
  'cs',
  'da',
  'de',
  'ee',
  'el',
  'en',
  'es',
  'eu',
  'fi',
  'fr',
  'hu',
  'it',
  'ja',
  'ko',
  'lt',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sk',
  'sv',
  'th',
  'uk',
  'zh-tw',
  'zh',
}

export type LocaleType = keyof typeof LocaleEnum;

export type LocaleProps = {
  [K in LocaleType]?: string;
};

type ThirdPartyArea = {
  id: string;
  alpha2: string;
  alpha3: string;
  name: string;
};

export function searchArea(
  query: Partial<ThirdPartyArea>,
  areas: ThirdPartyArea[]
) {
  // if argument is not valid return false
  if (
    undefined === query.id &&
    undefined === query.alpha2 &&
    undefined === query.alpha3
  )
    return undefined;

  return areas
    .filter(function (area: any) {
      return (
        // we are searching by ID and we have a match
        (undefined !== query.id &&
          parseInt(area.id, 10) === parseInt(query.id, 10)) ||
        // or we are searching by alpha2 and we have a match
        (undefined !== query.alpha2 &&
          area.alpha2 === query.alpha2.toLowerCase()) ||
        // or we are searching by alpha3 and we have a match
        (undefined !== query.alpha3 &&
          area.alpha3 === query.alpha3.toLowerCase())
      );

      // since "filter" returns an array we use pop to get just the data object
    })
    .pop();
}
