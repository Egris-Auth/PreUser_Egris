import { FaBan } from 'react-icons/fa';

export default function OverlappingCards() {
    const cards = [
      { top: "280px", left: "20px", rotate: "-6deg", title: "Access denied for User_228851" },
      { top: "260px", left: "-20px", rotate: "-8deg", title: "Access denied for User_85436251" },
      { top: "200px", left: "150px", rotate: "-3deg", title: "Access denied for User_Mnca5w52s" },
      { top: "280px", left: "310px", rotate: "10deg", title: "Access denied for User_Mnca5w52s" },
      { top: "320px", left: "320px", rotate: "3deg", title: "Access denied for User_Er52a2RADa8" },
      { top: "360px", left: "-20px", rotate: "15deg", title: "Access denied for User_S2fwadcJ1" },
      { top: "340px", left: "100px", rotate: "6deg", title: "Access denied for User_901Dxcw"},
      { top: "360px", left: "420px", rotate: "15deg", title: "Access denied for User_Fma8542" },
      { top: "320px", left: "320px", rotate: "3deg", title: "Access denied for User_Za521SD" },
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
                <div className='bg-red-700 p-3 rounded-full'><FaBan size={20}/></div>
                <div>
                    <p className='text-sm'>{pos.title}</p>
                    <p className='text-sm text-gray-700'>unauthorized users are prohibited</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
}