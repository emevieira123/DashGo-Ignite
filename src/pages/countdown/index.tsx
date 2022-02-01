import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CardCountdown } from "./cardCountdown";

export default function Countdown() {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('january 31, 2022 00:00:00').getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / 1000 / 60 / 60 / 24);
            const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(distance / 1000 / 60) % 60;
            const seconds = Math.floor(distance / 1000) % 60;

            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box w="100%" lex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" flexDirection="column">
                        
                        <Heading size="lg" fontWeight="normal">
                            Contador Regressivo
                        </Heading>

                        <Flex 
                            w="100%" 
                            h="40vh" 
                            mb="8" 
                            justify="center" 
                            align="center"
                        >
                
                        <CardCountdown number={getTimeUnit(timerDays)} titleCards="Days"/>
                        <CardCountdown number={getTimeUnit(timerHours)} titleCards="Hours"/>
                        <CardCountdown number={getTimeUnit(timerMinutes)} titleCards="Minutes"/>
                        <CardCountdown number={getTimeUnit(timerSeconds)} titleCards="Seconds"/>
                        
                        </Flex>
                        
                    </Flex>
                </Box>

            </Flex>
        </Box>
    );
}