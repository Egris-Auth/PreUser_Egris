import { FiDownload } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { RiPlayLine } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';


export default function CommitTimeline() {
  // Simple Connector component
  const Connector = ({ 
    height = 'h-8', 
    fromColor = 'from-neutral-500', 
    toColor = 'to-neutral-500',
    showJunction = false,
    junctionIcon = null
  }) => {
    return (
      <div className="relative flex flex-col items-center">
        <div className={`w-1 ${height} bg-gradient-to-b ${fromColor} ${toColor}`}></div>
        
        {showJunction && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 relative z-10">
            {junctionIcon || (
              <svg
              className="w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h3l2 5 4-10 2 5h5"
              />
            </svg>
            )}
          </div>
        )}
        
        <div className={`w-1 ${height} bg-gradient-to-b ${fromColor} ${toColor}`}></div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-transparent mt-56 mb-56 flex items-center justify-center p-6">
      <div className="flex flex-col items-center">
        {/* First Commit */}
        <div className="relative flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-4 shadow-lg">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">
              npm install<span className="text-white ml-1">egrisauth</span>
            </span>
            <span className="text-neutral-500 text-xs">Install our npm package to start your journey</span>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-500 font-semibold text-sm">
              <FiDownload/>
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-purple-500 to-neutral-500"></div>
        </div>

        {/* Connector */}
        <Connector 
          height="h-12" 
          fromColor="from-neutral-500" 
          toColor="to-neutral-500" 
        />

        {/* Second Commit */}
        <div className="relative flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-4 shadow-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-neutral-500 to-blue-500"></div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">
              Initialize<span className="text-white ml-1">Egris Auth SDK</span>
            </span>
            <span className="text-neutral-500 text-xs">Single function call to initialize SDK</span>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 font-semibold text-sm">
              <AiOutlineSetting />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-neutral-500"></div>
        </div>

        {/* Connector with Junction */}
        <Connector 
          height="h-8" 
          fromColor="from-neutral-500" 
          toColor="to-neutral-500"
          showJunction={true}
        />

        {/* Third Commit */}
        <div className="relative flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-4 shadow-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-neutral-500 to-purple-500"></div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">
              egrisauth.<span className="text-white">SignUpByEmailLink();</span>
            </span>
            <span className="text-neutral-500 text-xs">Call a function to authenticate user</span>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 font-semibold text-sm">
              <RiPlayLine />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-red-500 to-neutral-500"></div>
        </div>

        {/* Connector */}
        <Connector 
          height="h-10" 
          fromColor="from-neutral-500" 
          toColor="to-neutral-500"
          showJunction={true}
        />

        {/* Fourth Commit */}
        <div className="relative flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-4 shadow-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-neutral-500 to-red-500"></div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">
              Done user<span className="text-white">Authenticated</span>
            </span>
            <span className="text-neutral-500 text-xs">Simple Fast Secure</span>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-semibold text-sm">
              <MdDone />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}