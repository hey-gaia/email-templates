import { Body, Hr, Html, Tailwind } from "@react-email/components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Html>
        <Tailwind>
          <Body className="mx-auto my-auto p-7 font-sans max-w-[520px]">
            <Header />
            <Hr />

            <div className="mt-14 mb-8">{children}</div>

            <Footer />
          </Body>
        </Tailwind>
      </Html>
    </>
  );
}
