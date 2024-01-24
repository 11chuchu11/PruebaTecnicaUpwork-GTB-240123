export enum FormatterTypes{
  NUMBER = 'number',
  CURRENCY = 'currency',
  DATE = 'date'

}
  
export function Formatter (type: FormatterTypes, value: number | string) {
  switch (type) {
    case FormatterTypes.CURRENCY:
      if (typeof value === 'number')
        return new Intl.NumberFormat('es-BO', { style: 'currency', currency: 'BOB', minimumFractionDigits:2, maximumFractionDigits: 2}).format(value)
      else return undefined
    case FormatterTypes.NUMBER:
      if (typeof value === 'number')
        return new Intl.NumberFormat('en-BO', {}).format(value)
      else return undefined
    case FormatterTypes.DATE:
      return new Intl.DateTimeFormat('es-BO',{day:'2-digit', month:'2-digit', year:'numeric'}).format(new Date(value))
  }
}