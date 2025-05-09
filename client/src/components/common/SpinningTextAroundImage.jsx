import React from 'react';
import { motion } from 'framer-motion';

const SpinningTextAroundImage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
           

            {/* วงกลมโปรไฟล์ + ตัวหนังสือหมุน */}
            <div className="relative w-70 h-70 flex items-center justify-center">
                {/* ตัวหนังสือหมุน (ใช้ Framer Motion) */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                            />
                        </defs>
                        <text fontSize="12" fill="black">
                            <textPath href="#circlePath" startOffset="0%">
                                ZEnd
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%">
                                .Dev_
                            </textPath>

                        </text>
                    </svg>
                </motion.div>

                {/* รูปโปรไฟล์ในวงกลม */}
                <div className="w-50 h-50 rounded-full border-black overflow-hidden flex items-center justify-center drop-shadow-lg bg-white">
                    <img
                        src="/assets/images/profile.jpg"
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SpinningTextAroundImage;
