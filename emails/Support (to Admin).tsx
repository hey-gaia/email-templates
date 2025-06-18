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
}

export default function SupportToAdminEmail({
  ticketId = "TICKET-12345",
  requestTypeLabel = "Support Request",
  title = "Unable to access my account",
  description = "I'm having trouble logging into my account. When I try to sign in, I get an error message saying my credentials are invalid, but I'm sure they're correct.",
  userEmail = "user@example.com",
}: SupportEmailProps) {
  return (
    <MainLayout>
      <Container className="max-w-2xl mx-auto p-6">
        <Section className="-space-y-3">
          <Heading className="m-0">New {requestTypeLabel}</Heading>
          <Text className="text-sm mt-2 text-[#00bbff]">#{ticketId}</Text>
        </Section>

        <Section className="mb-6">
          <Section className="space-y-4">
            <Heading as="h3">{requestTypeLabel}</Heading>

            <div className="mb-5">
              <Text className="font-bold text-gray-700 m-0">Title:</Text>
              <Text className="text-gray-900 bg-gray-100 px-3 py-2 m-0 rounded">
                {title}
              </Text>
            </div>

            <div>
              <Text className="font-medium text-gray-700 m-0">From</Text>
              <Link
                href={`mailto:${userEmail}`}
                className="text-blue-600 hover:text-blue-800 bg-gray-100 px-3 py-2 rounded block"
                style={{ color: "#00bbff" }}
              >
                {userEmail}
              </Link>
            </div>
          </Section>
        </Section>

        <Hr className="my-6" />

        <Section className="mb-6">
          <Heading className="text-lg font-semibold text-gray-800 mb-3">
            Description
          </Heading>
          <div
            className="bg-gray-50 p-4 rounded-lg border-l-4"
            style={{ borderLeftColor: "#00bbff" }}
          >
            <Text className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {description}
            </Text>
          </div>
        </Section>

        <Hr className="my-6" />

        <Section className="text-center">
          <Button
            href={`/admin/tickets/${ticketId}`}
            className="inline-block text-decoration-none px-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: "#00bbff" }}
          >
            View & Respond to Ticket
          </Button>
        </Section>

        <Section className="mt-8 pt-6 border-t border-gray-200">
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
