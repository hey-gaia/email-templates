import {
  Heading,
  Section,
  Text,
  Container,
  Button,
  Link,
  Hr,
  Img,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface SupportEmailProps {
  ticketId?: string;
  requestTypeLabel?: string;
  title?: string;
  description?: string;
  userEmail?: string;
  userName?: string;
  attachments?: Array<{
    filename: string;
    file_url: string;
    file_size: number;
    content_type: string;
  }>;
}

// Template metadata for the email service
export const displayName = "Support Admin Notification";
export const description =
  "Email notification sent to admin team when a support ticket is created";
export const category = "support";
export const requiredFields = [
  "ticketId",
  "requestTypeLabel",
  "title",
  "description",
  "userEmail",
  "userName",
];
export const sampleProps = {
  ticketId: "GAIA-20250101-ABC12345",
  requestTypeLabel: "Support Request",
  title: "Unable to access my account",
  description:
    "I'm having trouble logging into my account. When I try to sign in, I get an error message saying my credentials are invalid, but I'm sure they're correct.",
  userEmail: "user@example.com",
  userName: "Jane Doe",
};

export default function SupportToAdminEmail({
  ticketId = "TICKET-12345",
  requestTypeLabel = "Support Request",
  title = "Unable to access my account",
  description = "I'm having trouble logging into my account. When I try to sign in, I get an error message saying my credentials are invalid, but I'm sure they're correct.",
  userEmail = "user@example.com",
  userName = "Jane Doe",
  attachments = [
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
    {
      filename: "Image Name",
      file_size: 1024,
      file_url: "https://placehold.co/600x400",
      content_type: "PNG",
    },
  ],
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

          {attachments && attachments.length > 0 && (
            <div className="mt-4">
              <Text className="font-bold text-gray-700 m-0 mb-2">
                Images ({attachments.length})
              </Text>
              <div className="flex gap-4 flex-wrap">
                {attachments.map((attachment, index) => (
                  <Link
                    key={index}
                    href={attachment.file_url}
                    className="flex flex-col w-fit"
                  >
                    <Img
                      src={attachment.file_url}
                      alt="Cat"
                      width="100"
                      height="100"
                      className="m-0 object-cover"
                    />
                    <Text className="m-0 text-xs text-[#00bbff]">
                      {attachment.filename}
                    </Text>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>

        <Hr className="my-6" />

        <Section className="text-center">
          <Button
            className="w-full rounded-lg bg-sky-500 hover:bg-sky-600 px-3 py-3 text-center font-semibold text-white"
            href="https://react.email"
          >
            Respond to Ticket
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
