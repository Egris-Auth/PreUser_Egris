import { FaDollarSign } from 'react-icons/fa';

export default function OverlappingCards() {
    const cards = [
      { top: "280px", left: "20px", rotate: "-6deg", title: "Extra 5$ for 2FA feature" },
      { top: "260px", left: "-20px", rotate: "-8deg", title: "Extra 15$ for Upgrade feature" },
      { top: "200px", left: "150px", rotate: "-3deg", title: "Extra 5$ per month for 2FA feature" },
      { top: "280px", left: "310px", rotate: "10deg", title: "Extra 75$ for account upgrade" },
      { top: "320px", left: "320px", rotate: "3deg", title: "Extra 10$ for addition users" },
      { top: "360px", left: "-20px", rotate: "15deg", title: "Extra 45$ for 2FA feature" },
      { top: "340px", left: "100px", rotate: "6deg", title: "Extra 6$ per month for Passkey feature"},
      { top: "360px", left: "420px", rotate: "15deg", title: "Extra 45$ for 2FA feature" },
      { top: "320px", left: "320px", rotate: "3deg", title: "Extra 10$ for addition users" },
    ];
  
    return (
      <div className="relative flex justify-center items-center max-w-350 h-100 bg-transparent overflow-hidden">
        {cards.map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-md bg-neutral-900 border border-neutral-800 shadow-lg"
            style={{
              width: "330px",
              height: "90px",
              top: pos.top,
              left: pos.left,
              transform: `rotate(${pos.rotate})`,
              zIndex: i,
            }}
          >
            <div className="p-4 text-white flex justify-center gap-4 items-center h-full">
                <div className='bg-red-700 p-3 rounded-full'><FaDollarSign size={20}/></div>
                <div>
                    <p className='text-sm'>{pos.title}</p>
                    <p className='text-sm text-gray-700'>Adding charges will apply</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
}