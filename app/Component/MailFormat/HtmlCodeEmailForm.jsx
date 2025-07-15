import React from 'react'

export const HtmlCodeEmailForm = ({ color, logoUrl, title, message, CodeText }) => {
  
  return (
    <div style={{ background: color.background, padding: "10px", fontFamily: "Arial, sans-serif" }}>
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
          {/* Logo Section */}
          <tr>
            <td style={{ padding: "20px" }}>
              <img
                src={logoUrl}
                alt="Logo"
                style={{ maxWidth: "60px", display: "block" }}
              />
            </td>
          </tr>

          {/* Title Section */}
          <tr>
            <td style={{ color: color.text, fontSize: "20px", fontWeight: "bold", padding: "20px" }}>
              {title}
            </td>
          </tr>

          {/* Content Section */}
          <tr>
            <td style={{ color: color.text, fontSize: "16px", lineHeight: "1.6", padding: "20px" }}>
              {message}
            </td>
          </tr>

          {/* Code Section */}
          <tr>
            <td style={{ color: color.codeColor,fontWeight: 'bold' ,fontSize: "30px", lineHeight: "1.6", paddingLeft: "20px" }}>
              {CodeText}
            </td>
          </tr>

          {/* Footer Section */}
          <tr>
            <td style={{ color: color.text, fontSize: "14px", lineHeight: "1.4", padding: "20px",paddingTop:"45px" }}>
              If you did not request this email, you can safely ignore it.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
