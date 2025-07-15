import React from 'react'

export const HtmlSmsForm = ({ escapedHost,}) => {

    const brand = escapedHost || "Apify";
    
    const color = {
        background: "#f4f4f400",
        mainBackground: "#ffffff",
        text: "#333333",
        buttonBackground: "#9c88ff",
        codeColor: "#0984e3"
    };

  return (
    <div style={{ background: color.background, margin: "20px",marginTop: "150px", fontFamily: "Arial, sans-serif" }}>
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          maxWidth: "600px",
          background: color.mainBackground,
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <tbody>
          {/* Content Section */}
          <tr>
            <td style={{ color: color.text, fontSize: "14px", lineHeight: "0", padding: "20px" }}>
              Your {brand} verification code is:
            </td>
          </tr>

          {/* Code Section */}
          <tr>
            <td style={{ color: color.codeColor,fontWeight: 'bold' ,fontSize: "18px", lineHeight: "1.6", paddingLeft: "20px",textDecoration:"underline" }}>
              263602
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
