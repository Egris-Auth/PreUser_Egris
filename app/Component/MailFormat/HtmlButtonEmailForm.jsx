import React from 'react'

export const HtmlButtonEmailForm = ({ color, logoUrl, title, message, footerMessage="If you did not request this email, you can safely ignore it.", url, buttonText, isUrl=false }) => {
  
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

          {/* Button Section */}
          <tr>
            <td>
              {isUrl ? (
                (<a 
                  href={url} 
                  style={{ 
                    color: color.linkText, 
                    textDecoration: "underline" ,
                    padding: "20px",
                  }}
                >
                  {url}
                </a>)
                ) : 
                (<a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    marginLeft: "20px",
                    fontSize: "16px",
                    color: color.buttonText,
                    backgroundColor: color.buttonBackground,
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    border: `1px solid ${color.buttonBorder}`,
                  }}
                >
                  {buttonText}
                </a>)
              }
            </td>
          </tr>

          {/* Footer Section */}
          <tr>
            <td style={{ color: color.text, fontSize: "14px", lineHeight: "1.4", padding: "20px",paddingTop:"50px" }}>
              {footerMessage}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
