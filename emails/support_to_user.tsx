import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Tailwind,
  Img,
  Column,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface SupportConfirmationEmailProps {
  ticketId: string;
  requestTypeLabel: string;
  title: string;
  userName: string;
  userEmail: string;
  expectedResponseTime: string;
}

const SupportConfirmationEmail = ({
  ticketId = "TICKET-12345",
  requestTypeLabel = "Support Request",
  title = "Unable to access my account",
  userName = "Jane Doe",
  userEmail = "user@example.com",
  expectedResponseTime = "24 hours",
}: SupportConfirmationEmailProps) => {
  return (
    <MainLayout>
      <Container className="max-w-[520px] mx-auto">
        <Section className="text-center mb-10" align="center">
          <div className="flex justify-center">
            <Img
              src="https://res.cloudinary.com/dwhuiazdn/image/upload/72558_d7yn3s.png"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <Heading className="mb-2">We're on it!</Heading>
          <Text className="text-base text-gray-600 m-0 leading-relaxed">
            Thanks for reaching out, {userName}
          </Text>
        </Section>

        <Section className="bg-gray-100 rounded p-6 mb-4">
          <Text className="text-xs font-medium text-gray-500 m-0 mb-2 uppercase tracking-wide">
            {requestTypeLabel} #{ticketId}
          </Text>
          <Text className="text-lg text-gray-900 m-0 font-medium leading-snug">
            {title}
          </Text>
        </Section>

        <Section className="mb-8">
          <Heading as="h4">
            Your request has been received and assigned to our support team!
          </Heading>

          <Text>Here's what happens next:</Text>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                Our team will review your request within the next few hours
              </Text>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                You'll receive a response within {expectedResponseTime}
              </Text>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                We'll work together until everything is resolved
              </Text>
            </div>
          </div>
        </Section>

        <Section>
          <Text className="text-sm text-gray-900 m-0">Best Regards,</Text>
          <Text className="text-sm text-gray-900 m-0 font-medium">
            GAIA Support Team
          </Text>
        </Section>
      </Container>
    </MainLayout>
  );
};

SupportConfirmationEmail.PreviewProps = {
  ticketId: "TICKET-12345",
  requestTypeLabel: "Support Request",
  title: "Unable to access my account",
  userName: "Jane Doe",
  userEmail: "user@example.com",
  expectedResponseTime: "24 hours",
};

export default SupportConfirmationEmail;
