import {
  Heading,
  Section,
  Text,
  Container,
  Button,
  Link,
  Hr,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface SupportEmailProps {
  ticketId: string;
  requestTypeLabel: string;
  title: string;
  description: string;
  userEmail: string;
  userName: string;
}

export default function SupportToAdminEmail({
  ticketId = "TICKET-12345",
  requestTypeLabel = "Support Request",
  title = "Unable to access my account",
  description = "I'm having trouble logging into my account. When I try to sign in, I get an error message saying my credentials are invalid, but I'm sure they're correct.",
  userEmail = "user@example.com",
  userName = "Jane Doe",
}: SupportEmailProps) {
  return (
    <MainLayout>
      <Container className="max-w-2xl mx-auto p-6">
        <Section className="mb-4">
          <Heading className="m-0">{requestTypeLabel} </Heading>
          <Text className="text-[#00bbff] text-sm">#{ticketId}</Text>
        </Section>

        <Section>
          <div className="mb-4">
            <Text className="font-bold text-gray-700 m-0 mb-2">Title</Text>
            <Text className="text-gray-900 bg-gray-100 px-3 py-2 rounded m-0">
              {title}
            </Text>
          </div>

          <div className="mb-4">
            <Text className="font-bold text-gray-700 m-0 mb-2">
              Description
            </Text>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-l-sky-400">
              <Text>{description}</Text>
            </div>
          </div>

          <div>
            <Text className="font-bold text-gray-700 m-0 mb-2">
              Submitted By
            </Text>
            <Text className="text-gray-900 bg-gray-100 px-3 py-2 rounded m-0">
              {userName}
              <Link
                href={`mailto:${userEmail}`}
                className="text-[#00bbff] mt-1 rounded block"
              >
                {userEmail}
              </Link>
            </Text>
          </div>
        </Section>

        <Hr className="my-6" />

        <Section className="text-center">
          <Button
            className="w-full rounded-lg bg-sky-500 hover:bg-sky-600 px-3 py-3 text-center font-semibold text-white"
            href="https://react.email"
          >
            View & Respond to Ticket
          </Button>
        </Section>

        <Section className="mt-3 border-t border-gray-200">
          <Text className="text-sm text-gray-500 text-center">
            This email was automatically generated from your support system.
            <br />
            Please respond promptly to maintain customer satisfaction.
          </Text>
        </Section>
      </Container>
    </MainLayout>
  );
}
