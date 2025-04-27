import { useEffect } from "react";
import { StackSection } from '@sections/StackSection';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const useStack = () => {
    
    
    useEffect(() => {
        const triggers: ScrollTrigger[] = [];
        let panels = gsap.utils.toArray<HTMLDivElement>(".panel");
        panels.forEach((panel) => {
            const st =ScrollTrigger.create({
                trigger: panel,
                start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
                pin: true,
                pinSpacing: false
            });
            triggers.push(st);
        });
        // Cleanup function
        return () => {
            clearTriggers();
        };
    }, []);

    const clearTriggers = () => {
         ScrollTrigger.getAll().forEach(st => st.kill());
    }

    return {
        StackSection,
        clearTriggers,
    }
}
