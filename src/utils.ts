import { Stream } from './types'

export const TwoDigit = (s: Stream<Number>) =>
  s.map(v => String(v).padStart(2, '0'))

export const TwoDecimal = (s: Stream<Number>) => s.map(v => v.toFixed(2))

export const NDecimal = (s: Stream<Number>, digits: Number) =>
  s.map(v => v.toFixed(digits))

export const OneIndex = (s: Stream<Number>) => s.map(v => v + 1)

/**Shamelessly stolen from https://stackoverflow.com/a/7220510 */
export const syntaxHighlight = json => {
  json = JSON.stringify(json, null, 2)
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    }
  )
}
