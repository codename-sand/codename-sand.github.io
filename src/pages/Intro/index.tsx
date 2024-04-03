import { Loading, Containers, Blur, BlurWrap, Tran } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { motion } from "framer-motion";

export const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/portfolio');
        }, 3500);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 3.5 }}
        >
            <Loading>
                <Containers>
                    <p>SANDY's Portfolio</p>
                    <BlurWrap>
                        <Blur />
                        <Tran />
                        <Blur />
                    </BlurWrap>
                </Containers>
            </Loading>
         </motion.div>
    );
};