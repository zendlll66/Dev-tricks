import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SpinningTextAroundImage = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // คำนวณการขยับของรูปตามเมาส์
    const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 300], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col items-center justify-center w-[300px] h-[300px]"
        >
            {/* วงกลมโปรไฟล์ + ตัวหนังสือหมุน */}
            <div className="relative w-72 h-72 flex items-center justify-center">
                {/* ตัวหนังสือหมุน */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
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

                {/* รูปโปรไฟล์ที่ขยับตามเมาส์ */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        perspective: 10000,
                    }}
                    className="w-48 h-48 rounded-full overflow-hidden drop-shadow-lg bg-white flex items-center justify-center hover:scale-105 transition-all duration-500"
                >
                    <img
                        src="/assets/images/profile.jpg"
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default SpinningTextAroundImage;
