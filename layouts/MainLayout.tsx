import { Body, Hr, Html, Tailwind } from "@react-email/components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Html>
        <Tailwind>
          <Body className="mx-auto my-auto bg-white p-7 font-sans">
            <Header />
            <Hr />

            <div className="my-16">{children}</div>

            <Hr />
            <Footer />
          </Body>
        </Tailwind>
      </Html>
    </>
  );
}
