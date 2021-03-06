import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import email from 'text-mask-addons/dist/emailMask'
const cellphone = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const housePhone = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const regularNumber = createNumberMask({
  prefix: '',
  suffix: '',
  integerLimit: 9,
  includeThousandsSeparator: false,
  allowNegative: false
})
const regularNumberNegative = createNumberMask({
  prefix: '',
  suffix: '',
  integerLimit: 9,
  includeThousandsSeparator: false,
  allowNegative: true
})
const quantityNumber = createNumberMask({
  prefix: '',
  suffix: '',
  integerLimit: 9,
  includeThousandsSeparator: true,
  allowNegative: false
})
const quantityNumberNegative = createNumberMask({
  prefix: '',
  suffix: '',
  integerLimit: 9,
  includeThousandsSeparator: true,
  allowNegative: true
})
const floatNumber = createNumberMask({
  includeThousandsSeparator: true,
  allowNegative: false,
  prefix: '',
  suffix: '',
  integerLimit: 9,
  allowDecimal: true
})
const floatNumberNegative = createNumberMask({
  includeThousandsSeparator: true,
  allowNegative: true,
  prefix: '',
  suffix: '',
  integerLimit: 9,
  allowDecimal: true
})
export default {
  email: email,
  house_phone: housePhone,
  cellphone: cellphone,
  regularNumber: regularNumber,
  regularNumberNegative: regularNumberNegative,
  quantityNumber: quantityNumber,
  quantityNumberNegative: quantityNumberNegative,
  floatNumber: floatNumber,
  floatNumberNegative: floatNumberNegative
}
