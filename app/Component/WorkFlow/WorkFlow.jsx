'use client';

export default function WorkFlow() {
  const methods = [
    {
      icon: '📧',
      title: 'Email Credential',
      subtitle: 'Secure email & password authentication',
    },
    {
      icon: '📱',
      title: 'Phone Credential',
      subtitle: 'SMS verification & OTP security',
    },
    {
      icon: '✨',
      title: 'Magic Link',
      subtitle: 'Passwordless email authentication',
    },
    {
      icon: '🔐',
      title: 'Passkey',
      subtitle: 'FIDO2 biometric authentication',
    },
    {
      icon: '🌐',
      title: 'Social Sign-On',
      subtitle: 'OAuth with trusted providers',
    },
    {
      icon: '🛡️',
      title: 'Two-Factor Auth',
      subtitle: 'TOTP & authenticator apps',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] px-4 py-12">
      <div className="relative">
        {/* Top border line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/10 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_20px_40px_rgba(102,126,234,0.15)] hover:bg-indigo-500/10 overflow-hidden cursor-pointer"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 left-[-100%] bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent transition-all duration-700 hover:left-[100%]" />
              <span className="text-4xl block mb-3 transition-transform duration-300 hover:scale-110">
                {method.icon}
              </span>
              <div className="text-white font-semibold text-lg mb-1">{method.title}</div>
              <div className="text-white/60 text-sm leading-relaxed">{method.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-green-400 border border-green-500/30 bg-green-400/10 text-sm font-medium mb-2">
            🔒 Enterprise Security Certified
          </div>
          <div className="text-white/50 text-sm">
            Comprehensive authentication solutions for modern applications
          </div>
        </div>
      </div>
    </div>
  );
}