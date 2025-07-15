import { useState } from "react";
import RenderEmailContent from "../MailFormat/RenderEmailContent";
import { CiAt } from "react-icons/ci";


const LaptopM = ({logoUrl, brandName, primary}) => {
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Email content
    const emailData = {
      logoUrl: logoUrl, // Replace with your logo URL
      brand: brandName,
      url: "https://example.com/signin",
      isUrl: false, // Change to true if it's a direct link instead of a button
      footerMessage: "If you did not request this email, you can safely ignore it.",
      color: {
        background: "#f4f4f400",
        mainBackground: "#ffffff00",
        text: "#333333",
        buttonText: "#ffffff",
        primary: primary,
        linkText: "#007bff",
      },
    };

    const emails = [
      {
        id: 1,
        title: "Email verification link",
        sender: emailData.brand,
        time: "2 min ago",
        type: "linkverification", // Unique type identifier
      },
      {
        id: 2,
        title: "Email verification code",
        sender: emailData.brand,
        time: "3 min ago",
        type: "codeverification", // Unique type identifier
      },
      {
        id: 3,
        title: "Welcome to Our Platform",
        sender: "Support Team",
        time: "10 min ago",
        type: "welcome",
      },
    ];
  
  return (
      <div className="relative w-[800px] h-[600px] bg-transparent rounded-2xl border-8 border-black shadow-[0px_0px_40px_#2C3A47aa]">
        
        {/* Camera Module */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-full flex items-center justify-center z-10">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
        </div>

        {/* Laptop Screen */}
        <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg">
          
          {/* Mail App UI */}
          <div className="flex h-full text-gray-200">

            {/* Email List */}
            <div className="w-2/6 border-r-2 border-black p-6 bg-black">
              <h3 className="flex justify-left items-center gap-2 text-md mb-4"><CiAt size={15}/> Recent Emails</h3>
              <div className="space-y-4">
              {emails.map((email) => (
                <div
                    key={email.id}
                    className="bg-gray-900 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
                    onClick={() => setSelectedEmail(email)}
                >
                    <p className="text-gray-100 text-sm">{email.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    {email.sender} • {email.time}
                    </p>
                </div>
                ))}
              </div>
            </div>

            {/* Email Preview - Uses Your Format */}
            <div className="w-2/3 p-6">
                <RenderEmailContent selectedEmail={selectedEmail} emailData={emailData}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default LaptopM;


/*
<div className="w-1/5 bg-gray-200 dark:bg-gray-900 p-6">
<h2 className="text-md text-gray-700 dark:text-gray-300 mb-6">📨 Mailbox</h2>
<ul className="space-y-3">
  <li className="bg-blue-500 text-white text-sm p-2 rounded-lg cursor-pointer">Inbox (3)</li>
  <li className="p-2 cursor-pointer text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">Sent</li>
  <li className="p-2 cursor-pointer text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">Starred</li>
  <li className="p-2 cursor-pointer text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">Trash</li>
</ul>
</div>
*/