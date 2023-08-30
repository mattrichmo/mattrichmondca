"use client"
import styled from "styled-components";

import HeroBackground from "@/components/bg/mountains";

export default function App() {
  return (
        <div className="z-50">
      <HeroBackground />
      </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
