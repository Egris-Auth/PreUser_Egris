import React from 'react'
import { HtmlButtonEmailForm } from '../HtmlButtonEmailForm';
import { HtmlCodeEmailForm } from '../HtmlCodeEmailForm';

const DynamicEmailFormat = ({primarycolor,brandname,logourl,type,message,bgcolor,textcolor}) => {

    const colors = {
        background: "#f4f4f400",
        mainBackground: bgcolor,
        text: textcolor,
        buttonBackground: primarycolor,
        buttonText: textcolor,
        buttonBorder: "transperant",
        linkText: "#007bff",
    };
    const codeemailcolors = {
        background: "#f4f4f400",
        mainBackground: bgcolor,
        text: textcolor,
        codeColor: primarycolor,
        linkText: "#007bff",
    };

    const LinkEmail = () =>{
        return(
            <div>
                <h4>URL link verification</h4>
                <HtmlButtonEmailForm
                color={colors}
                logoUrl={logourl}
                title={`Verify email for ${brandname}!`}
                message={message}
                url="https://example.com/signin"
                buttonText="Click to Verify email"
                />
            </div>
        )
    }
    const CodeEmail = () =>{
        return(
            <div>
                <h4>One time code verification</h4>
                <HtmlCodeEmailForm 
                color={codeemailcolors}
                logoUrl={logourl} 
                title={`Sign in to ${brandname}!`}
                message={message}
                CodeText="854264"
                />
            </div>
        )
    }
    const ResetPasswordEmail = () =>{
        return(
            <div>
                <h4>Password recovery</h4>
                <HtmlButtonEmailForm
                color={colors}
                logoUrl={logourl}
                title={`Reset your ${brandname} password`}
                message={message}
                url="https://example.com/verify/passwordrecovery/user"
                buttonText="Reset password"
                />
            </div>
        )
    }
    const InvitationEmail = () =>{
        return(
            <div>
                <h4>Invitation</h4>
                <HtmlButtonEmailForm
                color={colors}
                logoUrl={logourl}
                title={`Your invitation to ${brandname}`}
                message={message}
                url="https://example.com/signin"
                buttonText="Accept invitation"
                footerMessage={`We look forward to having you with us at ${brandname} see you there!`}
                />
            </div>
        )
    }
    const MagicLinkSignIn = () =>{
        return(
            <div>
                <h4>Magic link sign-in</h4>
                <HtmlButtonEmailForm
                color={colors}
                logoUrl={logourl}
                title={`Sign in to ${brandname}!`}
                message={message}
                url="https://example.com/signin"
                buttonText="Sign in"
                />
            </div>
        )
    }
    const MagicLinkSignUp = () =>{
        return(
            <div>
                <h4>Magic link sign-up</h4>
                <HtmlButtonEmailForm
                color={colors}
                logoUrl={logourl}
                title={`Sign up to ${brandname}!`}
                message={message}
                url="https://example.com/signup"
                buttonText="Sign up"
                />
            </div>
        )
    }

  return (
    <div className="mailContainer">
        {type === "link" && (
            <LinkEmail/>
        )}
        {type === "code" && (
            <CodeEmail/>
        )}
        {type === "reset" && (
            <ResetPasswordEmail/>
        )}
        {type === "invitation" && (
            <InvitationEmail/>
        )}
        {type === "magicSignIn" && (
            <MagicLinkSignIn/>
        )}
        {type === "magicSignUp" && (
            <MagicLinkSignUp/>
        )}
    </div>
  )
}

export default DynamicEmailFormat;