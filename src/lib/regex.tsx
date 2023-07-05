import { app } from './static';

export const allowsNumber = (value: string, limit?: number) => {
  if (limit) return value?.replace(/[^0-9]/gi, '').substring(0, limit);
  else return value?.replace(/[^0-9]/gi, '');
};

export const phoneReplacer = (phone?: string) => {
  if (phone) return phone.replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll(app.countryCode, '');
  return undefined;
};


export const removeTrCharAndSpace = (value: string) => {
  var regex = /[^\wığüşöçİĞÜŞÖÇ-]/g;
  if (regex.test(value)) {
    return value.replace(regex, '');
  } else {
    return value;
  }
}