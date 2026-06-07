"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const animate = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;
      follower.style.transform = `translate(${followerPos.current.x - 18}px, ${followerPos.current.y - 18}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform += " scale(2)";
      follower.style.transform += " scale(1.5)";
      follower.style.borderColor = "rgba(168, 85, 247, 0.8)";
    };

    const onMouseLeaveLink = () => {
      follower.style.borderColor = "rgba(168, 85, 247, 0.4)";
    };

    window.addEventListener("mousemove", onMouseMove);
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div ref={followerRef} className="custom-cursor-follower hidden lg:block" />
    </>
  );
}
