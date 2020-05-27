import React from "react"
const FormattedDate = ({date, showDetail = false}) => {
  const d = new Date(date);
  let s = `${d.getFullYear()}. ${(d.getMonth()+1).toString().padStart(2, '0')}. ${d.getDate().toString().padStart(2, '0')}.`
  if (showDetail) {
    s = `${s} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
  }
  return (
    <span className="text-xs opacity-50">{s}</span>
  )
}
  export default FormattedDate